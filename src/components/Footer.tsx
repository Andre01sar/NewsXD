import { mockNews } from "../data/mockNews";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const handleCategoryClick = (category: string) => {
    const event = new CustomEvent("categoryChange", { detail: category });
    window.dispatchEvent(event);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* sobre la notiweb */}
          <div>
            <h3 className="text-xl font-bold mb-4">Sobre Nosotros</h3>
            <p className="text-gray-400 mb-4">
              Noti XD es el portal de noticias líder, comprometido con la
              información veraz y oportuna para nuestros lectores desde 1998.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Categorias */}
          <div>
            <h3 className="text-xl font-bold mb-4">Categorías</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleCategoryClick("mundo")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Internacional
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick("país")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Nacional
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick("ciudad")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Local
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick("deporte")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Deportes
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick("economía")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Economía
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick("tecnología")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Tecnología
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategoryClick("ciencia")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Ciencia
                </button>
              </li>
            </ul>
          </div>

          {/* noticia reciente */}
          <div>
            <h3 className="text-xl font-bold mb-4">Noticias Recientes</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="group">
                  <h4 className="font-medium group-hover:text-blue-500 transition-colors">
                    {mockNews[0].title}
                  </h4>
                  <p className="text-sm text-gray-400">{mockNews[0].date}</p>
                </a>
              </li>
              <li>
                <a href="#" className="group">
                  <h4 className="font-medium group-hover:text-blue-500 transition-colors">
                    {mockNews[1].title}
                  </h4>
                  <p className="text-sm text-gray-400">{mockNews[1].date}</p>
                </a>
              </li>
              <li>
                <a href="#" className="group">
                  <h4 className="font-medium group-hover:text-blue-500 transition-colors">
                    {mockNews[2].title}
                  </h4>
                  <p className="text-sm text-gray-400">{mockNews[2].date}</p>
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin size={16} className="mr-2 text-red-500" />
                <span className="text-gray-400">
                  Av. Principal 1234, Ciudad
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-red-500" />
                <span className="text-gray-400">+123 456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-red-500" />
                <span className="text-gray-400">info@notixd.com</span>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="font-medium mb-2">Suscríbete al boletín</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="px-3 py-2 bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-red-500"
                />
                <button
                  type="submit"
                  className="bg-red-600 px-4 py-2 hover:bg-red-700 transition-colors"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2025 Noti XD. Todos los derechos reservados.
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Términos de uso
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Política de privacidad
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
