import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import coachPortrait from "@/assets/coach-portrait-1.png";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      {/* Decorative Lines */}
      <div className="absolute top-1/4 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-1/4 right-0 w-1/3 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-primary/3 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative container mx-auto px-6 md:px-12 lg:px-20 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="reveal opacity-0 inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm text-primary font-medium tracking-wide">
                Accompagnement Premium
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="reveal opacity-0 font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-8" style={{ animationDelay: "0.2s" }}>
              Transformez votre{" "}
              <span className="text-gradient-gold">vision</span>
              <br />
              en entreprise florissante
            </h1>

            {/* Subtitle */}
            <p className="reveal opacity-0 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed" style={{ animationDelay: "0.4s" }}>
              Un accompagnement sur-mesure et personnalisé pour concrétiser votre projet entrepreneurial avec excellence et distinction.
            </p>

            {/* CTA Buttons */}
            <div className="reveal opacity-0 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4" style={{ animationDelay: "0.6s" }}>
              <Button variant="premium" size="xl" asChild>
                <Link to="/contact" className="group">
                  Réserver un Appel
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="elegant" size="xl" asChild>
                <Link to="/services">Découvrir nos Services</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="reveal opacity-0 mt-16 grid grid-cols-3 gap-6" style={{ animationDelay: "0.8s" }}>
              {[
                { value: "150+", label: "Entrepreneurs accompagnés" },
                { value: "95%", label: "Taux de réussite" },
                { value: "10+", label: "Années d'expertise" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="font-serif text-2xl md:text-3xl font-semibold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo Side */}
          <div className="reveal opacity-0 relative order-1 lg:order-2" style={{ animationDelay: "0.3s" }}>
            <div className="relative max-w-md mx-auto">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-primary/20 rounded-sm" />
              <div className="absolute -inset-8 border border-primary/10 rounded-sm hidden lg:block" />
              
              {/* Gold accent corner */}
              <div className="absolute -top-2 -right-2 w-16 h-16 border-t-2 border-r-2 border-primary" />
              <div className="absolute -bottom-2 -left-2 w-16 h-16 border-b-2 border-l-2 border-primary" />
              
              {/* Main Photo */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <img 
                  src={coachPortrait}
                  alt="Experte en accompagnement entrepreneurial"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-background border border-primary/30 px-6 py-4 rounded-sm shadow-elegant">
                <div className="font-serif text-2xl text-primary font-semibold">10+</div>
                <div className="text-xs text-muted-foreground">Ans d'expérience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-60">
        <span className="text-xs tracking-widest uppercase text-muted-foreground">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
