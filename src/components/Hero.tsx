import { Link } from "react-router-dom";
import heroVideo from "@/assets/hero-school.mp4"; 
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      
      {/* ===== Video Background with Enhanced Masking ===== */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover scale-105" // slight scale prevents edge artifacts
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Dynamic Overlay: Darker on edges, clearer in the middle */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-slate-900" />
        <div className="absolute inset-0 bg-black/20 backdrop-brightness-90" />
      </div>

      {/* ===== Content Section ===== */}
      <div className="relative z-10 container mx-auto px-6 py-24 text-center">
        <div className="max-w-5xl mx-auto">

          {/* Premium Badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <GraduationCap className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-semibold text-xs md:text-sm tracking-widest uppercase">
              {t("Excellence in Education Since 2005", "ភាពឆ្នើមក្នុងការអប់រំចាប់តាំងពីឆ្នាំ ២០០៥")}
            </span>
          </div>

          {/* Hero Heading */}
          <div className="space-y-6 mb-10">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
              {t("Empowering Your", "ពង្រឹងសមត្ថភាព")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200">
                {t("Golden Future", "អនាគតមាស")}
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              {t(
                "Nurturing young minds through world-class quality education and character development in the heart of Cambodia.",
                "ចិញ្ចឹមបីបាច់កុមារឱ្យក្លាយជាអ្នកដឹកនាំថ្ងៃស្អែក តាមរយៈការអប់រំប្រកបដោយគុណភាពកម្រិតពិភពលោក។"
              )}
            </p>
          </div>

          {/* Action Buttons */}
 {/* Action Buttons - Forced Row on Mobile */}
<div className="flex flex-row items-center justify-center gap-3 sm:gap-5 mb-20 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
  <Button 
    size="lg" 
    className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 text-sm md:text-lg font-bold px-6 md:px-10 py-6 md:py-7 rounded-full shadow-2xl shadow-yellow-500/20 transition-all hover:-translate-y-1 group" 
    asChild
  >
    <Link to="/about">
      {t("Get Started", "ចាប់ផ្តើម")}
      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-2 transition-transform" />
    </Link>
  </Button>
  
  <Button 
    size="lg" 
    variant="outline" 
    className="bg-white/5 backdrop-blur-md text-white border-white/30 hover:bg-white/10 text-sm md:text-lg font-bold px-6 md:px-10 py-6 md:py-7 rounded-full transition-all hover:-translate-y-1" 
    asChild
  >
    <Link to="/contact">
      <Users className="w-4 h-4 md:w-5 md:h-5 mr-2" />
      {t("Inquire", "សាកសួរ")}
    </Link>
  </Button>
</div>

          {/* Stats Section with Floating Animation */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 animate-in fade-in zoom-in-95 duration-1000 delay-500">
            {[
              { value: "20+", label: "Years Experience", labelKh: "ឆ្នាំនៃបទពិសោធន៍" },
              { value: "1.5K+", label: "Active Students", labelKh: "សិស្សសកម្ម" },
              { value: "100+", label: "Certified Teachers", labelKh: "គ្រូដែលមានវិញ្ញាបនបត្រ" },
              { value: "98%", label: "Placement Rate", labelKh: "អត្រាជោគជ័យ" },
            ].map((stat, index) => (
              <div
                key={index}
                className="relative group bg-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/10 transition-all hover:bg-white/10 hover:border-yellow-500/50"
              >
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-yellow-500/10 rounded-full blur-xl group-hover:bg-yellow-500/20 transition-all" />
                <p className="text-3xl md:text-5xl font-black text-yellow-500 mb-1">
                  {stat.value}
                </p>
                <p className="text-white/70 text-xs md:text-sm font-bold uppercase tracking-wider">
                  {t(stat.label, stat.labelKh)}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <div className="w-[2px] h-12 bg-gradient-to-b from-yellow-500 to-transparent rounded-full overflow-hidden">
          <div className="w-full h-1/2 bg-white animate-scroll-move" />
        </div>
      </div>

      <style>{`
        @keyframes scroll-move {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .animate-scroll-move {
          animation: scroll-move 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;