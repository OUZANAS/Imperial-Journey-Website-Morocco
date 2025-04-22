
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CityCard from "@/components/CityCard";
import InteractiveSection from "@/components/InteractiveSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const citiesData = [
  {
    id: "fes",
    name: "Fès",
    title: "La Cité du Savoir",
    description: "Explorez l'une des plus anciennes médinas du monde, découvrez l'artisanat traditionnel et plongez dans l'architecture fascinante de cette ville historique.",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    color: "green"
  },
  {
    id: "meknes",
    name: "Meknès",
    title: "La Ville des Palais",
    description: "Visitez les portes monumentales, les écuries royales et les mausolées dans cette ville au riche patrimoine, connue pour ses influences andalouses et ses traditions orales.",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    color: "ochre"
  },
  {
    id: "rabat",
    name: "Rabat",
    title: "Capitale Moderne",
    description: "Découvrez comment cette capitale mêle patrimoine historique et modernité, explorez le cinéma marocain et admirez la calligraphie vivante de cette ville côtière.",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    color: "blue"
  },
  {
    id: "marrakech",
    name: "Marrakech",
    title: "Vibrante et Artistique",
    description: "Immergez-vous dans l'animation de la place Jemaa el-Fna, découvrez la musique Gnaoua et admirez l'artisanat berbère dans cette ville aux couleurs vives.",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    color: "red"
  }
];

const themesData = [
  {
    title: "L'Art Marocain",
    description: "Explorez les arts décoratifs marocains : zellige, stuc, tadelakt, et plus encore.",
    icon: "🎨",
    color: "bg-morocco-ochre/10",
    link: "/arts"
  },
  {
    title: "Musique & Spectacles",
    description: "Découvrez la richesse des traditions musicales et des performances artistiques du Maroc.",
    icon: "🎵",
    color: "bg-morocco-blue/10",
    link: "/music"
  },
  {
    title: "Cinéma Marocain",
    description: "Plongez dans l'univers cinématographique marocain à travers une sélection de films emblématiques.",
    icon: "🎬",
    color: "bg-morocco-red/10",
    link: "/cinema"
  }
];

const Index = () => {
  return (
    <>
      <Navbar />
      
      <Hero
        title="Circuit Impérial – Explore Morocco's Living Heritage"
        subtitle="Un voyage interactif à travers les villes impériales du Maroc : Fès, Meknès, Rabat et Marrakech."
        backgroundImage="https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        buttonText="Commencer le Voyage"
        buttonLink="/fes"
        height="large"
      />
      
      <InteractiveSection
        title="Les Villes Impériales"
        subtitle="Explorez les quatre villes impériales, chacune avec sa propre histoire et son patrimoine culturel unique."
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {citiesData.map((city) => (
            <CityCard key={city.id} city={city} />
          ))}
        </div>
      </InteractiveSection>
      
      <section className="py-20 morocco-pattern">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  Votre Guide Interactif
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Circuit Impérial vous offre une expérience immersive unique pour découvrir le patrimoine culturel des villes impériales. Explorez l'architecture, les arts, la musique et le cinéma à travers un contenu interactif et pédagogique.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-morocco-green mr-2">✓</span>
                    <span>Explorations thématiques détaillées</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-morocco-green mr-2">✓</span>
                    <span>Contenu multimédia immersif</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-morocco-green mr-2">✓</span>
                    <span>Préparation idéale pour votre voyage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-morocco-green mr-2">✓</span>
                    <span>Parfait pour les amateurs de culture et d'histoire</span>
                  </li>
                </ul>
                <div>
                  <Link to="/about">
                    <Button variant="outline" className="border-morocco-blue text-morocco-blue hover:bg-morocco-blue/10">
                      En Savoir Plus
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="bg-gray-900 p-8 md:p-12 text-white flex flex-col justify-center">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-6">
                  Votre Journal de Voyage
                </h3>
                <p className="mb-6 text-gray-300">
                  À mesure que vous explorez notre circuit virtuel, collectez des badges, répondez à des quiz et créez votre propre journal de voyage personnalisé.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="font-bold text-xl mb-1">12</div>
                    <div className="text-sm text-gray-300">Monuments</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="font-bold text-xl mb-1">8</div>
                    <div className="text-sm text-gray-300">Artisanats</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="font-bold text-xl mb-1">10</div>
                    <div className="text-sm text-gray-300">Musiques</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="font-bold text-xl mb-1">6</div>
                    <div className="text-sm text-gray-300">Films</div>
                  </div>
                </div>
                <Button className="bg-white text-gray-900 hover:bg-gray-100 w-full">
                  Commencer à Collecter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <InteractiveSection
        title="Explorez par Thème"
        subtitle="Plongez dans les différentes facettes de la culture marocaine"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {themesData.map((theme, index) => (
            <div 
              key={theme.title} 
              className={`${theme.color} rounded-xl p-6 transition-all hover:shadow-lg reveal-on-scroll`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl mb-4">{theme.icon}</div>
              <h3 className="font-serif text-xl font-semibold mb-2">{theme.title}</h3>
              <p className="text-gray-700 mb-4">{theme.description}</p>
              <Link to={theme.link}>
                <Button variant="outline" className="border-gray-400 hover:bg-white/50">
                  Découvrir
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </InteractiveSection>
      
      <InteractiveSection
        title="Témoignages Culturels"
        subtitle="Écoutez les histoires des gardiens du patrimoine marocain"
        className="bg-gray-900"
        inverted
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 reveal-on-scroll">
            <p className="text-gray-300 italic mb-4">
              "L'art du zellige est dans notre famille depuis sept générations. Chaque motif raconte une histoire mathématique précise, transmise de père en fils."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-morocco-green/20 flex items-center justify-center text-white mr-3">
                MA
              </div>
              <div>
                <h4 className="font-medium text-white">Mohammed Aziz</h4>
                <p className="text-sm text-gray-400">Maître Artisan, Fès</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 reveal-on-scroll" style={{ animationDelay: "0.2s" }}>
            <p className="text-gray-300 italic mb-4">
              "La musique gnaoua est bien plus qu'un simple art. C'est une thérapie spirituelle qui relie l'âme au corps à travers des rythmes ancestraux."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-morocco-blue/20 flex items-center justify-center text-white mr-3">
                HB
              </div>
              <div>
                <h4 className="font-medium text-white">Hassan Boussou</h4>
                <p className="text-sm text-gray-400">Musicien Gnaoua, Marrakech</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 reveal-on-scroll" style={{ animationDelay: "0.4s" }}>
            <p className="text-gray-300 italic mb-4">
              "Le cinéma marocain est un miroir de notre société, capturant l'essence de notre identité à travers des histoires qui transcendent les frontières culturelles."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-morocco-red/20 flex items-center justify-center text-white mr-3">
                LM
              </div>
              <div>
                <h4 className="font-medium text-white">Leila Marrakchi</h4>
                <p className="text-sm text-gray-400">Réalisatrice, Rabat</p>
              </div>
            </div>
          </div>
        </div>
      </InteractiveSection>
      
      <section className="bg-morocco-sand/30 py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Prêt à Explorer les Villes Impériales?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/fes">
              <Button size="lg" className="bg-morocco-blue hover:bg-morocco-blue/90 text-white min-w-[160px]">
                Commencer par Fès
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="border-morocco-blue text-morocco-blue hover:bg-morocco-blue/10 min-w-[160px]">
                À Propos du Circuit
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Index;
