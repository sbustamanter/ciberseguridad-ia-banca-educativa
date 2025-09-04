import FraudSelectionForm from "@/components/FraudSelectionForm";

export default function FraudesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Executive Command Center Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-orange-900/20 to-amber-900/20"></div>
        <div className="absolute inset-0 opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-red-600/10 to-orange-600/10 border border-red-500/20 mb-8">
              <div className="w-2 h-2 bg-red-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-red-300 text-sm font-medium tracking-wide">CENTRO DE COMANDO DE INTELIGENCIA</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                Threat Intelligence
              </span>
              <br />
              <span className="text-4xl md:text-5xl text-gray-300 font-light">
                Command Center
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Centro de comando ejecutivo para análisis avanzado de vectores de amenaza, 
              inteligencia de riesgos y protocolos de respuesta empresarial
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center px-6 py-3 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-xl border border-red-500/30">
                <div className="w-3 h-3 bg-red-400 rounded-full mr-3"></div>
                <span className="text-red-300 font-medium">16 Vectores de Amenaza</span>
              </div>
              <div className="flex items-center px-6 py-3 bg-gradient-to-r from-orange-600/20 to-amber-600/20 rounded-xl border border-orange-500/30">
                <div className="w-3 h-3 bg-orange-400 rounded-full mr-3"></div>
                <span className="text-orange-300 font-medium">Análisis Forense</span>
              </div>
              <div className="flex items-center px-6 py-3 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 rounded-xl border border-amber-500/30">
                <div className="w-3 h-3 bg-amber-400 rounded-full mr-3"></div>
                <span className="text-amber-300 font-medium">Respuesta Ejecutiva</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Executive Navigation */}
      <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <a href="/" className="flex items-center text-gray-300 hover:text-white transition-colors group">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <div className="w-5 h-5 bg-white rounded-lg"></div>
              </div>
              <div>
                <span className="font-bold text-lg">CyberShield</span>
                <div className="text-xs text-gray-500">Banking Security</div>
              </div>
            </a>
            
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Sistema Operativo</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-600/20 to-green-600/20 rounded-xl border border-emerald-500/30">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-emerald-300 text-sm font-medium">Análisis Activo</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Command Interface */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        
        {/* Executive Brief Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl border border-slate-700/50 overflow-hidden">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl flex items-center justify-center mr-6">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-r from-red-600 to-orange-600 rounded"></div>
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    Executive Threat Assessment
                  </h2>
                  <p className="text-red-400 font-medium">Análisis Integral de Vectores de Amenaza</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Seleccione los vectores de amenaza específicos para generar un informe ejecutivo 
                personalizado con análisis forense, casos documentados y protocolos de respuesta 
                estratégica para su organización financiera.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-2xl border border-blue-500/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-white rounded-lg"></div>
                  </div>
                  <h3 className="font-bold text-blue-300 mb-2">Casos Forenses</h3>
                  <p className="text-blue-200 text-sm">Análisis detallado de incidentes reales con metodología forense</p>
                </div>
                
                <div className="bg-gradient-to-br from-emerald-900/30 to-green-900/30 p-6 rounded-2xl border border-emerald-500/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-white rounded-lg"></div>
                  </div>
                  <h3 className="font-bold text-emerald-300 mb-2">Estrategias Ejecutivas</h3>
                  <p className="text-emerald-200 text-sm">Protocolos de mitigación adaptados a nivel organizacional</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-2xl border border-purple-500/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-white rounded-lg"></div>
                  </div>
                  <h3 className="font-bold text-purple-300 mb-2">Respuesta Táctica</h3>
                  <p className="text-purple-200 text-sm">Guías paso a paso para respuesta inmediata a incidentes</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Threat Selection Interface */}
        <FraudSelectionForm />

        {/* Executive Intelligence Dashboard */}
        <div className="mt-16 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-700/50 overflow-hidden">
          <div className="p-8">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl flex items-center justify-center mr-6">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-gradient-to-r from-amber-600 to-orange-600 rounded"></div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Intelligence Dashboard</h2>
                <p className="text-amber-400 font-medium">Métricas Críticas de Ciberseguridad Financiera</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-red-900/30 to-pink-900/30 p-6 rounded-2xl border border-red-500/20 text-center">
                <div className="text-4xl font-bold text-red-300 mb-2">$8.2B</div>
                <p className="text-red-200 text-sm font-medium">Pérdidas Globales 2024</p>
                <div className="text-xs text-red-400 mt-1">↑ 340% vs 2023</div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 p-6 rounded-2xl border border-orange-500/20 text-center">
                <div className="text-4xl font-bold text-orange-300 mb-2">425%</div>
                <p className="text-orange-200 text-sm font-medium">Aumento Ciberataques</p>
                <div className="text-xs text-orange-400 mt-1">Sector Financiero</div>
              </div>
              
              <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/30 p-6 rounded-2xl border border-amber-500/20 text-center">
                <div className="text-4xl font-bold text-amber-300 mb-2">1:3</div>
                <p className="text-amber-200 text-sm font-medium">Organizaciones Comprometidas</p>
                <div className="text-xs text-amber-400 mt-1">Últimos 12 meses</div>
              </div>
              
              <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 p-6 rounded-2xl border border-red-500/20 text-center">
                <div className="text-4xl font-bold text-red-300 mb-2">8 seg</div>
                <p className="text-red-200 text-sm font-medium">Frecuencia de Ataques</p>
                <div className="text-xs text-red-400 mt-1">Promedio Global</div>
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* Executive Footer */}
      <footer className="bg-gradient-to-r from-slate-900 via-gray-900 to-black border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <div className="w-8 h-8 bg-white rounded-2xl flex items-center justify-center">
                <div className="w-4 h-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg"></div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">Threat Intelligence Command Center</h3>
            <p className="text-gray-400 text-lg mb-6 max-w-2xl mx-auto">
              Centro de comando ejecutivo para análisis avanzado de ciberamenazas y respuesta estratégica empresarial
            </p>
            
            <div className="flex justify-center space-x-8 text-sm text-gray-500">
              <span>© 2024 CyberShield Corp.</span>
              <span>•</span>
              <span>Executive Threat Intelligence</span>
              <span>•</span>
              <span>Enterprise Command Center</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
