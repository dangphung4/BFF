import { ProductCard } from "@/components/ProductCard"

// Mock data for featured products
const featuredProducts = [
  {
    id: "1",
    name: "Air Cloud Runner",
    price: 129.99,
    originalPrice: 159.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Men's Running",
    isNew: true,
    rating: 4.7
  },
  {
    id: "2",
    name: "Velocity Max",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    category: "Men's Basketball",
    rating: 4.5
  },
  {
    id: "3",
    name: "Elegant Step Heels",
    price: 89.99,
    originalPrice: 119.99,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVlbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Women's Formal",
    rating: 4.8
  },
  {
    id: "4",
    name: "Comfort Daily Loafers",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1616406432452-07bc5938759d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bG9hZmVyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    category: "Women's Casual",
    isNew: true,
    rating: 4.3
  }
]

export function FeaturedProducts() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
            <p className="text-muted-foreground mt-2">Our hand-picked favorites for this season</p>
          </div>
          <a href="#all-products" className="text-primary font-medium mt-4 md:mt-0 hover:underline">
            View All
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
} 