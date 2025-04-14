import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"

const beforeAfterExamples = [
  {
    title: "Louis Vuitton Handbag Restoration",
    description: "Reconditioned Louis Vuitton handbag with destroyed corners and dehydrated leather. Complete restoration of leather corners and conditioning.",
    before: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFtYWdlZCUyMGhhbmRiYWd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    after: "https://images.unsplash.com/photo-1575032617751-6ddec2089882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGx1eHVyeSUyMGhhbmRiYWd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Premium Shoe Resoling",
    description: "New JR soles and heels were added, with a rubber insert in the center for durability, making the soles last a lot longer.",
    before: "https://images.unsplash.com/photo-1543281726-a17bcc7b8a45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG9sZCUyMGRyZXNzJTIwc2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    after: "https://images.unsplash.com/photo-1614252369475-531eba7d2b5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhdGhlciUyMHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Magnani Monk Straps Conditioning",
    description: "These Magnani monk straps received the \"Saphir\" treatment. Conditioned, polished and protected using all of Saphir Medaille d'Or products.",
    before: "https://images.unsplash.com/photo-1614253429340-98120bd6d753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHklMjBzaG9lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    after: "https://images.unsplash.com/photo-1573100925118-870b8efc799d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW9uayUyMHN0cmFwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  }
]

export function BeforeAfter() {
  return (
    <section className="py-20 bg-muted/10" id="before-and-afters">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Before & After Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto flex items-center justify-center gap-2">
            <Instagram className="h-5 w-5" />
            Follow us on Instagram: <span className="font-medium">@_bestfootforward</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {beforeAfterExamples.map((example, index) => (
            <div key={index} className="bg-background rounded-lg overflow-hidden border">
              <div className="grid grid-cols-2 gap-1">
                <div className="relative">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={example.before} 
                      alt={`${example.title} before`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-2 left-2 bg-destructive text-destructive-foreground text-xs font-medium py-1 px-2 rounded">
                    Before
                  </div>
                </div>
                
                <div className="relative">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={example.after} 
                      alt={`${example.title} after`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-medium py-1 px-2 rounded">
                    After
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{example.title}</h3>
                <p className="text-sm text-muted-foreground">{example.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg">View More Transformations</Button>
        </div>
      </div>
    </section>
  )
} 