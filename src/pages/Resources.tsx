import React from "react";
import "./Resources.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { 
  FileText, Download, BookOpen, 
  ChevronRight, Globe, LayoutGrid
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Resources() {
  const { t } = useLanguage();

  // Resource categories
  const resourceCategories = [
    {
      title: t("Academic Documents", "ឯកសារសិក្សា"),
      icon: <LayoutGrid size={22} />,
      items: [
        { name: t("Student Handbook 2024", "សៀវភៅណែនាំសិស្ស"), size: "2.4 MB", type: "PDF" },
        { name: t("Academic Calendar", "ប្រតិទិនសិក្សា"), size: "1.1 MB", type: "PDF" },
        { name: t("Curriculum Overview", "កម្មវិធីសិក្សា"), size: "3.5 MB", type: "PDF" },
      ]
    },
    {
      title: t("Career & Internship", "អាជីព និងកម្មសិក្សា"),
      icon: <BookOpen size={22} />,
      items: [
        { name: t("CV Writing Guide", "មគ្គុទ្ទេសក៍ CV"), size: "1.5 MB", type: "PDF" },
        { name: t("Interview Tips 2024", "គន្លឹះសម្ភាសន៍"), size: "850 KB", type: "PDF" },
        { name: t("Report Template", "គំរូរបាយការណ៍"), size: "2.1 MB", type: "DOCX" },
      ]
    }
  ];

  return (
    <>
      <Navbar />

      <div className="res-page-wrapper">
        
        {/* ===== HERO SECTION WITHOUT SEARCH ===== */}
        <header className="res-modern-hero">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="/src/assets/school.MP4" type="video/mp4" />
          </video>
          <div className="hero-content">
            <div className="container">
              <div className="hero-text-center">
                <span className="event-badge">{t("Resource Hub", "មជ្ឈមណ្ឌលធនធាន")}</span>
                <h1 className="hero-title">{t("Empower Your Future", "ពង្រឹងអនាគតរបស់អ្នក")}</h1>
                <p className="hero-subtitle">
                  {t("Access all your academic essentials and professional guides in one unified space.", "ចូលប្រើឯកសារសិក្សា និងមគ្គុទ្ទេសក៍អាជីពទាំងអស់នៅកន្លែងតែមួយ។")}
                </p>
                {/* SEARCH BAR REMOVED */}
              </div>
            </div>
          </div>
        </header>

        {/* ===== QUICK ACCESS SLABS ===== */}
        <section className="quick-access-section">
          <div className="container grid-3-col">
            <a href="#" className="slab-card youtube-slab">
              <div className="slab-img">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" alt="YT" />
              </div>
              <div className="slab-info">
                <h3>YouTube</h3>
                <p>Video Tutorials</p>
              </div>
              <ChevronRight className="slab-arrow" />
            </a>
            <a href="#" className="slab-card facebook-slab">
              <div className="slab-img">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" alt="FB" />
              </div>
              <div className="slab-info">
                <h3>Facebook</h3>
                <p>Community News</p>
              </div>
              <ChevronRight className="slab-arrow" />
            </a>
            <a href="#" className="slab-card library-slab">
              <div className="slab-img lib-icon-box"><Globe size={24} /></div>
              <div className="slab-info">
                <h3>E-Library</h3>
                <p>Digital Books</p>
              </div>
              <ChevronRight className="slab-arrow" />
            </a>
          </div>
        </section>

        {/* ===== MAIN RESOURCES GRID ===== */}
        <main className="res-main-body">
          <div className="container">
            <div className="modern-layout-grid">
              
              <div className="main-feed">
                <h2 className="section-label">{t("Browse by Category", "រកមើលតាមប្រភេទ")}</h2>
                {resourceCategories.map((cat, idx) => (
                  <div className="category-slab" key={idx}>
                    <div className="category-slab-head">
                      <div className="icon-circle">{cat.icon}</div>
                      <h3>{cat.title}</h3>
                    </div>
                    <div className="category-items">
                      {cat.items.map((item, i) => (
                        <div className="resource-item-row" key={i}>
                          <div className="item-file-icon"><FileText size={20} /></div>
                          <div className="item-meta">
                            <span className="item-name">{item.name}</span>
                            <span className="item-details">{item.size} • {item.type}</span>
                          </div>
                          <button className="download-btn-minimal">
                            <Download size={16} />
                            <span>{t("Download", "ទាញយក")}</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <aside className="side-feed">
                <div className="promo-card">
                  <div className="promo-content">
                    <h3>{t("Student Portal", "ផតថលសិស្ស")}</h3>
                    <p>Request official transcripts and verify certifications online.</p>
                    <button className="promo-button">{t("Open Portal", "បើកផតថល")}</button>
                  </div>
                </div>
              </aside>

            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
