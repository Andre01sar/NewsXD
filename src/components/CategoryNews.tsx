import type { NewsItem } from "../types";
import NewsCard from "./NewsCard";

interface CategoryNewsProps {
  news: NewsItem[];
  category: string;
}

const CategoryNews: React.FC<CategoryNewsProps> = ({ news, category }) => {
  if (news.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">
          No hay noticias disponibles en esta categoría.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
        {category.toUpperCase()}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {news.map((item) => (
          <div
            key={item.id}
            className="transform hover:scale-105 transition-transform duration-300"
          >
            <NewsCard news={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
