import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    setIsVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem("cookie-consent", "essential");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-card border-t border-border shadow-lg animate-fade-up">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-muted-foreground">
              Nous utilisons des cookies pour améliorer votre expérience. En continuant, vous acceptez notre{" "}
              <Link to="/politique-confidentialite" className="text-primary hover:underline">
                politique de confidentialité
              </Link>
              .
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" onClick={acceptEssential}>
              Essentiels uniquement
            </Button>
            <Button variant="premium" size="sm" onClick={acceptAll}>
              Accepter tout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
