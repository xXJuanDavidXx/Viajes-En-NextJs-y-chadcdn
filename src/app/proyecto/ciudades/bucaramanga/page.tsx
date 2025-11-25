import {
    Card,
    CardContent,
} from "@/components/ui/card";
import ImageWrapper from "@/components/ImageWrapper";
import PageHeader from "@/components/PageHeader";

export default function BucaramangaPage() {
    return (
        <>
            <PageHeader />

            {/* Fondo verde inspirado en los parques */}
            <main className="min-h-screen bg-gradient-to-br from-green-800 via-emerald-700 to-teal-800 py-12">
                <div className="container mx-auto px-4 max-w-4xl">

                    {/* Card única con diseño compacto */}
                    <Card className="overflow-hidden shadow-2xl bg-white">

                        {/* Header con imagen de fondo */}
                        <div className="relative h-64 overflow-hidden">
                            <ImageWrapper
                                src="/bucaramanga.jpeg"
                                alt="Bucaramanga - Ciudad de los Parques"
                            />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
                              <div className="p-6 w-full">
                                  <h1 className="text-5xl font-black text-white mb-2">
                                      Bucaramanga
                                  </h1>
                                  <p className="text-2xl text-green-300 font-semibold">
                                      🌳 Ciudad de los Parques
                                  </p>
                              </div>
                          </div>
                      </div>

                        {/* Contenido */}
                        <CardContent className="p-8">

                            {/* Descripción */}
                            <div className="mb-6">
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    Bucaramanga es la capital del departamento de Santander, conocida como la "Ciudad de los Parques"
                                    por sus numerosas áreas verdes. Es un importante centro comercial y educativo del nororiente colombiano,
                                    destacándose por su desarrollo urbano planificado y la calidez de su gente.
                                </p>
                            </div>

                            {/* Grid de información */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

                                {/* Datos */}
                                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border-2 border-green-300">
                                    <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                                        <span className="text-2xl mr-2">📍</span>
                                        Información General
                                    </h3>
                                    <div className="space-y-2 text-gray-700">
                                        <p><strong className="text-green-700">Población:</strong> ~600,000 habitantes</p>
                                        <p><strong className="text-green-700">Clima:</strong> Cálido (24°C promedio)</p>
                                        <p><strong className="text-green-700">Apodo:</strong> Ciudad Bonita</p>
                                    </div>
                                </div>

                                {/* Características */}
                                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-5 rounded-xl border-2 border-teal-300">
                                    <h3 className="text-xl font-bold text-teal-800 mb-4 flex items-center">
                                        <span className="text-2xl mr-2">✨</span>
                                        Destacados
                                    </h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start">
                                            <span className="text-green-600 mr-2">•</span>
                                            <span>Más de 160 parques</span>
                                        </li>
                                      <li className="flex items-start">
                                          <span className="text-green-600 mr-2">•</span>
                                          <span>Centro educativo regional</span>
                                      </li>
                                      <li className="flex items-start">
                                          <span className="text-green-600 mr-2">•</span>
                                          <span>Gastronomía santandereana</span>
                                      </li>
                                      <li className="flex items-start">
                                          <span className="text-green-600 mr-2">•</span>
                                          <span>Cerca del Cañón del Chicamocha</span>
                                      </li>
                                    </ul>
                                </div>

                            </div>

                            {/* Atracciones principales */}
                            <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-xl border-2 border-green-400">
                                <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">
                                    🏞️ Lugares para Visitar
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    <div className="bg-white p-3 rounded-lg text-center shadow">
                                        <p className="text-2xl mb-1">💧</p>
                                        <p className="text-sm font-semibold text-gray-800">Parque del Agua</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg text-center shadow">
                                        <p className="text-2xl mb-1">⛰️</p>
                                        <p className="text-sm font-semibold text-gray-800">Panachi</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg text-center shadow">
                                        <p className="text-2xl mb-1">⛪</p>
                                        <p className="text-sm font-semibold text-gray-800">Catedral</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg text-center shadow">
                                        <p className="text-2xl mb-1">🌺</p>
                                        <p className="text-sm font-semibold text-gray-800">Jardín Botánico</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg text-center shadow">
                                        <p className="text-2xl mb-1">🏘️</p>
                                        <p className="text-sm font-semibold text-gray-800">Barichara</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg text-center shadow">
                                        <p className="text-2xl mb-1">🌳</p>
                                        <p className="text-sm font-semibold text-gray-800">Parque García</p>
                                    </div>
                                </div>
                            </div>

                        </CardContent>
                    </Card>

                </div>
            </main>
        </>
    );
}
