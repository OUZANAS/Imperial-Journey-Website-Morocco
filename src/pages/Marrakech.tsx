
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Marrakech = () => (
  <>
    <Navbar />
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-morocco-red/90 to-morocco-ochre/50 text-white">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 py-16 px-4 container text-center max-w-3xl">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
          Marrakech – Vibrante et Artistique
        </h1>
        <p className="text-xl mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Ressentez l’effervescence de la place Jemaa el-Fna, vivez musique, spectacles & artisanat berbère à Marrakech.
        </p>
        <img
          src="https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80"
          alt="Jemaa el-Fna Marrakech"
          className="rounded-xl shadow-lg mx-auto w-full max-w-lg mb-6 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        />
        <div className="flex flex-col md:flex-row justify-between gap-4 mt-4">
          <Link to="/rabat">
            <Button variant="outline" className="border-morocco-blue text-morocco-blue flex items-center gap-2">
              <ChevronLeft size={20} /> Rabat
            </Button>
          </Link>
          <Link to="/">
            <Button className="bg-morocco-green hover:bg-morocco-green/90 text-white flex items-center gap-2">
              Retour accueil <ChevronRight size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    <section className="bg-morocco-red/10 py-14">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="font-serif text-2xl font-semibold mb-3 text-morocco-red">Spectacles de rue</h2>
          <p className="text-gray-800 mb-3">
            Immergez-vous dans l’ambiance sonore de la célèbre place Jemaa el-Fna avec ses conteurs, musiciens et acrobates.
          </p>
          <img
            src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
            alt="Spectacles Marrakech"
            className="rounded-lg shadow"
          />
        </div>
        <div>
          <h2 className="font-serif text-2xl font-semibold mb-3 text-morocco-red">Musique & Artisanat</h2>
          <p className="text-gray-800 mb-5">
            Découvrez la musique Gnaoua, les tapis berbères et les pigments traditionnels marocains.
          </p>
          <img
            src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
            alt="Gnaoua et Arts Marrakech"
            className="rounded-lg shadow"
          />
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default Marrakech;
