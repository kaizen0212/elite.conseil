import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Paintbrush, Wrench, Zap, Droplets, Settings, Shield, Check } from "lucide-react";
import { useEffect, useRef } from "react";

const services = [
  {
    icon: Paintbrush,
    title: "Peinture en Bâtiment",
    description: "Accompagnement complet pour créer votre auto-entreprise de peinture : décoration, ravalement, finitions.",
    features: [
      "Étude de marché locale",
      "Business plan adapté",
      "Formalités d'immatriculation",
      "Conseils assurance décennale",
      "Stratégie de prospection",
    ],
    price: "À partir de 800 €",
  },
  {
    icon: Wrench,
    title: "Rénovation",
    description: "Lancez votre activité de rénovation intérieure et extérieure avec un accompagnement expert.",
    features: [
      "Positionnement marché",
      "Choix du statut juridique",
      "Gestion administrative complète",
      "Conseils devis et facturation",
      "Support continu",
    ],
    price: "À partir de 800 €",
  },
  {
    icon: Zap,
    title: "Électricité",
    description: "Créez votre micro-entreprise d'électricien avec toutes les formalités et qualifications maîtrisées.",
    features: [
      "Vérification des qualifications",
      "Accompagnement Qualifelec",
      "Business plan électricien",
      "Formalités spécifiques",
      "Conseils conformité",
    ],
    price: "À partir de 1 000 €",
  },
  {
    icon: Droplets,
    title: "Plomberie",
    description: "Démarrez votre activité de plombier-chauffagiste indépendant avec les bonnes bases.",
    features: [
      "Analyse du marché local",
      "Statut et immatriculation",
      "Conseils qualifications RGE",
      "Stratégie de développement",
      "Accompagnement assurances",
    ],
    price: "À partir de 1 000 €",
  },
  {
    icon: Settings,
    title: "Multi-Services",
    description: "Polyvalent ? Créez votre structure multi-services pour diversifier vos prestations BTP.",
    features: [
      "Définition des prestations",
      "Business plan polyvalent",
      "Formalités multi-activités",
      "Conseils tarification",
      "Stratégie de communication",
    ],
    price: "À partir de 900 €",
  },
  {
    icon: Shield,
    title: "Sécurité Privée",
    description: "Lancez votre entreprise dans le secteur de la sécurité avec toutes les autorisations nécessaires.",
    features: [
      "Accompagnement CNAPS",
      "Dossier d'autorisation",
      "Business plan sécurité",
      "Conseils réglementation",
      "Stratégie commerciale",
    ],
    price: "À partir de 1 200 €",
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
        <title>Services | Accompagnement Auto-Entrepreneurs BTP - Peinture, Électricité, Plomberie</title>
        <meta
          name="description"
          content="Accompagnement création auto-entreprise BTP : peinture, rénovation, électricité, plomberie, multi-services, sécurité. Devis personnalisé."
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
                <span className="text-gradient-gold">BTP</span>
              </h1>
              <p className="reveal opacity-0 text-muted-foreground text-lg max-w-2xl mx-auto" style={{ animationDelay: "0.2s" }}>
                Des formules adaptées à chaque métier du bâtiment et des services techniques 
                pour lancer votre auto-entreprise sereinement.
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

          {/* CTA Section */}
          <section className="section-padding bg-card">
            <div className="container mx-auto text-center">
              <h2 className="reveal opacity-0 font-serif text-3xl md:text-4xl font-medium mb-6">
                Votre métier n'est pas listé ?{" "}
                <span className="text-gradient-gold">Contactez-nous</span>
              </h2>
              <p className="reveal opacity-0 text-muted-foreground mb-8 max-w-xl mx-auto" style={{ animationDelay: "0.2s" }}>
                Nous accompagnons tous les métiers du BTP et des services techniques. 
                Parlons de votre projet !
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
