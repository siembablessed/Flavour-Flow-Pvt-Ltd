import { useRef, useState, useEffect } from "react";
import { ArrowRight, Package, Truck, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { QuoteDialog } from "@/components/QuoteDialog";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const slides = [
  {
    id: 1,
    image: heroBg,
    badge: "Afdis Authorized Wholesale",
    title: "Premium Spirits,",
    highlight: "Wholesale Prices",
    highlightColor: "from-accent to-yellow-400",
    description: "Zimbabwe's go-to distributor of whisky, brandy, vodka, gin, ciders and wines. Case orders at unbeatable trade rates — delivered directly to your door.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=2000",
    badge: "Exclusive Range",
    title: "Fine Wines &",
    highlight: "Champagnes",
    highlightColor: "from-purple-400 to-pink-500",
    description: "Discover our curated collection of international and local wines. Perfect for restaurants, events and high-end retail.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1571613316887-562d96c9c714?auto=format&fit=crop&q=80&w=2000",
    badge: "Bulk Deals",
    title: "Craft & Classic",
    highlight: "Beers",
    highlightColor: "from-orange-400 to-yellow-600",
    description: "Stock up your establishment with the finest selection of crisp lagers, ales, and stouts. Unbeatable bulk pricing.",
  }
];

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const isAnimating = useRef(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleNext = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => { isAnimating.current = false; }, 800);
  };

  const handlePrev = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => { isAnimating.current = false; }, 800);
  };

  const setSlide = (index: number) => {
    if (isAnimating.current || currentSlide === index) return;
    isAnimating.current = true;
    setCurrentSlide(index);
    setTimeout(() => { isAnimating.current = false; }, 800);
  };

  const stats = [
    { icon: Package, text: "50+ Products" },
    { icon: Truck, text: "Nationwide Delivery" },
    { icon: Shield, text: "Authorized Dealer" },
  ];

  const slide = slides[currentSlide];

  return (
    <section 
      id="hero" 
      ref={ref} 
      className="relative w-full h-[calc(100vh-64px)] sm:h-[calc(100vh-80px)] min-h-[500px] flex items-center justify-start overflow-hidden mt-[64px] sm:mt-[80px] bg-black group"
    >
      {/* Background Images - mapping all to allow crossfade */}
      {slides.map((s, index) => (
        <div 
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-0" : "opacity-0 z-0"
          }`}
        >
          <div 
            className={`absolute inset-0 transition-transform duration-[6000ms] ${
              index === currentSlide ? "scale-100" : "scale-105"
            }`}
            style={{
              backgroundImage: `url(${s.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      ))}
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none"></div>

      {/* Navigation Arrows */}
      <button 
        onClick={handlePrev}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors z-20 shadow-xl opacity-0 group-hover:opacity-100 hidden md:flex"
      >
        <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
      </button>
      <button 
        onClick={handleNext}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors z-20 shadow-xl opacity-0 group-hover:opacity-100 hidden md:flex"
      >
        <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
      </button>

      {/* Main Content Area */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 w-full pb-8 sm:pb-0">
        <div key={slide.id} className="max-w-2xl animate-fade-up md:ml-16 lg:ml-20">
          <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.05] text-white mb-4 tracking-tight text-balance drop-shadow-lg">
            {slide.title}<br />
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${slide.highlightColor}`}>
              {slide.highlight}
            </span>
          </h1>
          
          <p className="text-gray-200 text-lg sm:text-xl max-w-lg mb-8 leading-relaxed font-medium drop-shadow">
            {slide.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button
              onClick={() => onNavigate("products")}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-bold text-lg hover:bg-accent/90 transition-all active:scale-[0.98] shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_25px_rgba(234,179,8,0.5)]"
            >
              Browse Catalogue
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => setQuoteOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-100 transition-all active:scale-[0.98]"
            >
              Get Delivery Quote
            </button>
          </div>

          <div className="flex flex-wrap gap-6 sm:gap-10 border-t border-white/20 pt-6">
            {stats.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-white font-semibold text-sm sm:text-base animate-fade-up drop-shadow-md"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="p-2.5 bg-white/20 rounded-full backdrop-blur-sm border border-white/20">
                  <s.icon className="w-5 h-5 text-yellow-400 drop-shadow" />
                </div>
                {s.text}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button 
            key={index}
            onClick={() => setSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === index ? "w-8 h-2.5 bg-accent" : "w-2.5 h-2.5 bg-white/40 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Render Quote Dialog outside of the animated slide container */}
      <QuoteDialog open={quoteOpen} onOpenChange={setQuoteOpen} />
    </section>
  );
};

export default HeroSection;
