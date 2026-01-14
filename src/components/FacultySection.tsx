import React from 'react';
import { User } from 'lucide-react';
import './FacultySection.css';

interface FacultyMember {
  id: number;
  name: string;
  position: string;
  specialty: string;
  image: string;
}

const facultyMembers: FacultyMember[] = [
  { 
    id: 1, 
    name: "Dr. Sopheak Chann", 
    position: "Professor of Computer Science", 
    specialty: "AI & Machine Learning",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
  },
  { 
    id: 2, 
    name: "Dr. Borey Kim", 
    position: "Associate Professor", 
    specialty: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
  },
  { 
    id: 3, 
    name: "Dr. Dara Sok", 
    position: "Professor of Digital Innovation", 
    specialty: "IoT & Smart Systems",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
  },
  { 
    id: 4, 
    name: "Dr. Vanna Phorn", 
    position: "Assistant Professor", 
    specialty: "Data Science",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400"
  },
];

export const FacultySection: React.FC = () => {
  return (
    <section id="faculty" className="faculty-section">
      <div className="container-institute">
        <div className="faculty-header">
          <div className="header-left">
            <div className="accent-bar-gold"></div>
            <h2 className="section-title">Meet Faculty Members</h2>
            <p className="section-subtitle">
              Distinguished professors dedicated to digital excellence.
            </p>
          </div>
          <a href="#" className="view-all-link">View All →</a>
        </div>

        <div className="faculty-grid">
          {facultyMembers.map((member, index) => (
            <div 
              key={member.id} 
              className="faculty-card" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="faculty-image-box">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="faculty-img"
                  loading="lazy"
                />
                <div className="fallback-ui">
                  <User size={24} className="gold-icon" />
                </div>
              </div>
              
              <div className="faculty-info">
                <div className="text-content">
                  <h3 className="faculty-name">{member.name}</h3>
                  <p className="faculty-position">{member.position}</p>
                </div>
                <div className="badge-container">
                  <span className="specialty-badge">{member.specialty}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;