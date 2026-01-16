import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  Clock,
  ChevronDown,
} from "lucide-react";
import { FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

import enFlag from "@/assets/Flag_of_the_United_Kingdom_(3-5).svg.png";
import khFlag from "@/assets/Flag_of_Cambodia.svg";

interface NavItem {
  nameEn: string;
  nameKh: string;
  href?: string;
  dropdown?: NavItem[];
}

const navLinks: NavItem[] = [
  { nameEn: "Careers", nameKh: "អាជីព", href: "/career" },
  { nameEn: "Events", nameKh: "ព្រឹត្តិការណ៍", href: "/events" },
  { nameEn: "Resources", nameKh: "ធនធាន", href: "/resources" },
  { nameEn: "Career Center", nameKh: "មជ្ឈមណ្ឌលអាជីព", href: "/career-center" },
  {
    nameEn: "About", 
    nameKh: "អំពីពួកយើង",
    href: "/about",
    dropdown: [
      { nameEn: "Institutes", nameKh: "វិទ្យាស្ថាន", href: "/institutes" },
      { nameEn: "Academic", nameKh: "អកាដាមិច", href: "/academic" },
      { nameEn: "Research", nameKh: "ស្រាវជ្រាវ", href: "/research" },
      { nameEn: "Innovation", nameKh: "ច្នៃប្រឌិត", href: "/innovation" },
      { nameEn: "DigiCheck", nameKh: "DigiCheck", href: "/digicheck" },
    ],
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300">

      {/* ===== Top Info Bar (Hidden on Mobile) ===== */}
      <div className="hidden md:flex justify-between items-center bg-slate-900 text-white/90 text-[12px] px-8 h-10 border-b border-white/5">
        <div className="flex items-center gap-6">
          <a href="tel:+85578523666" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
            <Phone size={13} className="text-orange-400" /> +855 (0)78 523 666
          </a>
          <span className="flex items-center gap-2 opacity-80">
            <Clock size={13} className="text-orange-400" /> 07:30 – 17:00
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4 border-r border-white/10 pr-4">
            <a href="#" className="hover:text-orange-400 transition-colors"><FaFacebook size={14} /></a>
            <a href="#" className="hover:text-orange-400 transition-colors"><FaYoutube size={16} /></a>
            <a href="#" className="hover:text-orange-400 transition-colors"><FaTiktok size={13} /></a>
          </div>
          <button 
            onClick={toggleLanguage} 
            className="flex items-center gap-2 hover:text-orange-400 transition-all font-bold uppercase tracking-wider text-[11px]"
          >
            <img src={language === "en" ? enFlag : khFlag} className="w-4 h-4 rounded-full object-cover shadow-sm" alt="flag" />
            {language}
          </button>
        </div>
      </div>

      {/* ===== Main Navbar ===== */}
      <nav className="bg-white/90 backdrop-blur-xl border-b border-slate-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 md:h-24 flex items-center justify-between gap-4">

          {/* Clean Logo: Using object-contain and crisp sizing */}
          <Link to="/" className="flex-shrink-0 relative z-10">
            <img
              src="https://notas.goldenschoolhn.com/tema/Defecto/img/golden.png"
              alt="Golden School Logo"
              className="h-12 w-auto md:h-16 lg:h-20 transition-all duration-500 transform group-hover:scale-105 select-none"
              style={{ imageRendering: 'auto' }} // Ensures high quality
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.nameEn}
                  className="relative py-2"
                  onMouseEnter={() => setOpenDropdown(link.nameEn)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl font-bold text-[15px] text-slate-700 hover:text-orange-600 hover:bg-orange-50/50 transition-all">
                    {t(link.nameEn, link.nameKh)}
                    <ChevronDown size={14} className={cn("transition-transform duration-300", openDropdown === link.nameEn && "rotate-180")} />
                  </button>

                  <div className={cn(
                    "absolute top-full left-0 w-56 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-100 p-2 z-50 transition-all duration-300 origin-top",
                    openDropdown === link.nameEn ? "opacity-100 scale-100 translate-y-2" : "opacity-0 scale-95 translate-y-0 pointer-events-none"
                  )}>
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.nameEn}
                        to={item.href!}
                        className="block px-4 py-3 text-[14px] font-semibold text-slate-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all"
                      >
                        {t(item.nameEn, item.nameKh)}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.nameEn}
                  to={link.href!}
                  className="px-4 py-2 rounded-xl font-bold text-[15px] text-slate-700 hover:text-orange-600 hover:bg-orange-50/50 transition-all"
                >
                  {t(link.nameEn, link.nameKh)}
                </Link>
              )
            )}
          </div>

          {/* Desktop Call to Action */}
          <div className="flex items-center gap-3">
            <Button
              className="hidden sm:flex bg-slate-900 hover:bg-orange-600 text-white font-black px-6 py-6 rounded-2xl shadow-lg transition-all active:scale-95"
              asChild
            >
              <Link to="/contact">{t("Apply Now", "ដាក់ពាក្យ")}</Link>
            </Button>

            {/* Mobile Menu Trigger */}
            <Button
              size="icon"
              variant="ghost"
              className="lg:hidden text-slate-800 bg-slate-100 rounded-2xl h-12 w-12"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </Button>
          </div>
        </div>
      </nav>

      {/* ===== Refined Mobile Menu Overlay ===== */}
      <div className={cn(
        "fixed inset-0 bg-slate-900/60 backdrop-blur-md lg:hidden transition-all duration-500",
        menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      )} onClick={() => setMenuOpen(false)}>
        <div
          className={cn(
            "fixed right-4 top-4 bottom-4 w-[85%] max-w-[340px] bg-white rounded-[2.5rem] shadow-2xl transition-transform duration-500 ease-in-out overflow-hidden flex flex-col",
            menuOpen ? "translate-x-0" : "translate-x-[120%]"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Menu Header */}
          <div className="p-8 pb-4 flex items-center justify-between">
             <img src="https://notas.goldenschoolhn.com/tema/Defecto/img/golden.png" alt="logo" className="h-10 w-auto" />
             <Button variant="ghost" size="icon" className="rounded-full bg-slate-50" onClick={() => setMenuOpen(false)}>
                <X size={20} />
             </Button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-2">
            {/* Language Switch for Mobile */}
            <div className="grid grid-cols-2 gap-2 mb-8 p-1 bg-slate-100 rounded-2xl">
                <button 
                  onClick={() => language === 'kh' && toggleLanguage()}
                  className={cn("flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all", language === 'en' ? "bg-white text-orange-600 shadow-sm" : "text-slate-500")}>
                  <img src={enFlag} className="w-4 h-4 rounded-full" /> EN
                </button>
                <button 
                  onClick={() => language === 'en' && toggleLanguage()}
                  className={cn("flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all", language === 'kh' ? "bg-white text-orange-600 shadow-sm" : "text-slate-500")}>
                  <img src={khFlag} className="w-4 h-4 rounded-full" /> KH
                </button>
            </div>

            {navLinks.map((link) => (
              <div key={link.nameEn}>
                {link.dropdown ? (
                  <div className="space-y-1">
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.nameEn ? null : link.nameEn)}
                      className="flex items-center justify-between w-full p-4 rounded-2xl font-black text-slate-800 bg-slate-50 hover:bg-orange-50 transition-colors"
                    >
                      {t(link.nameEn, link.nameKh)}
                      <ChevronDown size={18} className={cn("transition-transform duration-300", openDropdown === link.nameEn && "rotate-180")} />
                    </button>
                    <div className={cn(
                      "overflow-hidden transition-all duration-300 pl-4 space-y-1",
                      openDropdown === link.nameEn ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                    )}>
                      {link.dropdown.map((sub) => (
                        <Link key={sub.nameEn} to={sub.href!} className="block p-3 font-bold text-slate-500 hover:text-orange-600">
                          {t(sub.nameEn, sub.nameKh)}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.href!}
                    className="block p-4 rounded-2xl font-black text-slate-800 hover:bg-orange-50 transition-colors"
                  >
                    {t(link.nameEn, link.nameKh)}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="p-8 border-t border-slate-100">
             <Button className="w-full bg-orange-500 hover:bg-orange-600 rounded-2xl h-14 font-black text-lg shadow-lg shadow-orange-200" asChild>
                <Link to="/contact">{t("Contact Us", "ទំនាក់ទំនង")}</Link>
             </Button>
          </div>
        </div>
      </div>
    </header>
  );
}