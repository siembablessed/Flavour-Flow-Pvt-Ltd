import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import logo from "@/assets/logo.png";

interface NavbarProps {
  onNavigate: (section: string) => void;
  onCartOpen: () => void;
}

const Navbar = ({ onNavigate, onCartOpen }: NavbarProps) => {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Home", section: "hero" },
    { label: "Products", section: "products" },
    { label: "Transport", section: "transport" },
    { label: "Contact", section: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => onNavigate("hero")} className="flex items-center gap-2.5 active:scale-[0.97]">
            <img src={logo} alt="Flavour Flow" className="h-10 sm:h-12 w-auto scale-[1.35] origin-left ml-2" />
          </button>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <button
                key={l.section}
                onClick={() => onNavigate(l.section)}
                className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-accent rounded-lg hover:bg-accent/10 transition-colors duration-200"
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onCartOpen}
              className="relative p-2.5 rounded-lg hover:bg-muted transition-colors duration-200 active:scale-95"
            >
              <ShoppingCart className="w-5 h-5 text-foreground/70" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full brand-gradient text-primary-foreground text-[11px] flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              className="md:hidden p-2.5 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card animate-fade-in">
          <div className="px-4 py-2">
            {links.map((l) => (
              <button
                key={l.section}
                onClick={() => { onNavigate(l.section); setMobileOpen(false); }}
                className="block w-full text-left py-3 px-3 text-sm font-medium text-foreground/70 hover:text-accent hover:bg-accent/10 rounded-lg transition-colors"
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
