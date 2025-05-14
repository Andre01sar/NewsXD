import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import NewsCard from "./NewsCard";
import type { CategorySection } from "../types";

interface NewsSectionProps {
  section: CategorySection;
  hasFeatured?: boolean;
}

const NewsSection: React.FC<NewsSectionProps> = ({
  section,
  hasFeatured = false,
}) => {
  const { title, news, type } = section;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const showNavigation = type === "mundo" && news.length > 1;

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? news.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === news.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (type === "mundo") {
      const interval = setInterval(() => {
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev === news.length - 1 ? 0 : prev + 1));
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [type, news.length]);

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold relative pl-3 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-blue-600">
          {title}
        </h2>
        {showNavigation && (
          <div className="flex space-x-1">
            <button
              className="p-1 border border-gray-300 hover:bg-gray-100 transition-colors disabled:opacity-50"
              onClick={handlePrevious}
              disabled={isAnimating}
              aria-label="Previous"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              className="p-1 border border-gray-300 hover:bg-gray-100 transition-colors disabled:opacity-50"
              onClick={handleNext}
              disabled={isAnimating}
              aria-label="Next"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>

      <div className="grid gap-4">
        {type === "mundo" ? (
          <div
            className="h-[400px] relative overflow-hidden"
            onTransitionEnd={handleAnimationEnd}
          >
            {news.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  index === currentIndex
                    ? "opacity-100 translate-x-0"
                    : index < currentIndex
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                }`}
              >
                <NewsCard news={item} featured={true} />
              </div>
            ))}
          </div>
        ) : hasFeatured && news.length > 0 ? (
          <>
            <div className="h-[400px]">
              <NewsCard news={news[0]} featured={true} />
            </div>
            {news.length > 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {news.slice(1, 3).map((item) => (
                  <NewsCard key={item.id} news={item} />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {news.slice(0, 2).map((item) => (
              <NewsCard key={item.id} news={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
