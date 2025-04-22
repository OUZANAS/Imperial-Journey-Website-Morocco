
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  buttonText?: string;
  buttonLink?: string;
  overlay?: boolean;
  height?: "small" | "medium" | "large" | "full";
  alignment?: "left" | "center" | "right";
}

const Hero = ({
  title,
  subtitle,
  backgroundImage,
  buttonText,
  buttonLink,
  overlay = true,
  height = "large",
  alignment = "center",
}: HeroProps) => {
  const getHeight = () => {
    switch (height) {
      case "small":
        return "min-h-[40vh]";
      case "medium":
        return "min-h-[60vh]";
      case "large":
        return "min-h-[80vh]";
      case "full":
        return "min-h-screen";
      default:
        return "min-h-[80vh]";
    }
  };

  const getAlignment = () => {
    switch (alignment) {
      case "left":
        return "text-left items-start";
      case "center":
        return "text-center items-center";
      case "right":
        return "text-right items-end";
      default:
        return "text-center items-center";
    }
  };

  return (
    <div
      className={`relative flex flex-col justify-center ${getHeight()}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-black/50 z-0"></div>
      )}
      <div className={`container mx-auto px-4 relative z-10 flex flex-col ${getAlignment()}`}>
        <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 max-w-3xl animate-fade-in">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {subtitle}
        </p>
        {buttonText && buttonLink && (
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link to={buttonLink}>
              <Button size="lg" className="bg-morocco-blue hover:bg-morocco-blue/90 text-white">
                {buttonText}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
