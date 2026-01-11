import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X, GraduationCap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";

const navLinks = [
  { name: "Home", nameKh: "ទំព័រដើម", href: "/" },
  { name: "About", nameKh: "អំពីយើង", href: "/about" },
  { name: "Academics", nameKh: "កម្មវិធីសិក្សា", href: "/academics" },
  { name: "Events", nameKh: "ព្រឹត្តិការណ៍", href: "/events" },
  { name: "Contact", nameKh: "ទំនាក់ទំនង", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "kh" : "en");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 md:w-12 md:h-12 gold-gradient rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-lg leading-tight">
                {t("Golden Future", "អនាគតមាស")}
              </p>
              <p className="font-khmer text-xs text-muted-foreground leading-tight">
                {t("សាលាអនាគតមាស", "Golden Future School")}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`nav-link group ${
                  location.pathname === link.href ? "text-primary" : ""
                }`}
              >
                <span className="font-medium">{t(link.name, link.nameKh)}</span>
              </Link>
            ))}
          </div>

          {/* Search, Language Toggle & Contact */}
          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder={t("Search...", "ស្វែងរក...")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-40 lg:w-48 h-10 rounded-full bg-muted/50 border-transparent focus:border-primary focus:bg-background transition-all"
              />
            </div>
            
            {/* Language Toggle Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2 rounded-full px-4 h-10 border-primary/30 hover:border-primary hover:bg-primary/10"
            >
              <Globe className="w-4 h-4" />
              <span className="font-medium">{language === "en" ? "ខ្មែរ" : "EN"}</span>
            </Button>

            <Button className="btn-primary rounded-full" asChild>
              <Link to="/contact">
                {t("Contact Us", "ទំនាក់ទំនង")}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Mobile Language Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-1 rounded-full px-3 h-9 border-primary/30"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{language === "en" ? "ខ្មែរ" : "EN"}</span>
            </Button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          {/* Mobile Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder={t("Search...", "ស្វែងរក...")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-full h-12 rounded-xl bg-muted/50"
            />
          </div>

          {/* Mobile Links */}
          <div className="space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between p-3 rounded-xl hover:bg-muted transition-colors ${
                  location.pathname === link.href ? "bg-primary/10 text-primary" : ""
                }`}
              >
                <span className="font-medium">{t(link.name, link.nameKh)}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Contact Button */}
          <Button className="btn-primary w-full mt-4 rounded-xl h-12" asChild>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              {t("Contact Us", "ទំនាក់ទំនង")} · {t("ទំនាក់ទំនង", "Contact Us")}
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
