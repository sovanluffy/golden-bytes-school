import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  Clock,
  ChevronDown,
  Facebook,
  Youtube,
  Globe,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

interface NavItem {
  nameEn: string;
  nameKh: string;
  href?: string;
  dropdown?: NavItem[];
}

const navLinks: NavItem[] = [
  { nameEn: "Careers", nameKh: "អាជីព", href: "/careers" },
  { nameEn: "GovTech", nameKh: "រដ្ឋបច្ចេកវិទ្យា", href: "/govtech" },
  { nameEn: "Events", nameKh: "ព្រឹត្តិការណ៍", href: "/events" },
  { nameEn: "Resources", nameKh: "ធនធាន", href: "/resources" },
  { nameEn: "Career Center", nameKh: "មជ្ឈមណ្ឌលអាជីព", href: "/career-center" },
  {
    nameEn: "About",
    nameKh: "អំពីពួកយើង",
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
      {/* ===== Top Info Bar ===== */}
      <div className="hidden md:flex justify-between items-center bg-slate-900 text-white/90 text-[13px] px-8 h-9">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
            <Phone size={14} className="text-yellow-400" /> +855 (0)78 523 666
          </span>
          <span className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
            <Clock size={14} className="text-yellow-400" /> 07:30 – 17:00
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-white/50">|</span>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-yellow-400 transition-colors"><Facebook size={15} /></a>
            <a href="#" className="hover:text-yellow-400 transition-colors"><Youtube size={17} /></a>
            <a href="#" className="hover:text-yellow-400 transition-colors"><FaTiktok size={14} /></a>
          </div>
        </div>
      </div>

      {/* ===== Main Navbar ===== */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          <Link to="/" className="flex items-center gap-3 group transition-transform hover:scale-[1.02]">
            <img
              src="https://notas.goldenschoolhn.com/tema/Defecto/img/golden.png"
              alt="Logo"
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.nameEn}
                  className="relative group py-2 px-3"
                  onMouseEnter={() => setOpenDropdown(link.nameEn)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center gap-1.5 font-semibold text-slate-700 group-hover:text-yellow-600 transition-colors">
                    {t(link.nameEn, link.nameKh)}
                    <ChevronDown size={14} className={cn("transition-transform duration-200", openDropdown === link.nameEn && "rotate-180")} />
                  </button>

                  <div className={cn(
                    "absolute top-full left-0 w-52 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 transition-all duration-200 origin-top-left",
                    openDropdown === link.nameEn ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                  )}>
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.nameEn}
                        to={item.href!}
                        className="block px-4 py-2.5 text-[15px] text-slate-600 hover:text-yellow-600 hover:bg-slate-50 transition-all"
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
                  className="px-4 py-2 font-semibold text-slate-700 hover:text-yellow-600 transition-colors"
                >
                  {t(link.nameEn, link.nameKh)}
                </Link>
              )
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Desktop-Only Language Switcher (Hidden on Mobile) */}
            <Button
              variant="ghost"
              className="hidden lg:flex items-center gap-2 rounded-full font-bold text-slate-700 hover:bg-slate-100 px-4"
              onClick={toggleLanguage}
            >
              <Globe size={18} className="text-slate-500" />
              <span>{language.toUpperCase()}</span>
            </Button>

            <Button
              className="hidden md:flex bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-5 rounded-full shadow-md shadow-yellow-200 transition-all hover:-translate-y-0.5"
              asChild
            >
              <Link to="/contact">{t("Contact Us", "ទំនាក់ទំនង")}</Link>
            </Button>

            {/* Mobile Menu Icon */}
            <Button
              size="icon"
              variant="ghost"
              className="lg:hidden text-slate-700 ml-1 rounded-full h-11 w-11"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </nav>

      {/* ===== Mobile Menu Overlay ===== */}
      <div className={cn(
        "fixed inset-0 bg-slate-900/40 backdrop-blur-sm lg:hidden transition-opacity duration-300",
        menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )} onClick={() => setMenuOpen(false)}>
        <div 
          className={cn(
            "fixed right-0 top-0 h-full w-[280px] bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col",
            menuOpen ? "translate-x-0" : "translate-x-full"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 flex items-center justify-between border-b">
            <span className="font-bold text-slate-800">{t("Menu", "មីនុយ")}</span>
            <Button variant="ghost" size="icon" onClick={() => setMenuOpen(false)}>
              <X size={20} />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {/* Mobile Language Switcher Section */}
            <div className="px-3 py-2 mb-4 bg-slate-50 rounded-xl">
              <p className="text-[12px] uppercase tracking-wider text-slate-400 font-bold mb-2 ml-1">
                {t("Language", "ភាសា")}
              </p>
              <div className="flex gap-2">
                <button 
                  onClick={language === 'kh' ? toggleLanguage : undefined}
                  className={cn(
                    "flex-1 py-2 rounded-lg font-bold transition-all text-sm",
                    language === 'en' ? "bg-white shadow-sm text-yellow-600" : "text-slate-500 hover:bg-slate-100"
                  )}
                >
                  English
                </button>
                <button 
                   onClick={language === 'en' ? toggleLanguage : undefined}
                  className={cn(
                    "flex-1 py-2 rounded-lg font-bold transition-all text-sm",
                    language === 'kh' ? "bg-white shadow-sm text-yellow-600" : "text-slate-500 hover:bg-slate-100"
                  )}
                >
                  ភាសាខ្មែរ
                </button>
              </div>
            </div>

            {navLinks.map((link) => (
              <div key={link.nameEn} className="border-b border-slate-50 last:border-none pb-2">
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.nameEn ? null : link.nameEn)}
                      className="flex items-center justify-between w-full p-3 font-bold text-slate-700"
                    >
                      {t(link.nameEn, link.nameKh)}
                      <ChevronDown size={16} className={cn("transition-transform", openDropdown === link.nameEn && "rotate-180")} />
                    </button>
                    {openDropdown === link.nameEn && (
                      <div className="bg-slate-50 rounded-lg ml-2 mb-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.nameEn}
                            to={item.href!}
                            className="block p-3 text-slate-600 pl-6"
                          >
                            {t(item.nameEn, item.nameKh)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.href!}
                    className="block p-3 font-bold text-slate-700"
                  >
                    {t(link.nameEn, link.nameKh)}
                  </Link>
                )}
              </div>
            ))}
          </div>
          
          <div className="p-6 bg-slate-50">
             <Button className="w-full bg-yellow-500 rounded-full font-bold h-12" asChild>
                <Link to="/contact">{t("Get in Touch", "ទាក់ទងមកយើង")}</Link>
             </Button>
          </div>
        </div>
      </div>
    </header>
  );
}