import { getCiudadBySlug, getAllCiudadSlugs } from "@/lib/ciudades";
import PageHeader from "@/components/PageHeader";
import ImageWrapper from "@/components/ImageWrapper";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { notFound } from "next/navigation";

interface Props {
    params: Promise<{
        ciudad: string;
    }>;
}

export async function generateStaticParams() {
    const slugs = getAllCiudadSlugs();
    return slugs.map((slug) => ({
        ciudad: slug,
    }));
}

export default async function CiudadPage({ params }: Props) {
    const { ciudad: slug } = await params;
    const ciudad = getCiudadBySlug(slug);

    if (!ciudad) {
        notFound();
    }

    return (
        <>
            <PageHeader />
            <hr className="border-slate-700" />
            <main className="flex-1 flex flex-col justify-center bg-muted py-12">
                <div className="container mx-auto px-4 max-w-4xl">
                    <Card className="overflow-hidden">
                        <CardHeader className="pb-4">
                            <CardTitle className="text-4xl font-bold text-center text-[#615fff]">
                                {ciudad.nombre}
                            </CardTitle>
                            <CardDescription className="text-center text-lg pt-2">
                                {ciudad.descripcion}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="w-full">
                                <ImageWrapper
                                    src={ciudad.imgUrl}
                                    alt={`Vista panorámica de ${ciudad.nombre}`}
                                />
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-4">
                                    Principales Atracciones Turísticas
                                </h2>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {ciudad.atracciones.map((atraccion, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-2 bg-background p-3 rounded-lg border"
                                        >
                                            <span className="text-primary font-bold">•</span>
                                            <span>{atraccion}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </>
    );
}
