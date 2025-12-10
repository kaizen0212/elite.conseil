import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-card relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      {/* Decorative Lines */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="reveal opacity-0 font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Prêt à concrétiser votre{" "}
            <span className="text-gradient-gold">projet</span> ?
          </h2>
          
          <p className="reveal opacity-0 text-muted-foreground text-lg mt-6 mb-10" style={{ animationDelay: "0.2s" }}>
            Réservez dès maintenant votre consultation gratuite et découvrez comment 
            nous pouvons vous accompagner vers le succès.
          </p>

          <div className="reveal opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animationDelay: "0.4s" }}>
            <Button variant="premium" size="xl" asChild>
              <Link to="/contact" className="group">
                Réserver un Appel Gratuit
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="elegant" size="lg" asChild>
              <Link to="/services">Explorer les Services</Link>
            </Button>
          </div>

          {/* Trust Badge */}
          <p className="reveal opacity-0 text-xs text-muted-foreground mt-8" style={{ animationDelay: "0.6s" }}>
            Consultation sans engagement • Réponse sous 24h
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
