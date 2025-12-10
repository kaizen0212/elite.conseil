import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@elite-conseil.fr",
    href: "mailto:contact@elite-conseil.fr",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+33 1 23 45 67 89",
    href: "tel:+33123456789",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Paris, France",
    href: "#",
  },
  {
    icon: Clock,
    label: "Horaires",
    value: "Lun - Ven : 9h - 18h",
    href: "#",
  },
];

const Contact = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <Helmet>
        <title>Contact | Élite Conseil - Réservez votre Consultation</title>
        <meta
          name="description"
          content="Contactez-nous pour réserver votre consultation gratuite. Accompagnement premium pour la création de votre entreprise."
        />
      </Helmet>

      <div ref={pageRef} className="min-h-screen bg-background">
        <Header />

        <main className="pt-20">
          {/* Hero Section */}
          <section className="section-padding">
            <div className="container mx-auto text-center">
              <span className="reveal opacity-0 text-primary text-sm font-medium tracking-widest uppercase">
                Contact
              </span>
              <h1 className="reveal opacity-0 font-serif text-4xl md:text-5xl lg:text-6xl font-medium mt-4 mb-6" style={{ animationDelay: "0.1s" }}>
                Parlons de votre{" "}
                <span className="text-gradient-gold">projet</span>
              </h1>
              <p className="reveal opacity-0 text-muted-foreground text-lg max-w-2xl mx-auto" style={{ animationDelay: "0.2s" }}>
                Réservez votre consultation découverte gratuite et faisons connaissance. 
                Première réponse garantie sous 24 heures.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="section-padding pt-0">
            <div className="container mx-auto">
              <div className="grid lg:grid-cols-2 gap-16">
                {/* Contact Form */}
                <div className="reveal opacity-0" style={{ animationDelay: "0.3s" }}>
                  <div className="card-premium p-8 lg:p-10">
                    <h2 className="font-serif text-2xl font-medium mb-6">
                      Envoyer un message
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="firstName" className="text-sm font-medium text-muted-foreground">
                            Prénom *
                          </label>
                          <Input
                            id="firstName"
                            name="firstName"
                            required
                            placeholder="Votre prénom"
                            className="bg-background border-border focus:border-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="lastName" className="text-sm font-medium text-muted-foreground">
                            Nom *
                          </label>
                          <Input
                            id="lastName"
                            name="lastName"
                            required
                            placeholder="Votre nom"
                            className="bg-background border-border focus:border-primary"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="votre@email.com"
                          className="bg-background border-border focus:border-primary"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-muted-foreground">
                          Téléphone
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+33 6 00 00 00 00"
                          className="bg-background border-border focus:border-primary"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-muted-foreground">
                          Objet *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          required
                          placeholder="Comment pouvons-nous vous aider ?"
                          className="bg-background border-border focus:border-primary"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-muted-foreground">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          placeholder="Décrivez votre projet..."
                          rows={5}
                          className="bg-background border-border focus:border-primary resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="premium"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
                      </p>
                    </form>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-8">
                  <div className="reveal opacity-0" style={{ animationDelay: "0.4s" }}>
                    <h2 className="font-serif text-2xl font-medium mb-6">
                      Informations de contact
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      N'hésitez pas à nous contacter par le moyen qui vous convient le mieux. 
                      Nous nous engageons à vous répondre dans les 24 heures ouvrées.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.href}
                        className="reveal opacity-0 flex items-start space-x-4 p-4 rounded-sm border border-border/50 hover:border-primary/30 hover:bg-card/50 transition-all duration-300 group"
                        style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                      >
                        <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                          <info.icon size={24} className="text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <p className="font-medium group-hover:text-primary transition-colors duration-300">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* Calendly Section */}
                  <div className="reveal opacity-0 card-premium p-8 mt-8" style={{ animationDelay: "0.9s" }}>
                    <h3 className="font-serif text-xl font-medium mb-4">
                      Réserver directement un créneau
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      Préférez-vous planifier directement un appel ? Choisissez le créneau qui vous convient.
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="#calendly" target="_blank" rel="noopener noreferrer">
                        Accéder au calendrier
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
