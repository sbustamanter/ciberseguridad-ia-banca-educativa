"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

interface FormData {
  nombre: string;
  email: string;
  fraudTypes: string[];
}

const fraudTypes = [
  { 
    id: "phishing", 
    label: "Advanced Phishing", 
    desc: "Campañas sofisticadas de ingeniería social dirigidas",
    severity: "Crítico",
    frequency: "Muy Alto",
    color: "from-red-600 to-pink-600"
  },
  { 
    id: "cards", 
    label: "Transaction Fraud", 
    desc: "Análisis de patrones anómalos en transacciones",
    severity: "Alto",
    frequency: "Alto",
    color: "from-orange-600 to-red-600"
  },
  { 
    id: "phone", 
    label: "Executive Vishing", 
    desc: "Ataques telefónicos dirigidos a ejecutivos",
    severity: "Alto",
    frequency: "Muy Alto",
    color: "from-amber-600 to-orange-600"
  },
  { 
    id: "identity", 
    label: "Identity Compromise", 
    desc: "Suplantación de identidad ejecutiva y corporativa",
    severity: "Crítico",
    frequency: "Medio",
    color: "from-purple-600 to-red-600"
  },
  { 
    id: "malware", 
    label: "Banking Malware", 
    desc: "Amenazas persistentes avanzadas (APT)",
    severity: "Crítico",
    frequency: "Alto",
    color: "from-red-700 to-purple-700"
  },
  { 
    id: "social", 
    label: "Social Engineering", 
    desc: "Manipulación psicológica dirigida a personal clave",
    severity: "Alto",
    frequency: "Alto",
    color: "from-pink-600 to-red-600"
  },
  { 
    id: "atm", 
    label: "ATM Compromise", 
    desc: "Ataques a infraestructura crítica bancaria",
    severity: "Alto",
    frequency: "Medio",
    color: "from-blue-600 to-purple-600"
  },
  { 
    id: "investment", 
    label: "Investment Fraud", 
    desc: "Esquemas financieros sofisticados y fraude corporativo",
    severity: "Crítico",
    frequency: "Medio",
    color: "from-emerald-600 to-blue-600"
  },
  { 
    id: "smishing", 
    label: "SMS Phishing", 
    desc: "Campañas móviles con enlaces maliciosos dirigidos",
    severity: "Alto",
    frequency: "Muy Alto",
    color: "from-indigo-600 to-purple-600"
  },
  { 
    id: "vishing", 
    label: "Voice Phishing", 
    desc: "Sistemas automatizados de ingeniería social",
    severity: "Alto",
    frequency: "Alto",
    color: "from-teal-600 to-blue-600"
  },
  { 
    id: "romance", 
    label: "Romance Scams", 
    desc: "Fraudes de relación dirigidos a ejecutivos",
    severity: "Alto",
    frequency: "Medio",
    color: "from-pink-500 to-rose-600"
  },
  { 
    id: "crypto", 
    label: "Crypto Fraud", 
    desc: "Estafas con criptomonedas y DeFi maliciosos",
    severity: "Crítico",
    frequency: "Muy Alto",
    color: "from-yellow-500 to-orange-600"
  },
  { 
    id: "business", 
    label: "Business Email Compromise", 
    desc: "BEC, transferencias fraudulentas y facturas falsas",
    severity: "Crítico",
    frequency: "Alto",
    color: "from-gray-700 to-blue-700"
  },
  { 
    id: "elderly", 
    label: "Executive Targeting", 
    desc: "Fraudes dirigidos específicamente a alta dirección",
    severity: "Alto",
    frequency: "Alto",
    color: "from-purple-500 to-pink-500"
  },
  { 
    id: "charity", 
    label: "Charity Fraud", 
    desc: "Organizaciones benéficas falsas y donaciones corporativas",
    severity: "Medio",
    frequency: "Medio",
    color: "from-green-500 to-teal-600"
  },
  { 
    id: "lottery", 
    label: "Lottery Scams", 
    desc: "Premios falsos y esquemas de sorteos corporativos",
    severity: "Medio",
    frequency: "Alto",
    color: "from-yellow-400 to-green-500"
  }
];

export default function FraudSelectionForm() {
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

  const handleFraudTypeToggle = (fraudTypeId: string) => {
    setFormData(prev => ({
      ...prev,
      fraudTypes: prev.fraudTypes.includes(fraudTypeId)
        ? prev.fraudTypes.filter(id => id !== fraudTypeId)
        : [...prev.fraudTypes, fraudTypeId]
    }));
  };

  const handleSelectAll = () => {
    setFormData(prev => ({
      ...prev,
      fraudTypes: fraudTypes.map(f => f.id)
    }));
  };

  const handleClearAll = () => {
    setFormData(prev => ({
      ...prev,
      fraudTypes: []
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.nombre.trim()) {
      setMessage({ type: "error", text: "Por favor, ingresa el nombre del ejecutivo responsable." });
      return false;
    }
    if (!formData.email.trim()) {
      setMessage({ type: "error", text: "Por favor, ingresa el email corporativo." });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setMessage({ type: "error", text: "Por favor, ingresa un email corporativo válido." });
      return false;
    }
    if (formData.fraudTypes.length === 0) {
      setMessage({ type: "error", text: "Por favor, selecciona al menos un vector de amenaza para el análisis." });
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
      const response = await fetch("/api/send-fraud-info", {
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
          text: `Análisis ejecutivo generado exitosamente. Informe detallado de ${formData.fraudTypes.length} vectores de amenaza enviado a su email corporativo con casos forenses, estrategias de mitigación y protocolos de respuesta.`,
        });
        setFormData({ nombre: "", email: "", fraudTypes: [] });
      } else {
        setMessage({
          type: "error",
          text: result.error || "Error en el sistema de análisis. Contacte al equipo de soporte técnico.",
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "Error de conectividad empresarial. Verifique su conexión de red y reintente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Crítico": return "bg-red-600";
      case "Alto": return "bg-orange-600";
      case "Medio": return "bg-amber-600";
      default: return "bg-gray-600";
    }
  };

  const getFrequencyColor = (frequency: string) => {
    switch (frequency) {
      case "Muy Alto": return "bg-red-500";
      case "Alto": return "bg-orange-500";
      case "Medio": return "bg-amber-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-700/50 overflow-hidden">
        
        {/* Executive Header */}
        <div className="p-8 bg-gradient-to-r from-red-900/20 to-orange-900/20 border-b border-red-500/20">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl flex items-center justify-center mr-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-gradient-to-r from-red-600 to-orange-600 rounded"></div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Advanced Threat Vector Analysis
              </h2>
              <p className="text-red-300 font-medium">Sistema de Análisis Forense y Respuesta Ejecutiva</p>
            </div>
          </div>
          
          <p className="text-gray-300 leading-relaxed">
            Seleccione los vectores de amenaza específicos para generar un informe ejecutivo 
            con análisis forense detallado, casos documentados y protocolos de respuesta estratégica.
          </p>
        </div>
        
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-10">
            
            {/* Executive Information */}
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-8 rounded-3xl border border-blue-500/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                  <div className="w-6 h-6 bg-white rounded-lg"></div>
                </div>
                <h3 className="text-2xl font-bold text-white">Executive Information</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="nombre" className="text-gray-300 font-semibold text-sm uppercase tracking-wide">
                    Ejecutivo / Director Responsable
                  </Label>
                  <Input
                    id="nombre"
                    name="nombre"
                    type="text"
                    placeholder="Nombre completo del ejecutivo"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="bg-slate-800/50 border-slate-600/50 focus:border-blue-500/50 text-white placeholder-gray-400 rounded-xl h-14 text-lg transition-all duration-300 focus:bg-slate-700/50"
                  />
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-gray-300 font-semibold text-sm uppercase tracking-wide">
                    Email Corporativo Ejecutivo
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="ejecutivo@empresa.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="bg-slate-800/50 border-slate-600/50 focus:border-blue-500/50 text-white placeholder-gray-400 rounded-xl h-14 text-lg transition-all duration-300 focus:bg-slate-700/50"
                  />
                </div>
              </div>
            </div>

            {/* Selection Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-gradient-to-r from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-slate-700/30">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-lg font-bold text-white">
                    Vectores Seleccionados: {formData.fraudTypes.length} / {fraudTypes.length}
                  </span>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Button
                  type="button"
                  onClick={handleSelectAll}
                  variant="outline"
                  className="bg-gradient-to-r from-emerald-600/20 to-green-600/20 border-emerald-500/50 text-emerald-300 hover:bg-emerald-600/30 rounded-xl px-6 py-2"
                >
                  <div className="w-4 h-4 bg-emerald-400 rounded mr-2"></div>
                  Análisis Completo
                </Button>
                <Button
                  type="button"
                  onClick={handleClearAll}
                  variant="outline"
                  className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border-red-500/50 text-red-300 hover:bg-red-600/30 rounded-xl px-6 py-2"
                >
                  <div className="w-4 h-4 bg-red-400 rounded mr-2"></div>
                  Limpiar Selección
                </Button>
              </div>
            </div>

            {/* Threat Vector Selection */}
            <div className="space-y-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-1 h-12 bg-gradient-to-b from-red-500 to-orange-500 rounded-full mr-4"></div>
                  <h3 className="text-3xl font-bold text-white">
                    Threat Vector Selection Matrix
                  </h3>
                  <div className="w-1 h-12 bg-gradient-to-b from-orange-500 to-red-500 rounded-full ml-4"></div>
                </div>
                <p className="text-gray-400 max-w-3xl mx-auto">
                  Cada vector incluye análisis forense de casos reales, métricas de impacto empresarial, 
                  estrategias de mitigación y protocolos de respuesta ejecutiva.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {fraudTypes.map((fraudType) => (
                  <div
                    key={fraudType.id}
                    className={`relative overflow-hidden rounded-3xl border-2 transition-all duration-500 transform hover:scale-105 ${
                      formData.fraudTypes.includes(fraudType.id)
                        ? "bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-blue-500/50 shadow-2xl shadow-blue-500/20"
                        : "bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-600/30 hover:border-slate-500/50 shadow-xl"
                    }`}
                  >
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${fraudType.color} opacity-10`}></div>
                    
                    <div className="relative p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <Checkbox
                          id={fraudType.id}
                          checked={formData.fraudTypes.includes(fraudType.id)}
                          onCheckedChange={() => handleFraudTypeToggle(fraudType.id)}
                          className="mt-1 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                        />
                        <div className="flex flex-col space-y-2">
                          <Badge className={`${getSeverityColor(fraudType.severity)} text-white text-xs px-3 py-1 font-bold`}>
                            {fraudType.severity}
                          </Badge>
                          <Badge className={`${getFrequencyColor(fraudType.frequency)} text-white text-xs px-3 py-1 font-bold`}>
                            {fraudType.frequency}
                          </Badge>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-3">
                        <h4 className="font-bold text-white text-lg leading-tight">
                          {fraudType.label}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {fraudType.desc}
                        </p>
                      </div>

                      {/* Selection Indicator */}
                      {formData.fraudTypes.includes(fraudType.id) && (
                        <div className="absolute top-4 right-4">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl">
                            <div className="w-4 h-4 bg-white rounded-full"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Status Messages */}
            {message && (
              <div
                className={`p-8 rounded-3xl border-2 ${
                  message.type === "success"
                    ? "bg-gradient-to-r from-emerald-900/20 to-green-900/20 border-emerald-500/50 text-emerald-300"
                    : "bg-gradient-to-r from-red-900/20 to-pink-900/20 border-red-500/50 text-red-300"
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    message.type === "success" ? "bg-emerald-600" : "bg-red-600"
                  }`}>
                    <div className="w-6 h-6 bg-white rounded-lg"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      {message.type === "success" ? "Análisis Ejecutivo Generado" : "Error del Sistema"}
                    </h4>
                    <p className="leading-relaxed">{message.text}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-6 px-12 rounded-3xl shadow-2xl hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105 text-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Generando Análisis Ejecutivo...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-2xl flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded"></div>
                    </div>
                    <span>Generar Informe Ejecutivo de Amenazas</span>
                    <div className="w-8 h-8 bg-white/20 rounded-2xl flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded"></div>
                    </div>
                  </div>
                )}
              </Button>
            </div>
          </form>

          {/* Executive Information Panel */}
          <div className="mt-12 p-8 bg-gradient-to-r from-amber-900/20 to-orange-900/20 rounded-3xl border border-amber-500/30">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl flex items-center justify-center flex-shrink-0">
                <div className="w-8 h-8 bg-white rounded-2xl flex items-center justify-center">
                  <div className="w-4 h-4 bg-gradient-to-r from-amber-600 to-orange-600 rounded"></div>
                </div>
              </div>
              <div>
                <h4 className="text-amber-300 font-bold text-xl mb-3 uppercase tracking-wide">
                  Executive Intelligence Report
                </h4>
                <div className="space-y-2 text-gray-400 leading-relaxed">
                  <p>• <strong className="text-amber-400">Análisis Forense:</strong> Casos reales documentados con metodología de investigación</p>
                  <p>• <strong className="text-amber-400">Métricas de Impacto:</strong> Evaluación cuantitativa de riesgos financieros y operacionales</p>
                  <p>• <strong className="text-amber-400">Estrategias de Mitigación:</strong> Protocolos específicos adaptados a su organización</p>
                  <p>• <strong className="text-amber-400">Respuesta Ejecutiva:</strong> Guías de acción inmediata para equipos directivos</p>
                  <p>• <strong className="text-amber-400">Contactos de Emergencia:</strong> Red de respuesta especializada en ciberamenazas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
