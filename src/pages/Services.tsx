import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Users, ClipboardCheck, Compass, Check } from "lucide-react";
import { useEffect, useRef } from "react";

const services = [
  {
    icon: FileText,
    title: "Business Plan",
    description: "Élaboration d'un business plan solide et structuré pour convaincre vos partenaires et investisseurs.",
    features: [
      "Analyse de marché approfondie",
      "Prévisions financières détaillées",
      "Stratégie de développement",
      "Document professionnel clé en main",
      "Révisions illimitées",
    ],
    price: "À partir de 1 500 €",
  },
  {
    icon: Users,
    title: "Coaching Personnalisé",
    description: "Un accompagnement sur-mesure pour développer votre potentiel et atteindre vos objectifs professionnels.",
    features: [
      "Séances individuelles",
      "Plan d'action personnalisé",
      "Suivi régulier des progrès",
      "Outils et méthodes éprouvés",
      "Support entre les séances",
    ],
    price: "À partir de 200 € / séance",
  },
  {
    icon: ClipboardCheck,
    title: "Support Administratif",
    description: "Aide complète dans vos démarches administratives pour vous concentrer sur votre cœur de métier.",
    features: [
      "Création d'entreprise",
      "Formalités administratives",
      "Gestion documentaire",
      "Conseils juridiques de base",
      "Accompagnement continu",
    ],
    price: "À partir de 800 €",
  },
  {
    icon: Compass,
    title: "Mentorat Stratégique",
    description: "Guidance experte pour prendre les meilleures décisions et accélérer la croissance de votre activité.",
    features: [
      "Analyse stratégique",
      "Conseils personnalisés",
      "Networking privilégié",
      "Accès à notre expertise",
      "Suivi mensuel",
    ],
    price: "À partir de 500 € / mois",
  },
];

const Services = () => {
  const pageRef = useRef<HTMLDivElement>(null);

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

    const elements = pageRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>Services | Coaching et Accompagnement Entrepreneurial</title>
        <meta
          name="description"
          content="Découvrez nos services de coaching, business plan, support administratif et mentorat stratégique pour entrepreneurs et professionnels du BTP."
        />
      </Helmet>

      <div ref={pageRef} className="min-h-screen bg-background">
        <Header />

        <main className="pt-20">
          {/* Hero Section */}
          <section className="section-padding">
            <div className="container mx-auto text-center">
              <span className="reveal opacity-0 text-primary text-sm font-medium tracking-widest uppercase">
                Nos Services
              </span>
              <h1 className="reveal opacity-0 font-serif text-4xl md:text-5xl lg:text-6xl font-medium mt-4 mb-6" style={{ animationDelay: "0.1s" }}>
                Accompagnement{" "}
                <span className="text-gradient-gold">sur-mesure</span>
              </h1>
              <p className="reveal opacity-0 text-muted-foreground text-lg max-w-2xl mx-auto" style={{ animationDelay: "0.2s" }}>
                Des formules adaptées à vos besoins pour vous accompagner à chaque étape 
                de votre parcours entrepreneurial, avec une expertise particulière dans le secteur BTP.
              </p>
            </div>
          </section>

          {/* Services Grid */}
          <section className="section-padding pt-0">
            <div className="container mx-auto">
              <div className="grid lg:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="reveal opacity-0 card-premium p-8 lg:p-10 group"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div className="flex items-start space-x-6 mb-6">
                      <div className="flex-shrink-0 w-16 h-16 rounded-sm bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <service.icon size={32} className="text-primary" />
                      </div>
                      <div>
                        <h2 className="font-serif text-2xl font-medium group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </h2>
                        <p className="text-primary font-medium mt-1">{service.price}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <Check size={18} className="text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/contact" className="group/btn">
                        Demander un devis
                        <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* BTP Section */}
          <section className="section-padding bg-card">
            <div className="container mx-auto text-center">
              <h2 className="reveal opacity-0 font-serif text-3xl md:text-4xl font-medium mb-6">
                Expertise{" "}
                <span className="text-gradient-gold">BTP</span>
              </h2>
              <p className="reveal opacity-0 text-muted-foreground mb-8 max-w-2xl mx-auto" style={{ animationDelay: "0.2s" }}>
                Une expertise particulière dans l'accompagnement des professionnels du BTP : 
                peinture, rénovation, électricité, plomberie, multi-services et sécurité.
              </p>
              <div className="reveal opacity-0" style={{ animationDelay: "0.3s" }}>
                <Button variant="premium" size="xl" asChild>
                  <Link to="/contact" className="group">
                    Réserver une Consultation
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Services;
