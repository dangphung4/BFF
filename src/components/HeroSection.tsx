import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Step Into <span className="text-primary">Comfort</span> & Style
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Discover our handpicked collection of premium footwear designed for comfort, style, and durability. From everyday essentials to statement pieces.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-md px-8">Shop Men</Button>
              <Button size="lg" variant="outline" className="text-md px-8">Shop Women</Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full bg-primary/10 absolute -right-20 -top-20 w-72 h-72 z-0"></div>
            <div className="aspect-square rounded-full bg-secondary/20 absolute -left-10 -bottom-10 w-60 h-60 z-0"></div>
            <div className="relative z-10">
              <div className="shadow-2xl rounded-lg overflow-hidden bg-card">
                <img 
                  src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c25lYWtlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" 
                  alt="Featured shoe collection"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                <p className="text-sm font-medium">Limited Edition</p>
                <p className="text-2xl font-bold">30% OFF</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 