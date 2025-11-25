import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import ImageWrapper from "@/components/ImageWrapper";
import PageHeader from "@/components/PageHeader";




export default function CiudadPage() {
    return (
        <>
            <PageHeader />

            {/* Fondo oscuro para toda la página */}
            <main className="min-h-screen bg-slate-900 py-12">
                <div className="container mx-auto px-4 max-w-6xl">

                    {/* Grid para colocar las tarjetas lado a lado */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Primera Card - Imagen */}
                        <Card className="overflow-hidden bg-white">
                            <CardHeader className="pb-4">
                                <CardTitle className="text-4xl font-bold text-center text-[#615fff]">
                                    Medellín
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="w-full">
                                    <ImageWrapper
                                        src="/medellin.jpeg"
                                        alt="Vista panorámica de Medellín"
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Segunda Card - Información */}
                        <Card className="overflow-hidden bg-white">
                            <CardHeader className="pb-4">
                                <CardTitle className="text-4xl font-bold text-center text-[#615fff]">
                                    Información
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-4">
                                    <p className="text-gray-700">
                                        Medellín es la segunda ciudad más grande de Colombia, capital de Antioquia. Se ubica en el Valle de Aburrá, a 1.500 metros sobre el nivel del mar. Es conocida como la "Ciudad de la Eterna Primavera" por su clima templado (24°C promedio). Con más de 2.5 millones de habitantes, es un centro industrial, comercial y cultural que ha experimentado una gran transformación y desarrollo urbanístico.
                                    </p>
                                    <div className="space-y-2">
                                        <h3 className="font-semibold text-lg text-[#615fff]">Datos destacados:</h3>
                                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                                            <li>Población: ~2.5 millones</li>
                                            <li>Clima: Primaveral todo el año</li>
                                            <li>Altitud: 1,495 metros</li>
                                        </ul>
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


