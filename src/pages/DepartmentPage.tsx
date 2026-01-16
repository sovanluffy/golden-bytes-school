import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Building2, GraduationCap, Microscope, 
  Lightbulb, ShieldCheck, ChevronLeft, 
  CheckCircle2, Box, Layers, Play,
  BookOpen, Users, Trophy, ArrowRight
} from "lucide-react";

const DepartmentPage = () => {
  const { id } = useParams();
  const { t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  const pageData: any = {
    institutes: {
      title: "Institutes", titleKh: "វិទ្យាស្ថាន",
      icon: <Building2 size={48} />, color: "bg-blue-600",
      desc: "Providing professional certifications and vocational mastery for modern industries.",
      longDesc: "Our institutes are designed as bridge-builders between academic theory and real-world employment. We partner with global tech leaders to ensure our certifications carry weight in the international job market.",
      features: ["Vocational Training", "Industry Partners", "Expert Mentors"],
      stats: [{ label: "Job Placement", val: "94%" }, { label: "Industry Partners", val: "45+" }],
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-working-on-a-circuit-board-with-a-soldering-iron-4158-large.mp4"
    },
    academic: {
      title: "Academic", titleKh: "អកាដាមិច",
      icon: <GraduationCap size={48} />, color: "bg-orange-600",
      desc: "Excellence in bilingual education and global academic standards.",
      longDesc: "From K-12 to Higher Education, our academic pillar focuses on critical thinking, STEM integration, and linguistic mastery in both Khmer and English.",
      features: ["STEM Curriculum", "Bilingual Excellence", "Character Building"],
      stats: [{ label: "Global Ranking", val: "Top 5" }, { label: "Teacher Ratio", val: "1:15" }],
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-curious-student-in-a-library-reading-a-book-4444-large.mp4"
    },
    research: {
      title: "Research", titleKh: "ស្រាវជ្រាវ",
      icon: <Microscope size={48} />, color: "bg-emerald-600",
      desc: "Advancing knowledge through systematic inquiry and global data analysis.",
      longDesc: "The Research wing focuses on solving regional challenges through technology. We provide grants for student-led studies and publish annually in international journals.",
      features: ["Data Analysis", "Global Journals", "Field Surveys"],
      stats: [{ label: "Published Papers", val: "120+" }, { label: "Active Grants", val: "12" }],
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-scientist-looking-at-a-test-tube-in-a-lab-4138-large.mp4"
    },
    innovation: {
      title: "Innovation", titleKh: "ច្នៃប្រឌិត",
      icon: <Lightbulb size={48} />, color: "bg-yellow-500",
      desc: "Transforming ideas into reality through robotics and startup incubation.",
      longDesc: "The Innovation Hub is a 24/7 space for creators. Equipped with 3D printers and AI labs, it’s where students launch their first startups and build robotic solutions.",
      features: ["Robotics Lab", "Startup Incubator", "3D Prototyping"],
      stats: [{ label: "Startups Born", val: "18" }, { label: "Patents Held", val: "5" }],
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-robotic-arm-moving-in-a-factory-40344-large.mp4"
    },
    digicheck: {
      title: "DigiCheck", titleKh: "DigiCheck",
      icon: <ShieldCheck size={48} />, color: "bg-indigo-600",
      desc: "Quality assurance through blockchain-backed digital verification.",
      longDesc: "DigiCheck is our proprietary system that ensures every certificate and grade is authentic, transparent, and instantly verifiable by employers worldwide.",
      features: ["QR Verification", "Blockchain Records", "Quality Control"],
      stats: [{ label: "Verifications", val: "50k+" }, { label: "Security Level", val: "AES-256" }],
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-circuit-board-1728-large.mp4"
    }
  };

  const current = pageData[id || "academic"] || pageData.academic;

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      
      {/* --- Full Video Hero Section --- */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="src/assets/owEI4q0ARX3SygtqBAIyYNixNDQAkwf5iPCDgW.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
             <Link to="/about" className="inline-flex items-center gap-2 text-orange-400 mb-8 font-bold uppercase text-xs tracking-widest hover:text-white transition-colors">
               <ChevronLeft size={16} /> {t("About Portal", "មជ្ឈមណ្ឌលព័ត៌មាន")}
             </Link>
             <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-none">
                {t(current.title, current.titleKh)}
             </h1>
             <p className="text-xl text-slate-300 mb-8 max-w-lg leading-relaxed">
                {t(current.desc, current.descKh)}
             </p>
             <div className="flex flex-wrap gap-4">
               {current.stats.map((s:any, i:number) => (
                 <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-2xl">
                    <div className="text-2xl font-black text-orange-400">{s.val}</div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400">{s.label}</div>
                 </div>
               ))}
             </div>
          </div>

          {/* --- 3D Floating Element in Hero --- */}
          <div className="hidden lg:block perspective-1000">
             <div 
              className="relative w-80 h-96 mx-auto bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 transition-transform duration-700 ease-out shadow-2xl"
              style={{ transform: isHovered ? "rotateY(-20deg) rotateX(10deg)" : "rotateY(0deg)", transformStyle: "preserve-3d" }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
             >
                <div className={`w-16 h-16 ${current.color} rounded-2xl flex items-center justify-center mb-6 shadow-xl`}>
                  {current.icon}
                </div>
                <h3 className="text-white text-2xl font-black mb-4">Department Insight</h3>
                <div className="space-y-4">
                   {current.features.map((f:string, i:number) => (
                     <div key={i} className="flex items-center gap-3 text-slate-300 font-bold text-sm">
                        <CheckCircle2 className="text-orange-500" size={16} /> {f}
                     </div>
                   ))}
                </div>
                <div className="absolute -bottom-6 -right-6 bg-orange-500 p-6 rounded-3xl shadow-2xl translate-z-10">
                   <Play className="text-white" fill="white" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- Detailed Content Section --- */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16">
          <div className="md:col-span-2">
            <h2 className="text-4xl font-black mb-8">{t("Deep Dive", "ព័ត៌មានលម្អិត")}</h2>
            <p className="text-xl text-slate-500 leading-relaxed mb-8">
              {current.longDesc}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
                <BookOpen className="text-orange-500 mb-4" />
                <h4 className="font-black text-lg mb-2">Curriculum</h4>
                <p className="text-sm text-slate-500">Industry-aligned courses updated every semester.</p>
              </div>
              <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
                <Users className="text-blue-500 mb-4" />
                <h4 className="font-black text-lg mb-2">Community</h4>
                <p className="text-sm text-slate-500">Access to a global network of alumni and mentors.</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-xl">
               <Trophy className="text-yellow-400 mb-4" size={32} />
               <h3 className="text-xl font-black mb-2">Excellence Award</h3>
               <p className="text-slate-400 text-sm mb-6">Recognized for educational innovation in 2024.</p>
               <button className="w-full py-4 bg-orange-500 rounded-xl font-bold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                 Join Today <ArrowRight size={18} />
               </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DepartmentPage;