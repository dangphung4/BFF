import { Button } from "@/components/ui/button"

const categories = [
  {
    id: "mens",
    name: "Men's Collection",
    description: "Athletic, Casual & Formal Shoes",
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWVucyUyMHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    color: "bg-primary/10"
  },
  {
    id: "womens",
    name: "Women's Collection",
    description: "Heels, Flats & Sneakers",
    image: "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29tZW5zJTIwc2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    color: "bg-secondary/20"
  },
  {
    id: "kids",
    name: "Kids' Collection",
    description: "Comfortable & Durable",
    image: "https://images.unsplash.com/photo-1551854590-b4eef7079204?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkcyUyMHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    color: "bg-destructive/10"
  }
]

export function CategoryShowcase() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Shop By Category</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className={`absolute inset-0 ${category.color} opacity-80`}></div>
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-[300px] object-cover"
              />
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-background/80 to-transparent">
                <h3 className="text-2xl font-bold">{category.name}</h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <Button 
                  className="w-full sm:w-auto transition-transform group-hover:translate-y-0 translate-y-2"
                  variant="secondary"
                >
                  Explore Collection
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 