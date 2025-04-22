
import React, { useEffect, useState } from "react";

interface FadeTransitionProps {
  children: React.ReactNode;
  keyId: string;
}

const FadeTransition: React.FC<FadeTransitionProps> = ({ children, keyId }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const timeout = setTimeout(() => setVisible(true), 30);
    return () => clearTimeout(timeout);
  }, [keyId]);

  return (
    <div
      className={`transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}
      key={keyId}
    >
      {children}
    </div>
  );
};

export default FadeTransition;
