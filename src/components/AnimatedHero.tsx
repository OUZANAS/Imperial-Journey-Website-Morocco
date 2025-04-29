
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ParallaxBackground from "./ParallaxBackground";

interface AnimatedHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  buttonText?: string;
  buttonLink?: string;
  overlay?: boolean;
  height?: "small" | "medium" | "large" | "full";
  alignment?: "left" | "center" | "right";
  parallaxStrength?: number;
}

const AnimatedHero: React.FC<AnimatedHeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  buttonText,
  buttonLink,
  overlay = true,
  height = "large",
  alignment = "center",
  parallaxStrength = 30,
}) => {
  const getAlignment = () => {
    switch (alignment) {
      case "left": return "text-left items-start";
      case "center": return "text-center items-center";
      case "right": return "text-right items-end";
      default: return "text-center items-center";
    }
  };

  return (
    <ParallaxBackground 
      imageUrl={backgroundImage}
      height={height}
      overlay={overlay}
      strength={parallaxStrength}
    >
      <div className={`container mx-auto px-4 h-full flex flex-col justify-center ${getAlignment()}`}>
        <h1 
          className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 max-w-3xl animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          {title}
        </h1>
        <p 
          className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl animate-fade-in" 
          style={{ animationDelay: "0.4s" }}
        >
          {subtitle}
        </p>
        {buttonText && buttonLink && (
          <div 
            className="animate-fade-in" 
            style={{ animationDelay: "0.6s" }}
          >
            <Link to={buttonLink}>
              <Button 
                size="lg" 
                className="bg-morocco-blue hover:bg-morocco-blue/90 text-white transform transition-transform hover:scale-105"
              >
                {buttonText}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </ParallaxBackground>
  );
};

export default AnimatedHero;
