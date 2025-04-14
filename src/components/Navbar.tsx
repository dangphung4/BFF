import { useState, useEffect } from "react"
import { Menu, ShoppingBag, Heart, Search, X, ChevronDown } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const categories = [
  {
    name: "Men",
    subcategories: ["Running", "Basketball", "Casual", "Formal"]
  },
  {
    name: "Women",
    subcategories: ["Running", "Lifestyle", "Heels", "Sandals"]
  },
  {
    name: "Kids",
    subcategories: ["School", "Sports", "Casual", "Toddler"]
  },
  {
    name: "New",
    subcategories: []
  },
  {
    name: "Sale",
    subcategories: []
  }
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMouseEnter = (categoryName: string) => {
    setActiveDropdown(categoryName)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b" : "bg-background"
      )}
    >
      {/* Search bar - shows when search is clicked */}
      {searchOpen && (
        <div className="absolute top-0 left-0 right-0 bg-background z-50 p-4 border-b">
          <div className="container mx-auto flex items-center">
            <input 
              type="text" 
              placeholder="Search products..." 
              className="flex-1 py-2 px-4 outline-none bg-muted/50 focus:bg-muted"
              autoFocus
            />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setSearchOpen(false)}
              className="ml-2"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center">
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center pb-4 border-b">
                    <h2 className="font-medium">BEST FOOT FORWARD</h2>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-4 w-4" />
                      </Button>
                    </SheetTrigger>
                  </div>
                  
                  <nav className="flex flex-col space-y-6 py-6">
                    {categories.map((category) => (
                      <div key={category.name} className="space-y-3">
                        <h3 className="font-medium text-lg tracking-wide">
                          <a href={`#${category.name.toLowerCase()}`}>{category.name}</a>
                        </h3>
                        {category.subcategories.length > 0 && (
                          <ul className="space-y-2 pl-2">
                            {category.subcategories.map((subcat) => (
                              <li key={subcat}>
                                <a 
                                  href={`#${category.name.toLowerCase()}-${subcat.toLowerCase().replace(' ', '-')}`}
                                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                  {subcat}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <a href="/" className="text-xl font-bold tracking-wide uppercase ml-4 md:ml-0">Best Foot Forward</a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-10">
              {categories.map((category) => (
                <li 
                  key={category.name}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(category.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a 
                    href={`#${category.name.toLowerCase()}`} 
                    className="flex items-center py-4 font-medium hover:text-primary transition-colors"
                  >
                    {category.name}
                    {category.subcategories.length > 0 && (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </a>

                  {/* Dropdown Menu */}
                  {category.subcategories.length > 0 && activeDropdown === category.name && (
                    <div className="absolute left-0 mt-1 w-48 bg-background border rounded-md shadow-lg z-50">
                      <ul className="py-2">
                        {category.subcategories.map((subcat) => (
                          <li key={subcat}>
                            <a 
                              href={`#${category.name.toLowerCase()}-${subcat.toLowerCase().replace(' ', '-')}`}
                              className="block px-4 py-2 text-sm hover:bg-muted/50 transition-colors"
                            >
                              {subcat}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center gap-1 ml-auto">
            <Button variant="ghost" size="icon" onClick={() => setSearchOpen(true)}>
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="hidden md:flex ml-2">
              Sign in or Sign up
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
} 