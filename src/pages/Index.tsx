import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Élite Conseil | Accompagnement Premium Création d'Entreprise</title>
        <meta
          name="description"
          content="Accompagnement premium et personnalisé pour la création de votre entreprise. Business plan, coaching, mentorat stratégique. Transformez votre vision en succès."
        />
        <meta property="og:title" content="Élite Conseil | Accompagnement Premium Création d'Entreprise" />
        <meta
          property="og:description"
          content="Accompagnement premium et personnalisé pour la création de votre entreprise."
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutPreview />
          <ServicesSection />
          <ProcessSection />
          <TestimonialsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
