"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface FormData {
  nombre: string;
  email: string;
  fraudTypes: string[];
}

const fraudTypes = [
  { id: "phishing", label: "Phishing Avanzado", desc: "Campañas sofisticadas de ingeniería social" },
  { id: "cards", label: "Fraude Transaccional", desc: "Análisis de patrones de transacciones" },
  { id: "phone", label: "Vishing Corporativo", desc: "Ataques telefónicos dirigidos" },
  { id: "identity", label: "Suplantación Ejecutiva", desc: "Robo de identidad empresarial" },
  { id: "malware", label: "Malware Bancario", desc: "Amenazas persistentes avanzadas" },
  { id: "social", label: "Ingeniería Social", desc: "Manipulación psicológica dirigida" },
  { id: "atm", label: "Compromiso de ATM", desc: "Ataques a infraestructura crítica" },
  { id: "investment", label: "Fraude de Inversión", desc: "Esquemas financieros sofisticados" }
];

export default function FormRecommendation() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    fraudTypes: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFraudTypeChange = (fraudTypeId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      fraudTypes: checked 
        ? [...prev.fraudTypes, fraudTypeId]
        : prev.fraudTypes.filter(id => id !== fraudTypeId)
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.nombre.trim()) {
      setMessage({ type: "error", text: "Por favor, ingresa tu nombre completo." });
      return false;
    }
    if (!formData.email.trim()) {
      setMessage({ type: "error", text: "Por favor, ingresa tu email corporativo." });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setMessage({ type: "error", text: "Por favor, ingresa un email válido." });
      return false;
    }
    if (formData.fraudTypes.length === 0) {
      setMessage({ type: "error", text: "Por favor, selecciona al menos un vector de amenaza." });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage({
          type: "success",
          text: "Análisis de riesgo enviado exitosamente. Recibirás las recomendaciones estratégicas en tu email corporativo.",
        });
        setFormData({ nombre: "", email: "", fraudTypes: [] });
      } else {
        setMessage({
          type: "error",
          text: result.error || "Error en el sistema. Por favor, contacta al equipo de soporte técnico.",
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "Error de conectividad. Verifica tu conexión de red empresarial e inténtalo nuevamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Executive Information Section */}
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label htmlFor="nombre" className="text-gray-300 font-semibold text-sm uppercase tracking-wide">
                Ejecutivo / Responsable
              </Label>
              <Input
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Nombre completo del ejecutivo"
                value={formData.nombre}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="bg-slate-800/50 border-slate-600/50 focus:border-blue-500/50 text-white placeholder-gray-400 rounded-xl h-12 transition-all duration-300 focus:bg-slate-700/50"
              />
            </div>
            
            <div className="space-y-3">
              <Label htmlFor="email" className="text-gray-300 font-semibold text-sm uppercase tracking-wide">
                Email Corporativo
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="ejecutivo@empresa.com"
                value={formData.email}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="bg-slate-800/50 border-slate-600/50 focus:border-blue-500/50 text-white placeholder-gray-400 rounded-xl h-12 transition-all duration-300 focus:bg-slate-700/50"
              />
            </div>
          </div>
        </div>

        {/* Threat Vectors Section */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            <Label className="text-gray-200 font-bold text-lg">
              Vectores de Amenaza Prioritarios
            </Label>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {fraudTypes.map((fraudType) => (
              <div
                key={fraudType.id}
                className={`relative overflow-hidden p-5 rounded-2xl border transition-all duration-300 group ${
                  formData.fraudTypes.includes(fraudType.id)
                    ? "bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-blue-500/50 shadow-lg shadow-blue-500/10"
                    : "bg-gradient-to-br from-slate-800/30 to-slate-900/30 border-slate-600/30 hover:border-slate-500/50"
                }`}
              >
                <div className="flex items-start space-x-4">
                  <Checkbox
                    id={fraudType.id}
                    checked={formData.fraudTypes.includes(fraudType.id)}
                    onCheckedChange={(checked) => handleFraudTypeChange(fraudType.id, checked as boolean)}
                    className="mt-1 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                  />
                  <div className="flex-1 min-w-0">
                    <label
                      htmlFor={fraudType.id}
                      className="block text-white font-semibold text-sm mb-2 cursor-pointer group-hover:text-blue-300 transition-colors"
                    >
                      {fraudType.label}
                    </label>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {fraudType.desc}
                    </p>
                  </div>
                </div>
                
                {/* Selection Indicator */}
                {formData.fraudTypes.includes(fraudType.id) && (
                  <div className="absolute top-3 right-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Status Messages */}
        {message && (
          <div
            className={`p-6 rounded-2xl border-2 ${
              message.type === "success"
                ? "bg-gradient-to-r from-emerald-900/20 to-green-900/20 border-emerald-500/30 text-emerald-300"
                : "bg-gradient-to-r from-red-900/20 to-pink-900/20 border-red-500/30 text-red-300"
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                message.type === "success" ? "bg-emerald-500" : "bg-red-500"
              }`}>
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <p className="font-medium">{message.text}</p>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed h-14"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center space-x-3">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Procesando Análisis de Riesgo...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-3">
              <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded"></div>
              </div>
              <span>Generar Análisis Ejecutivo de Riesgos</span>
              <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded"></div>
              </div>
            </div>
          )}
        </Button>
      </form>

      {/* Executive Information Panel */}
      <div className="mt-8 p-6 bg-gradient-to-r from-slate-800/30 to-slate-900/30 rounded-2xl border border-slate-700/30">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
            <div className="w-6 h-6 bg-white rounded-lg"></div>
          </div>
          <div>
            <h4 className="text-amber-300 font-bold text-sm mb-2 uppercase tracking-wide">
              Análisis Ejecutivo Personalizado
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Cada vector de amenaza seleccionado generará un informe detallado con métricas de riesgo, 
              estrategias de mitigación y protocolos de respuesta específicos para su organización financiera.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
