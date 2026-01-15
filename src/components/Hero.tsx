import { Link } from "react-router-dom";
import heroVideo from "@/assets/700_F_1756639204_xY1wXcBOsoumVeA2CvnjYwsYcoe5IIQk_ST.mp4"; 
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      
      {/* ===== Video Background ===== */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover scale-105"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      </div>

      {/* ===== Hero Content ===== */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 sm:px-12 md:px-24 py-24 max-w-6xl w-full">
        
        {/* Premium Badge */}
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <GraduationCap className="w-5 h-5 text-yellow-400" />
          <span className="text-white font-semibold text-xs md:text-sm tracking-widest uppercase">
            {t("Excellence in Education Since 2005", "ភាពឆ្នើមក្នុងការអប់រំចាប់តាំងពីឆ្នាំ ២០០៥")}
          </span>
        </div>

        {/* Hero Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight mb-6 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
          {t("Empowering Your", "ពង្រឹងសមត្ថភាព")}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-200">
            {t("Golden Future", "អនាគតមាស")}
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          {t(
            "Nurturing young minds through world-class quality education and character development in the heart of Cambodia.",
            "ចិញ្ចឹមបីបាច់កុមារឱ្យក្លាយជាអ្នកដឹកនាំថ្ងៃស្អែក តាមរយៈការអប់រំប្រកបដោយគុណភាពកម្រិតពិភពលោក។"
          )}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col-12 sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-20 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300 w-full">
          <Button 
            size="lg" 
            className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold px-8 py-4 sm:px-10 sm:py-6 rounded-full shadow-xl shadow-yellow-500/20 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
            asChild
          >
            <Link to="/about">
              {t("Get Started", "ចាប់ផ្តើម")}
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-2" />
            </Link>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white/5 backdrop-blur-md text-white border-white/30 hover:bg-white/10 font-bold px-8 py-4 sm:px-10 sm:py-6 rounded-full transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
            asChild
          >
            <Link to="/contact">
              <Users className="w-4 h-4 md:w-5 md:h-5" />
              {t("Inquire", "សាកសួរ")}
            </Link>
          </Button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full animate-in fade-in zoom-in-95 duration-1000 delay-500">
          {[
            { value: "20+", label: "Years Experience", labelKh: "ឆ្នាំនៃបទពិសោធន៍" },
            { value: "1.5K+", label: "Active Students", labelKh: "សិស្សសកម្ម" },
            { value: "100+", label: "Certified Teachers", labelKh: "គ្រូដែលមានវិញ្ញាបនបត្រ" },
            { value: "98%", label: "Placement Rate", labelKh: "អត្រាជោគជ័យ" },
          ].map((stat, index) => (
            <div
              key={index}
              className="relative group bg-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/10 hover:bg-white/10 hover:border-yellow-500/50 transition-all"
            >
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-yellow-500/10 rounded-full blur-xl group-hover:bg-yellow-500/20 transition-all" />
              <p className="text-2xl sm:text-3xl md:text-4xl font-black text-yellow-500 mb-1">
                {stat.value}
              </p>
              <p className="text-white/70 text-xs sm:text-sm font-bold uppercase tracking-wider">
                {t(stat.label, stat.labelKh)}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-[12px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
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
