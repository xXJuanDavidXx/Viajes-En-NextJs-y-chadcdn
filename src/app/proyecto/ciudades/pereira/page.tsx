import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import ImageWrapper from "@/components/ImageWrapper";
import PageHeader from "@/components/PageHeader";

export default function PereiraPage() {
    return (
        <>
            <PageHeader />

            {/* Fondo café inspirado en el Eje Cafetero */}
            <main className="min-h-screen bg-gradient-to-br from-amber-900 via-yellow-800 to-orange-900 py-12">
                <div className="container mx-auto px-4 max-w-6xl">

                    {/* Header con título */}
                    <div className="text-center mb-8">
                        <div className="inline-block bg-white/90 backdrop-blur px-8 py-4 rounded-2xl shadow-2xl">
                            <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-orange-700">
                                ☕ Pereira
                            </h1>
                            <p className="text-xl text-amber-700 font-semibold mt-2">
                                Corazón del Eje Cafetero
                            </p>
                        </div>
                    </div>

                    {/* Layout: Dos columnas iguales */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Columna Izquierda - Imagen y datos */}
                        <div className="space-y-6">

                            {/* Imagen */}
                            <Card className="overflow-hidden shadow-xl border-4 border-amber-600">
                                <CardContent className="p-0">
                                    <ImageWrapper
                                        src="/pereira.jpeg"
                                        alt="Pereira - Eje Cafetero"
                                    />
                                </CardContent>
                            </Card>

                            {/* Datos rápidos */}
                            <Card className="overflow-hidden shadow-xl bg-gradient-to-br from-amber-50 to-orange-50 border-4 border-amber-600">
                                <CardHeader className="bg-gradient-to-r from-amber-700 to-orange-700 pb-3">
                                    <CardTitle className="text-2xl font-bold text-white text-center">
                                        📊 Datos de la Ciudad
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-5">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white p-3 rounded-lg shadow text-center">
                                            <p className="text-3xl mb-1">👥</p>
                                            <p className="text-xs text-gray-600 font-semibold">Población</p>
                                            <p className="text-sm font-bold text-amber-800">~470,000</p>
                                        </div>
                                        <div className="bg-white p-3 rounded-lg shadow text-center">
                                            <p className="text-3xl mb-1">📍</p>
                                            <p className="text-xs text-gray-600 font-semibold">Altitud</p>
                                            <p className="text-sm font-bold text-amber-800">1,411 m</p>
                                        </div>
                                        <div className="bg-white p-3 rounded-lg shadow text-center">
                                            <p className="text-3xl mb-1">🌡️</p>
                                            <p className="text-xs text-gray-600 font-semibold">Temperatura</p>
                                            <p className="text-sm font-bold text-amber-800">21°C</p>
                                        </div>
                                        <div className="bg-white p-3 rounded-lg shadow text-center">
                                            <p className="text-3xl mb-1">🏛️</p>
                                            <p className="text-xs text-gray-600 font-semibold">Fundación</p>
                                            <p className="text-sm font-bold text-amber-800">1863</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                        </div>

                        {/* Columna Derecha - Información y atracciones */}
                        <div className="space-y-6">

                            {/* Descripción */}
                            <Card className="overflow-hidden shadow-xl bg-white border-4 border-amber-600">
                                <CardHeader className="bg-gradient-to-r from-orange-700 to-amber-700 pb-3">
                                    <CardTitle className="text-2xl font-bold text-white text-center">
                                        🌄 Sobre Pereira
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-5">
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Pereira es la capital del departamento de Risaralda y una de las ciudades principales
                                        del Eje Cafetero colombiano, región declarada Patrimonio de la Humanidad por la UNESCO.
                                        Es conocida por su desarrollo comercial, su ubicación estratégica y por ser la puerta
                                        de entrada al Paisaje Cultural Cafetero.
                                    </p>
                                    <div className="bg-amber-100 p-4 rounded-lg border-l-4 border-amber-600">
                                        <p className="text-sm text-gray-700">
                                            <strong className="text-amber-800">💡 Dato curioso:</strong> Pereira es conocida
                                            como "La Querendona, Trasnochadora y Morena" por su vida nocturna y el carácter
                                            cálido de su gente.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Atracciones */}
                            <Card className="overflow-hidden shadow-xl bg-gradient-to-br from-white to-amber-50 border-4 border-amber-600">
                                <CardHeader className="bg-gradient-to-r from-amber-700 to-yellow-700 pb-3">
                                    <CardTitle className="text-2xl font-bold text-white text-center">
                                        ✨ Lugares Destacados
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-5">
                                    <div className="space-y-3">
                                        <div className="flex items-start bg-gradient-to-r from-amber-100 to-orange-100 p-3 rounded-lg border-l-4 border-amber-600">
                                            <span className="text-2xl mr-3">⛰️</span>
                                            <div>
                                                <p className="font-bold text-gray-800">Parque Los Nevados</p>
                                                <p className="text-sm text-gray-600">Naturaleza y montañas nevadas</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start bg-gradient-to-r from-orange-100 to-yellow-100 p-3 rounded-lg border-l-4 border-orange-600">
                                            <span className="text-2xl mr-3">♨️</span>
                                            <div>
                                                <p className="font-bold text-gray-800">Termales Santa Rosa</p>
                                                <p className="text-sm text-gray-600">Aguas termales naturales</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start bg-gradient-to-r from-yellow-100 to-amber-100 p-3 rounded-lg border-l-4 border-yellow-600">
                                            <span className="text-2xl mr-3">🦜</span>
                                            <div>
                                                <p className="font-bold text-gray-800">Bioparque Ukumarí</p>
                                                <p className="text-sm text-gray-600">Fauna y flora regional</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start bg-gradient-to-r from-amber-100 to-orange-100 p-3 rounded-lg border-l-4 border-amber-600">
                                            <span className="text-2xl mr-3">☕</span>
                                            <div>
                                                <p className="font-bold text-gray-800">Haciendas Cafeteras</p>
                                                <p className="text-sm text-gray-600">Experiencia del café colombiano</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                        </div>

                    </div>

                </div>
            </main>
        </>
    );
}
