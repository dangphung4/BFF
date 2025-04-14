import { Button } from "@/components/ui/button"

export function MinimalSection() {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c25lYWtlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" 
              alt="Minimal shoe design"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Less is More. Minimal.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We believe no one should have to choose between the quality they want, and the price they can afford. That's why we make sure our products stand up to only the highest quality and sustainability standards - and produce them in a way that keeps great design affordable for everyone.
            </p>
            <Button size="lg" className="px-8">
              Shop now
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-24">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-3">Responsible Design</h3>
            <p className="text-muted-foreground">
              Designed with integrity and durably crafted for everyday use.
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-3">Transparent Pricing</h3>
            <p className="text-muted-foreground">
              We believe in accessible pricing and full transparency. Our pricing model is an open book.
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-3">Sustainable Sourcing</h3>
            <p className="text-muted-foreground">
              We only partner with people who put the earth, and its people, first.
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-3">Giving Back</h3>
            <p className="text-muted-foreground">
              Thanks to our charity partners, every purchase directly donates to youth in need.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 