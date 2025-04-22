
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Rabat = () => (
  <>
    <Navbar />
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-morocco-blue/90 to-morocco-sand/60 text-white">
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 py-16 px-4 container text-center max-w-3xl">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
          Rabat – Capitale Moderne au Cœur Historique
        </h1>
        <p className="text-xl mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Explorez Rabat, où se rencontrent modernité, cinéma et patrimoine séculaire marocain.
        </p>
        <img
          src="https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80"
          alt="Tour Hassan Rabat"
          className="rounded-xl shadow-lg mx-auto w-full max-w-lg mb-6 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        />
        <div className="flex flex-col md:flex-row justify-between gap-4 mt-4">
          <Link to="/meknes">
            <Button variant="outline" className="border-morocco-ochre text-morocco-ochre flex items-center gap-2">
              <ChevronLeft size={20} /> Meknès
            </Button>
          </Link>
          <Link to="/marrakech">
            <Button className="bg-morocco-red hover:bg-morocco-red/90 text-white flex items-center gap-2">
              Marrakech <ChevronRight size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    <section className="bg-morocco-blue/10 py-14">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="font-serif text-2xl font-semibold mb-3 text-morocco-blue">Cinéma marocain</h2>
          <p className="text-gray-800 mb-3">
            La ville accueille des festivals de cinéma et offre un panorama sur le 7ème art au Maroc. Plongez dans l’univers cinématographique local.
          </p>
          <img
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
            alt="Cinéma Rabat"
            className="rounded-lg shadow"
          />
        </div>
        <div>
          <h2 className="font-serif text-2xl font-semibold mb-3 text-morocco-blue">Calligraphie vivante</h2>
          <p className="text-gray-800 mb-5">
            Essayez l’art de l’écriture arabe via une animation interactive ou inscrivez votre prénom en calligraphie (bientôt !)
          </p>
          <img
            src="https://images.unsplash.com/photo-1503676382389-4809596d5290?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
            alt="Calligraphie Rabat"
            className="rounded-lg shadow"
          />
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default Rabat;
