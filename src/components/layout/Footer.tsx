import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl font-semibold tracking-wide">
                <span className="text-primary">É</span>lite
                <span className="text-primary">.</span>Conseil
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Accompagnement premium pour la création et le développement de votre entreprise.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6 text-primary">Navigation</h4>
            <ul className="space-y-3">
              {["Accueil", "À propos", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Accueil" ? "/" : `/${item.toLowerCase().replace("à propos", "a-propos")}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6 text-primary">Services</h4>
            <ul className="space-y-3">
              {[
                "Business Plan",
                "Coaching Création",
                "Accompagnement Administratif",
                "Mentorat Stratégique",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6 text-primary">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">contact@elite-conseil.fr</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">+33 7 69 55 49 42</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-xs">
              © 2024 Élite Conseil. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/mentions-legales"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-xs"
              >
                Mentions Légales
              </Link>
              <Link
                to="/politique-confidentialite"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-xs"
              >
                Politique de Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
