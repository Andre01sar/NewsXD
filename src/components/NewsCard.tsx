import type { NewsItem } from "../types/index";

interface NewsCardProps {
  news: NewsItem;
  featured?: boolean;
}

const getCategoryColor = (category: string): string => {
  switch (category) {
    case "mundo":
      return "bg-blue-600";
    case "país":
      return "bg-blue-600";
    case "ciudad":
      return "bg-orange-600";
    case "deporte":
      return "bg-green-600";
    case "tecnología":
      return "bg-purple-600";
    case "economía":
      return "bg-yellow-600";
    case "ciencia":
      return "bg-pink-600";
    default:
      return "bg-gray-600";
  }
};

const getCategoryLabel = (category: string): string => {
  switch (category) {
    case "mundo":
      return "MUNDO";
    case "país":
      return "PAÍS";
    case "ciudad":
      return "CIUDAD";
    case "deporte":
      return "DEPORTE";
    case "tecnología":
      return "TECNOLOGÍA";
    case "economía":
      return "ECONOMÍA";
    case "ciencia":
      return "CIENCIA";
    default:
      return category.toUpperCase();
  }
};

const NewsCard: React.FC<NewsCardProps> = ({ news, featured = false }) => {
  const categoryColor = getCategoryColor(news.category);
  const categoryLabel = getCategoryLabel(news.category);

  if (featured) {
    return (
      <article className="relative group overflow-hidden h-full">
        <div className="relative h-full">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <div
              className={`inline-block ${categoryColor} px-2 py-1 text-xs font-bold mb-2`}
            >
              {categoryLabel}
            </div>
            <h2 className="text-2xl font-bold mb-2 leading-tight">
              {news.title}
            </h2>
            <div className="text-sm text-gray-300">
              {news.date} / {news.author}
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="bg-white group h-full">
      <div className="overflow-hidden">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="relative p-4">
        <div
          className={`absolute -top-4 left-4 ${categoryColor} px-2 py-1 text-xs text-white font-bold`}
        >
          {categoryLabel}
        </div>
        <h3 className="text-lg font-bold mt-1 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
          {news.title}
        </h3>
        <div className="text-sm text-gray-600">
          {news.date} / {news.author}
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
