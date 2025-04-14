import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PromoBanner() {
  return (
    <section className="py-12 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Summer Collection <span className="text-primary">Sale</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Get up to 40% off on our summer collection. Limited time offer on selected styles.
            </p>
            <div className="flex gap-4">
              <Button size="lg">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Deals
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" 
                alt="Summer Collection Shoes"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-4 py-2 rounded-full font-bold text-sm">
                40% OFF
              </div>
            </div>
            <div className="absolute inset-0 transform translate-x-4 translate-y-4 rounded-lg bg-primary/20 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  )
} 