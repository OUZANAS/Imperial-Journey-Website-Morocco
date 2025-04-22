
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Meknes = () => (
  <>
    <Navbar />
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-morocco-ochre/90 to-morocco-sand via-morocco-terracotta text-white">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 py-16 px-4 container text-center max-w-3xl">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
          Meknès – La Ville des Palais
        </h1>
        <p className="text-xl mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Découvrez Bab Mansour et le patrimoine unique de Meknès, entre héritage impérial et traditions populaires.
        </p>
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80"
          alt="Bab Mansour Meknes"
          className="rounded-xl shadow-lg mx-auto w-full max-w-lg mb-6 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        />
        <div className="flex flex-col md:flex-row justify-between gap-4 mt-4">
          <Link to="/fes">
            <Button variant="outline" className="border-morocco-green text-morocco-green flex items-center gap-2">
              <ChevronLeft size={20} /> Fès
            </Button>
          </Link>
          <Link to="/rabat">
            <Button className="bg-morocco-blue hover:bg-morocco-blue/90 text-white flex items-center gap-2">
              Rabat <ChevronRight size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    <section className="bg-morocco-sand/20 py-14">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="font-serif text-2xl font-semibold mb-3 text-morocco-ochre">Bab Mansour</h2>
          <p className="text-gray-700 mb-3">
            Porte monumentale et chef-d’œuvre de l’art hispano-mauresque, Bab Mansour vous ouvre les portes du passé impérial.
          </p>
          <img
            src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
            alt="Bab Mansour"
            className="rounded-lg shadow"
          />
        </div>
        <div>
          <h2 className="font-serif text-2xl font-semibold mb-3 text-morocco-ochre">La Halqa & Traditions Orales</h2>
          <p className="text-gray-700 mb-5">
            Vivez une immersion dans les spectacles de rue et le théâtre populaire : la halqa, art du conteur emblématique.
          </p>
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
            alt="Halqa Meknes"
            className="rounded-lg shadow"
          />
        </div>
      </div>
    </section>

    <section className="py-14 bg-white border-t">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-2xl text-morocco-ochre font-bold mb-4">Atelier interactif</h2>
        <p className="mb-4 text-gray-700">
          Reconstituez une porte impériale en déplaçant ses éléments. (Bientôt disponible)
        </p>
        <img
          src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
          alt="Atelier porte"
          className="rounded-lg shadow w-full max-w-sm mx-auto"
        />
      </div>
    </section>
    <Footer />
  </>
);

export default Meknes;
