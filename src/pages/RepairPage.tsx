import { RepairServices } from "@/components/RepairServices";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function RepairPage() {
  return (
    <div>
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Repair & Restoration Services</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Our team of expertly trained craftsmen are here to help your leather goods receive the best quality care and repair.
              From simple fixes to complete restorations, we treat each piece with the attention it deserves.
            </p>
            <Button size="lg">Book a Repair Service</Button>
          </div>
        </div>
      </div>
      
      <RepairServices />
      
      <div className="container mx-auto px-4 py-16">
        <div className="bg-background border rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Service Booking Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Book Your Service</h3>
              <p className="text-muted-foreground mb-4">
                We offer walk-in service assessments during our normal business hours. 
                For larger projects or specialty work, we recommend scheduling a consultation.
              </p>
              <Button className="w-full">Request a Consultation</Button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">3686 King St. Alexandria, VA 22302</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-muted-foreground">(703)-413-0444</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">bffshoerepair@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-medium">Hours</h4>
                  <p className="text-muted-foreground">Monday - Saturday: 9am-7pm<br />Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 