import { useState, useEffect } from "react";
import Header from "./components/Header";
import MainNav from "./components/MainNav";
import BreakingNews from "./components/BreakingNews";
import NewsSection from "./components/NewsSection";
import Footer from "./components/Footer";
import { newsSections, mockNews } from "./data/mockNews";
import CategoryNews from "./components/CategoryNews";

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const handleCategoryChange = (event: CustomEvent<string>) => {
      setSelectedCategory(event.detail);
    };

    window.addEventListener(
      "categoryChange",
      handleCategoryChange as EventListener
    );

    return () => {
      window.removeEventListener(
        "categoryChange",
        handleCategoryChange as EventListener
      );
    };
  }, []);

  const categoryNews = selectedCategory
    ? mockNews.filter((news) => news.category === selectedCategory)
    : [];
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <MainNav />
      <BreakingNews />

      <main className="flex-grow py-6">
        {selectedCategory ? (
          <CategoryNews news={categoryNews} category={selectedCategory} />
        ) : (
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {newsSections.map((section, index) => (
                <div key={section.title} className="lg:col-span-1">
                  <NewsSection section={section} hasFeatured={index === 0} />
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
