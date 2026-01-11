import { Link } from "react-router-dom";
import { GraduationCap, Facebook, Instagram, Youtube, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", nameKh: "ទំព័រដើម", href: "/" },
    { name: "About Us", nameKh: "អំពីយើង", href: "/about" },
    { name: "Academics", nameKh: "កម្មវិធីសិក្សា", href: "/academics" },
    { name: "Events", nameKh: "ព្រឹត្តិការណ៍", href: "/events" },
    { name: "Contact", nameKh: "ទំនាក់ទំនង", href: "/contact" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & About */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <p className="font-bold text-xl text-primary">
                  {t("Golden Future School", "សាលាអនាគតមាស")}
                </p>
                <p className="font-khmer text-sm text-background/70">
                  {t("សាលាអនាគតមាស", "Golden Future School")}
                </p>
              </div>
            </Link>
            <p className="text-background/70 mb-4 max-w-md">
              {t(
                "Providing quality education and nurturing tomorrow's leaders since 2005. Join our community of learners.",
                "ផ្តល់ការអប់រំប្រកបដោយគុណភាព និងចិញ្ចឹមអ្នកដឹកនាំថ្ងៃស្អែកតាំងពីឆ្នាំ ២០០៥។ ចូលរួមជាមួយសហគមន៍អ្នកសិក្សារបស់យើង។"
              )}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Youtube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">
              {t("Quick Links", "តំណភ្ជាប់រហ័ស")}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-background/70 hover:text-primary transition-colors">
                    {t(link.name, link.nameKh)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">
              {t("Contact", "ទំនាក់ទំនង")}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-background/70">+855 23 456 789</p>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-background/70">info@goldenfuture.edu.kh</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 text-center">
          <p className="text-background/50 text-sm">
            © {currentYear} {t("Golden Future School", "សាលាអនាគតមាស")}. {t("All rights reserved.", "រក្សាសិទ្ធិគ្រប់យ៉ាង។")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
