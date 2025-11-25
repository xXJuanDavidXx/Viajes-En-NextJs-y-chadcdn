import CityCard from "@/components/CityCard";
import GridContainer from "@/components/GridContainer";
import { ciudades } from "@/lib/ciudades";
import PageHeader from "@/components/PageHeader";
export default function Ciudades() {
  return (

    <>
      <PageHeader />

      <div className="flex-1 flex flex-col justify-center bg-muted">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-center tracking-tight my-8 text-[#615fff]">Ciudades de Colombia</h1>
      </div>

      <main className="flex-1 flex flex-col justify-center bg-muted">
        <GridContainer>
          {ciudades.map((ciudad, index) => (
            <CityCard
              key={index}
              nombre={ciudad.nombre}
              slug={ciudad.slug}
              imgUrl={ciudad.imgUrl}
              botonText={`Ver ${ciudad.nombre}`}
            />
          ))}
        </GridContainer>
      </main>
    </>
  );
}
