import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Icon } from '@/components/ui/icon';

interface ValueCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const ValueCard: React.FC<ValueCardProps> = ({
  title,
  description,
  icon
}) => {
  return (
    <div className="bg-background border rounded-lg p-6 text-center transition-transform hover:shadow-md hover:-translate-y-1 duration-300">
      <div className="flex justify-center mb-4">
        <Icon icon={icon} size="lg" variant="primary" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}; 