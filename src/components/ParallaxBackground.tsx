
import React, { useEffect, useState, useRef } from "react";

interface ParallaxBackgroundProps {
  imageUrl: string;
  children: React.ReactNode;
  strength?: number; // 0-100, with 100 being strongest effect
  height?: "small" | "medium" | "large" | "full";
  overlay?: boolean;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({
  imageUrl,
  children,
  strength = 30,
  height = "large",
  overlay = true,
}) => {
  const [offsetY, setOffsetY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Calculate parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isInView) {
        setIsVisible(true);
        const scrollPosition = window.scrollY;
        const elementOffset = rect.top + scrollPosition;
        const relativeScroll = scrollPosition - elementOffset;
        setOffsetY(relativeScroll * (strength / 100));
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [strength]);

  const getHeightClass = () => {
    switch (height) {
      case "small": return "min-h-[40vh]";
      case "medium": return "min-h-[60vh]";
      case "large": return "min-h-[80vh]";
      case "full": return "min-h-screen";
      default: return "min-h-[80vh]";
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${getHeightClass()}`}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300"
        style={{ 
          backgroundImage: `url(${imageUrl})`,
          transform: `translateY(${offsetY}px)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {overlay && (
        <div className="absolute inset-0 bg-black/50 z-0"></div>
      )}
      
      <div className={`relative z-10 h-full ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        {children}
      </div>
    </div>
  );
};

export default ParallaxBackground;
