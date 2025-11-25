import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

/**
 * Header que contiene un nav para navegar con estilo dark nocturno
 */
export default function PageHeader() {
  return (
    <header className="relative flex justify-center py-4 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800 shadow-lg shadow-blue-900/20">
      {/* Efecto de luces de ciudad */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent pointer-events-none" />

      <NavigationMenu className="relative z-10">
        <NavigationMenuList className="flex-wrap gap-8">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
            <Link
                href="/"
                className="text-slate-200 hover:text-cyan-400 transition-all duration-300 font-medium text-lg hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] hover:scale-105"
              >
                Inicio
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          {/* SEPARADOR*/}
          <NavigationMenuItem>
            <div className="h-6 w-px bg-gradient-to-b from-transparent via-slate-600 to-transparent" />
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>  

              <Link
                href="/proyecto/ciudades"
                className="text-slate-200 hover:text-cyan-400 transition-all duration-300 font-medium text-lg hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] hover:scale-105"
              >
                Ciudades
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* SEPARADORRRRR*/}
          <NavigationMenuItem>
            <div className="h-6 w-px bg-gradient-to-b from-transparent via-slate-600 to-transparent" />
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/proyecto/contacto"
                className="text-slate-200 hover:text-cyan-400 transition-all duration-300 font-medium text-lg hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] hover:scale-105"
              >
                Contacto
              </Link>
            </NavigationMenuLink>
  
        </NavigationMenuItem>
        <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/proyecto"
                className="text-slate-200 hover:text-cyan-400 transition-all duration-300 font-medium text-lg hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] hover:scale-105"
              >
                proyecto
              </Link>

            </NavigationMenuLink>
  
        </NavigationMenuItem>
          
        
        </NavigationMenuList>

      </NavigationMenu>
    </header>
  );
}
