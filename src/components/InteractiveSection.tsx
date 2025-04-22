
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface InteractiveSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  inverted?: boolean;
}

const InteractiveSection = ({
  title,
  subtitle,
  children,
  className,
  inverted = false,
}: InteractiveSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
      const elementsToAnimate = section.querySelectorAll(".reveal-on-scroll");
      elementsToAnimate.forEach((el) => observer.observe(el as Element));
    }

    return () => {
      if (section) {
        observer.unobserve(section);
        const elementsToAnimate = section.querySelectorAll(".reveal-on-scroll");
        elementsToAnimate.forEach((el) => observer.unobserve(el as Element));
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={cn(
        "py-16 md:py-24 reveal-on-scroll",
        inverted ? "bg-gray-900 text-white" : "bg-white text-gray-900",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className={cn("text-lg md:text-xl", inverted ? "text-gray-300" : "text-gray-600")}>
              {subtitle}
            </p>
          )}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
};

export default InteractiveSection;
