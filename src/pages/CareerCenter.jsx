import React from "react";
import "./CareerCenter.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroVideo from "../assets/owEI4q0ARX3SygtqBAIyYNixNDQAkwf5iPCDgW.mp4";
import { useLanguage } from "../contexts/LanguageContext";
import { CheckCircle2, Mail, ArrowRight } from "lucide-react"; // Optional: if you use lucide-react

export default function CareerCenter() {
  const { t } = useLanguage();

  const activities = [
    {
      img: "https://smartkids.edu.kh/wp-content/uploads/2023/07/sis-kh-g6-8-768x512.webp",
      title: t("Science Fair", "ពិព័រណ៍វិទ្យាសាស្ត្រ"),
      desc: t("Students showcase their science projects.", "និស្សិតបង្ហាញគម្រោងវិទ្យាសាស្ត្រ។"),
    },
    {
      img: "https://www.sisc.edu.kh/wp-content/uploads/2024/02/Khm-03.jpg",
      title: t("Sports Day", "ថ្ងៃកីឡា"),
      desc: t("Fun activities and competitions.", "សកម្មភាព និងការប្រកួតសប្បាយរីករាយ។"),
    },
    {
      img: "https://www.sisc.edu.kh/wp-content/uploads/2024/02/Khm-04.jpg",
      title: t("Art Exhibition", "ពិព័រណ៍សិល្បៈ"),
      desc: t("Showcasing student artwork.", "បង្ហាញស្នាដំណើរការសិល្បៈរបស់និស្សិត។"),
    },
    {
      img: "https://www.sisc.edu.kh/wp-content/uploads/2024/02/Khm-06.jpg",
      title: t("Field Trip", "ចេញដំណើរ"),
      desc: t("Educational excursions for learning.", "ដំណើរអប់រំសម្រាប់ការសិក្សា។"),
    },
    {
      img: "https://educationcambodia.org/wp-content/uploads/2024/05/Golden-Gate-American-School-Phnom-Penh.jpg",
      title: t("Career Workshop", "មហោស្រពអាជីព"),
      desc: t("Workshops to develop career skills.", "មហោស្រពដើម្បីអភិវឌ្ឍជំនាញអាជីព។"),
    },
    {
      img: "https://tse3.mm.bing.net/th/id/OIP.Gepcpd4kAzE3-v2djXh2KwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
      title: t("Community Service", "សេវាកម្មសហគមន៍"),
      desc: t("Students contribute to society.", "និស្សិតចូលរួមជាមួយសង្គម។"),
    },
  ];

  return (
    <>
      <Navbar />

      <div className="career-page">
        {/* ===== HERO SECTION ===== */}
        <section className="hero-section">
          <video autoPlay muted loop playsInline className="hero-video-bg">
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="hero-overlay">
            <div className="container">
              <div className="hero-card">
                <span className="hero-badge">{t("Future Ready", "ត្រៀមខ្លួនសម្រាប់អនាគត")}</span>
                <h1 className="hero-title">{t("Career Center", "មជ្ឈមណ្ឌលការងារ")}</h1>
                <div className="hero-divider"></div>
                <p className="hero-subtitle">
                  {t(
                    "Empowering students with internships, career development, and professional growth.",
                    "ផ្តល់អំណាចដល់និស្សិតតាមរយៈកម្មវិធីកម្មសិក្សា ការអភិវឌ្ឍអាជីព និងការរីកចម្រើនផ្នែកវិជ្ជាជីវៈ។"
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== ABOUT SECTION ===== */}
        <section className="about-section container">
          <div className="about- mt-16">
            <div className="about-info">
              <span className="section-tag">{t("Overview", "ទិដ្ឋភាពទូទៅ")}</span>
              <h2 className="section-heading">{t("About Career Center", "អំពីមជ្ឈមណ្ឌលការងារ")}</h2>
              <p className="p-large">
                {t(
                  "The Career Center of IDT-CADT is a dedicated office within the CADT that provides a wide range of support, assistance, and guidance to help students and alumni.",
                  "មជ្ឈមណ្ឌលការងារនៃ IDT-CADT គឺជាការិយាល័យឧទ្ទិសនៅក្នុង CADT ដែលផ្តល់នូវការគាំទ្រ ជំនួយ និងការណែនាំយ៉ាងទូលំទូលាយ ដើម្បីជួយនិស្សិត និងអតីតនិស្សិត។"
                )}
              </p>
            </div>
          </div>
        </section>

        {/* ===== SERVICES SPLIT SECTION ===== */}
        <section className="services-section container">
          <div className="services-container">
            <div className="services-image">
              <img src="https://www.idt.edu.kh/wp-content/uploads/2024/10/DSC07409.webp" alt="Services" />
            </div>
            <div className="services-content">
              <h3 className="services-heading">{t("Our Professional Services", "សេវាកម្មវិជ្ជាជីវៈរបស់យើង")}</h3>
              <ul className="services-list">
                {[
                  t("Industrial linkage", "ការផ្សារភ្ជាប់ជាមួយវិស័យឧស្សាហកម្ម"),
                  t("Internship programs", "កម្មវិធីកម្មសិក្សា"),
                  t("Career counseling", "ការប្រឹក្សាអាជីព"),
                  t("English support", "ការគាំទ្រភាសាអង់គ្លេស"),
                  t("Soft skills development", "ការអភិវឌ្ឍជំនាញទន់"),
                  t("Psychosocial support", "ការគាំទ្រផ្នែកចិត្តសាស្ត្រ"),
                  t("Expert guest speakers", "វាគ្មិនជំនាញ")
                ].map((item, i) => (
                  <li key={i}><CheckCircle2 className="list-icon" /> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
          <section className="form-section container">
          <div className="form-wrapper">
            <div className="form-header">
              <h2 className="section-heading text-orange">{t("Internship Opportunity", "ឱកាសកម្មសិក្សា")}</h2>
              <p>
                {t("Partner with us to find top talent.", "សហការជាមួយយើងដើម្បីស្វែងរកអ្នកមានសមត្ថភាពខ្ពស់។")}
                <br />
                <a href="mailto:career.center@cadt.edu.kh" className="contact-link">
                  <Mail size={16} /> career.center@cadt.edu.kh
                </a>
              </p>
            </div>
            <div className="form-container">
               <iframe title="Internship Form" src="https://forms.office.com/Pages/ResponsePage.aspx?id=7GGUHmJTKUOuRmH6PpHG0s5HKJ-2uxJGvSO1gCRILyRUREw0MTZURVZYRE45WDFYQTBFTFA2SUlVSi4u&embed=true" />
            </div>
          </div>
        </section>

        {/* ===== ACTIVITIES GRID ===== */}
        <section className="activities-section bg-soft">
          <div className="container">
            <div className="section-header center">
              <h2 className="section-heading">{t("Our Activities", "សកម្មភាពរបស់យើង")}</h2>
              <p>{t("Moments of growth and learning at our center", "គ្រានៃការរីកចម្រើន និងការសិក្សានៅមជ្ឈមណ្ឌលរបស់យើង")}</p>
            </div>
            <div className="activities-grid">
              {activities.map((activity, index) => (
                <div className="activity-card" key={index}>
                  <div className="activity-img">
                    <img src={activity.img} alt={activity.title} />
                  </div>
                  <div className="activity-body">
                    <h3>{activity.title}</h3>
                    <p>{activity.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== INTERNSHIP FORM ===== */}
      
      </div>

      <Footer />
    </>
  );
}