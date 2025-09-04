import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { nombre, email, fraudTypes = [] } = await request.json();

    if (!nombre || !email) {
      return NextResponse.json(
        { error: "Nombre y email son requeridos" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email inválido" },
        { status: 400 }
      );
    }

    let transporter;
    
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_PORT === "465",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });
    } else {
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
    }

    const selectedFraudTypes = fraudTypes.length > 0 ? fraudTypes : ['general'];
    const fraudTypeLabels: Record<string, string> = {
      phishing: "🎣 Phishing Bancario",
      cards: "💳 Fraude con Tarjetas", 
      phone: "📞 Estafas Telefónicas",
      identity: "🆔 Robo de Identidad",
      malware: "🦠 Malware Bancario",
      social: "🎭 Ingeniería Social",
      atm: "🏧 Fraudes en Cajeros",
      investment: "📈 Estafas de Inversión"
    };

    const selectedTypesText = selectedFraudTypes.map((type: string) => 
      fraudTypeLabels[type] || type
    ).join(', ');

    const emailContent = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recomendaciones de Seguridad Bancaria</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #1f2937 0%, #3b82f6 100%); color: white; padding: 30px; text-align: center; border-radius: 12px 12px 0 0; }
        .content { background: #f9fafb; padding: 30px; border-radius: 0 0 12px 12px; }
        .recommendation { background: white; margin: 15px 0; padding: 20px; border-left: 4px solid #3b82f6; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .warning { background: #fef2f2; border-left-color: #ef4444; }
        .tip { background: #f0f9ff; border-left-color: #06b6d4; }
        h2 { color: #1f2937; margin-top: 25px; }
        .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; }
        .selected-types { background: linear-gradient(135deg, #ddd6fe 0%, #c4b5fd 100%); padding: 20px; border-radius: 8px; margin: 20px 0; }
    </style>
</head>
<body>
    <div class="header">
        <h1 style="margin: 0; font-size: 28px;">🛡️ Recomendaciones de Seguridad Bancaria</h1>
        <p style="margin: 15px 0 0 0; font-size: 18px; opacity: 0.9;">Protege tus finanzas en el mundo digital</p>
    </div>
    
    <div class="content">
        <div class="selected-types">
            <p style="margin: 0; font-weight: bold; color: #7c3aed;">Hola <strong>${nombre}</strong> 👋</p>
            <p style="margin: 10px 0 0 0; color: #6d28d9;">
                Has solicitado información sobre: <strong>${selectedTypesText}</strong>
            </p>
        </div>

        <p>Gracias por tu interés en mantener tus finanzas seguras. Aquí tienes las recomendaciones más importantes para protegerte de fraudes bancarios:</p>

        <h2>🚨 Señales de Alerta:</h2>
        
        <div class="recommendation warning">
            <strong>Emails sospechosos:</strong> Los bancos NUNCA solicitan información confidencial por email o SMS.
        </div>
        
        <div class="recommendation warning">
            <strong>URLs falsas:</strong> Siempre verifica que la URL del banco sea la oficial.
        </div>

        <h2>🔐 Mejores Prácticas:</h2>
        
        <div class="recommendation tip">
            <strong>Contraseñas fuertes:</strong> Usa contraseñas únicas con mayúsculas, minúsculas, números y símbolos.
        </div>
        
        <div class="recommendation tip">
            <strong>Autenticación 2FA:</strong> Activa la verificación en dos pasos cuando esté disponible.
        </div>

        <h2>🤖 Tecnología IA:</h2>
        
        <p>Los bancos modernos utilizan Inteligencia Artificial para detectar fraudes en tiempo real y proteger tus transacciones.</p>

        <div class="recommendation tip">
            <strong>Recuerda:</strong> La seguridad es responsabilidad compartida. Mantente informado y verifica antes de actuar.
        </div>
        
        <div class="footer">
            <p>Información educativa sobre seguridad bancaria.</p>
            <p>Mantente seguro y protege tus finanzas digitales.</p>
        </div>
    </div>
</body>
</html>
    `;

    const info = await transporter.sendMail({
      from: `"Ciberseguridad Bancaria" <${process.env.SMTP_USER || "noreply@ciberseguridad-bancaria.com"}>`,
      to: email,
      subject: "🛡️ Tus Recomendaciones de Seguridad Bancaria",
      html: emailContent,
    });

    console.log("Email sent: %s", info.messageId);
    
    if (!process.env.SMTP_HOST) {
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }

    return NextResponse.json(
      { 
        message: "Email enviado exitosamente",
        messageId: info.messageId,
        fraudTypesSelected: selectedFraudTypes.length
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: "Método no permitido" },
    { status: 405 }
  );
}
