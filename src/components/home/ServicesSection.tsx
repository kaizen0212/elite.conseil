import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Users, ClipboardCheck, Compass } from "lucide-react";
import { useEffect, useRef } from "react";

const services = [
  {
    icon: FileText,
    title: "Business Plan",
    description:
      "Élaboration d'un business plan solide et structuré pour convaincre vos partenaires et investisseurs.",
  },
  {
    icon: Users,
    title: "Coaching Personnalisé",
    description:
      "Un accompagnement sur-mesure pour développer votre potentiel et atteindre vos objectifs professionnels.",
  },
  {
    icon: ClipboardCheck,
    title: "Support Administratif",
    description:
      "Aide complète dans vos démarches administratives pour vous concentrer sur votre cœur de métier.",
  },
  {
    icon: Compass,
    title: "Mentorat Stratégique",
    description:
      "Guidance experte pour prendre les meilleures décisions et accélérer la croissance de votre activité.",
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
            Des services adaptés à tous les entrepreneurs, avec une expertise particulière dans le secteur BTP et services techniques.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="reveal opacity-0 card-premium group p-8 lg:p-10"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
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
