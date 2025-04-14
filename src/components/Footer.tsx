import { Separator } from "@/components/ui/separator"
import { Facebook, Instagram, Mail, Clock, MapPin, Phone } from "lucide-react"
import { Link } from "react-router-dom"

const shopLinks = [
  { name: "Women", path: "/shop#women" },
  { name: "Men", path: "/shop#men" },
  { name: "Industrial Stitching", path: "/repair-services#industrial-stitching" },
  { name: "Luggage Repair", path: "/repair-services#luggage-repair" },
  { name: "Leather Care Products", path: "/shop#leather-care-products" }
]

const serviceLinks = [
  { name: "Comfort Aids", path: "/repair-services#comfort-aids" },
  { name: "Custom Leather Goods", path: "/repair-services#custom-leather-goods" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Before and Afters", path: "/before-after" }
]

const companyLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Story", path: "/about#our-story" },
  { name: "Contact", path: "/contact" }
]

export function Footer() {
  return (
    <footer className="bg-background pt-16 pb-8">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div className="space-y-6">
            <h3 className="font-medium text-lg">Shop</h3>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-medium text-lg">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-medium text-lg">About Us</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-medium text-lg">Hours & Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">3686 King St. Alexandria, VA 22302</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">(703)-413-0444</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">bffshoerepair@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Monday - Saturday: 9am-7pm<br />Sunday: Closed</span>
              </li>
            </ul>

            <h3 className="font-medium text-lg mt-8">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <span className="text-sm text-muted-foreground">@_bestfootforward</span>
            </div>
          </div>
        </div>
        
        <Separator className="mb-8" />
        
        <div className="text-center text-sm text-muted-foreground">
          <div className="mb-2">
            <span className="font-medium text-foreground">"Because all shoes are not created equal"</span>
          </div>
          <div className="mb-4">
            Shoe & Leather Care plus Leather custom-Crafts
          </div>
          <div>
            © {new Date().getFullYear()} Best Foot Forward. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
} 