import { useState } from "react";
import { Search, Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const navLinks = [
  { name: "Home", nameKh: "ទំព័រដើម", href: "#home" },
  { name: "About", nameKh: "អំពីយើង", href: "#about" },
  { name: "Academics", nameKh: "កម្មវិធីសិក្សា", href: "#academics" },
  { name: "Events", nameKh: "ព្រឹត្តិការណ៍", href: "#events" },
  { name: "Contact", nameKh: "ទំនាក់ទំនង", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 md:w-12 md:h-12 gold-gradient rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-lg leading-tight">Golden Future</p>
              <p className="font-khmer text-xs text-muted-foreground leading-tight">សាលាអនាគតមាស</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link group">
                <span className="font-medium">{link.name}</span>
                <span className="font-khmer text-xs block text-muted-foreground group-hover:text-foreground transition-colors">
                  {link.nameKh}
                </span>
              </a>
            ))}
          </div>

          {/* Search & Contact */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-48 lg:w-56 h-10 rounded-full bg-muted/50 border-transparent focus:border-primary focus:bg-background transition-all"
              />
            </div>
            <Button className="btn-primary rounded-full" asChild>
              <a href="#contact">
                <span className="hidden lg:inline">Contact Us</span>
                <span className="lg:hidden">Contact</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-full h-12 rounded-xl bg-muted/50"
            />
          </div>

          {/* Mobile Links */}
          <div className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-muted transition-colors"
              >
                <span className="font-medium">{link.name}</span>
                <span className="font-khmer text-sm text-muted-foreground">{link.nameKh}</span>
              </a>
            ))}
          </div>

          {/* Mobile Contact Button */}
          <Button className="btn-primary w-full mt-4 rounded-xl h-12" asChild>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact Us · ទំនាក់ទំនង
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
