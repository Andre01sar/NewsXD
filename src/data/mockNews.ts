import type { NewsItem, CategorySection } from "../types";

export const breakingNews: string[] = [
  "DNA XH2000, nueva computadora para predecir los efectos del cambio climático",
  "Cyberpunk 2077, el videojuego más esperado de 2020, se retrasa a septiembre",
  "Microsoft anuncia importantes cambios en su sistema operativo",
  "Nueva variante de coronavirus detectada en Asia preocupa a científicos",
  "El precio del petróleo cae a mínimos históricos tras tensiones en Medio Oriente",
];

export const mockNews: NewsItem[] = [
  {
    id: "1",
    category: "mundo",
    title: "Harry y Meghan pierden sus títulos reales y dinero público",
    image:
      "https://images.pexels.com/photos/1808777/pexels-photo-1808777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "19/01/2020",
    author: "yoney",
    featured: true,
  },
  {
    id: "2",
    category: "país",
    title: "La caída de Romero: de ministro a ocupar una celda en San Pedro",
    image:
      "https://images.pexels.com/photos/534342/pexels-photo-534342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "20/01/2020",
    author: "yoney",
  },
  {
    id: "3",
    category: "ciudad",
    title: "El alcalde reglamenta mancha urbana en el cerro de Cota",
    image:
      "https://images.pexels.com/photos/1563256/pexels-photo-1563256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "19/01/2020",
    author: "yoney",
  },
  {
    id: "9",
    category: "mundo",
    title: "Crisis climática: Nuevo récord de temperaturas globales",
    image:
      "https://images.pexels.com/photos/1114690/pexels-photo-1114690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "20/01/2020",
    author: "internacional",
  },
  {
    id: "10",
    category: "mundo",
    title: "Tensiones aumentan en el Mar del Sur de China",
    image:
      "https://images.pexels.com/photos/68526/warship-ship-war-navy-68526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "20/01/2020",
    author: "internacional",
  },
  {
    id: "11",
    category: "mundo",
    title: "Nueva cumbre sobre inteligencia artificial en Ginebra",
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "20/01/2020",
    author: "internacional",
  },
  {
    id: "12",
    category: "mundo",
    title: "Descubren nueva especie en la selva amazónica",
    image:
      "https://images.pexels.com/photos/2710186/pexels-photo-2710186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "20/01/2020",
    author: "internacional",
  },
  {
    id: "4",
    category: "país",
    title:
      "Juez envía a Elba Terán a la cárcel de Palmasola con detención preventiva",
    image:
      "https://images.pexels.com/photos/3059745/pexels-photo-3059745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "20/01/2020",
    author: "yoney",
  },
  {
    id: "5",
    category: "ciudad",
    title: "Buscan refugio para 50 mascotas apadrinadas por el padre Antonio",
    image:
      "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "19/01/2020",
    author: "yoney",
  },
  {
    id: "6",
    category: "deporte",
    title: "Bolívar presenta a su nuevo delantero para la temporada 2020",
    image:
      "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "20/01/2020",
    author: "deportes",
  },
  {
    id: "7",
    category: "tecnología",
    title:
      "Apple presenta su nuevo iPhone con capacidades de realidad aumentada",
    image:
      "https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "19/01/2020",
    author: "tech",
  },
  {
    id: "8",
    category: "economía",
    title:
      "Banco Central anuncia nuevas medidas para estabilizar el tipo de cambio",
    image:
      "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "20/01/2020",
    author: "economía",
  },
  {
    id: "9",
    category: "ciencia",
    title:
      "Banco Central anuncia nuevas medidas para estabilizar el tipo de cambio",
    image:
      "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "20/01/2020",
    author: "economía",
  },
];

export const newsSections: CategorySection[] = [
  {
    title: "INTERNACIONAL",
    type: "mundo",
    news: mockNews.filter((item) => item.category === "mundo"),
  },
  {
    title: "NACIONALES",
    type: "país",
    news: mockNews.filter((item) => item.category === "país"),
  },
  {
    title: "LOCALES",
    type: "ciudad",
    news: mockNews.filter((item) => item.category === "ciudad"),
  },
];
