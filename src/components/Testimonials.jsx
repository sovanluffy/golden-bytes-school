import React from "react";
import "./Testimonials.css";
import { useLanguage } from "@/contexts/LanguageContext";

const testimonialsData = [
  {
    name: "Nychan Sopheak Manich",
    profile: "https://assets-global.website-files.com/65a703a6e6d4eacee1aefc4d/65c594069d98d1a6848725b9_UpperGirl.png",
    text: "I am a student who has received a 100% scholarship from the CGTI Institute. It provided me with knowledge, skills, and extensive experience.",
  },
  {
    name: "Heoun Chan Maly",
    profile: "https://www.adobe.com/au/acrobat/online/media_15a1758d68da2f884562e0d2a9ff61fa1f14c20d6.png?width=750&format=png&optimize=medium",
    text: "I am very pleased to have the opportunity to study at CGTI, known for its high-quality education that meets international standards.",
  },
  {
    name: "Leng Sodawin",
    profile: "https://fdtc.edu/media/fdtc/content-assets/icons/Icon-International-Student.png",
    text: "I am honored to be a recipient of a 100% scholarship. This achievement has brought me immense happiness and reduced financial burdens.",
  },
  {
    name: "Sopheap Dara",
    profile: "https://th.bing.com/th/id/OIP.uXEPEVE9sxvLrZSlDrl20QHaE8?w=255&h=180&c=7&r=0&o=5&pid=1.7",
    text: "The experience has enhanced my skills and confidence, helping me prepare for a successful career in the garment industry.",
  },
    {
    name: "Heoun Chan Maly",
    profile: "https://tse2.mm.bing.net/th/id/OIP.ZF0fU_-NFFIcrHg9ylkGqwHaLF?pid=ImgDet&w=203&h=304&c=7&o=7&rm=3",
    text: "I am very pleased to have the opportunity to study at CGTI, known for its high-quality education that meets international standards.",
  },
  {
    name: "Leng Sodawin",
    profile: "https://tse3.mm.bing.net/th/id/OIP.goqsy71Ol2aCvFgq6nVSuQHaLH?pid=ImgDet&w=203&h=304&c=7&o=7&rm=3",
    text: "I am honored to be a recipient of a 100% scholarship. This achievement has brought me immense happiness and reduced financial burdens.",
  },
  {
    name: "Sopheap Dara",
    profile: "https://th.bing.com/th/id/OIP.icWVYuLkkOCp9Snz_W7x-AHaE8?w=267&h=180&c=7&r=0&o=5&pid=1.7https://example.com/image8.png",
    text: "The experience has enhanced my skills and confidence, helping me prepare for a successful career in the garment industry.",
  },  {
    name: "Sopheap Dara",
    profile: "https://th.bing.com/th/id/OIP.QrwzxTooxQXwI3WSiLv7iQHaNN?w=115&h=180&c=7&r=0&o=5&pid=1.7https://example.com/image8.png",
    text: "The experience has enhanced my skills and confidence, helping me prepare for a successful career in the garment industry.",
  }
];

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        
        {/* Header */}
        <div className="testimonial-header">
          <span className="testimonial-subtitle">
            {t("Voices of Success", "សំឡេងនៃភាពជោគជ័យ")}
          </span>
          <h2 className="testimonial-title">
            {t("Student Testimonials", "សក្ខីកម្មពីសិស្ស")}
          </h2>
          <div className="testimonial-divider"></div>
        </div>

        {/* Grid */}
        <div className="testimonial-grid">
          {testimonialsData.map((item, index) => (
            <div key={index} className="testimonial-card">
              <div className="avatar-ring">
                <img 
                  src={item.profile} 
                  alt={item.name} 
                  className="avatar-img" 
                />
              </div>

              <h3 className="student-name">{item.name}</h3>
              
              <p className="testimonial-quote">
                "{item.text}"
              </p>

              <button className="btn-more">
                {t("More", "បន្ថែម")}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;