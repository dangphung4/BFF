import { MinimalSection } from "@/components/MinimalSection";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <div>
      <div className="bg-muted/20 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight mb-4">About Best Foot Forward</h1>
            <p className="text-lg text-muted-foreground">
              Best Foot Forward has been Alexandria's premier shoe and leather repair shop since 2003. 
              We combine traditional craftsmanship with modern techniques to deliver exceptional quality.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Best Foot Forward was founded in 2003 by master craftsman Wilfred Lopez, who learned the 
              art of leather working and shoe repair from his father and grandfather. What began as a small 
              repair shop has grown into Alexandria's most trusted destination for all leather care and repair needs.
            </p>
            <p className="text-muted-foreground mb-4">
              Our philosophy is simple: we believe quality leather goods are an investment, and proper care 
              and maintenance will ensure they last for generations. We have built our reputation on exceptional 
              craftsmanship, personalized service, and attention to detail.
            </p>
            <p className="text-muted-foreground">
              Today, our team of skilled artisans continues this tradition of excellence, combining time-honored 
              techniques with modern innovations to provide the highest quality repairs and custom leather goods.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary/10 rounded-full -z-10"></div>
            <img 
              src="https://i.imgur.com/j5eUVST.jpg" 
              alt="Our workshop" 
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full -z-10"></div>
          </div>
        </div>
        
        <Separator className="my-16" />
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background border rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold mb-2">Quality Craftsmanship</h3>
              <p className="text-muted-foreground">
                We approach each project with meticulous attention to detail and a commitment to excellence.
              </p>
            </div>
            
            <div className="bg-background border rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold mb-2">Sustainability</h3>
              <p className="text-muted-foreground">
                By repairing and restoring, we extend the life of your items and reduce environmental impact.
              </p>
            </div>
            
            <div className="bg-background border rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-2">Customer Satisfaction</h3>
              <p className="text-muted-foreground">
                Your satisfaction is our priority. We strive to exceed expectations with every project.
              </p>
            </div>
          </div>
        </div>
        
        <MinimalSection />
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <img 
                src="https://i.imgur.com/vYLUuAE.jpg" 
                alt="Wilfred Lopez" 
                className="rounded-full w-32 h-32 object-cover mx-auto mb-4"
              />
              <h3 className="font-bold">Wilfred Lopez</h3>
              <p className="text-sm text-muted-foreground">Founder & Master Craftsman</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://i.imgur.com/vYLUuAE.jpg" 
                alt="Wilfred Lopez" 
                className="rounded-full w-32 h-32 object-cover mx-auto mb-4"
              />
              <h3 className="font-bold">Wilfred Lopez</h3>
              <p className="text-sm text-muted-foreground">Lead Leather Artisan</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://i.imgur.com/vYLUuAE.jpg" 
                alt="Wilfred Lopez" 
                className="rounded-full w-32 h-32 object-cover mx-auto mb-4"
              />
              <h3 className="font-bold">Wilfred Lopez</h3>
              <p className="text-sm text-muted-foreground">Shoe Repair Specialist</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://i.imgur.com/vYLUuAE.jpg" 
                alt="Wilfred Lopez" 
                className="rounded-full w-32 h-32 object-cover mx-auto mb-4"
              />
              <h3 className="font-bold">Wilfred Lopez</h3>
              <p className="text-sm text-muted-foreground">Custom Design Specialist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 