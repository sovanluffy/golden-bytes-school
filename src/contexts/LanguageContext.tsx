import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "kh";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void; // ✅ add this
  t: (en: string, kh: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  // ✅ toggleLanguage function
  const toggleLanguage = () => {
    setLanguage(prev => (prev === "en" ? "kh" : "en"));
  };

  const t = (en: string, kh: string) => (language === "en" ? en : kh);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};
