
import React, { useEffect, useRef } from 'react';

interface IntersectionObserverProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  animationClass?: string;
  delay?: number;
}

export const RevealOnScroll: React.FC<IntersectionObserverProps> = ({
  children,
  threshold = 0.1,
  rootMargin = "0px",
  className = "",
  animationClass = "animate-fade-in visible",
  delay = 0
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (ref.current) {
                ref.current.classList.add(...animationClass.split(' '));
              }
            }, delay);
          }
        });
      },
      { threshold, rootMargin }
    );
    
    const currentRef = ref.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [animationClass, threshold, rootMargin, delay]);
  
  return (
    <div ref={ref} className={`opacity-0 transition-all duration-1000 ${className}`}>
      {children}
    </div>
  );
};

interface HoverEffectProps {
  children: React.ReactNode;
  className?: string;
  hoverClass?: string;
}

export const HoverEffect: React.FC<HoverEffectProps> = ({
  children,
  className = "",
  hoverClass = "hover:scale-105"
}) => {
  return (
    <div className={`transition-all duration-300 ${hoverClass} ${className}`}>
      {children}
    </div>
  );
};
