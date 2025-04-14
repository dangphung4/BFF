import React, { SVGProps } from 'react';
import { LucideIcon } from 'lucide-react';

// Type for icon variants
export type IconVariant = 'default' | 'primary' | 'secondary' | 'outline';

// Props for the Icon component
export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'ref'> {
  icon: LucideIcon;
  variant?: IconVariant;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * Icon component that handles consistent styling of SVG icons
 */
export const Icon: React.FC<IconProps> = ({
  icon: IconComponent,
  variant = 'default',
  size = 'md',
  className,
  ...props
}) => {
  // Size mapping
  const sizeMap = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
    xl: 'h-10 w-10'
  };

  // Variant styling
  const variantClasses = {
    default: 'text-foreground',
    primary: 'text-primary',
    secondary: 'text-secondary',
    outline: 'text-foreground/60'
  };

  // Combine all classes
  const combinedClassName = `${sizeMap[size]} ${variantClasses[variant]} ${className || ''}`.trim();
  
  return <IconComponent className={combinedClassName} {...props} />;
}; 