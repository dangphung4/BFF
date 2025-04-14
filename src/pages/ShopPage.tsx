import { FeaturedProducts } from "@/components/FeaturedProducts";
import { CategoryShowcase } from "@/components/CategoryShowcase";
import { Button } from "@/components/ui/button";

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Shop Our Collection</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Explore our carefully curated selection of premium leather goods, footwear, and care products.
          Each item is selected for its exceptional quality and craftsmanship.
        </p>
      </div>
      
      {/* Category Navigation */}
      <div className="flex flex-wrap gap-4 mb-16">
        <Button variant="outline" className="rounded-full">All Products</Button>
        <Button variant="outline" className="rounded-full">Women</Button>
        <Button variant="outline" className="rounded-full">Men</Button>
        <Button variant="outline" className="rounded-full">Kids</Button>
        <Button variant="outline" className="rounded-full">Leather Care</Button>
        <Button variant="outline" className="rounded-full">Accessories</Button>
      </div>
      
      <FeaturedProducts />
      <CategoryShowcase />
    </div>
  );
} 