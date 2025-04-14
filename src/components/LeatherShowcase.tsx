import React from 'react';

interface LeatherShowcaseProps {
  title: string;
  description: string;
  image: string;
}

export const LeatherShowcase: React.FC<LeatherShowcaseProps> = ({
  title,
  description,
  image
}) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1 duration-300">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4 bg-background border-t">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}; 