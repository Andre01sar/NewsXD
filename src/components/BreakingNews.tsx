import { useState, useEffect } from "react";
import { breakingNews } from "../data/mockNews";

const BreakingNews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % breakingNews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 py-2 border-b border-gray-200 overflow-hidden">
      <div className="container mx-auto px-4 flex items-center">
        <div className="min-w-fit bg-blue-600 text-white py-1 px-3 mr-4 text-sm font-bold rounded-sm">
          ÚLTIMAS NOTICIAS
        </div>
        <div className="overflow-hidden whitespace-nowrap relative w-full">
          {breakingNews.map((news, index) => (
            <p
              key={index}
              className={`absolute left-0 transition-all duration-500 ease-in-out w-full ${
                index === currentIndex
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              {news}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;
