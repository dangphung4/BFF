import { BeforeAfter } from "@/components/BeforeAfter";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function BeforeAfterPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Before & After Gallery</h1>
        <p className="text-lg text-muted-foreground">
          See the transformation in our work. Browse through our gallery of before and after 
          restoration projects to see the quality and care we put into every service.
        </p>
      </div>
      
      {/* Filter Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        <Button variant="outline" className="rounded-full">All Projects</Button>
        <Button variant="outline" className="rounded-full">Shoe Repair</Button>
        <Button variant="outline" className="rounded-full">Leather Restoration</Button>
        <Button variant="outline" className="rounded-full">Color Restoration</Button>
        <Button variant="outline" className="rounded-full">Luggage Repair</Button>
      </div>
      
      <BeforeAfter />
      
      <Separator className="my-16" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Restoration Process</h2>
          <p className="text-muted-foreground mb-4">
            Every restoration project follows our meticulous multi-step process:
          </p>
          <ol className="space-y-4 ml-5 list-decimal">
            <li className="text-muted-foreground">
              <span className="font-medium text-foreground">Initial Assessment</span> - We thoroughly examine each item to determine its condition and restoration needs.
            </li>
            <li className="text-muted-foreground">
              <span className="font-medium text-foreground">Cleaning</span> - We carefully clean the item using specialized cleaners appropriate for each material.
            </li>
            <li className="text-muted-foreground">
              <span className="font-medium text-foreground">Repair</span> - Structural issues are addressed, from stitching to replacing components.
            </li>
            <li className="text-muted-foreground">
              <span className="font-medium text-foreground">Color Restoration</span> - We match and apply dyes to restore the original color or apply a new finish.
            </li>
            <li className="text-muted-foreground">
              <span className="font-medium text-foreground">Conditioning</span> - Premium conditioners are applied to restore moisture and suppleness.
            </li>
            <li className="text-muted-foreground">
              <span className="font-medium text-foreground">Finishing</span> - Final polishing and protective coatings are applied for long-lasting results.
            </li>
          </ol>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Request a Restoration</h2>
          <p className="text-muted-foreground mb-6">
            Have a treasured item that needs restoration? Our expert craftsmen are ready to bring your leather goods back to life.
            Schedule a consultation to discuss your specific needs and get a personalized assessment.
          </p>
          <div className="space-y-4">
            <Button size="lg" className="w-full">Book a Consultation</Button>
            <p className="text-sm text-muted-foreground text-center">
              Bring your items in-store for an immediate assessment, or 
              contact us for more information about our restoration services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 