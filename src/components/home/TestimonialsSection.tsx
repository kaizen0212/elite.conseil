import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Marie Dupont",
    role: "Fondatrice, Studio Créatif",
    content:
      "Un accompagnement exceptionnel qui a transformé mon projet en réalité. La méthodologie et l'expertise m'ont permis de lancer mon entreprise en toute sérénité.",
  },
  {
    name: "Thomas Bernard",
    role: "CEO, TechStart",
    content:
      "Grâce à cet accompagnement premium, j'ai pu structurer mon business plan et convaincre mes premiers investisseurs. Une expérience inestimable.",
  },
  {
    name: "Sophie Laurent",
    role: "Consultante Indépendante",
    content:
      "La qualité du mentorat et la personnalisation de l'accompagnement ont fait toute la différence dans mon parcours entrepreneurial. Je recommande vivement.",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="section-padding">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="reveal opacity-0 text-primary text-sm font-medium tracking-widest uppercase">
            Témoignages
          </span>
          <h2 className="reveal opacity-0 font-serif text-3xl md:text-4xl lg:text-5xl font-medium mt-4" style={{ animationDelay: "0.1s" }}>
            Ils nous font{" "}
            <span className="text-gradient-gold">confiance</span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="reveal opacity-0 max-w-4xl mx-auto" style={{ animationDelay: "0.3s" }}>
          <div className="relative card-premium p-10 md:p-16">
            {/* Quote Icon */}
            <Quote size={48} className="text-primary/20 absolute top-8 left-8" />

            {/* Content */}
            <div className="relative z-10 text-center">
              <p className="font-serif text-xl md:text-2xl lg:text-3xl leading-relaxed text-foreground/90 mb-10">
                "{testimonials[activeIndex].content}"
              </p>

              <div className="space-y-2">
                <p className="font-serif text-lg font-medium text-primary">
                  {testimonials[activeIndex].name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center space-x-4 mt-10">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      index === activeIndex
                        ? "bg-primary w-8"
                        : "bg-border hover:bg-primary/50"
                    )}
                    aria-label={`Aller au témoignage ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
                aria-label="Témoignage suivant"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
