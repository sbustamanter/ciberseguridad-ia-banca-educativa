import FormRecommendation from "@/components/FormRecommendation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-slate-900/20"></div>
        <div className="absolute inset-0 opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center">
            <div className="inline-flex items-center px-3 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 mb-6 sm:mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
              <span className="text-blue-300 text-xs sm:text-sm font-medium tracking-wide">SISTEMA AVANZADO DE CIBERSEGURIDAD</span>
            </div>
            
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight px-2">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                CyberShield
              </span>
              <br />
              <span className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-gray-300 font-light">
                Banking Security
              </span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
              Plataforma empresarial de inteligencia artificial para la prevención avanzada 
              de fraudes bancarios y ciberamenazas financieras
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <div className="flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-emerald-600/20 to-green-600/20 rounded-xl border border-emerald-500/30 w-full sm:w-auto">
                <div className="w-3 h-3 bg-emerald-400 rounded-full mr-2 sm:mr-3"></div>
                <span className="text-emerald-300 font-medium text-sm sm:text-base">IA Predictiva Activa</span>
              </div>
              <div className="flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl border border-blue-500/30 w-full sm:w-auto">
                <div className="w-3 h-3 bg-blue-400 rounded-full mr-2 sm:mr-3"></div>
                <span className="text-blue-300 font-medium text-sm sm:text-base">Análisis en Tiempo Real</span>
              </div>
              <div className="flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl border border-purple-500/30 w-full sm:w-auto">
                <div className="w-3 h-3 bg-purple-400 rounded-full mr-2 sm:mr-3"></div>
                <span className="text-purple-300 font-medium text-sm sm:text-base">Protección Empresarial</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <Tabs defaultValue="intelligence" className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-8 sm:mb-12 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-2 h-auto sm:h-16 gap-2 sm:gap-0">
            <TabsTrigger 
              value="intelligence" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 rounded-xl font-semibold text-gray-300 hover:text-white h-12 sm:h-12 text-xs sm:text-sm"
            >
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="hidden xs:inline">Inteligencia de Amenazas</span>
                <span className="xs:hidden">Inteligencia</span>
              </div>
            </TabsTrigger>
            <TabsTrigger 
              value="analytics" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-600 data-[state=active]:to-green-600 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 rounded-xl font-semibold text-gray-300 hover:text-white h-12 sm:h-12 text-xs sm:text-sm"
            >
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="hidden xs:inline">Analytics Avanzado</span>
                <span className="xs:hidden">Analytics</span>
              </div>
            </TabsTrigger>
            <TabsTrigger 
              value="protection" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300 rounded-xl font-semibold text-gray-300 hover:text-white h-12 sm:h-12 text-xs sm:text-sm"
            >
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="hidden xs:inline">Protección Ejecutiva</span>
                <span className="xs:hidden">Protección</span>
              </div>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="intelligence" className="space-y-8 sm:space-y-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-6 sm:space-y-8">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-500 group">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 lg:mr-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-lg flex items-center justify-center">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded"></div>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">
                        Threat Intelligence Platform
                      </h2>
                      <p className="text-blue-400 font-medium text-sm sm:text-base">Sistema de Análisis Predictivo</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                    <p>
                      Nuestra plataforma de inteligencia artificial analiza más de 50 millones de 
                      transacciones diarias, identificando patrones de fraude con precisión del 99.7%.
                    </p>
                    
                    <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-blue-500/20">
                      <div className="flex items-center mb-2 sm:mb-3">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full mr-2 sm:mr-3"></div>
                        <span className="text-blue-300 font-semibold text-sm sm:text-base">Detección Avanzada</span>
                      </div>
                      <p className="text-blue-200 text-xs sm:text-sm">
                        Machine Learning con algoritmos de deep learning para identificación 
                        de amenazas emergentes en tiempo real.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-500 group">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-600 to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 lg:mr-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-lg flex items-center justify-center">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-emerald-600 to-green-600 rounded"></div>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">
                        AI-Powered Defense
                      </h2>
                      <p className="text-emerald-400 font-medium text-sm sm:text-base">Escudo Inteligente Adaptativo</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                    <p>
                      Sistema de defensa que evoluciona continuamente, adaptándose a nuevas 
                      amenazas mediante aprendizaje automático y análisis comportamental.
                    </p>
                    
                    <div className="bg-gradient-to-r from-emerald-900/30 to-green-900/30 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-emerald-500/20">
                      <div className="flex items-center mb-2 sm:mb-3">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-full mr-2 sm:mr-3"></div>
                        <span className="text-emerald-300 font-semibold text-sm sm:text-base">Adaptación Continua</span>
                      </div>
                      <p className="text-emerald-200 text-xs sm:text-sm">
                        Algoritmos neurales que aprenden de cada intento de fraude, 
                        fortaleciendo las defensas automáticamente.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:sticky lg:top-8">
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-slate-700/50 overflow-hidden">
                  <div className="p-6 sm:p-8">
                    <div className="text-center mb-6 sm:mb-8">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-2xl">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center">
                          <div className="w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"></div>
                        </div>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">
                        Executive Protection Suite
                      </h2>
                      <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                        Análisis personalizado de riesgos y recomendaciones estratégicas 
                        para la protección de activos financieros empresariales.
                      </p>
                    </div>
                    
                    <FormRecommendation />
                  </div>
                  
                  <div className="p-6 sm:p-8 bg-gradient-to-r from-red-900/20 to-orange-900/20 border-t border-red-500/20">
                    <div className="text-center">
                      <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-full border border-red-500/30 mb-3 sm:mb-4">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-red-300 text-xs sm:text-sm font-medium">CENTRO DE COMANDO AVANZADO</span>
                      </div>
                      
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                        Acceso al Centro de Inteligencia
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
                        Plataforma completa con 16 vectores de amenaza, análisis forense 
                        y protocolos de respuesta ejecutiva para organizaciones financieras.
                      </p>
                      
                      <a 
                        href="/fraudes" 
                        className="inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105 group text-sm sm:text-base"
                      >
                        <div className="flex items-center">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white/20 rounded-lg flex items-center justify-center mr-2 sm:mr-3 group-hover:bg-white/30 transition-colors">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded"></div>
                          </div>
                          <span>Centro de Comando</span>
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white/20 rounded-lg flex items-center justify-center ml-2 sm:ml-3 group-hover:bg-white/30 transition-colors">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded"></div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                { 
                  title: "Phishing Avanzado", 
                  desc: "Detección de campañas sofisticadas de ingeniería social", 
                  color: "from-red-600 to-pink-600",
                  metric: "99.8%",
                  label: "Precisión"
                },
                { 
                  title: "Fraude Transaccional", 
                  desc: "Análisis en tiempo real de patrones de transacciones", 
                  color: "from-orange-600 to-red-600",
                  metric: "< 0.1s",
                  label: "Tiempo Respuesta"
                },
                { 
                  title: "Amenazas Móviles", 
                  desc: "Protección contra malware bancario y apps maliciosas", 
                  color: "from-blue-600 to-purple-600",
                  metric: "24/7",
                  label: "Monitoreo"
                },
                { 
                  title: "Autenticación Biométrica", 
                  desc: "Sistemas de verificación de identidad avanzados", 
                  color: "from-emerald-600 to-green-600",
                  metric: "99.99%",
                  label: "Confiabilidad"
                },
                { 
                  title: "IA Predictiva", 
                  desc: "Algoritmos de machine learning para predicción de amenazas", 
                  color: "from-purple-600 to-pink-600",
                  metric: "15 días",
                  label: "Predicción"
                },
                { 
                  title: "Respuesta Automática", 
                  desc: "Sistemas de mitigación y respuesta automatizada", 
                  color: "from-cyan-600 to-blue-600",
                  metric: "< 50ms",
                  label: "Reacción"
                }
              ].map((threat, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-500 group hover:scale-105">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${threat.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-lg"></div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{threat.title}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">{threat.desc}</p>
                    
                    <div className="bg-gradient-to-r from-slate-700/50 to-slate-800/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-slate-600/30">
                      <div className="text-xl sm:text-2xl font-bold text-white mb-1">{threat.metric}</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wide">{threat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="protection">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-6 sm:space-y-8">
                <div className="bg-gradient-to-br from-emerald-900/20 to-green-900/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-emerald-500/30">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 flex flex-col sm:flex-row items-start sm:items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-emerald-600 to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-0 sm:mr-4">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-lg"></div>
                    </div>
                    <span>Defensas Empresariales</span>
                  </h2>
                  
                  <div className="space-y-4 sm:space-y-6">
                    {[
                      "Detección de anomalías comportamentales en tiempo real",
                      "Autenticación multifactor con biometría avanzada", 
                      "Análisis predictivo de patrones de usuario",
                      "Encriptación cuántica de próxima generación",
                      "Monitoreo de amenazas con IA supervisada",
                      "Respuesta automatizada a incidentes críticos"
                    ].map((defense, index) => (
                      <div key={index} className="flex items-center p-3 sm:p-4 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-xl sm:rounded-2xl border border-slate-700/30 hover:border-emerald-500/30 transition-all duration-300 group">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-emerald-600 to-green-600 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-lg"></div>
                        </div>
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm sm:text-base">{defense}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-blue-500/30">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 flex flex-col sm:flex-row items-start sm:items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-0 sm:mr-4">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-lg"></div>
                  </div>
                  <span>Tecnología del Futuro</span>
                </h2>
                
                <div className="space-y-4 sm:space-y-6 text-gray-300 leading-relaxed">
                  <p className="text-base sm:text-lg">
                    La convergencia entre inteligencia artificial cuántica y ciberseguridad 
                    está creando un ecosistema financiero impenetrable y resiliente.
                  </p>
                  
                  <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-700/30">
                    <h3 className="font-bold text-blue-300 mb-3 sm:mb-4 text-base sm:text-lg">Innovaciones Emergentes:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {[
                        { name: "Computación Cuántica", desc: "Encriptación inquebrantable" },
                        { name: "Blockchain Avanzado", desc: "Inmutabilidad garantizada" },
                        { name: "IA Autónoma", desc: "Defensa auto-evolutiva" },
                        { name: "Biometría Molecular", desc: "Identificación única" }
                      ].map((tech, index) => (
                        <div key={index} className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group">
                          <div className="text-blue-300 font-semibold text-xs sm:text-sm mb-1">{tech.name}</div>
                          <div className="text-gray-400 text-xs">{tech.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-gradient-to-r from-slate-900 via-gray-900 to-black border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-2xl">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"></div>
              </div>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">CyberShield Banking Security</h3>
            <p className="text-gray-400 text-base sm:text-lg mb-4 sm:mb-6 max-w-2xl mx-auto">
              Plataforma empresarial de ciberseguridad financiera con tecnología de inteligencia artificial avanzada
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-xs sm:text-sm text-gray-500">
              <span>© 2024 CyberShield Corp.</span>
              <span className="hidden sm:inline">•</span>
              <span>Enterprise Security Solutions</span>
              <span className="hidden sm:inline">•</span>
              <span>AI-Powered Protection</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
