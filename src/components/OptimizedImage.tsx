
import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  loading?: 'eager' | 'lazy';
  blur?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  objectFit = 'cover',
  loading = 'lazy',
  blur = true,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {blur && !isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse" 
          style={{ backdropFilter: 'blur(10px)' }}
        />
      )}
      <img
        src={src}
        alt={alt}
        className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
          objectFit,
          width: '100%',
          height: '100%',
        }}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default OptimizedImage;
