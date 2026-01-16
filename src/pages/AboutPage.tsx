import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  BookOpen, 
  Microscope, 
  Lightbulb, 
  ShieldCheck, 
  GraduationCap, 
  Building2,
  ChevronRight,
  TrendingUp
} from "lucide-react";

// Assets (Ensure these paths match your project structure)
import teacher1 from "@/assets/teacher-1.jpg";
import teacher2 from "@/assets/teacher-2.jpg";
import teacher3 from "@/assets/teacher-3.jpg";
import aboutVideo from "@/assets/evebt.mp4"; 

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  // Data mapping for the dropdown information
  const departments = [
    {
      id: "institutes",
      title: "Institutes",
      titleKh: "វិទ្យាស្ថាន",
      icon: <Building2 className="text-blue-500" />,
      description: "Our specialized institutes focus on professional training and industry-specific certifications to bridge the gap between education and employment.",
      descriptionKh: "វិទ្យាស្ថានឯកទេសរបស់យើងផ្តោតលើការបណ្តុះបណ្តាលវិជ្ជាជីវៈ និងវិញ្ញាបនប័ត្រជាក់លាក់តាមវិស័យ ដើម្បីបំពេញចន្លោះរវាងការអប់រំ និងការងារ។"
    },
    {
      id: "academic",
      title: "Academic",
      titleKh: "ការសិក្សា",
      icon: <GraduationCap className="text-orange-500" />,
      description: "A rigorous K-12 and higher education curriculum that integrates STEM, critical thinking, and bilingual proficiency.",
      descriptionKh: "កម្មវិធីសិក្សា K-12 និងឧត្តមសិក្សាដ៏តឹងរឹងដែលរួមបញ្ចូល STEM ការគិតពិចារណា និងជំនាញទ្វេភាសា។"
    },
    {
      id: "research",
      title: "Research",
      titleKh: "ការស្រាវជ្រាវ",
      icon: <Microscope className="text-emerald-500" />,
      description: "Driving academic growth through our dedicated research labs and collaboration with international academic partners.",
      descriptionKh: "ជំរុញការរីកចម្រើននៃការសិក្សាតាមរយៈមន្ទីរពិសោធន៍ស្រាវជ្រាវឧទ្ទិសរបស់យើង និងកិច្ចសហការជាមួយដៃគូសិក្សាអន្តរជាតិ។"
    },
    {
      id: "innovation",
      title: "Innovation",
      titleKh: "ការច្នៃប្រឌិត",
      icon: <Lightbulb className="text-yellow-500" />,
      description: "The Innovation Hub serves as an incubator for student projects, startups, and new educational technologies.",
      descriptionKh: "មជ្ឈមណ្ឌលច្នៃប្រឌិតបម្រើជាកន្លែងបណ្តុះបណ្តាលសម្រាប់គម្រោងសិស្ស អាជីវកម្មថ្មីៗ និងបច្ចេកវិទ្យាអប់រំថ្មីៗ។"
    },
    {
      id: "digicheck",
      title: "DigiCheck",
      titleKh: "ឌីជីឆែក",
      icon: <ShieldCheck className="text-indigo-500" />,
      description: "Our proprietary digital ecosystem ensures quality control, digital certification, and academic transparency for all stakeholders.",
      descriptionKh: "ប្រព័ន្ធអេកូឡូស៊ីឌីជីថលផ្ទាល់ខ្លួនរបស់យើងធានានូវការត្រួតពិនិត្យគុណភាព វិញ្ញាបនប័ត្រឌីជីថល និងតម្លាភាពនៃការសិក្សា។"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-100">
      <Navbar />

      <main>
        {/* --- 1. Hero Section with Video Background --- */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-slate-900">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40">
              <source src={aboutVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-white" />
          </div>
          
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-widest uppercase">
              {t("Pioneering Education", "ការត្រួសត្រាយផ្លូវអប់រំ")}
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter text-white">
              {t("Defining Our", "ការកំណត់កំណត់")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">
                {t("Pillars", "សសរស្តម្ភរបស់យើង")}
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto font-medium leading-relaxed">
              {t(
                "Learn about the specialized departments that drive excellence at Golden Future School.",
                "ស្វែងយល់អំពីផ្នែកឯកទេសដែលជំរុញឧត្តមភាពនៅសាលាអនាគតមាស។"
              )}
            </p>
          </div>
        </section>

        {/* --- 2. Mission & Vision Cards --- */}
        <section className="py-24 px-6 relative z-10 -mt-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-slate-100 flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-orange-50 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                <Target size={40} />
              </div>
              <h2 className="text-3xl font-black mb-6">{t("Our Mission", "បេសកកម្មរបស់យើង")}</h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                {t(
                  "To cultivate a digitally fluent generation that excels through innovation, research, and rigorous academic standards.",
                  "ដើម្បីបណ្តុះជំនាន់ដែលស្ទាត់ជំនាញផ្នែកឌីជីថល ដែលពូកែតាមរយៈការច្នៃប្រឌិត ការស្រាវជ្រាវ និងស្តង់ដារសិក្សាដ៏តឹងរឹង។"
                )}
              </p>
            </div>

            <div className="bg-slate-900 p-10 md:p-16 rounded-[3rem] shadow-2xl text-white flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-yellow-500 group-hover:text-slate-900 transition-all duration-500">
                <Eye size={40} />
              </div>
              <h2 className="text-3xl font-black mb-6">{t("Our Vision", "ចក្ខុវិស័យរបស់យើង")}</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                {t(
                  "To be the premier technological and academic ecosystem in Southeast Asia, setting the standard for the future of learning.",
                  "ក្លាយជាប្រព័ន្ធអេកូឡូស៊ីបច្ចេកវិទ្យា និងការសិក្សាឈានមុខគេនៅក្នុងអាស៊ីអាគ្នេយ៍ ដោយកំណត់ស្តង់ដារសម្រាប់អនាគតនៃការសិក្សា។"
                )}
              </p>
            </div>
          </div>
        </section>

        {/* --- 3. Detailed Department Information (The Dropdown Content) --- */}
        <section className="py-24 px-6 bg-slate-50/50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                {t("Operational", "ប្រតិបត្តិការ")} <span className="text-orange-600">{t("Ecosystem", "ប្រព័ន្ធអេកូឡូស៊ី")}</span>
              </h2>
              <div className="h-1.5 w-24 bg-yellow-400 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {departments.map((dept) => (
                <div 
                  key={dept.id} 
                  className="bg-white p-8 rounded-[2.5rem] border border-slate-200 hover:border-orange-200 hover:shadow-2xl transition-all duration-500 group"
                >
                  <div className="flex items-start justify-between mb-8">
                    <div className="p-4 bg-slate-50 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                      {React.cloneElement(dept.icon as React.ReactElement, { size: 32 })}
                    </div>
                    <ChevronRight className="text-slate-300 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 group-hover:text-orange-600 transition-colors">
                    {t(dept.title, dept.titleKh)}
                  </h3>
                  <p className="text-slate-500 leading-relaxed mb-6">
                    {t(dept.description, dept.descriptionKh)}
                  </p>
                  <button className="text-sm font-bold text-slate-900 flex items-center gap-2 group-hover:gap-4 transition-all">
                    {t("Explore Department", "ស្វែងយល់បន្ថែម")} <TrendingUp size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 4. Impact Statistics --- */}
        <section className="py-20 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              <StatCard value="2,500+" label={t("Active Students", "សិស្សសកម្ម")} />
              <StatCard value="45" label={t("Research Projects", "គម្រោងស្រាវជ្រាវ")} />
              <StatCard value="12" label={t("Partner Institutes", "វិទ្យាស្ថានដៃគូ")} />
              <StatCard value="98%" label={t("Innovation Score", "ពិន្ទុច្នៃប្រឌិត")} />
            </div>
          </div>
        </section>

        {/* --- 5. Leadership Ring Section --- */}
        <section className="py-32 px-6 bg-slate-50/50">
          <div className="max-w-7xl mx-auto text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">{t("Our Visionaries", "អ្នកចក្ខុវិស័យរបស់យើង")}</h2>
            <p className="text-slate-500 max-w-2xl mx-auto italic">
              {t("Leading the charge toward a smarter, digital future for Cambodia.", "ដឹកនាំការចោទប្រកាន់ឆ្ពោះទៅរកអនាគតឌីជីថលកាន់តែឆ្លាតវៃសម្រាប់កម្ពុជា។")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 max-w-5xl mx-auto">
            <LeaderProfile name="Dr. Sokha Chanthy" role="Principal" img={teacher1} />
            <LeaderProfile name="Mr. Veasna Pich" role="Vice Principal" img={teacher2} />
            <LeaderProfile name="Ms. Bopha Srey" role="Head of Academics" img={teacher3} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

// Sub-components
const StatCard = ({ value, label }: { value: string, label: string }) => (
  <div className="text-center group">
    <div className="text-4xl md:text-5xl font-black text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">{value}</div>
    <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">{label}</div>
  </div>
);

const LeaderProfile = ({ name, role, img }: { name: string, role: string, img: string }) => (
  <div className="flex flex-col items-center group">
    <div className="relative mb-8">
      <div className="absolute -inset-4 border-2 border-dashed border-orange-200 rounded-full group-hover:rotate-180 transition-transform duration-[2000ms]" />
      <div className="w-56 h-56 rounded-full overflow-hidden border-8 border-white shadow-2xl relative z-10 transition-transform duration-500 group-hover:scale-105">
        <img src={img} className="w-full h-full object-cover" alt={name} />
      </div>
    </div>
    <h3 className="text-2xl font-black text-slate-900 mb-2">{name}</h3>
    <p className="text-orange-600 font-bold text-xs uppercase tracking-[0.2em]">{role}</p>
  </div>
);

export default AboutPage;