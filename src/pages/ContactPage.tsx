import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
        <p className="text-lg text-muted-foreground">
          Have questions about our services or want to schedule a repair? 
          Reach out to our team and we'll be happy to assist you.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help you?" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Describe your inquiry in detail" 
                  className="min-h-[150px]"
                />
              </div>
            </div>
            
            <Button size="lg" className="w-full">
              Send Message
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <p className="text-xs text-muted-foreground text-center mt-4">
              We'll get back to you within 24-48 hours during business days.
            </p>
          </form>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-8">Visit Our Shop</h2>
          
          <div className="bg-muted/10 border rounded-lg p-6 mb-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium text-lg">Location</h3>
                  <p className="text-muted-foreground">3686 King St. Alexandria, VA 22302</p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline inline-flex items-center mt-2"
                  >
                    Get Directions
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium text-lg">Phone</h3>
                  <p className="text-muted-foreground">(703)-413-0444</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium text-lg">Email</h3>
                  <p className="text-muted-foreground">bffshoerepair@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium text-lg">Hours</h3>
                  <p className="text-muted-foreground">Monday - Saturday: 9am-7pm<br />Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden h-[300px] border">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3107.6973131636236!2d-77.0970247!3d38.8308744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b24d33e8afc9%3A0x3fa3af2dbd9b0498!2s3686%20King%20St%2C%20Alexandria%2C%20VA%2022302!5e0!3m2!1sen!2sus!4v1680012345678!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      
      <div className="bg-muted/20 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-8">
          <div>
            <h3 className="font-bold mb-2">Do you offer same-day repair services?</h3>
            <p className="text-muted-foreground">
              For minor repairs, we can often provide same-day service. For more complex jobs, 
              we'll provide an estimated completion time during your initial consultation.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">What payment methods do you accept?</h3>
            <p className="text-muted-foreground">
              We accept all major credit cards, cash, and mobile payment options like Apple Pay and Google Pay.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">Can you repair designer shoes and bags?</h3>
            <p className="text-muted-foreground">
              Yes, we specialize in high-end and designer leather goods repair and restoration, 
              including luxury brands like Louis Vuitton, Gucci, Prada, and more.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">Do I need an appointment for estimates?</h3>
            <p className="text-muted-foreground">
              No appointment is necessary for basic estimates. Simply visit our shop during business 
              hours, and our staff will assist you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 