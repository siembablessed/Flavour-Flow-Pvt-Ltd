import { useRef, useState, useEffect } from "react";
import { ArrowRight, Package, Truck, Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { icon: Package, text: "50+ Products" },
    { icon: Truck, text: "Nationwide Delivery" },
    { icon: Shield, text: "Authorized Dealer" },
  ];

  return (
    <section id="hero" ref={ref} className="relative pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-4rem)] py-12 lg:py-0">
          {/* Left — copy */}
          <div className={`transition-all duration-700 ${visible ? "animate-fade-up" : "opacity-0"}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Afdis Authorized Wholesale Partner
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] text-foreground mb-5 text-balance">
              Premium Spirits,{" "}
              <span className="text-accent">Wholesale Prices</span>
            </h1>
            <p className="text-foreground/60 text-base lg:text-lg max-w-lg mb-8 leading-relaxed" style={{ textWrap: "pretty" }}>
              Zimbabwe's go-to distributor of whisky, brandy, vodka, gin, ciders and wines. Case orders at unbeatable trade rates — delivered to your door.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <button
                onClick={() => onNavigate("products")}
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg brand-gradient text-white font-semibold text-sm hover:opacity-90 transition-opacity active:scale-[0.97] shadow-lg shadow-primary/20"
              >
                Browse Catalogue
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate("transport")}
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg border-2 border-accent text-accent font-semibold text-sm hover:bg-accent hover:text-white transition-colors active:scale-[0.97]"
              >
                Get Delivery Quote
              </button>
            </div>

            <div className="flex flex-wrap gap-6">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 text-foreground/50 text-sm transition-all duration-600 ${visible ? "animate-fade-up" : "opacity-0"}`}
                  style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                >
                  <s.icon className="w-4 h-4 text-primary" />
                  {s.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right — image */}
          <div className={`relative transition-all duration-700 delay-200 ${visible ? "animate-slide-right" : "opacity-0"}`}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-accent/10">
              <img src={heroBg} alt="Premium spirits collection" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 shadow-lg border border-border">
              <p className="text-2xl font-bold text-accent tabular-nums">500+</p>
              <p className="text-xs text-foreground/50">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
