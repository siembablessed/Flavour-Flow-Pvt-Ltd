import { useState, useCallback } from "react";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductCatalog from "@/components/ProductCatalog";
import TransportQuote from "@/components/TransportQuote";
import ContactSection from "@/components/ContactSection";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";

const Index = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const scrollTo = useCallback((section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Navbar onNavigate={scrollTo} onCartOpen={() => setCartOpen(true)} />
        <HeroSection onNavigate={scrollTo} />
        <ProductCatalog />
        <TransportQuote />
        <ContactSection />
        <Footer />
        <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      </div>
    </CartProvider>
  );
};

export default Index;
