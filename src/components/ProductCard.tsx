import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProductCardProps {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  isNew?: boolean
  rating?: number
  isBestSeller?: boolean
  isNewProduct?: boolean
}

export function ProductCard({
  name,
  price,
  originalPrice,
  image,
  category,
  rating = 0,
  isBestSeller = false,
  isNewProduct = false
}: ProductCardProps) {
  return (
    <div className="group relative">
      {/* Product Badge */}
      {(isBestSeller || isNewProduct) && (
        <div className="absolute top-3 left-3 z-10">
          <Badge 
            className={`${isBestSeller ? 'bg-destructive' : 'bg-primary'} text-xs py-1 px-2 rounded-sm font-medium`}
          >
            {isBestSeller ? 'BEST SELLER' : 'NEW'}
          </Badge>
        </div>
      )}
      
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-accent/5 mb-3">
        <img 
          src={image} 
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Quick Add Overlay - Shown on Hover */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button variant="secondary" size="sm" className="gap-2">
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <h3 className="text-xl font-bold tracking-tight uppercase">{name}</h3>
        <p className="text-sm text-muted-foreground">{category}</p>
        <div className="flex items-center gap-2">
          <span className="font-medium">${price.toFixed(2)}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        
        {rating > 0 && (
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <span 
                key={i} 
                className={`text-xs ${i < Math.floor(rating) ? 'text-foreground' : 'text-muted-foreground'}`}
              >
                ★
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 