import { Button } from "@/components/ui/button"

export function MinimalSection() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary/10 rounded-full -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1605733513597-a8f8341084e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxlYXRoZXIlMjB3b3Jrc2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" 
              alt="Leather workshop"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full -z-10"></div>
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Expert Craftsmanship
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              At Best Foot Forward, we've been repairing and restoring leather goods since 2003. Our experienced craftsmen use traditional techniques alongside modern technology to ensure your leather items will be around for another lifetime.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="px-8">
                Discover Now
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-24">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-3">Expert Repair</h3>
            <p className="text-muted-foreground">
              Our skilled craftsmen can restore nearly any leather item to its former glory.
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-3">Quality Materials</h3>
            <p className="text-muted-foreground">
              We use only the finest leather, hardware, and materials for all our repairs and products.
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-3">Personalized Service</h3>
            <p className="text-muted-foreground">
              Each item receives individual attention with repair solutions tailored to your needs.
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-3">Lasting Results</h3>
            <p className="text-muted-foreground">
              Our repairs are built to last, ensuring your leather goods can be enjoyed for years to come.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 