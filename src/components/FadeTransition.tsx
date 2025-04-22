
import React, { useEffect, useState } from "react";

interface FadeTransitionProps {
  children: React.ReactNode;
  keyId: string;
  duration?: number;
  delay?: number;
  className?: string;
}

const FadeTransition: React.FC<FadeTransitionProps> = ({ 
  children, 
  keyId, 
  duration = 500, 
  delay = 30,
  className = ""
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const timeout = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timeout);
  }, [keyId, delay]);

  return (
    <div
      className={`transition-opacity duration-${duration} ${visible ? "opacity-100" : "opacity-0"} ${className}`}
      key={keyId}
    >
      {children}
    </div>
  );
};

export default FadeTransition;
