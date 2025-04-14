import { useState, useEffect } from "react"
import { Menu, ShoppingBag, User, Search, X } from "lucide-react"
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger,
  navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const categories = [
  {
    name: "Men",
    featured: ["Running", "Basketball", "Casual", "Formal"]
  },
  {
    name: "Women",
    featured: ["Running", "Lifestyle", "Heels", "Sandals"]
  },
  {
    name: "Kids",
    featured: ["School", "Sports", "Casual", "Toddler"]
  },
  {
    name: "Collections",
    featured: ["New Arrivals", "Bestsellers", "Seasonal", "Limited Edition"]
  }
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-200",
      isScrolled ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-background"
    )}>
      {/* Announcement Banner */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
        Free shipping on orders over $100 | Use code BFF10 for 10% off
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold">Best Foot Forward</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {categories.map((category) => (
                  <NavigationMenuItem key={category.name}>
                    <NavigationMenuTrigger>{category.name}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                        {category.featured.map((item) => (
                          <li key={item}>
                            <NavigationMenuLink asChild>
                              <a
                                href={`#${category.name.toLowerCase()}-${item.toLowerCase().replace(' ', '-')}`}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{item}</div>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <a href="#sale">Sale</a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Search & Cart & User - visible on all screens */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex relative w-full max-w-[200px]">
              <Input 
                type="search" 
                placeholder="Search..." 
                className="pr-8"
              />
              <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-6 w-6" />
            </Button>
            
            <Button variant="ghost" size="icon">
              <User className="h-6 w-6" />
            </Button>

            {/* Mobile Navigation Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center pb-4 border-b">
                      <h2 className="font-semibold text-lg">Menu</h2>
                      <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <X className="h-4 w-4" />
                        </Button>
                      </SheetTrigger>
                    </div>
                    
                    <div className="py-4">
                      <div className="relative w-full mb-6">
                        <Input 
                          type="search" 
                          placeholder="Search..." 
                          className="pr-8 w-full"
                        />
                        <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      </div>
                      
                      <nav className="flex flex-col space-y-4">
                        {categories.map((category) => (
                          <div key={category.name} className="py-1">
                            <h3 className="font-medium mb-2 text-lg">{category.name}</h3>
                            <ul className="pl-4 space-y-1">
                              {category.featured.map((item) => (
                                <li key={item}>
                                  <a 
                                    href={`#${category.name.toLowerCase()}-${item.toLowerCase().replace(' ', '-')}`}
                                    className="text-sm hover:text-primary transition-colors"
                                  >
                                    {item}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        <a href="#sale" className="font-medium text-lg py-1 hover:text-primary transition-colors">Sale</a>
                      </nav>
                    </div>
                    
                    <div className="mt-auto border-t pt-4">
                      <Button variant="outline" className="w-full mb-2">Sign In</Button>
                      <Button className="w-full">Create Account</Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 