import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

const MainNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: implementacion busqueda
    console.log("Searching for:", searchQuery);
  };

  const handleCategoryClick = (category: string) => {
    // Emitir evento personalizado para cambio de categoría
    const event = new CustomEvent("categoryChange", { detail: category });
    window.dispatchEvent(event);
  };

  const handleHomeClick = () => {
    const event = new CustomEvent("categoryChange", { detail: null });
    window.dispatchEvent(event);
  };

  return (
    <nav className="bg-blue-600 text-white sticky top-0 z-30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Botón de menú móvil */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Navegación de escritorio */}
          <div className="hidden md:flex items-center space-x-1">
            <button
              onClick={handleHomeClick}
              className="px-4 py-3 hover:bg-blue-700 transition font-medium"
            >
              INICIO
            </button>
            <button
              onClick={() => handleCategoryClick("ciencia")}
              className="px-4 py-3 hover:bg-blue-700 transition font-medium"
            >
              CIENCIA
            </button>
            <button
              onClick={() => handleCategoryClick("deporte")}
              className="px-4 py-3 hover:bg-blue-700 transition font-medium"
            >
              DEPORTES
            </button>
            <button
              onClick={() => handleCategoryClick("economía")}
              className="px-4 py-3 hover:bg-blue-700 transition font-medium"
            >
              ECONOMÍA
            </button>
            <button
              onClick={() => handleCategoryClick("tecnología")}
              className="px-4 py-3 hover:bg-blue-700 transition font-medium"
            >
              TECNOLOGÍA
            </button>
          </div>

          {/* Contenedor de búsqueda */}
          <div
            className="relative"
            onMouseEnter={() => setIsSearchOpen(true)}
            onMouseLeave={() => {
              setIsSearchOpen(false);
              setSearchQuery("");
            }}
          >
            <button
              className="p-2 hover:bg-blue-700 transition"
              aria-label="Search"
            >
              <Search size={24} />
            </button>

            {/* Formulario de búsqueda */}
            {isSearchOpen && (
              <form
                onSubmit={handleSearch}
                className="absolute right-0 top-full mt-1"
              >
                <div className="flex shadow-lg">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar noticias..."
                    className="w-64 px-4 py-2 text-gray-800 bg-white border-0 focus:outline-none"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-700 text-white hover:bg-blue-800 transition"
                  >
                    <Search size={20} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden py-2 bg-blue-700 absolute left-0 right-0 shadow-lg animate-fadeIn">
            <a
              href="#"
              className="block px-4 py-2 hover:bg-blue-800 transition"
            >
              INICIO
            </a>
            <button
              onClick={() => handleCategoryClick("ciencia")}
              className="block w-full text-left px-4 py-2 hover:bg-blue-800 transition"
            >
              CIENCIA
            </button>
            <button
              onClick={() => handleCategoryClick("deporte")}
              className="block w-full text-left px-4 py-2 hover:bg-blue-800 transition"
            >
              DEPORTES
            </button>
            <button
              onClick={() => handleCategoryClick("economía")}
              className="block w-full text-left px-4 py-2 hover:bg-blue-800 transition"
            >
              ECONOMÍA
            </button>
            <button
              onClick={() => handleCategoryClick("tecnología")}
              className="block w-full text-left px-4 py-2 hover:bg-blue-800 transition"
            >
              TECNOLOGÍA
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MainNav;
