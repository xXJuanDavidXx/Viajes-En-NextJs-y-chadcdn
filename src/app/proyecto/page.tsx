import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import ImageWrapper from "@/components/ImageWrapper";

export default function Proyecto() {
  return (
    <>
      <PageHeader />
      <main className="flex flex-1 flex-col justify-center">
        <Card className="flex gap-y-40 max-w-2xl mx-auto">
          <CardHeader>

            <ImageWrapper
              src="/logo.png"
              alt="Logo de la aplicación"
              className="w-48 h-48 mx-auto"
            />

            <CardTitle>
              <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
                Directorio turistico interactivo
              </h1>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="leading-7 text-justify [&:not(:first-child)]:mt-6">
              “Este directorio turístico reúne los principales atractivos, servicios y experiencias que ofrece la región. Aquí encontrarás información clara y actualizada sobre lugares para visitar, actividades, hospedaje, gastronomía y rutas recomendadas, todo en un solo espacio pensado para ayudarte a planear tu viaje de manera fácil y rápida.”
            </p>
          </CardContent>
          <CardFooter className="flex justify-center gap-x-4">

          </CardFooter>
        </Card>
      </main>
    </>
  );
}
