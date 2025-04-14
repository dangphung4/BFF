import React from 'react';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  delay?: number;
}

export const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  image,
  delay
}) => {
  return (
    <div 
      className="group relative"
      style={{ animationDelay: delay ? `${delay}s` : '0s' }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="rounded-full w-32 h-32 object-cover mx-auto border-2 border-primary transition-transform duration-300 group-hover:scale-105"
        />
        
        <div className="absolute bottom-0 right-0">
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full bg-background shadow-md hover:bg-primary hover:text-primary-foreground"
          >
            <Icon icon={Mail} size="sm" variant="primary" />
          </Button>
        </div>
      </div>
      <div className="text-center mt-4">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  );
}; 