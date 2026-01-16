import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import VIedo from "@/assets/work.mp4";
import { Phone, Mail, Send, ArrowUpRight, CheckCircle, Globe, Play } from "lucide-react";

const ContactPage = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ 
      title: t("Message Sent", "សារត្រូវបានផ្ញើ"), 
      description: t("Our team will contact you shortly.", "ក្រុមការងារយើងនឹងទាក់ទងទៅអ្នកឆាប់ៗ។") 
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-[#E5E7EB] text-slate-900 selection:bg-orange-200">
      <Navbar />

      <main className="pt-28 pb-16 mt-12 px-6">
        <div className="max-w-6xl mx-auto space-y-6">
          
          {/* --- Top Hero Card --- */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-md">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-600">
                  {t("Let's connect", "តោះភ្ជាប់ទំនាក់ទំនង")}
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
                {t("Let's create the future", "តោះបង្កើតអនាគត")} <br/>
                <span className="font-serif italic text-orange-500 underline decoration-1 underline-offset-8">together.</span>
              </h1>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                {t("Solving digital challenges through human connection. Reach out for collaborations or inquiries.", 
                   "ដោះស្រាយបញ្ហាប្រឈមឌីជីថលតាមរយៈការភ្ជាប់ទំនាក់ទំនង។")}
              </p>
            </div>

            {/* Video Preview Box */}
            <div className="relative group w-full md:w-[400px] aspect-video rounded-3xl overflow-hidden shadow-2xl bg-slate-200 border-4 border-white">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700">
                <source src={VIedo} type="video/mp4" />
              </video>
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-all">
                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play size={20} className="fill-orange-500 text-orange-500 ml-1" />
                 </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-6">
            
            {/* --- Left Column: Contact Info --- */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              
              {/* Phone Card */}
              <div className="bg-white/60 backdrop-blur-md rounded-[2rem] p-8 border border-white hover:border-orange-200 transition-all group">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <Phone size={20} />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">{t("Call Support", "ការគាំទ្រ")}</p>
                <p className="text-lg font-bold text-slate-800">+855 23 456 789</p>
              </div>

              {/* Email Card */}
              <div className="bg-white/60 backdrop-blur-md rounded-[2rem] p-8 border border-white hover:border-orange-200 transition-all group">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">{t("Email Us", "អ៊ីមែល")}</p>
                <p className="text-lg font-bold text-slate-800">hello@future.edu</p>
              </div>

              {/* Global Badge Card */}
              <div className="bg-slate-900 rounded-[2rem] p-8 text-white flex items-center justify-between">
                <div>
                  <p className="text-orange-400 text-[10px] font-black tracking-widest uppercase mb-1">Status</p>
                  <p className="text-xl font-bold italic">Available 24/7</p>
                </div>
                <Globe size={40} className="opacity-20 animate-spin-slow" />
              </div>
            </div>

            {/* --- Right Column: The Form --- */}
            <div className="lg:col-span-7 bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                {t("Send a Message", "ផ្ញើសារ")}
                <span className="w-2 h-2 rounded-full bg-orange-500" />
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input 
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-orange-500 focus:bg-white transition-all text-sm font-medium"
                    placeholder={t("Full Name", "ឈ្មោះពេញ")} required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  <input 
                    type="email"
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-orange-500 focus:bg-white transition-all text-sm font-medium"
                    placeholder={t("Email Address", "អាសយដ្ឋានអ៊ីមែល")} required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <textarea 
                  rows={4}
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-orange-500 focus:bg-white transition-all text-sm font-medium resize-none"
                  placeholder={t("Write your message here...", "សរសេរសាររបស់អ្នកនៅទីនេះ...")} required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />

                <button className="w-full group bg-orange-500 hover:bg-slate-900 text-white rounded-2xl py-5 font-bold text-sm tracking-widest uppercase transition-all duration-500 flex items-center justify-center gap-3 shadow-lg shadow-orange-500/20">
                  {t("Submit Inquiry", "បញ្ជូនសំណួរ")}
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>

              <div className="mt-8 flex items-center justify-center gap-8 opacity-40">
                <div className="flex items-center gap-2 text-[10px] font-black tracking-tighter">
                  <CheckCircle size={14} className="text-orange-500" /> ENCRYPTED
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black tracking-tighter">
                  <CheckCircle size={14} className="text-orange-500" /> DIRECT RESPONSE
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;