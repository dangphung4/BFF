import { Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"

interface ProductCardProps {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  isNew?: boolean
  rating?: number
}

export function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  isNew = false,
  rating = 0,
}: ProductCardProps) {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0
  
  return (
    <Card className="group overflow-hidden border border-border">
      <div className="relative">
        {/* Product Image */}
        <div className="aspect-square overflow-hidden bg-secondary/20">
          <img 
            src={image} 
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        {/* Quick Actions */}
        <div className="absolute right-2 top-2 flex flex-col gap-2">
          <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full opacity-70 hover:opacity-100">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Badges */}
        <div className="absolute left-2 top-2 flex flex-col gap-1">
          {isNew && (
            <Badge className="bg-primary text-primary-foreground">New</Badge>
          )}
          {discount > 0 && (
            <Badge variant="destructive">{discount}% OFF</Badge>
          )}
        </div>
      </div>
      
      <CardHeader className="p-4 pb-0">
        <CardDescription className="text-xs uppercase tracking-wider">
          {category}
        </CardDescription>
        <CardTitle className="text-base font-medium leading-tight mt-1">
          {name}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-4 pt-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold">${price.toFixed(2)}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          {rating > 0 && (
            <div className="flex items-center text-sm">
              <span className="text-yellow-500">★</span>
              <span className="ml-1 font-medium">{rating.toFixed(1)}</span>
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button className="w-full gap-2">
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
} 