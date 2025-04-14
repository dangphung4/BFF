import { useState, useEffect } from "react"
import { Menu, ShoppingBag, Heart, Search, X, ChevronDown, Moon, Sun, User, LogOut } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Link, useLocation } from "react-router-dom"
import { useUser, useIsAdmin } from "@/auth/auth-hooks"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const categories = [
  {
    name: "About Us",
    path: "/about",
    subcategories: []
  },
  {
    name: "Services",
    path: "/services",
    subcategories: ["Men", "Women", "Industrial Stitching", "Luggage Repair"]
  },
  {
    name: "Products",
    path: "/products",
    subcategories: ["Leather Care Products", "Comfort Aids", "Custom Leather Goods"]
  },
  {
    name: "Testimonials",
    path: "/testimonials",
    subcategories: []
  },
  {
    name: "Before & After",
    path: "/before-after",
    subcategories: []
  }
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const location = useLocation()
  const { user, isAuthenticated, isLoading, login, logout } = useUser()
  const isAdmin = useIsAdmin()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Check if dark mode is already set
    setIsDarkMode(document.documentElement.classList.contains('dark'))
  }, [])

  const handleMouseEnter = (categoryName: string) => {
    setActiveDropdown(categoryName)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
    setIsDarkMode(!isDarkMode)
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
                          <Link to={category.path}>{category.name}</Link>
                        </h3>
                        {category.subcategories.length > 0 && (
                          <ul className="space-y-2 pl-2">
                            {category.subcategories.map((subcat) => (
                              <li key={subcat}>
                                <Link 
                                  to={`${category.path}#${subcat.toLowerCase().replace(' ', '-')}`}
                                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                  {subcat}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}

                    {/* Admin Dashboard Link (Mobile) */}
                    {isAuthenticated && isAdmin && (
                      <div className="space-y-3">
                        <h3 className="font-medium text-lg tracking-wide">
                          <Link to="/admin/dashboard">Admin Dashboard</Link>
                        </h3>
                      </div>
                    )}

                    {/* Theme Toggle in Mobile Menu */}
                    <div className="space-y-3">
                      <h3 className="font-medium text-lg tracking-wide">Theme</h3>
                      <button 
                        onClick={toggleTheme}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {isDarkMode ? (
                          <>
                            <Sun className="h-4 w-4" /> Light Mode
                          </>
                        ) : (
                          <>
                            <Moon className="h-4 w-4" /> Dark Mode
                          </>
                        )}
                      </button>
                    </div>

                    {/* Auth Actions in Mobile Menu */}
                    <div className="space-y-3">
                      <h3 className="font-medium text-lg tracking-wide">Account</h3>
                      {isAuthenticated ? (
                        <div className="space-y-2 pl-2">
                          <p className="text-sm text-muted-foreground">{user?.name || user?.email}</p>
                          <button 
                            onClick={() => logout()}
                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <LogOut className="h-4 w-4" /> Sign Out
                          </button>
                        </div>
                      ) : (
                        <button 
                          onClick={() => login()}
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <User className="h-4 w-4" /> Sign In
                        </button>
                      )}
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <Link to="/" className="text-xl font-bold tracking-wide uppercase ml-4 md:ml-0">Best Foot Forward</Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-10">
              {categories.map((category) => (
                <li 
                  key={category.name}
                  className="relative group"
                >
                  <Link 
                    to={category.path} 
                    className={cn(
                      "flex items-center py-4 font-medium hover:text-primary transition-colors",
                      location.pathname === category.path && "text-primary"
                    )}
                    onMouseEnter={() => handleMouseEnter(category.name)}
                  >
                    {category.name}
                    {category.subcategories.length > 0 && (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {category.subcategories.length > 0 && (
                    <div 
                      className={`absolute left-0 mt-1 w-48 bg-background border rounded-md shadow-lg z-50 transition-opacity duration-200 ${activeDropdown === category.name ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                      onMouseEnter={() => handleMouseEnter(category.name)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <ul className="py-2">
                        {category.subcategories.map((subcat) => (
                          <li key={subcat}>
                            <Link 
                              to={`${category.path}#${subcat.toLowerCase().replace(' ', '-')}`}
                              className="block px-4 py-2 text-sm hover:bg-muted/50 transition-colors"
                            >
                              {subcat}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}

              {/* Admin Dashboard Link */}
              {isAuthenticated && isAdmin && (
                <li className="relative">
                  <Link 
                    to="/admin/dashboard" 
                    className={cn(
                      "flex items-center py-4 font-medium hover:text-primary transition-colors",
                      location.pathname.startsWith('/admin') && "text-primary"
                    )}
                  >
                    Admin
                  </Link>
                </li>
              )}
            </ul>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center gap-2 ml-auto">
            {/* Theme Toggle */}
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="hidden md:flex">
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            
            <Button variant="ghost" size="icon" onClick={() => setSearchOpen(true)}>
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
            </Button>

            {/* Auth Button / Profile Menu */}
            {isLoading ? (
              <div className="h-9 w-9 rounded-full bg-muted animate-pulse" />
            ) : isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full overflow-hidden">
                    {user?.picture ? (
                      <img 
                        src={user.picture} 
                        alt={user?.name || "User"} 
                        className="h-8 w-8 rounded-full object-cover"
                      />
                    ) : (
                      <User className="h-5 w-5" />
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>{user?.name || user?.email}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {isAdmin && (
                    <DropdownMenuItem asChild>
                      <Link to="/admin/dashboard">Dashboard</Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem asChild>
                    <Link to="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => logout()}>
                    <LogOut className="h-4 w-4 mr-2" />
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button 
                variant="ghost" 
                size="sm" 
                className="hidden md:flex ml-2"
                onClick={() => login()}
              >
                Sign in
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
} 