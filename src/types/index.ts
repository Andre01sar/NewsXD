export interface NewsItem {
  id: string;
  category:
    | "mundo"
    | "país"
    | "ciudad"
    | "deporte"
    | "tecnología"
    | "economía"
    | "ciencia";
  title: string;
  image: string;
  date: string;
  author: string;
  summary?: string;
  featured?: boolean;
}

export interface CategorySection {
  title: string;
  type: "mundo" | "país" | "ciudad";
  news: NewsItem[];
}
