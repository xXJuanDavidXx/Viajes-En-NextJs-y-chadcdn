import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import ImageWrapper from "@/components/ImageWrapper";
import PageHeader from "@/components/PageHeader";

export default function CaliPage() {
    return (
        <>
            <PageHeader />

            {/* Fondo vibrante inspirado en la salsa */}
            <main className="min-h-screen bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500 py-12">
                <div className="container mx-auto px-4 max-w-7xl">

                    {/* Grid de 3 columnas: Info | Imagen | Info */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                        {/* Columna Izquierda - Info Básica */}
                        <Card className="overflow-hidden bg-white shadow-2xl">
                            <CardHeader className="bg-gradient-to-br from-red-500 to-orange-500 text-white">
                                <CardTitle className="text-2xl font-bold text-center">
                                    🎵 Capital de la Salsa
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 space-y-4">
                                <p className="text-gray-700 font-semibold text-lg">
                                    Santiago de Cali
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Cali es la tercera ciudad más grande de Colombia, conocida mundialmente por su cultura salsera,
                                    su clima cálido y la alegría de su gente.
                                </p>
                                <div className="space-y-2 pt-4 border-t border-gray-200">
                                    <p className="text-sm text-gray-600">
                                        <strong className="text-red-600">Población:</strong> ~2.2 millones
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        <strong className="text-red-600">Clima:</strong> Tropical (26°C)
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        <strong className="text-red-600">Región:</strong> Valle del Cauca
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Columna Central - Imagen Grande */}
                        <Card className="overflow-hidden bg-white shadow-2xl lg:row-span-1">
                            <CardHeader className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 pb-4">
                                <CardTitle className="text-4xl font-black text-center text-white tracking-wide">
                                    CALI
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <ImageWrapper
                                    src="/cali.jpeg"
                                    alt="Vista de Cali"
                                />
                            </CardContent>
                        </Card>

                        {/* Columna Derecha - Atracciones */}
                        <Card className="overflow-hidden bg-white shadow-2xl">
                            <CardHeader className="bg-gradient-to-br from-orange-500 to-yellow-500 text-white">
                                <CardTitle className="text-2xl font-bold text-center">
                                    ✨ Lugares Imperdibles
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-6">
                                <ul className="space-y-3">
                                    <li className="flex items-start bg-orange-50 p-3 rounded-lg">
                                        <span className="text-2xl mr-3">⛪</span>
                                        <div>
                                            <p className="font-semibold text-gray-800">Cristo Rey</p>
                                            <p className="text-sm text-gray-600">Monumento icónico</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start bg-red-50 p-3 rounded-lg">
                                        <span className="text-2xl mr-3">🦁</span>
                                        <div>
                                            <p className="font-semibold text-gray-800">Zoológico de Cali</p>
                                            <p className="text-sm text-gray-600">Uno de los mejores de América</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start bg-yellow-50 p-3 rounded-lg">
                                        <span className="text-2xl mr-3">🌊</span>
                                        <div>
                                            <p className="font-semibold text-gray-800">Boulevard del Río</p>
                                            <p className="text-sm text-gray-600">Paseo junto al río Cali</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start bg-orange-50 p-3 rounded-lg">
                                        <span className="text-2xl mr-3">🎨</span>
                                        <div>
                                            <p className="font-semibold text-gray-800">Gato de Tejada</p>
                                            <p className="text-sm text-gray-600">Escultura emblemática</p>
                                        </div>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                    </div>
                </div>
            </main>
        </>
    );
}
