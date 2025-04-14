import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      <div className="absolute inset-0 bg-black/10 z-10"></div>
      
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
          alt="Featured premium shoes"
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
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
            Utilized with<br />
            Premium Design
          </h1>
          
          <div className="flex gap-4">
            <Button size="lg" variant="default" className="bg-white text-black hover:bg-white/90 px-8 rounded-md">
              New In
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