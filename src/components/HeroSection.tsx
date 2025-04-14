import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      <div className="absolute inset-0 bg-black/20 z-10"></div>
      
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80" 
          alt="Premium leather shoes craftsmanship"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Brand Label */}
      <div className="absolute top-10 left-10 z-20">
        <span className="text-sm font-medium tracking-widest uppercase text-white">Best Foot Forward</span>
      </div>
      
      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-end z-20 p-10 md:p-20">
        <div className="max-w-2xl">
          <p className="text-xl text-white/90 mb-2">Handcrafted Leather & Expert Repairs</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
            Craftsmanship<br />
            That Endures
          </h1>
          <p className="text-lg text-white/80 mb-6">"Because all shoes are not created equal"</p>
          
          <div className="flex gap-4">
            <Button size="lg" variant="default" className="bg-white text-black hover:bg-white/90 px-8 rounded-md">
              Shop Leather
            </Button>
            <Button 
              size="lg" 
              className="bg-transparent border border-white text-white hover:bg-white/10 rounded-md px-8 transition-colors"
            >
              View The Collection
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 