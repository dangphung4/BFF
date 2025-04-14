import { TestimonialSection } from "@/components/TestimonialSection";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function TestimonialsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Customer Testimonials</h1>
        <p className="text-lg text-muted-foreground">
          Don't just take our word for it. Read what our customers have to say about our 
          craftsmanship, service, and attention to detail.
        </p>
      </div>
      
      <TestimonialSection />
      
      <Separator className="my-16" />
      
      <div className="bg-muted/30 rounded-lg p-8 mb-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Share Your Experience</h2>
          <p className="text-muted-foreground mb-6">
            We value your feedback. If you've had a great experience with Best Foot Forward, 
            we'd love to hear about it. Submit your testimonial and help others discover the 
            quality of our work.
          </p>
          <Button size="lg">Submit a Testimonial</Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border rounded-lg p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
              AM
            </div>
            <div>
              <h3 className="font-medium">Amanda M.</h3>
              <p className="text-sm text-muted-foreground">Arlington, VA</p>
            </div>
          </div>
          <p className="text-muted-foreground">
            "I brought in my favorite boots that I thought were beyond repair. Not only did they fix them, 
            but they look better than when I first bought them. Incredible service!"
          </p>
          <div className="text-primary mt-4 text-sm">★★★★★</div>
        </div>
        
        <div className="border rounded-lg p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
              JD
            </div>
            <div>
              <h3 className="font-medium">John D.</h3>
              <p className="text-sm text-muted-foreground">Alexandria, VA</p>
            </div>
          </div>
          <p className="text-muted-foreground">
            "I've been coming to Best Foot Forward for years. They've repaired countless shoes, 
            a leather jacket, and even restored my grandfather's briefcase. True craftsmen."
          </p>
          <div className="text-primary mt-4 text-sm">★★★★★</div>
        </div>
        
        <div className="border rounded-lg p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
              SL
            </div>
            <div>
              <h3 className="font-medium">Sarah L.</h3>
              <p className="text-sm text-muted-foreground">Washington, DC</p>
            </div>
          </div>
          <p className="text-muted-foreground">
            "The custom leather wallet they made for my husband was beyond our expectations. 
            The quality of the materials, the craftsmanship—everything was top-notch."
          </p>
          <div className="text-primary mt-4 text-sm">★★★★★</div>
        </div>
      </div>
    </div>
  );
} 