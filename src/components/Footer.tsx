import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-muted/40">
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold">Best Foot Forward</h2>
            <p className="mt-4 text-muted-foreground">
              Premium footwear for every step of your journey. Quality and comfort that moves with you.
            </p>
            <div className="mt-6 flex space-x-4">
              <Button size="icon" variant="ghost">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold">Shop</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#men" className="text-muted-foreground hover:text-primary">Men</a></li>
              <li><a href="#women" className="text-muted-foreground hover:text-primary">Women</a></li>
              <li><a href="#kids" className="text-muted-foreground hover:text-primary">Kids</a></li>
              <li><a href="#collections" className="text-muted-foreground hover:text-primary">Collections</a></li>
              <li><a href="#sale" className="text-muted-foreground hover:text-primary">Sale</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#about" className="text-muted-foreground hover:text-primary">About Us</a></li>
              <li><a href="#careers" className="text-muted-foreground hover:text-primary">Careers</a></li>
              <li><a href="#stores" className="text-muted-foreground hover:text-primary">Store Locator</a></li>
              <li><a href="#sustainability" className="text-muted-foreground hover:text-primary">Sustainability</a></li>
              <li><a href="#affiliates" className="text-muted-foreground hover:text-primary">Affiliates</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="font-bold">Stay Updated</h3>
            <p className="mt-4 text-muted-foreground">
              Subscribe to get special offers, free giveaways, and new release notifications.
            </p>
            <div className="mt-4 flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email"
                className="max-w-[220px]"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <Separator />
          
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mb-4 md:mb-0">
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4 text-primary" />
                <span className="text-sm">123 Shoe Lane, Fashion District</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-4 w-4 text-primary" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-4 w-4 text-primary" />
                <span className="text-sm">contact@bestfootforward.com</span>
              </div>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Best Foot Forward. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 