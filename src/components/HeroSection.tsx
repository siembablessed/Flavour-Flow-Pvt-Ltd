import { useRef, useState, useEffect } from "react";
import {
  ArrowRight,
  Package,
  Truck,
  Shield,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const promoSlides = [
  {
    id: 1,
    eyebrow: "Afdis Authorized Wholesale Partner",
    title: "Wholesale case deals ready for retail and hospitality buyers",
    description:
      "Browse fast-moving spirits, wines and ciders with dependable dispatch and trade-friendly pricing.",
    accent: "from-amber-400 via-orange-400 to-yellow-300",
  },
  {
    id: 2,
    eyebrow: "Exclusive Range",
    title: "Premium bottles curated for shelves, events and restaurant menus",
    description:
      "Keep your offering fresh with standout whisky, brandy, gin and wine selections.",
    accent: "from-fuchsia-400 via-rose-400 to-orange-300",
  },
  {
    id: 3,
    eyebrow: "Bulk Deals",
    title: "Repeat-order stock lines with smooth quotes and nationwide delivery",
    description:
      "Move quickly from enquiry to order with clear pricing and transport support.",
    accent: "from-sky-400 via-cyan-400 to-emerald-300",
  },
];

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promoSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const stats = [
    { icon: Package, text: "50+ Products" },
    { icon: Truck, text: "Nationwide Delivery" },
    { icon: Shield, text: "Authorized Dealer" },
  ];

  const slide = promoSlides[currentSlide];

  return (
    <>
      <section id="hero" ref={ref} className="relative bg-background pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-4rem)] py-12 lg:py-0">
            <div
              className={`transition-all duration-700 ${
                visible ? "animate-fade-up" : "opacity-0"
              }`}
            >
              <div 
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-wide"
                style={{ backgroundColor: '#1B3674', color: 'white' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                Afdis Authorized Wholesale Partner
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] mb-5 text-balance" style={{ color: '#1B3674' }}>
                Premium Spirits,{" "}
                <span className="text-accent">Wholesale Prices</span>
              </h1>

              <p
                className="text-base lg:text-lg max-w-lg mb-8 leading-relaxed"
                style={{ textWrap: "pretty", color: '#1B3674' }}
              >
                Zimbabwe&apos;s go-to distributor of whisky, brandy, vodka, gin,
                ciders and wines. Case orders at unbeatable trade rates —
                delivered to your door.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <button
                  onClick={() => onNavigate("products")}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity active:scale-[0.97] shadow-lg"
                  style={{ backgroundColor: '#1B3674', color: 'white' }}
                >
                  Browse Catalogue
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate("transport")}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg border-2 font-semibold text-sm transition-all active:scale-[0.97]"
                  style={{ borderColor: '#1B3674', color: '#1B3674' }}
                  onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#F59714'; e.currentTarget.style.color = 'white'; }}
                  onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#1B3674'; }}
                >
                  Get Delivery Quote
                </button>
              </div>

              <div className="flex flex-wrap gap-6">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-2 text-sm transition-all duration-700 ${
                      visible ? "animate-fade-up" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${0.3 + i * 0.1}s`, color: '#1B3674' }}
                  >
                    <s.icon className="w-4 h-4" style={{ color: '#1B3674' }} />
                    {s.text}
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`relative transition-all duration-700 delay-200 ${
                visible ? "animate-slide-right" : "opacity-0"
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-accent/10">
                <img
                  src={heroBg}
                  alt="Premium spirits collection"
                  className="w-full h-full object-cover"
                />
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

      <section className="bg-background px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-[#0e1c38] text-white shadow-[0_20px_50px_rgba(15,23,42,0.12)]">
            <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.1fr_auto] lg:items-center lg:px-10 lg:py-8">
              <div className="relative min-h-[180px]">
                {promoSlides.map((item, index) => (
                  <div
                    key={item.id}
                    className={`absolute inset-0 transition-all duration-500 ${
                      index === currentSlide
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-3 opacity-0"
                    }`}
                  >
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
                      <Sparkles className="h-4 w-4 text-primary" />
                      {item.eyebrow}
                    </div>

                    <h2 className="mt-4 max-w-3xl text-2xl font-bold leading-tight sm:text-3xl">
                      {item.title}
                    </h2>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-start gap-4 lg:items-end">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      setCurrentSlide(
                        (prev) => (prev - 1 + promoSlides.length) % promoSlides.length
                      )
                    }
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20"
                    aria-label="Previous promotion"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <button
                    onClick={() =>
                      setCurrentSlide((prev) => (prev + 1) % promoSlides.length)
                    }
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20"
                    aria-label="Next promotion"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                <button
                  onClick={() => onNavigate("products")}
                  className={`inline-flex items-center gap-3 rounded-full bg-gradient-to-r ${slide.accent} px-6 py-3 text-sm font-bold text-slate-950 shadow-lg transition-transform hover:-translate-y-0.5`}
                >
                  View current wholesale deals
                  <ArrowRight className="h-4 w-4" />
                </button>

                <div className="flex gap-2">
                  {promoSlides.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        currentSlide === index ? "w-8 bg-primary" : "w-2.5 bg-white/30"
                      }`}
                      aria-label={`Go to promotion ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
