
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import OptimizedImage from './OptimizedImage';

interface AnimatedImageCardProps {
  imageUrl: string;
  title: string;
  description: string;
  className?: string;
  color?: string;
  onClick?: () => void;
}

const AnimatedImageCard: React.FC<AnimatedImageCardProps> = ({
  imageUrl,
  title,
  description,
  className = '',
  color = 'bg-morocco-blue/20',
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card
      className={cn(
        'overflow-hidden transition-all duration-500 cursor-pointer group',
        isHovered ? 'shadow-lg scale-[1.02]' : 'shadow-md',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative h-48 md:h-64 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage
            src={imageUrl}
            alt={title}
            className={`w-full h-full transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
            objectFit="cover"
          />
        </div>
        <div 
          className={cn(
            'absolute inset-0 transition-opacity duration-500',
            isHovered ? 'bg-black/40' : 'bg-black/20'
          )}
        />
      </div>
      
      <div className={cn('p-5', color)}>
        <h3 className="font-serif text-xl font-semibold mb-2 transition-transform duration-300 group-hover:translate-x-1">
          {title}
        </h3>
        <p className="text-gray-700 line-clamp-3">{description}</p>
      </div>
    </Card>
  );
};

export default AnimatedImageCard;
