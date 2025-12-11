import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Target, Heart, Users, BookOpen, TrendingUp } from "lucide-react";
import { useEffect, useRef } from "react";
import coachPortrait2 from "@/assets/coach-portrait-2.png";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "Chaque projet mérite le meilleur. Nous visons l'excellence dans chaque accompagnement.",
  },
  {
    icon: Target,
    title: "Précision",
    description: "Une méthodologie rigoureuse pour des résultats concrets et mesurables.",
  },
  {
    icon: Heart,
    title: "Engagement",
    description: "Votre réussite est notre priorité. Un engagement total à vos côtés.",
  },
  {
    icon: Users,
    title: "Écoute",
    description: "Comprendre vos besoins pour un accompagnement véritablement personnalisé.",
  },
  {
    icon: BookOpen,
    title: "Expertise",
    description: "Plus de 10 ans d'expérience dans l'accompagnement entrepreneurial et le BTP.",
  },
  {
    icon: TrendingUp,
    title: "Résultats",
    description: "95% de taux de réussite pour les entrepreneurs accompagnés.",
  },
];

const About = () => {
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
        <title>À Propos | Coach Expert en Accompagnement Entrepreneurial</title>
        <meta
          name="description"
          content="Découvrez notre expertise dans l'accompagnement des entrepreneurs. Coaching personnalisé, business plan et mentorat stratégique."
        />
      </Helmet>

      <div ref={pageRef} className="min-h-screen bg-background">
        <Header />

        <main className="pt-20">
          {/* Hero Section */}
          <section className="section-padding">
            <div className="container mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Image */}
                <div className="reveal opacity-0 relative order-2 lg:order-1">
                  <div className="aspect-[3/4] relative max-w-md mx-auto">
                    {/* Decorative frame */}
                    <div className="absolute -inset-4 border border-primary/20 rounded-sm" />
                    <div className="absolute -inset-8 border border-primary/10 rounded-sm hidden lg:block" />
                    
                    {/* Gold accent corner */}
                    <div className="absolute -top-2 -right-2 w-16 h-16 border-t-2 border-r-2 border-primary" />
                    <div className="absolute -bottom-2 -left-2 w-16 h-16 border-b-2 border-l-2 border-primary" />
                    
                    {/* Main Photo */}
                    <div className="relative h-full overflow-hidden rounded-sm">
                      <img 
                        src={coachPortrait2}
                        alt="Coach professionnel en accompagnement"
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-8 order-1 lg:order-2">
                  <div className="reveal opacity-0">
                    <span className="text-primary text-sm font-medium tracking-widest uppercase">
                      À Propos
                    </span>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mt-4 leading-tight">
                      L'excellence au service de{" "}
                      <span className="text-gradient-gold">votre réussite</span>
                    </h1>
                  </div>

                  <p className="reveal opacity-0 text-muted-foreground leading-relaxed text-lg" style={{ animationDelay: "0.2s" }}>
                    Passionné par l'entrepreneuriat, j'ai consacré plus d'une 
                    décennie à accompagner les professionnels dans la création et le développement de leur activité.
                  </p>

                  <p className="reveal opacity-0 text-muted-foreground leading-relaxed" style={{ animationDelay: "0.3s" }}>
                    Mon expertise couvre le coaching personnalisé, l'élaboration de business plans, 
                    le support administratif et le mentorat stratégique. Une expertise particulière 
                    dans le secteur BTP : peinture, rénovation, électricité, plomberie, multi-services et sécurité.
                  </p>

                  <div className="reveal opacity-0" style={{ animationDelay: "0.4s" }}>
                    <Button variant="outline" asChild>
                      <Link to="/contact" className="group">
                        Me contacter
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Separator */}
          <div className="line-elegant mx-auto max-w-4xl" />

          {/* Values Section */}
          <section className="section-padding">
            <div className="container mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="reveal opacity-0 text-primary text-sm font-medium tracking-widest uppercase">
                  Valeurs
                </span>
                <h2 className="reveal opacity-0 font-serif text-3xl md:text-4xl lg:text-5xl font-medium mt-4" style={{ animationDelay: "0.1s" }}>
                  Ce qui nous{" "}
                  <span className="text-gradient-gold">anime</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="reveal opacity-0 card-premium p-8 text-center group"
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-sm bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                      <value.icon size={28} className="text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-medium mb-3 group-hover:text-primary transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="section-padding bg-card">
            <div className="container mx-auto text-center">
              <h2 className="reveal opacity-0 font-serif text-3xl md:text-4xl font-medium mb-6">
                Prêt à transformer votre{" "}
                <span className="text-gradient-gold">vision en succès</span> ?
              </h2>
              <p className="reveal opacity-0 text-muted-foreground mb-8 max-w-xl mx-auto" style={{ animationDelay: "0.2s" }}>
                Réservez votre consultation découverte gratuite et commençons ensemble.
              </p>
              <div className="reveal opacity-0" style={{ animationDelay: "0.3s" }}>
                <Button variant="premium" size="xl" asChild>
                  <Link to="/contact" className="group">
                    Réserver un Appel
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

export default About;
