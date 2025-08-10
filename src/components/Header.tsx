import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { products, getAllCategories } from "@/data/products";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Suppress ResizeObserver errors from dropdown
  useEffect(() => {
    const handleResizeObserverError = (e: ErrorEvent) => {
      if (e.message.includes('ResizeObserver loop')) {
        e.stopImmediatePropagation();
      }
    };

    window.addEventListener('error', handleResizeObserverError);
    return () => window.removeEventListener('error', handleResizeObserverError);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  const groupedProducts = getAllCategories().map(category => ({
    category,
    products: products.filter(product => product.category === category)
  }));

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 w-full glass border-b border-border/30 z-50 shadow-lg backdrop-blur-xl">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src="/lovable-uploads/f04a9b84-edea-4845-8540-e15766cfb5d6.png" 
              alt="Sunlite Signs - Lighting Up Your Brand" 
              className="h-12 w-auto group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative py-3 px-2 transition-all duration-300 group text-lg ${
                  isActive(item.href)
                    ? "text-primary font-semibold"
                    : "text-foreground hover:text-primary font-medium"
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-1 bg-gradient-primary transition-all duration-300 rounded-full ${
                  isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}

            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`relative py-3 px-2 transition-all duration-300 group text-lg h-auto bg-transparent hover:bg-transparent ${
                    isActive("/products")
                      ? "text-primary font-semibold"
                      : "text-foreground hover:text-primary font-medium"
                  }`}
                >
                  Products
                  <ChevronDown className="w-4 h-4 ml-1" />
                  <span className={`absolute bottom-0 left-0 h-1 bg-gradient-primary transition-all duration-300 rounded-full ${
                    isActive("/products") ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 p-2" align="start">
                <DropdownMenuItem asChild>
                  <Link to="/products" className="w-full font-medium">
                    All Products
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                {groupedProducts.map((group) => (
                  <div key={group.category}>
                    <DropdownMenuLabel className="text-xs font-semibold text-muted-foreground">
                      {group.category}
                    </DropdownMenuLabel>
                    {group.products.map((product) => (
                      <DropdownMenuItem key={product.id} asChild>
                        <Link
                          to={`/products/${product.id}`}
                          className="w-full text-sm pl-4"
                        >
                          {product.title}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator />
                  </div>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="cta" size="lg" className="apple-glow px-8 py-3 text-lg font-semibold" asChild>
              <Link to="/contact">Get Quote</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`transition-colors ${
                    isActive(item.href)
                      ? "text-primary font-medium"
                      : "text-foreground hover:text-primary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Products Section */}
              <div className="border-t border-border pt-4">
                <Link
                  to="/products"
                  className={`transition-colors block mb-2 ${
                    isActive("/products")
                      ? "text-primary font-medium"
                      : "text-foreground hover:text-primary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  All Products
                </Link>
                {groupedProducts.map((group) => (
                  <div key={group.category} className="ml-4 mb-3">
                    <div className="text-xs font-semibold text-muted-foreground mb-1">
                      {group.category}
                    </div>
                    {group.products.map((product) => (
                      <Link
                        key={product.id}
                        to={`/products/${product.id}`}
                        className="block text-sm text-muted-foreground hover:text-primary py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {product.title}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>

              <Button variant="cta" size="sm" className="self-start" asChild>
                <Link to="/contact">Get Quote</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
