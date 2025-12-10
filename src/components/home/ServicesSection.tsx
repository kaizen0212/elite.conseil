import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Users, ClipboardCheck, Compass } from "lucide-react";
import { useEffect, useRef } from "react";

const services = [
  {
    icon: FileText,
    title: "Business Plan",
    description:
      "Élaboration d'un business plan professionnel et percutant pour convaincre investisseurs et partenaires.",
  },
  {
    icon: Users,
    title: "Coaching Création",
    description:
      "Un accompagnement personnalisé à chaque étape de la création de votre entreprise.",
  },
  {
    icon: ClipboardCheck,
    title: "Accompagnement Administratif",
    description:
      "Gestion des formalités administratives et juridiques pour une création sereine.",
  },
  {
    icon: Compass,
    title: "Mentorat Stratégique",
    description:
      "Conseils stratégiques et mentorat pour accélérer le développement de votre activité.",
  },
];

const ServicesSection = () => {
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
    <section ref={sectionRef} className="section-padding">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="reveal opacity-0 text-primary text-sm font-medium tracking-widest uppercase">
            Services
          </span>
          <h2 className="reveal opacity-0 font-serif text-3xl md:text-4xl lg:text-5xl font-medium mt-4" style={{ animationDelay: "0.1s" }}>
            Un accompagnement{" "}
            <span className="text-gradient-gold">complet</span>
          </h2>
          <p className="reveal opacity-0 text-muted-foreground mt-6" style={{ animationDelay: "0.2s" }}>
            Des services sur-mesure adaptés à chaque étape de votre parcours entrepreneurial.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="reveal opacity-0 card-premium group p-8 lg:p-10"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-sm bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon size={28} className="text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-xl font-medium group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-primary text-sm font-medium group/link"
                  >
                    Découvrir
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover/link:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal opacity-0 text-center mt-12" style={{ animationDelay: "0.7s" }}>
          <Button variant="outline" size="lg" asChild>
            <Link to="/services">
              Voir tous les services
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
