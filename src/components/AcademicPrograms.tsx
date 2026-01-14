import React from 'react';
import { GraduationCap, BookOpen, Award, ArrowRight } from 'lucide-react';
import './AcademicPrograms.css';

const AcademicPrograms: React.FC = () => {
  return (
    <section id="programs" className="programs-section">
      <div className="container-institute">
        <div className="header-center">
          <div className="accent-bar" />
          <h2 className="section-title">Explore Our Academic Programs</h2>
        </div>

        <div className="programs-grid">
          {/* Main Cards Area */}
          <div className="cards-wrapper">
            <div className="grid-sub">
              {/* Bachelor Card */}
              <div className="program-card">
                <div className="icon-box gold-bg">
                  <GraduationCap size={28} className="icon-dark" />
                </div>
                <h3>Undergraduate Degree (Bachelor)</h3>
                <p>Comprehensive 4-year programs designed to build strong foundations in digital technology and innovation.</p>
                <a href="#" className="learn-more">
                  Learn More <ArrowRight size={18} />
                </a>
              </div>

              {/* Master Card */}
              <div className="program-card">
                <div className="icon-box gold-outline">
                  <BookOpen size={28} className="icon-gold" />
                </div>
                <h3>Graduate Degree (Master)</h3>
                <p>Advanced research-focused programs for professionals seeking to deepen their expertise in specialized fields.</p>
                <a href="#" className="learn-more">
                  Learn More <ArrowRight size={18} />
                </a>
              </div>

              {/* Scholarship Banner */}
              <div className="scholarship-banner">
                <div className="banner-flex">
                  <div className="banner-text">
                    <div className="icon-box gold-bg small-mb">
                      <Award size={28} className="icon-dark" />
                    </div>
                    <h3>Get Support For Your Learning Journey</h3>
                    <p>Learn About Scholarships and financial aid opportunities available for qualified students.</p>
                  </div>
                  <button className="gold-btn">Apply for Scholarship</button>
                </div>
              </div>
            </div>
          </div>

          {/* Side Image (Visible on Desktop) */}
          <div className="side-image-wrapper">
            <div className="sticky-card">
              <img 
                src="https://educationcambodia.org/wp-content/uploads/2024/04/ICS-International-School-Phnom-Penh-1-1200x900.jpg" 
                alt="Technology Lab" 
              />
              <div className="image-overlay-gold">
                <p>Explore our</p>
                <h4>State-of-the-art Facilities</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicPrograms;