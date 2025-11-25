"use client"

import ContactComp from "@/components/ContactComp";
import PageHeader from "@/components/PageHeader";

export default function Contacto() {
  return (
    <>
      <PageHeader />
      <div
        className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center py-16 px-4"
        style={{ backgroundImage: 'url("/MedalloNigth.jpg")' }}
      >
        {/* Overlay oscuro para mejorar la legibilidad */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Contenedor principal */}
        <div className="relative z-10 w-full max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-8">
            {/* Título grande y llamativo */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 text-center drop-shadow-[0_0_30px_rgba(251,191,36,0.6)] tracking-tight">
              Contacto
            </h1>

            {/* Formulario de contacto */}
            <ContactComp />
          </div>
        </div>
      </div>
    </>
  )
}
