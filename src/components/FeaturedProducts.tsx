import { ProductCard } from "@/components/ProductCard"

// Mock data for featured products
const featuredProducts = [
  {
    id: "1",
    name: "OXFORD CLASSIC",
    price: 289.99,
    originalPrice: 349.99,
    image: "https://images.unsplash.com/photo-1614252369475-531eba7d2b5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhdGhlciUyMHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "Men's Handcrafted leather dress shoes with Goodyear welt construction for durability and elegance.",
    isBestSeller: true,
    rating: 5
  },
  {
    id: "2",
    name: "MILANO LOAFERS",
    price: 245.00,
    image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9hZmVyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    category: "Italian full-grain leather penny loafers with hand-stitched details and leather soles.",
    isNewProduct: true,
    rating: 4
  },
  {
    id: "3",
    name: "LEATHER CARE KIT",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZSUyMHBvbGlzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    category: "Complete set of premium leather cleaning and conditioning products to maintain your fine footwear.",
    isNewProduct: true,
    rating: 5
  },
  {
    id: "4",
    name: "CHELSEA BOOTS",
    price: 319.50,
    image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hlbHNlYSUyMGJvb3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "Classic pull-on boots crafted from full-grain leather with elastic side panels and leather soles.",
    rating: 5
  }
]

export function FeaturedProducts() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="border-b pb-4 mb-10">
          <h2 className="text-3xl font-bold">Premium Leather Collection</h2>
          <p className="text-muted-foreground mt-2">
            Handcrafted leather footwear and care products designed to last for generations. Each piece represents our commitment to quality craftsmanship.
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