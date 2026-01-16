import { Link } from "react-router-dom";
import heroVideo from "@/assets/700_F_1756639204_xY1wXcBOsoumVeA2CvnjYwsYcoe5IIQk_ST.mp4"; 
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#001529]">
      
      {/* ===== High-End Video Background ===== */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Modern Gradient Overlay: Darker at bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#002d5b]/90 via-[#002d5b]/40 to-black/60" />
      </div>

      {/* ===== Hero Content ===== */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center text-center">
        
        {/* Minimalist Badge */}
        <div className="inline-flex items-center gap-2 mt-7 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full px-4 py-1.5 mb-6 animate-in fade-in slide-in-from-bottom-3 duration-1000">
          <GraduationCap className="w-4 h-4 text-yellow-500" />
          <span className="text-white/90 font-medium text-[10px] md:text-xs tracking-[0.2em] uppercase">
            {t("Global Standards", "ស្ដង់ដារសកល")} • 2024
          </span>
        </div>

        {/* Clean Hero Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-150">
          {t("Building Your", "កសាង")}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
            {t("Golden Future", "អនាគតមាស")}
          </span>
        </h1>

        <p className="text-base md:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-7 duration-1000 delay-300">
          {t(
            "Empowering the next generation through innovation, character, and world-class academic excellence.",
            "ពង្រឹងសមត្ថភាពយុវជនជំនាន់ក្រោយតាមរយៈនវានុវត្តន៍ សីលធម៌ និងការអប់រំកម្រិតពិភពលោក។"
          )}
        </p>

        {/* Action Buttons: Stack on mobile, inline on desktop */}
     {/* Action Buttons: Force 2 buttons in a row on all screens */}
<div className="flex flex-row items-center justify-center gap-3 md:gap-6 mb-16 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500 w-full max-w-md sm:max-w-none mx-auto">
  <Button 
    size="lg" 
    className="flex-1 sm:flex-none bg-[#f37021] hover:bg-[#d65d18] text-white font-bold px-4 sm:px-10 py-6 sm:py-7 rounded-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 text-sm md:text-base"
    asChild
  >
    <Link to="/about">
      {t("Start TO ABOUT", "ចាប់ផ្តើម")}
      <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
    </Link>
  </Button>
  
  <Button 
    size="lg" 
    variant="outline" 
    className="flex-1 sm:flex-none bg-white/5 backdrop-blur-md text-white border-white/20 hover:bg-white/10 px-4 sm:px-10 py-6 sm:py-7 rounded-xl transition-all flex items-center justify-center gap-2 text-sm md:text-base"
    asChild
  >
    <Link to="/contact">
      <Users className="w-4 h-4 md:w-5 md:h-5" />
      {t("Inquire", "សាកសួរ")}
    </Link>
  </Button>
</div>

        {/* Clean Stats Grid: Transparent & Professional */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl animate-in fade-in zoom-in-95 duration-1000 delay-700">
          {[
            { value: "20+", label: "Years", labelKh: "ឆ្នាំ" },
            { value: "1.5K+", label: "Students", labelKh: "សិស្ស" },
            { value: "100+", label: "Teachers", labelKh: "គ្រូបង្រៀន" },
            { value: "98%", label: "Success", labelKh: "ជោគជ័យ" },
          ].map((stat, index) => (
            <div
              key={index}
              className="group p-6 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/[0.08] transition-all duration-500"
            >
              <div className="text-2xl md:text-4xl font-black text-yellow-500 mb-1 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-[10px] md:text-xs font-bold text-white/50 uppercase tracking-widest">
                {t(stat.label, stat.labelKh)}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modern Minimal Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40">
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-yellow-500 animate-scroll-line" />
        </div>
      </div>

      <style>{`
        @keyframes scroll-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .animate-scroll-line {
          animation: scroll-line 2.5s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;