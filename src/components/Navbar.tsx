
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-morocco-blue to-morocco-green">
              Circuit Impérial
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <button className="flex items-center space-x-1 font-medium text-gray-700 hover:text-morocco-blue">
                <span>Villes</span>
                <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 origin-top transition-all duration-200">
                <Link
                  to="/fes"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-l-2 border-transparent hover:border-morocco-green"
                >
                  Fès - La Cité du Savoir
                </Link>
                <Link
                  to="/meknes"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-l-2 border-transparent hover:border-morocco-ochre"
                >
                  Meknès - La Ville des Palais
                </Link>
                <Link
                  to="/rabat"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-l-2 border-transparent hover:border-morocco-blue"
                >
                  Rabat - Capitale Moderne
                </Link>
                <Link
                  to="/marrakech"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-l-2 border-transparent hover:border-morocco-red"
                >
                  Marrakech - Vibrante et Artistique
                </Link>
              </div>
            </div>
            <Link
              to="/arts"
              className="font-medium text-gray-700 hover:text-morocco-blue"
            >
              Arts & Culture
            </Link>
            <Link
              to="/music"
              className="font-medium text-gray-700 hover:text-morocco-blue"
            >
              Musique & Spectacles
            </Link>
            <Link
              to="/cinema"
              className="font-medium text-gray-700 hover:text-morocco-blue"
            >
              Cinéma
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="text-morocco-blue border-morocco-blue hover:bg-morocco-blue/10">
              Français
            </Button>
            <Button className="bg-morocco-blue hover:bg-morocco-blue/90 text-white">
              Explorer
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t mt-2">
            <div className="flex flex-col space-y-3">
              <div className="py-2">
                <h3 className="px-3 text-sm font-medium text-gray-500 mb-1">Villes</h3>
                <Link
                  to="/fes"
                  className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
                >
                  Fès - La Cité du Savoir
                </Link>
                <Link
                  to="/meknes"
                  className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
                >
                  Meknès - La Ville des Palais
                </Link>
                <Link
                  to="/rabat"
                  className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
                >
                  Rabat - Capitale Moderne
                </Link>
                <Link
                  to="/marrakech"
                  className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
                >
                  Marrakech - Vibrante et Artistique
                </Link>
              </div>
              <Link
                to="/arts"
                className="px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
              >
                Arts & Culture
              </Link>
              <Link
                to="/music"
                className="px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
              >
                Musique & Spectacles
              </Link>
              <Link
                to="/cinema"
                className="px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
              >
                Cinéma
              </Link>
              <div className="pt-2 flex space-x-2">
                <Button variant="outline" size="sm" className="w-full justify-center">
                  Français
                </Button>
                <Button size="sm" className="w-full justify-center">
                  Explorer
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
