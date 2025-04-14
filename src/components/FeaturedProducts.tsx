import { ProductCard } from "@/components/ProductCard"

// Mock data for featured products
const featuredProducts = [
  {
    id: "1",
    name: "SAGHTUM",
    price: 282.20,
    originalPrice: 329.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Upholstered in soft woven fabric that brings a cozy feeling into your bedroom.",
    isBestSeller: true,
    rating: 4
  },
  {
    id: "2",
    name: "PANSAWR",
    price: 450.00,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    category: "Bringing new life to an old favorite. We first introduced this chair in the 1950's.",
    isNewProduct: true,
    rating: 4
  },
  {
    id: "3",
    name: "BIEAEW",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVlbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "It is estimated that every five seconds, one BILLY bookcase is sold somewhere in the world.",
    isNewProduct: true,
    rating: 5
  },
  {
    id: "4",
    name: "KMOKK",
    price: 228.50,
    image: "https://images.unsplash.com/photo-1616406432452-07bc5938759d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bG9hZmVyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    category: "A simple and sturdy set that's perfect for your breakfast nook or smaller dining area.",
    rating: 5
  }
]

export function FeaturedProducts() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="border-b pb-4 mb-10">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <p className="text-muted-foreground mt-2">
            Ideas to help Bring Home to Life based on your recently viewed products. Share your space on Instagram and tag @BestFootForward
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
} 