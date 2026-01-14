import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import './HighlightedEvents.css';

interface EventItem {
  id: number;
  titleKh: string;
  titleEn: string;
  taglineKh: string;
  taglineEn: string;
  dateKh: string;
  dateEn: string;
  locationKh: string;
  locationEn: string;
  image: string;
}

const events: EventItem[] = [
  {
    id: 1,
    titleKh: "សន្និសីទជាតិ បញ្ញាសិប្បនិម្មិតសម្រាប់ការអប់រំ",
    titleEn: "AI FOR EDUCATION NATIONAL CONFERENCE",
    taglineKh: '"បញ្ញាសិប្បនិម្មិតសម្រាប់ អនាគតនៃការអប់រំនៅកម្ពុជា"',
    taglineEn: '"Shaping the Future of Education in Cambodia"',
    dateKh: "២៤-២៥ វិច្ឆិកា ២០២៥",
    dateEn: "November 24-25, 2025",
    locationKh: "មជ្ឈមណ្ឌលនវានុវត្តន៍",
    locationEn: "Innovation Center, CITA",
    image: "https://th.bing.com/th/id/R.db75cbddbad6972e61da9234fdeb10b1?rik=gpYzQ%2bNWXoC6Pw&riu=http%3a%2f%2fnokorwatnews.com%2fwp-content%2fuploads%2f2022%2f10%2f38FEAC14-D129-4900-A9A2-D31BE489E41F.jpeg&ehk=aM0OAwyHtQuC0AfiRp10pgEJbBdfvCuoFEZjTv6ij7U%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    id: 2,
    titleKh: "ពិធីប្រគល់សញ្ញាបត្រឆ្នាំ ២០២៥",
    titleEn: "GRADUATION CEREMONY 2025",
    taglineKh: '"អបអរសាទរជោគជ័យនៃអ្នកដឹកនាំឌីជីថលជំនាន់ក្រោយ"',
    taglineEn: '"Celebrating the Success of Future Digital Leaders"',
    dateKh: "១៥ ធ្នូ ២០២៥",
    dateEn: "December 15, 2025",
    locationKh: "សាលសន្និសីទកោះពេជ្រ",
    locationEn: "Koh Pich Convention Center",
    image: "https://educationcambodia.org/wp-content/uploads/2024/01/International-Schools-Phnom-Penh.jpg"
  },
  {
    id: 3,
    titleKh: "សិក្ខាសាលាបច្ចេកវិទ្យាកសិកម្ម",
    titleEn: "AGRICULTURAL TECHNOLOGY WORKSHOP",
    taglineKh: '"ការជំរុញកសិកម្មតាមរយៈនវានុវត្តន៍ឌីជីថល"',
    taglineEn: '"Boosting Agriculture through Digital Innovation"',
    dateKh: "១០ មករា ២០២៦",
    dateEn: "January 10, 2026",
    locationKh: "សាកលវិទ្យាល័យភូមិន្ទកសិកម្ម",
    locationEn: "Royal University of Agriculture",
    image: "https://paragon.com.vn/wp-content/uploads/2023/04/truong-dinh-thien-ly.webp"
  },
  {
    id: 4,
    titleKh: "ទិវាបើកទ្វារសាកលវិទ្យាល័យ ២០២៦",
    titleEn: "UNIVERSITY OPEN DAY 2026",
    taglineKh: '"ស្វែងយល់ពីឱកាសសិក្សានៅក្នុងយុគសម័យឌីជីថល"',
    taglineEn: '"Explore Study Opportunities in the Digital Age"',
    dateKh: "០៥ កុម្ភៈ ២០២៦",
    dateEn: "February 05, 2026",
    locationKh: "មជ្ឈមណ្ឌលបណ្តុះបណ្តាល CADT",
    locationEn: "CADT Training Center",
    image: "https://media.timbu.com/poi/2124/nti1-2124-57a02f4f0d383.jpg"
  }
];

export const HighlightedEvents: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  return (
    <section id="highlighted-events" className="events-section">
      <div className="events-container">
        <h2 className="events-main-title">Highlighted Events</h2>

        <div 
          className="carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="event-main-card">
            {/* key={currentIndex} triggers the CSS animation on change */}
            <div className="event-content-flex" key={currentIndex}>
              
              {/* Image side - First in DOM for mobile order */}
              <div className="event-image-area fade-in">
                <div className="image-overlay"></div>
                <img src={events[currentIndex].image} alt="event" className="zoom-effect" />
              </div>

              {/* Text side */}
              <div className="event-text-area slide-in-bottom">
                <h3 className="khmer-title">{events[currentIndex].titleKh}</h3>
                <h4 className="english-title">{events[currentIndex].titleEn}</h4>
                
                <div className="tagline-group">
                  <p className="khmer-tagline">{events[currentIndex].taglineKh}</p>
                  <p className="english-tagline">{events[currentIndex].taglineEn}</p>
                </div>

                <div className="info-grid">
                  <div className="info-item">
                    <div className="icon-circle"><Calendar size={18} /></div>
                    <div className="info-text-wrapper">
                      <p className="info-text-top">{events[currentIndex].dateKh}</p>
                      <p className="info-text-sub">{events[currentIndex].dateEn}</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="icon-circle"><MapPin size={18} /></div>
                    <div className="info-text-wrapper">
                      <p className="info-text-top">{events[currentIndex].locationKh}</p>
                      <p className="info-text-sub">{events[currentIndex].locationEn}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <button className="nav-btn prev" onClick={prevSlide} aria-label="Previous">
            <ChevronLeft size={24} />
          </button>
          <button className="nav-btn next" onClick={nextSlide} aria-label="Next">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="thumbnail-row">
          {events.map((event, index) => (
            <button 
              key={event.id}
              onClick={() => setCurrentIndex(index)}
              className={`thumb-item ${currentIndex === index ? 'active' : ''}`}
            >
              <img src={event.image} alt="thumbnail" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightedEvents;