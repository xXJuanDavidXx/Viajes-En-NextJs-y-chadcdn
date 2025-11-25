import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import ImageWrapper from "@/components/ImageWrapper";
import PageHeader from "@/components/PageHeader";

export default function BogotaPage() {
    return (
        <>
            <PageHeader />

            {/* Fondo con gradiente azul/gris */}
        <main className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-800 to-gray-900 py-12">
            <div className="container mx-auto px-4 max-w-5xl">

                {/* Layout vertical - Imagen arriba, info abajo */}
                <div className="space-y-6">

                      {/* Manejo una Card de Imagen */}
                      <Card className="overflow-hidden bg-white/95 backdrop-blur">
                          <CardHeader className="pb-4 bg-gradient-to-r from-blue-600 to-indigo-600">
                            <CardTitle className="text-5xl font-bold text-center text-white">
                                Bogotá
                            </CardTitle>
                            <p className="text-center text-blue-100 text-lg mt-2">
                                Capital de Colombia
                            </p>
                          </CardHeader>
                          <CardContent className="p-6">
                              <div className="w-full">
                                <ImageWrapper
                                    src="/bogota.jpeg"
                                    alt="Vista panorámica de Bogotá"
                                />
                            </div>
                        </CardContent>
                        </Card>

                        {/* La informacion de la ciudad :3 */}
                        <Card className="overflow-hidden bg-white/95 backdrop-blur">
                          <CardContent className="p-8">
                              <div className="space-y-6">
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    Bogotá es la capital y ciudad más grande de Colombia, ubicada en la cordillera de los Andes a 2.640 metros sobre el nivel del mar.
                                    Es el centro político, económico y cultural del país, con más de 8 millones de habitantes.
                                    La ciudad combina arquitectura colonial con modernos rascacielos, ofreciendo una rica oferta cultural, gastronómica y de entretenimiento.
                                </p>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-3">
                                            <h3 className="font-bold text-xl text-blue-700 border-b-2 border-blue-300 pb-2">
                                                Datos Importantes
                                            </h3>
                                            <ul className="space-y-2 text-gray-700">
                                  
                                          <li className="flex items-start">
                                              <span className="text-blue-600 mr-2">👥</span>
                                              <span><strong>Población:</strong> ~8 millones</span>
                                              </li>
                                          </ul>
                                        </div>

                                        <div className="space-y-3">
                                            <h3 className="font-bold text-xl text-blue-700 border-b-2 border-blue-300 pb-2">
                                                Lugares Destacados
                                          </h3>
                                          <ul className="space-y-2 text-gray-700">
                                          <li className="flex items-start">
                                              <span className="text-blue-600 mr-2">⛰️</span>
                                              <span>Cerro de Monserrate</span>
                                            </li>
                                          <li className="flex items-start">
                                              <span className="text-blue-600 mr-2">🏛️</span>
                                              <span>Museo del Oro</span>
                                          </li>
                                          <li className="flex items-start">
                                                <span className="text-blue-600 mr-2">🏘️</span>
                                                <span>La Candelaria</span>
                                            </li>
                                        </ul>
                                      </div>
                                  </div>
                              </div>
                            </CardContent>
                        </Card>

                    </div>
                </div>
            </main>
        </>
    );
}
