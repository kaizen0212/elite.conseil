import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const PolitiqueConfidentialite = () => {
  return (
    <>
      <Helmet>
        <title>Politique de Confidentialité | Élite Conseil</title>
        <meta name="description" content="Politique de confidentialité et protection des données personnelles - Élite Conseil." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20">
          <section className="section-padding">
            <div className="container mx-auto max-w-4xl">
              <h1 className="font-serif text-4xl md:text-5xl font-medium mb-8">
                Politique de <span className="text-gradient-gold">Confidentialité</span>
              </h1>

              <div className="prose prose-lg max-w-none space-y-8">
                <section className="card-premium p-8">
                  <h2 className="font-serif text-2xl font-medium mb-4 text-primary">1. Collecte des données</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Nous collectons les informations que vous nous fournissez directement, notamment lorsque vous :
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                    <li>Remplissez notre formulaire de contact</li>
                    <li>Vous inscrivez à notre newsletter</li>
                    <li>Réservez une consultation</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Les données collectées incluent : nom, prénom, adresse email, numéro de téléphone.
                  </p>
                </section>

                <section className="card-premium p-8">
                  <h2 className="font-serif text-2xl font-medium mb-4 text-primary">2. Utilisation des données</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Vos données personnelles sont utilisées pour :
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                    <li>Répondre à vos demandes de contact</li>
                    <li>Vous envoyer des informations sur nos services</li>
                    <li>Améliorer notre site et nos services</li>
                    <li>Respecter nos obligations légales</li>
                  </ul>
                </section>

                <section className="card-premium p-8">
                  <h2 className="font-serif text-2xl font-medium mb-4 text-primary">3. Cookies</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Notre site utilise des cookies pour améliorer votre expérience de navigation. 
                    Vous pouvez à tout moment choisir de désactiver ces cookies via les paramètres de votre navigateur.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    <strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site.<br />
                    <strong>Cookies analytiques :</strong> Nous aident à comprendre comment vous utilisez le site.
                  </p>
                </section>

                <section className="card-premium p-8">
                  <h2 className="font-serif text-2xl font-medium mb-4 text-primary">4. Vos droits (RGPD)</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                    <li><strong>Droit d'accès :</strong> Obtenir une copie de vos données personnelles</li>
                    <li><strong>Droit de rectification :</strong> Corriger des données inexactes</li>
                    <li><strong>Droit à l'effacement :</strong> Demander la suppression de vos données</li>
                    <li><strong>Droit à la portabilité :</strong> Recevoir vos données dans un format structuré</li>
                    <li><strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Pour exercer ces droits, contactez-nous à : contact@elite-conseil.fr
                  </p>
                </section>

                <section className="card-premium p-8">
                  <h2 className="font-serif text-2xl font-medium mb-4 text-primary">5. Conservation des données</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Vos données personnelles sont conservées pendant une durée de 3 ans à compter de votre dernier contact avec nous, 
                    sauf obligation légale de conservation plus longue.
                  </p>
                </section>

                <section className="card-premium p-8">
                  <h2 className="font-serif text-2xl font-medium mb-4 text-primary">6. Contact</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, 
                    vous pouvez nous contacter :<br /><br />
                    <strong>Email :</strong> contact@elite-conseil.fr<br />
                    <strong>Téléphone :</strong> +33 7 69 55 49 42<br />
                    <strong>Adresse :</strong> Paris, France
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

export default PolitiqueConfidentialite;
