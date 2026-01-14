import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
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
    <footer className="bg-slate-950 text-slate-200 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-8">
            <Link to="/" className="inline-flex items-center gap-4 group">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-2xl p-2 shadow-xl flex items-center justify-center transition-transform group-hover:rotate-3 duration-300">
                <img 
                  src="https://notas.goldenschoolhn.com/tema/Defecto/img/golden.png"
                  alt="Golden School Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl md:text-2xl text-white tracking-tight leading-tight">
                  {t("Golden Future School", "សាលាអនាគតមាស")}
                </span>
                <span className="text-[10px] md:text-xs font-medium text-yellow-500 uppercase tracking-[0.2em]">
                  {t("Excellence in Education", "ឧត្តមភាពក្នុងវិស័យអប់រំ")}
                </span>
              </div>
            </Link>
            
            <p className="text-slate-400 leading-relaxed max-w-md text-sm md:text-base">
              {t(
                "Providing quality education and nurturing tomorrow's leaders since 2005. Join our community of learners and achieve greatness.",
                "ផ្តល់ការអប់រំប្រកបដោយគុណភាព និងចិញ្ចឹមអ្នកដឹកនាំថ្ងៃស្អែកតាំងពីឆ្នាំ ២០០៥។ ចូលរួមជាមួយសហគមន៍អ្នកសិក្សារបស់យើង ដើម្បីសម្រេចបាននូវភាពអស្ចារ្យ។"
              )}
            </p>

            <div className="flex items-center gap-3">
              {[
                { Icon: Facebook, label: "Facebook", href: "#" },
                { Icon: Instagram, label: "Instagram", href: "#" },
                { Icon: Youtube, label: "Youtube", href: "#" }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href} 
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column - UPDATED FOR MOBILE ROW */}
          <div className="lg:col-span-3 lg:pl-12">
            <h4 className="font-bold text-white text-lg mb-6 lg:mb-8 relative inline-block">
              {t("Quick Links", "តំណភ្ជាប់រហ័ស")}
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-yellow-500 rounded-full"></span>
            </h4>
            
            {/* - Mobile: flex-row with wrap (one/two rows depending on text length)
                - Desktop: flex-col (traditional vertical list)
            */}
            <ul className="flex flex-row flex-wrap lg:flex-col gap-x-6 gap-y-4 lg:gap-x-0">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="group flex items-center gap-2 text-slate-400 hover:text-yellow-500 transition-colors duration-200"
                  >
                    {/* Arrow only visible on desktop to keep mobile row clean */}
                    <ArrowRight size={14} className="hidden lg:block opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span className="text-sm md:text-base whitespace-nowrap">{t(link.name, link.nameKh)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4">
            <h4 className="font-bold text-white text-lg mb-8 relative inline-block">
              {t("Contact Us", "ទំនាក់ទំនង")}
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-yellow-500 rounded-full"></span>
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="mt-1 w-10 h-10 shrink-0 rounded-xl bg-white/5 flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-300">
                   <Phone size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">{t("Call Us", "ទូរស័ព្ទ")}</span>
                  <span className="text-slate-200 text-sm md:text-base font-medium">+855 23 456 789</span>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="mt-1 w-10 h-10 shrink-0 rounded-xl bg-white/5 flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-300">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">{t("Email Us", "អ៊ីមែល")}</span>
                  <span className="text-slate-200 text-sm md:text-base font-medium break-all">info@goldenfuture.edu.kh</span>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="mt-1 w-10 h-10 shrink-0 rounded-xl bg-white/5 flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-300">
                  <MapPin size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">{t("Visit Us", "អាសយដ្ឋាន")}</span>
                  <span className="text-slate-200 text-sm md:text-base font-medium">Phnom Penh, Cambodia</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-slate-500 text-xs md:text-sm order-2 md:order-1">
            © {currentYear} <span className="text-slate-300 font-medium">{t("Golden Future School", "សាលាអនាគតមាស")}</span>. {t("All rights reserved.", "រក្សាសិទ្ធិគ្រប់យ៉ាង។")}
          </p>
          <div className="flex gap-6 text-xs text-slate-500 order-1 md:order-2">
            <a href="#" className="hover:text-yellow-500 transition-colors">{t("Privacy Policy", "គោលការណ៍ឯកជនភាព")}</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">{t("Terms of Service", "លក្ខខណ្ឌប្រើប្រាស់")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;