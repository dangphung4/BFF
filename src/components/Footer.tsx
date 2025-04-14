import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const shopLinks = ["Furniture", "Lighting", "Rugs", "New", "Sale"]
const customerLinks = ["Shipping & Returns", "Store Policy", "Payment Methods", "FAQ"]
const companyLinks = ["Our Story", "Brands & Designers", "Stores", "Contact"]

export function Footer() {
  return (
    <footer className="bg-background pt-16 pb-8">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div className="space-y-6">
            <h3 className="font-medium text-lg">Shop</h3>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-medium text-lg">Customer Service</h3>
            <ul className="space-y-3">
              {customerLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-medium text-lg">About BEST FOOT FORWARD</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-medium text-lg">Sign up to Our Newsletter</h3>
            <div className="flex">
              <Input 
                type="email" 
                placeholder="Email*" 
                className="rounded-r-none focus-visible:ring-0"
              />
              <Button className="rounded-l-none">Submit</Button>
            </div>
          </div>
        </div>
        
        <Separator className="mb-8" />
        
        <div className="text-center text-sm text-muted-foreground">
          <div className="mb-2">
            <span className="font-medium text-foreground">BEST FOOT FORWARD</span>
          </div>
          <div className="mb-4">
            123 Fashion Street, Design District, New York, NY 10001
          </div>
          <div>
            +1 (555) 123-4567 / contact@bestfootforward.com
          </div>
        </div>
      </div>
    </footer>
  )
} 