
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CityCardProps {
  city: {
    id: string;
    name: string;
    title: string;
    description: string;
    image: string;
    color: string;
  };
}

const CityCard = ({ city }: CityCardProps) => {
  const getBorderColor = () => {
    switch (city.id) {
      case "fes":
        return "border-morocco-green hover:border-morocco-green/80";
      case "meknes":
        return "border-morocco-ochre hover:border-morocco-ochre/80";
      case "rabat":
        return "border-morocco-blue hover:border-morocco-blue/80";
      case "marrakech":
        return "border-morocco-red hover:border-morocco-red/80";
      default:
        return "border-gray-200 hover:border-gray-300";
    }
  };

  const getButtonColor = () => {
    switch (city.id) {
      case "fes":
        return "bg-morocco-green hover:bg-morocco-green/90";
      case "meknes":
        return "bg-morocco-ochre hover:bg-morocco-ochre/90";
      case "rabat":
        return "bg-morocco-blue hover:bg-morocco-blue/90";
      case "marrakech":
        return "bg-morocco-red hover:bg-morocco-red/90";
      default:
        return "bg-gray-800 hover:bg-gray-700";
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border-2 ${getBorderColor()}`}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={city.image}
          alt={city.name}
          className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-white font-serif text-xl md:text-2xl font-bold">
          {city.name}
        </h3>
      </div>
      <div className="p-5">
        <h4 className="font-serif text-lg font-semibold mb-2 text-gray-800">
          {city.title}
        </h4>
        <p className="text-gray-600 mb-4 line-clamp-3">{city.description}</p>
        <Link to={`/${city.id}`}>
          <Button className={`w-full ${getButtonColor()} text-white`}>
            Découvrir
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CityCard;
