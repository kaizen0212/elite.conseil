import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Découverte",
    description: "Premier échange pour comprendre votre projet, vos ambitions et définir vos objectifs.",
  },
  {
    number: "02",
    title: "Diagnostic",
    description: "Analyse approfondie de votre situation et identification des axes de développement.",
  },
  {
    number: "03",
    title: "Stratégie",
    description: "Élaboration d'un plan d'action personnalisé et définition des étapes clés.",
  },
  {
    number: "04",
    title: "Accompagnement",
    description: "Suivi régulier et ajustements pour garantir l'atteinte de vos objectifs.",
  },
  {
    number: "05",
    title: "Lancement",
    description: "Mise en œuvre opérationnelle et accompagnement au démarrage de votre activité.",
  },
  {
    number: "06",
    title: "Suivi",
    description: "Bilan et optimisation continue pour pérenniser votre réussite entrepreneuriale.",
  },
];

const ProcessSection = () => {
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
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="reveal opacity-0 text-primary text-sm font-medium tracking-widest uppercase">
            Processus
          </span>
          <h2 className="reveal opacity-0 font-serif text-3xl md:text-4xl lg:text-5xl font-medium mt-4" style={{ animationDelay: "0.1s" }}>
            Une méthode{" "}
            <span className="text-gradient-gold">éprouvée</span>
          </h2>
          <p className="reveal opacity-0 text-muted-foreground mt-6" style={{ animationDelay: "0.2s" }}>
            Un accompagnement structuré en 6 étapes pour maximiser vos chances de succès.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="reveal opacity-0 relative group"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="relative z-10 p-8 border border-border/50 rounded-sm bg-background hover:border-primary/30 transition-all duration-500 hover:shadow-[0_4px_30px_-4px_hsla(43,56%,52%,0.2)]">
                  {/* Number */}
                  <div className="font-serif text-5xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-300 mb-4">
                    {step.number}
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-serif text-xl font-medium mb-3 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Dot on timeline */}
                <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary/50 group-hover:bg-primary group-hover:scale-150 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
