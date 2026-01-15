import React from "react";
import "./Events.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../contexts/LanguageContext";
import heroVideo from "../assets/evebt.mp4";


export default function Events() {
  const { t } = useLanguage();

  const eventList = [
    {
      id: 1,
      title: "CTF 2023",
      khTitle: "CTF ២០២៣",
      img: "https://www.idt.edu.kh/wp-content/uploads/2024/10/welcome-to-CTF-04-400x250-1.png",
      link: "#"
    },
    {
      id: 2,
      title: "SCDT",
      khTitle: "SCDT",
      img: "https://www.idt.edu.kh/wp-content/uploads/2024/10/V2@2x.png",
      link: "https://www.idt.edu.kh/scdt/"
    },
    {
      id: 3,
      title: "Khoding Hero",
      khTitle: "Khoding Hero",
      img: "https://www.idt.edu.kh/wp-content/uploads/2024/10/thumbnail-1.png",
      link: "https://khodinghero.org/"
    }
  ];

  return (
    <>
      <Navbar />

      <div className="events-page">
        {/* ===== HERO SECTION WITH VIDEO ===== */}
        <section className="events-hero">
          {/* Video Background */}
          <video autoPlay muted loop playsInline className="hero-video">
            <source src={heroVideo} type="video/mp4" />
            {/* Fallback image if video fails to load */}
          </video>
          
          {/* Overlay to ensure text readability */}
          <div className="hero-overlay"></div>

          <div className="container hero-flex">
            <div className="hero-text">
              <h1>{t("All Events at IDT", "ព្រឹត្តិការណ៍ទាំងអស់នៅ IDT")}</h1>
              <p>
                {t(
                  "Attend exclusive talks and workshops with tech recruitment experts, curated and hosted by the best partners.",
                  "ចូលរួមក្នុងកិច្ចពិភាក្សា និងសិក្ខាសាលាផ្តាច់មុខជាមួយអ្នកជំនាញបច្ចេកវិទ្យា ដែលរៀបចំដោយដៃគូដ៏ល្អបំផុតរបស់យើង។"
                )}
              </p>
              <a href="https://www.cadt.edu.kh/events/" className="btn-learn-more">
                {t("Learn More", "ស្វែងយល់បន្ថែម")}
              </a>
            </div>
          </div>
        </section>

        {/* ===== SECTION TITLE ===== */}
        <section className="container title-section">
          <h1 className="main-title mt-12">{t("EVENTS", "ព្រឹត្តិការណ៍")}</h1>
          <div className="title-divider"></div>
        </section>

        {/* ===== EVENTS GRID ===== */}
        <section className="container events-section p-12">
          <div className="events-grid">
            {eventList.map((event) => (
              <div className="event-card" key={event.id}>
                <a href={event.link} className="event-link">
                  <div className="event-image-wrapper">
                    <img src={event.img} alt={event.title} />
                  </div>
                  <div className="event-info">
                    <h4>{t(event.title, event.khTitle)}</h4>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}