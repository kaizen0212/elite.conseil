import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Target, Heart } from "lucide-react";
import { useEffect, useRef } from "react";
import coachOffice from "@/assets/coach-office.png";

const AboutPreview = () => {
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
    <section ref={sectionRef} className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="reveal opacity-0 relative">
            <div className="aspect-[4/5] relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-sm" />
              <div className="absolute inset-4 border border-primary/30 rounded-sm" />
              <div className="absolute inset-8 rounded-sm overflow-hidden">
                <img 
                  src={coachOffice}
                  alt="Expert accompagnement auto-entrepreneurs BTP"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-background border border-primary/30 p-6 rounded-sm shadow-lg">
              <div className="text-center">
                <div className="font-serif text-3xl text-primary font-semibold">10+</div>
                <div className="text-sm text-muted-foreground">Ans d'expérience</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="reveal opacity-0" style={{ animationDelay: "0.2s" }}>
              <span className="text-primary text-sm font-medium tracking-widest uppercase">
                À propos
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mt-4 leading-tight">
                Spécialiste du{" "}
                <span className="text-gradient-gold">BTP</span>
              </h2>
            </div>

            <p className="reveal opacity-0 text-muted-foreground leading-relaxed" style={{ animationDelay: "0.3s" }}>
              Fort de plus de 10 années d'expertise dans l'accompagnement des auto-entrepreneurs 
              du secteur BTP et services techniques, je vous guide dans la création et le développement 
              de votre activité : peinture, rénovation, électricité, plomberie, multi-services et sécurité.
            </p>

            {/* Values */}
            <div className="reveal opacity-0 grid grid-cols-1 sm:grid-cols-3 gap-6" style={{ animationDelay: "0.4s" }}>
              {[
                { icon: Award, label: "Excellence" },
                { icon: Target, label: "Précision" },
                { icon: Heart, label: "Engagement" },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 text-muted-foreground">
                  <item.icon size={20} className="text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="reveal opacity-0" style={{ animationDelay: "0.5s" }}>
              <Button variant="outline" asChild>
                <Link to="/a-propos" className="group">
                  En savoir plus
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
