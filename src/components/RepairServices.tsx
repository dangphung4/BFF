import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Shoe Repair & Restoration",
    description: "Complete resole services, heel replacement, leather reconditioning, stretching, and custom dyeing for all types of footwear.",
    image: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNob2UlMjByZXBhaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Leather Goods Repair",
    description: "Expert restoration of handbags, jackets, wallets and other leather accessories. Services include zipper replacement, color restoration, and structural repairs.",
    image: "https://images.unsplash.com/photo-1531010056129-33a1b2f1c4ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxlYXRoZXIlMjBiYWd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Custom Leather Crafting",
    description: "Bespoke leather items handcrafted to your specifications. From belts and wallets to custom shoe designs and specialty items.",
    image: "https://images.unsplash.com/photo-1473188588951-666fce8e7c68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGVhdGhlciUyMGNyYWZ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  }
]

const additionalServices = [
  {
    title: "Industrial Stitching",
    description: "Heavy-duty stitching solutions for various materials and applications.",
    icon: "🧵"
  },
  {
    title: "Luggage Repair",
    description: "Complete restoration of suitcases, travel bags, and briefcases.",
    icon: "🧳"
  },
  {
    title: "Leather Care Products",
    description: "Premium cleaning and conditioning products to maintain your leather goods.",
    icon: "🧴"
  },
  {
    title: "Comfort Aids",
    description: "Custom insoles, padding, and comfort modifications for your footwear.",
    icon: "👞"
  }
]

export function RepairServices() {
  return (
    <section id="repairs" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">"Because all shoes are not created equal"</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our team of expertly trained craftsmen are here to help your leather goods receive the best quality care and repair.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity opacity-0 group-hover:opacity-100"></div>
              </div>
              <div className="p-6 bg-background border border-t-0 rounded-b-lg">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {additionalServices.map((service, index) => (
            <div key={index} className="p-6 bg-background border rounded-lg text-center">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-background border rounded-lg p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Leather Care Specialists Since 2003</h3>
              <p className="text-muted-foreground mb-6">
                Best Foot Forward offers a customizable menu across multiple service categories from traditional shoe repair to full restoration services for vintage jackets, fur coats, and designer handbags, to the upkeep of your high-end leather fashion accessories.
              </p>
              <p className="text-muted-foreground mb-6">
                We know that all of your leather goods, from shoes to handbags, are more than just accessories—they are investments that you want to protect. Our promise to you is, we'll make sure that your leather goods will be around for another lifetime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">Book a Repair</Button>
                <Button variant="outline" size="lg">Before & After Gallery</Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary/10 rounded-full -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1556115419-5a539f9af785?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGxlYXRoZXIlMjBzaG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" 
                alt="Leather workshop" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg font-medium text-muted-foreground mb-4">Hours & Location</p>
          <p className="font-bold text-xl mb-2">3686 King St. Alexandria, VA 22302</p>
          <p className="mb-4">(703)-413-0444 | bffshoerepair@gmail.com</p>
          <p>Monday - Saturday: 9am-7pm | Sunday: Closed</p>
        </div>
      </div>
    </section>
  )
} 