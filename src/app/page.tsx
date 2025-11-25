import StudentCard from "@/components/StudentCard";
import {
  Avatar,
  AvatarImage,
  AvatarFallback
} from "@radix-ui/react-avatar";

export default function Home() {
  return (
    <>
      <main className="flex flex-1 flex-col justify-center bg-black">
        <div className="w-full flex gap-x-10 justify-center my-auto">

          <StudentCard
            name="Juan David Jaramillo"
            program="Programación de Software"
            description="Hola, soy David Jaramillo. Me apasiona la ciberseguridad (pentesting) y la programación. En mi tiempo libre disfruto tocando la guitarra y el ukelele, leyendo manga, jugando videojuegos y explorando el horror cósmico y el terror. Alabado sea Satán.">
            <Avatar className="h-50 w-50 mx-auto my-auto">
              <AvatarImage
                className="rounded-full"
                src="/david.jpeg"
                alt="Foto de David Jaramillo"
              />
              <AvatarFallback>David</AvatarFallback>
            </Avatar>
          </StudentCard>
        </div>
      </main>
    </>
  );
}
