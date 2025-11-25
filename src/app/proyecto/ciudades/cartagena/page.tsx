import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import ImageWrapper from "@/components/ImageWrapper";
import PageHeader from "@/components/PageHeader";

export default function CartagenaPage() {
    return (
        <>
            <PageHeader />

            {/* Fondo cálido inspirado en el Caribe colonial */}
            <main className="min-h-screen bg-gradient-to-b from-amber-100 via-orange-50 to-yellow-100 py-12">
                <div className="container mx-auto px-4 max-w-6xl">

                    {/* Título principal con estilo colonial */}
                    <div className="text-center mb-8">
                        <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-orange-600 to-red-600 mb-4">
                            Cartagena de Indias
                        </h1>
                        <p className="text-2xl text-amber-800 font-semibold italic">
                            Joya del Caribe Colombiano
                        </p>
                    </div>

                    {/* Layout: Imagen a la izquierda, info a la derecha */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

                        {/* Imagen */}
                        <Card className="overflow-hidden shadow-2xl border-4 border-amber-300">
                            <CardContent className="p-0">
                                <ImageWrapper
                                    src="/cartagena.jpeg"
                                    alt="Cartagena de Indias"
                                />
                            </CardContent>
                        </Card>

                        {/* Información Principal */}
                        <Card className="overflow-hidden shadow-2xl bg-gradient-to-br from-white to-amber-50 border-4 border-amber-300">
                            <CardHeader className="bg-gradient-to-r from-amber-600 to-orange-600">
                                <CardTitle className="text-3xl font-bold text-white text-center">
                                    🏰 Patrimonio de la Humanidad
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 space-y-4">
                                <p className="text-gray-800 leading-relaxed text-lg">
                                    Cartagena es una ciudad histórica en la costa caribeña de Colombia,
                                    declarada Patrimonio de la Humanidad por la UNESCO. Sus murallas coloniales,
                                    arquitectura española y playas paradisíacas la convierten en uno de los destinos
                                    más románticos y visitados de América Latina.
                                </p>

                                <div className="bg-amber-100 p-4 rounded-lg border-l-4 border-amber-600">
                                    <h3 className="font-bold text-lg text-amber-900 mb-2">📊 Datos Clave</h3>
                                    <div className="grid grid-cols-2 gap-3 text-sm">
                                        <div>
                                            <p className="text-amber-700 font-semibold">Fundación</p>
                                            <p className="text-gray-700">1533</p>
                                        </div>
                                        <div>
                                            <p className="text-amber-700 font-semibold">Población</p>
                                            <p className="text-gray-700">~1 millón</p>
                                        </div>
                                        <div>
                                            <p className="text-amber-700 font-semibold">Clima</p>
                                            <p className="text-gray-700">Tropical (28°C)</p>
                                        </div>
                                        <div>
                                            <p className="text-amber-700 font-semibold">Costa</p>
                                            <p className="text-gray-700">Mar Caribe</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                    </div>

                    {/* Atracciones en cards horizontales */}
                    <Card className="overflow-hidden shadow-2xl bg-white border-4 border-amber-300">
                        <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600">
                            <CardTitle className="text-3xl font-bold text-white text-center">
                                🌴 Lugares Emblemáticos
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-lg border-2 border-amber-200">
                                    <div className="text-3xl mb-2">🏛️</div>
                                    <h4 className="font-bold text-amber-900 mb-1">Ciudad Amurallada</h4>
                                    <p className="text-sm text-gray-700">Centro histórico colonial</p>
                                </div>
                                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-lg border-2 border-amber-200">
                                    <div className="text-3xl mb-2">🏰</div>
                                    <h4 className="font-bold text-amber-900 mb-1">Castillo San Felipe</h4>
                                    <p className="text-sm text-gray-700">Fortaleza militar histórica</p>
                                </div>
                                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-lg border-2 border-amber-200">
                                    <div className="text-3xl mb-2">🏝️</div>
                                    <h4 className="font-bold text-amber-900 mb-1">Islas del Rosario</h4>
                                    <p className="text-sm text-gray-700">Paraíso caribeño</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                </div>
            </main>
        </>
    );
}
