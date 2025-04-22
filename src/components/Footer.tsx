
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4 text-gray-800">Circuit Impérial</h3>
            <p className="text-gray-600 mb-4">
              Explorez le patrimoine vivant des villes impériales du Maroc à travers notre circuit virtuel interactif.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-morocco-blue hover:text-morocco-navy" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-morocco-blue hover:text-morocco-navy" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-morocco-blue hover:text-morocco-navy" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-gray-800">Les Villes</h3>
            <ul className="space-y-2">
              <li><Link to="/fes" className="text-gray-600 hover:text-morocco-green">Fès</Link></li>
              <li><Link to="/meknes" className="text-gray-600 hover:text-morocco-ochre">Meknès</Link></li>
              <li><Link to="/rabat" className="text-gray-600 hover:text-morocco-blue">Rabat</Link></li>
              <li><Link to="/marrakech" className="text-gray-600 hover:text-morocco-red">Marrakech</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-gray-800">Découvrir</h3>
            <ul className="space-y-2">
              <li><Link to="/arts" className="text-gray-600 hover:text-morocco-blue">Arts & Artisanat</Link></li>
              <li><Link to="/music" className="text-gray-600 hover:text-morocco-blue">Musique & Spectacles</Link></li>
              <li><Link to="/cinema" className="text-gray-600 hover:text-morocco-blue">Cinéma Marocain</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-morocco-blue">À Propos du Circuit</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-gray-800">Nous Contacter</h3>
            <p className="text-gray-600 mb-2">info@circuit-imperial.ma</p>
            <p className="text-gray-600 mb-4">+212 5XX XX XX XX</p>
            <Link to="/contact" className="text-morocco-blue hover:text-morocco-navy font-medium">
              Formulaire de contact
            </Link>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Circuit Impérial. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-500 hover:text-gray-700 text-sm">Politique de confidentialité</Link>
            <Link to="/terms" className="text-gray-500 hover:text-gray-700 text-sm">Conditions d'utilisation</Link>
            <Link to="/cookies" className="text-gray-500 hover:text-gray-700 text-sm">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
