
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
  fallbackSrc?: string;
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
  fallbackSrc = '/placeholder.svg',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);
  const [imgError, setImgError] = useState(false);
  
  const handleError = () => {
    if (!imgError) {
      setImgError(true);
      setImgSrc(fallbackSrc);
    }
  };
  
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {blur && !isLoaded && !imgError && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse" 
          style={{ backdropFilter: 'blur(10px)' }}
        />
      )}
      <img
        src={imgSrc}
        alt={alt}
        className={`transition-opacity duration-500 ${isLoaded || imgError ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
          objectFit,
          width: '100%',
          height: '100%',
        }}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
      />
    </div>
  );
};

export default OptimizedImage;
