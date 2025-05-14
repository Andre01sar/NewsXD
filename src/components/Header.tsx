import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const Header = () => {
  const today = new Date();
  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = today.toLocaleDateString("es-ES", dateOptions);

  return (
    <header>
      {/* Top bar */}
      <div className="bg-black text-white text-sm px-4 py-1">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span className="hidden sm:inline-block">{formattedDate}</span>
            <span className="hidden sm:inline-block mx-2">|</span>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300 transition">
                Mundo
              </a>
              <span>|</span>
              <a href="#" className="hover:text-gray-300 transition">
                País
              </a>
              <span>|</span>
              <a href="#" className="hover:text-gray-300 transition">
                Ciudad
              </a>
            </div>
          </div>
          <div className="flex space-x-3">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-gray-300 transition"
            >
              <Facebook size={16} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-gray-300 transition"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="hover:text-gray-300 transition"
            >
              <Youtube size={16} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-gray-300 transition"
            >
              <Twitter size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Logo y demas */}
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <a href="/" className="flex items-center mb-4 md:mb-0">
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-black uppercase tracking-tight">
              NOTICIAS
            </span>
            <span className="text-3xl font-bold text-blue-700 uppercase tracking-tight">
              XD
            </span>
          </div>
        </a>

        <div className="w-full md:w-auto bg-gray-500 h-16 md:h-24 flex items-center justify-center overflow-hidden rounded">
          <img
            src="https://images.pexels.com/photos/1251800/pexels-photo-1251800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Advertisement"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
