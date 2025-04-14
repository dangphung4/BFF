import { Button } from "@/components/ui/button"

const beforeAfterExamples = [
  {
    title: "Vintage Boot Restoration",
    before: "https://images.unsplash.com/photo-1520219306100-ec3924315f4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b2xkJTIwYm9vdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    after: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGVhdGhlciUyMGJvb3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    description: "Complete restoration including new soles, leather conditioning, and color refinishing."
  },
  {
    title: "Designer Handbag Repair",
    before: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFtYWdlZCUyMGhhbmRiYWd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    after: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFtYWdlZCUyMGhhbmRiYWd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    description: "Strap replacement, hardware restoration, and interior lining repair."
  },
  {
    title: "Dress Shoe Refinishing",
    before: "https://images.unsplash.com/photo-1543281726-a17bcc7b8a45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG9sZCUyMGRyZXNzJTIwc2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    after: "https://images.unsplash.com/photo-1614252369475-531eba7d2b5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhdGhlciUyMHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    description: "Full sole replacement, heel repair, and complete color restoration and polish."
  }
]

export function BeforeAfter() {
  return (
    <section className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Before & After Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See the transformation of worn and damaged leather goods brought back to life by our skilled craftsmen.
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
          <Button>View More Transformations</Button>
        </div>
      </div>
    </section>
  )
} 