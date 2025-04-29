
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
    if (!imgError && imgSrc !== fallbackSrc) {
      console.log(`Image failed to load: ${imgSrc}, falling back to: ${fallbackSrc}`);
      setImgError(true);
      setImgSrc(fallbackSrc);
    }
  };
  
  // For SVG images, we want to ensure they display properly
  const isSvg = imgSrc.toLowerCase().endsWith('.svg');
  
  // Use better image sources based on the context
  const getMoroccoImage = () => {
    // If the image is already a fully qualified URL, use it
    if (imgSrc.startsWith('http') || imgSrc.startsWith('/')) {
      return imgSrc;
    }
    
    // For placeholder images, use Unsplash photos related to Morocco
    if (imgSrc === '/placeholder.svg' || imgSrc.includes('placeholder')) {
      const moroccoImages = [
        'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80', // Moroccan doorway
        'https://images.unsplash.com/photo-1539020140153-e8c7a7024ad2?auto=format&fit=crop&w=800&q=80', // Chefchaouen blue city
        'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80', // Marrakech souk
        'https://images.unsplash.com/photo-1489493887464-892be6d1daae?auto=format&fit=crop&w=800&q=80', // Desert dunes
        'https://images.unsplash.com/photo-1557072175-1e29538de9cf?auto=format&fit=crop&w=800&q=80', // Moroccan architecture
        'https://images.unsplash.com/photo-1531761535209-180857b2bb45?auto=format&fit=crop&w=800&q=80', // Fes medina
      ];
      
      // Use a deterministic approach based on alt text to select an image
      const altSum = alt.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
      const imageIndex = altSum % moroccoImages.length;
      
      return moroccoImages[imageIndex];
    }
    
    return imgSrc;
  };
  
  // Update the image source
  const optimizedSrc = getMoroccoImage();
  
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {blur && !isLoaded && !imgError && !isSvg && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse" 
          style={{ backdropFilter: 'blur(10px)' }}
        />
      )}
      <img
        src={optimizedSrc}
        alt={alt}
        className={`transition-opacity duration-500 ${isLoaded || imgError || isSvg ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
          objectFit: isSvg ? 'contain' : objectFit,
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
