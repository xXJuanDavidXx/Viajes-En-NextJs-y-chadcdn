import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

interface Props {
  nombre: string;
  slug: string;
  imgUrl: string;
  botonText: string;
}

/**
 * Tarjeta para mostrar el nombre, una imagen representativa y un enlace a su pagina de cada ciudad
 * Diseño con imagen de fondo y overlay gradiente para mejor legibilidad
 */
export default function CityCard({ nombre, slug, imgUrl, botonText }: Props) {
  return (
    <Card className="group relative w-full max-w-lg h-[450px] overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imgUrl}
          alt={`Imagen de ${nombre}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 500px"
        />
      </div>

      {/* Overlay gradiente */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/95 group-hover:via-black/60 transition-all duration-500" />

      {/* Borde brillante en hover */}
      <div className="absolute inset-0 z-20 rounded-xl border-2 border-transparent group-hover:border-cyan-400/50 transition-all duration-500 pointer-events-none" />

      {/* Contenido con estructura Card */}
      <div className="relative z-30 h-full flex flex-col">
        <CardHeader className="flex-1 flex items-center justify-center pb-2">
          <CardTitle className="text-3xl md:text-4xl font-bold text-white text-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-300">
            {nombre}
          </CardTitle>
        </CardHeader>

        <CardContent className="pb-2">
          {/* Espacio para mantener la estructura, pero visualmente invisible */}
        </CardContent>

        <CardFooter className="pb-6 px-6 flex flex-col gap-3">
          <Button
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-lg py-6 rounded-lg shadow-lg hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all duration-300 border-0 hover:scale-105"
            asChild
          >
            <Link href={`/proyecto/ciudades/${slug}`}>
              {botonText}
            </Link>
          </Button>

          <Button
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-lg py-6 rounded-lg shadow-lg hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all duration-300 border-0 hover:scale-105"
            asChild
          >
            <Link href={`/proyecto/ciudades/v1/${slug}`}>
              Ver Pag Dinamica
            </Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}
