import React, { useState, useRef, useEffect } from "react";
import { 
  Send, CheckCircle, MapPin, Briefcase, ArrowUpRight, 
  Upload, FileText, User, Mail, Zap, Globe, Coffee, Heart, Sparkles, Play
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import Vievo from "@/assets/Job.mp4" // Import your hook

const CareerPage: React.FC = () => {
  const { t } = useLanguage(); // Access the translation function
  const [fileName, setFileName] = useState<string | null>(null);
  const formRef = useRef<HTMLDivElement>(null);
  
  // 3D Mouse Movement Logic
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * -15,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth" });

  const jobs = [
    { 
      id: 1, 
      title: t("Technology Consultant", "ទីប្រឹក្សាបច្ចេកវិទ្យា"), 
      department: t("Governance", "អភិបាលកិច្ច"), 
      location: t("Phnom Penh", "ភ្នំពេញ"), 
      type: t("Full-time", "ពេញម៉ោង"), 
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      id: 2, 
      title: t("Makerspace Coordinator", "អ្នកសម្របសម្រួល Makerspace"), 
      department: t("Technology", "បច្ចេកវិទ្យា"), 
      location: t("Phnom Penh", "ភ្នំពេញ"), 
      type: t("Full-time", "ពេញម៉ោង"), 
      image: "https://tse1.mm.bing.net/th/id/OIP.BNXxzft2jvaZg_P9HkpX9QHaHp?rs=1&pid=ImgDetMain&o=7&rm=3" 
    },
  ];

  return (
    <div className="min-h-screen bg-[#F0F2F5] text-slate-900 selection:bg-orange-100">
      <Navbar />

      <main className="overflow-x-hidden">
        {/* --- Hero Section --- */}
        <section className="relative min-h-screen pt-32 pb-20 px-6 flex items-center">
          <div className="absolute top-0 right-0 w-1/2 h-screen bg-orange-500/5 rounded-l-[10rem] -z-10" />
          
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Left: Content */}
              <div className="space-y-8 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500 text-white shadow-lg shadow-orange-200">
                  <Sparkles size={14} />
                  <span className="text-[10px] font-black uppercase tracking-widest">
                    {t("Join the Revolution", "ចូលរួមជាមួយបដិវត្តន៍")}
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tighter">
                  {t("Shape the", "រៀបចំ")} <br /> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">
                    {t("Digital Era.", "យុគសម័យឌីជីថល។")}
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-600 max-w-lg font-medium leading-relaxed">
                  {t("Experience a career without boundaries. We’re building Cambodia's most innovative tech team right here in Phnom Penh.", 
                     "បទពិសោធន៍ការងារគ្មានដែនកំណត់។ យើងកំពុងកសាងក្រុមបច្ចេកវិទ្យាដែលមានភាពច្នៃប្រឌិតបំផុតនៅកម្ពុជា ក្នុងទីក្រុងភ្នំពេញ។")}
                </p>

                <div className="lg:hidden w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white mb-8">
                   <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                      <source src={Vievo} type="video/mp4" />
                   </video>
                </div>

                <div className="flex flex-wrap items-center gap-6">
                  <button onClick={scrollToForm} className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-lg hover:bg-orange-600 transition-all shadow-xl active:scale-95">
                    {t("View Jobs", "មើលការងារ")}
                  </button>
                  <div className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md text-orange-500 group-hover:scale-110 transition-transform">
                      <Play size={20} fill="currentColor" />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-widest text-slate-400">
                        {t("Watch Story", "មើលសាច់រឿង")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: 3D Image & Video Composition */}
              <div className="relative order-1 lg:order-2" style={{ perspective: "1200px" }}>
                <div 
                  className="relative transition-transform duration-200 ease-out"
                  style={{ transform: `rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)`, transformStyle: "preserve-3d" }}
                >
                  <div className="w-full aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] border-[12px] border-white relative">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                      className="w-full h-full object-cover" 
                      alt="Team"
                    />
                    <div className="absolute bottom-6 right-6 w-1/2 aspect-square rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl hidden md:block" style={{ transform: "translateZ(60px)" }}>
                      <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                        <source src="src/assets/work.mp4" type="video/mp4" />
                      </video>
                    </div>
                  </div>

                  <div 
                    className="absolute -left-10 top-20 bg-white p-6 rounded-[2rem] shadow-2xl border border-slate-100 flex items-center gap-4"
                    style={{ transform: "translateZ(100px)" }}
                  >
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white">
                      <Zap size={24} fill="white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest">
                        {t("Active Perks", "អត្ថប្រយោជន៍")}
                      </p>
                      <p className="text-sm font-bold">{t("Health + Travel", "សុខភាព + ការធ្វើដំណើរ")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Responsive Job Grid --- */}
        <section className="py-24 px-6 bg-white rounded-t-[5rem]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-black mb-12">
                {t("Latest", "ការងារ")} <span className="text-orange-600">{t("Openings", "ចុងក្រោយបង្អស់")}</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {jobs.map(job => (
                <div key={job.id} className="group bg-[#F9FAFB] p-4 rounded-[3rem] border border-transparent hover:border-orange-200 transition-all flex flex-col sm:flex-row gap-6 shadow-sm hover:shadow-xl">
                  <div className="w-full sm:w-44 h-44 rounded-[2.5rem] overflow-hidden">
                    <img src={job.image} className="w-full h-full object-cover" alt="" />
                  </div>
                  <div className="flex-1 py-4 flex flex-col justify-between pr-4">
                    <div>
                      <span className="text-[10px] font-black bg-white px-3 py-1 rounded-full text-orange-500 shadow-sm uppercase tracking-widest">{job.department}</span>
                      <h3 className="text-2xl font-bold mt-4 group-hover:text-orange-600 transition-colors">{job.title}</h3>
                      <div className="flex items-center gap-4 text-slate-400 text-sm mt-2 font-medium">
                        <span className="flex items-center gap-1"><MapPin size={14}/> {job.location}</span>
                        <span className="flex items-center gap-1"><Briefcase size={14}/> {job.type}</span>
                      </div>
                    </div>
                    <button onClick={scrollToForm} className="mt-6 flex items-center gap-2 font-black text-sm uppercase tracking-widest text-slate-900 group-hover:text-orange-600 transition-colors">
                      {t("Apply Now", "ដាក់ពាក្យឥឡូវនេះ")} <ArrowUpRight size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Form Section --- */}
        <section ref={formRef} className="py-24 px-6 bg-[#F0F2F5]">
          <div className="max-w-4xl mx-auto bg-white rounded-[4rem] p-10 md:p-20 shadow-2xl shadow-orange-500/5">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black mb-4 tracking-tighter">
                {t("Submit Your", "ផ្ញើមកយើងនូវ")} <span className="text-orange-500 italic">{t("Story", "រឿងរ៉ាវរបស់អ្នក")}</span>
              </h2>
              <p className="text-slate-500 font-medium tracking-tight uppercase text-xs">
                {t("Join our talent database in 60 seconds", "ចូលរួមក្នុងមូលដ្ឋានទិន្នន័យរបស់យើងក្នុងរយៈពេល 60 វិនាទី")}
              </p>
            </div>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <input 
                    placeholder={t("Name", "ឈ្មោះ")} 
                    className="w-full bg-slate-50 border-none rounded-2xl px-8 py-5 focus:ring-2 focus:ring-orange-500 transition-all outline-none font-bold" 
                />
                <input 
                    placeholder={t("Email", "អ៊ីមែល")} 
                    className="w-full bg-slate-50 border-none rounded-2xl px-8 py-5 focus:ring-2 focus:ring-orange-500 transition-all outline-none font-bold" 
                />
              </div>
              <div className="w-full aspect-[4/1] border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center bg-slate-50 hover:bg-orange-50 hover:border-orange-300 transition-all cursor-pointer">
                 <Upload className="text-slate-400 mb-2" />
                 <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                    {t("Upload CV (PDF)", "បង្ហោះប្រវត្តិរូប (PDF)")}
                 </p>
              </div>
              <button className="w-full py-6 bg-slate-900 text-white rounded-2xl font-black text-xl hover:bg-orange-500 transition-all shadow-xl">
                {t("Send Application", "បញ្ជូនពាក្យសុំ")}
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CareerPage;