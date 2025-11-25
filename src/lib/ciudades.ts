export interface Ciudad {
    nombre: string;
    slug: string;
    imgUrl: string;
    descripcion: string;
    atracciones: string[];
}

export const ciudades: Ciudad[] = [
    {
        nombre: "Medellín",
        slug: "medellin",
        imgUrl: "/medellin.jpeg",
        descripcion: "Conocida como la 'Ciudad de la Eterna Primavera', Medellín es la segunda ciudad más grande de Colombia. Famosa por su innovación, cultura paisa y transformación urbana.",
        atracciones: [
            "Plaza Botero y Museo de Antioquia",
            "Parque Arví",
            "Comuna 13 y sus escaleras eléctricas",
            "Jardín Botánico",
            "Pueblito Paisa",
            "Parque Explora"
        ]
    },
    {
        nombre: "Bogotá",
        slug: "bogota",
        imgUrl: "/bogota.jpeg",
        descripcion: "La capital de Colombia, ubicada en la cordillera de los Andes. Centro político, económico y cultural del país, con una rica oferta de museos, gastronomía y vida nocturna.",
        atracciones: [
            "Cerro de Monserrate",
            "Museo del Oro",
            "La Candelaria (centro histórico)",
            "Museo Botero",
            "Parque Simón Bolívar",
            "Zona Rosa y Zona G"
        ]
    },
    {
        nombre: "Cali",
        slug: "cali",
        imgUrl: "/cali.jpeg",
        descripcion: "La 'Capital de la Salsa', Cali es conocida por su cultura musical, su clima cálido y su gente alegre. Es el principal centro urbano del suroccidente colombiano.",
        atracciones: [
            "Cristo Rey",
            "Zoológico de Cali",
            "Boulevard del Río",
            "Barrio San Antonio",
            "Gato de Tejada",
            "Parque del Perro"
        ]
    },
    {
        nombre: "Cartagena",
        slug: "cartagena",
        imgUrl: "/cartagena.jpeg",
        descripcion: "Joya del Caribe colombiano, Cartagena es Patrimonio de la Humanidad. Sus murallas coloniales, playas paradisíacas y arquitectura histórica la convierten en uno de los destinos turísticos más importantes de América Latina.",
        atracciones: [
            "Ciudad Amurallada",
            "Castillo de San Felipe de Barajas",
            "Islas del Rosario",
            "Getsemaní",
            "Playa Blanca",
            "Palacio de la Inquisición"
        ]
    },
    {
        nombre: "Bucaramanga",
        slug: "bucaramanga",
        imgUrl: "/bucaramanga.jpeg",
        descripcion: "Conocida como la 'Ciudad de los Parques', Bucaramanga se destaca por sus áreas verdes, su desarrollo comercial y la calidez de su gente. Es la capital del departamento de Santander.",
        atracciones: [
            "Parque del Agua",
            "Panachi (Parque Nacional del Chicamocha)",
            "Parque García Rovira",
            "Catedral de la Sagrada Familia",
            "Jardín Botánico Eloy Valenzuela",
            "Barichara (pueblo cercano)"
        ]
    },
    {
        nombre: "Pereira",
        slug: "pereira",
        imgUrl: "/pereira.jpeg",
        descripcion: "Corazón del Eje Cafetero, Pereira es una ciudad moderna rodeada de paisajes montañosos y cafetales. Puerta de entrada al Paisaje Cultural Cafetero, Patrimonio de la Humanidad.",
        atracciones: [
            "Parque Nacional Natural Los Nevados",
            "Termales de Santa Rosa",
            "Bioparque Ukumarí",
            "Laguna del Otún",
            "Haciendas cafeteras",
            "Viaducto César Gaviria Trujillo"
        ]
    }
];

export function getCiudadBySlug(slug: string): Ciudad | undefined {
    return ciudades.find(ciudad => ciudad.slug === slug);
}

export function getAllCiudadSlugs(): string[] {
    return ciudades.map(ciudad => ciudad.slug);
}
