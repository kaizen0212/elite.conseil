import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const MentionsLegales = () => {
  return (
    <>
      <Helmet>
        <title>Mentions Légales | Élite Conseil</title>
        <meta name="description" content="Mentions légales du site Élite Conseil - Accompagnement premium pour entrepreneurs." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20">
          <section className="section-padding">
            <div className="container mx-auto max-w-4xl">
              <h1 className="font-serif text-4xl md:text-5xl font-medium mb-8">
                Mentions <span className="text-gradient-gold">Légales</span>
              </h1>

              <div className="prose prose-lg max-w-none space-y-8">
                <section className="card-premium p-8">
                  <h2 className="font-serif text-2xl font-medium mb-4 text-primary">1. Éditeur du site</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Le site Élite Conseil est édité par :<br />
                    <strong>Élite Conseil</strong><br />
                    Adresse : Paris, France<br />
                    Téléphone : +33 7 69 55 49 42<br />
                    Email : contact@elite-conseil.fr
                  </p>
                </section>

                <section className="card-premium p-8">
                  <h2 className="font-serif text-2xl font-medium mb-4 text-primary">2. Hébergement</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Le site est hébergé par Lovable.<br />
                    Adresse : San Francisco, États-Unis
                  </p>
                </section>

                <section className="card-premium p-8">
                  <h2 className="font-serif text-2xl font-medium mb-4 text-primary">3. Propriété intellectuelle</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive d'Élite Conseil, 
                    à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
                    Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents éléments 
                    est strictement interdite sans l'accord exprès par écrit d'Élite Conseil.
                  </p>
                </section>

                <section className="card-premium p-8">
                  <h2 className="font-serif text-2xl font-medium mb-4 text-primary">4. Limitation de responsabilité</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, 
                    mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes. Élite Conseil ne pourra être tenue 
                    responsable des dommages directs et indirects causés au matériel de l'utilisateur lors de l'accès au site.
                  </p>
                </section>

                <section className="card-premium p-8">
                  <h2 className="font-serif text-2xl font-medium mb-4 text-primary">5. Droit applicable</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Tout litige en relation avec l'utilisation du site Élite Conseil est soumis au droit français.
                  </p>
                </section>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MentionsLegales;
