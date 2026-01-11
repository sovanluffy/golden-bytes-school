import { GraduationCap, Facebook, Instagram, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & About */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <p className="font-bold text-xl text-primary">Golden Future School</p>
                <p className="font-khmer text-sm text-background/70">សាលាអនាគតមាស</p>
              </div>
            </a>
            <p className="text-background/70 mb-4 max-w-md">
              Providing quality education and nurturing tomorrow's leaders since 2005. 
              Join our community of learners.
            </p>
            <p className="font-khmer text-background/60 text-sm max-w-md">
              ផ្តល់ការអប់រំប្រកបដោយគុណភាព និងចិញ្ចឹមអ្នកដឹកនាំថ្ងៃស្អែកតាំងពីឆ្នាំ ២០០៥។
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">
              Quick Links · តំណភ្ជាប់រហ័ស
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", nameKh: "ទំព័រដើម", href: "#home" },
                { name: "About Us", nameKh: "អំពីយើង", href: "#about" },
                { name: "Academics", nameKh: "កម្មវិធីសិក្សា", href: "#academics" },
                { name: "Events", nameKh: "ព្រឹត្តិការណ៍", href: "#events" },
                { name: "Contact", nameKh: "ទំនាក់ទំនង", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors inline-flex items-center gap-2"
                  >
                    {link.name}
                    <span className="font-khmer text-sm text-background/50">({link.nameKh})</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">
              Contact · ទំនាក់ទំនង
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-background/70">+855 23 456 789</p>
                  <p className="font-khmer text-background/50 text-sm">+៨៥៥ ២៣ ៤៥៦ ៧៨៩</p>
                </div>
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
            © {currentYear} Golden Future School. All rights reserved.
          </p>
          <p className="font-khmer text-background/40 text-xs mt-1">
            © {currentYear} សាលាអនាគតមាស។ រក្សាសិទ្ធិគ្រប់យ៉ាង។
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
