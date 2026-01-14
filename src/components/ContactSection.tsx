import React, { useState } from 'react';
import { Phone, Mail, Send, MapPin } from 'lucide-react';
import './ContactSection.css';

const staffMembers = [
  { id: 1, name: "Andrew Tey", role: "Center Director", tel: "088 969 6688", email: "andrewtey@cgti-cambodia.org", img: "https://www.cgti-cambodia.org/uploads/01JQMZZRYE1TY2CQCDACPPVMDH.jpg" },
  { id: 2, name: "Monh Timsorortha", role: "Program Manager", tel: "077 529 7766", email: "morhtimsorortha@cgti-cambodia.org", img: "https://www.cgti-cambodia.org/uploads/01JQMZZRYM973FAATCAVW71HBY.jpg" },
  { id: 3, name: "Sao Chhayaroat", role: "Business Dev Manager", tel: "016 498 778", email: "skanharoat@cgti-cambodia.org", img: "https://www.cgti-cambodia.org/uploads/01JQQRREFE3QEBCTK19MRJ5AQB.jpg" },
  { id: 4, name: "Vang Rotha", role: "Senior Program Manager", tel: "012 609 890", email: "rathavong@cgti-cambodia.org", img: "https://www.cgti-cambodia.org/uploads/01JQMZZRYYDV6ZQ7CSA5R03VBK.jpg" }
];

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        
        {/* Header */}
        <div className="contact-header">
          <h2 className="contact-title">Contact Us</h2>
          <h3 className="contact-subtitle">Connect with Golden Institute</h3>
          <div className="gold-divider"></div>
        </div>

        {/* Staff Grid: Always 2 per row on mobile */}
        <div className="staff-grid">
          {staffMembers.map((staff) => (
            <div key={staff.id} className="staff-card">
              <div className="staff-img-wrapper">
                <img src={staff.img} alt={staff.name} className="staff-img" />
              </div>
              <div className="staff-info">
                <h4 className="staff-name">{staff.name}</h4>
                <p className="staff-role">{staff.role}</p>
                <div className="staff-links">
                  <div className="link-item">
                    <span className="label">Tel:</span>
                    <a href={`tel:${staff.tel}`}>{staff.tel}</a>
                  </div>
                  <div className="link-item">
                    <span className="label">Email:</span>
                    <a href={`mailto:${staff.email}`} className="email-link">{staff.email}</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Unified Form & Map Card (Stacked on mobile, Side-by-Side on Desktop) --- */}
        <div className="main-contact-card">
          <div className="contact-grid-inner">
            
            {/* Form Side */}
            <div className="form-side">
              <h3 className="section-small-title">Send a Message</h3>
              <form onSubmit={handleSubmit} className="actual-form">
                <div className="form-row">
                  <input type="text" placeholder="Name" required />
                  <input type="email" placeholder="Email" required />
                </div>
                <input type="text" placeholder="Subject" required />
                <textarea placeholder="Your Message..." rows={4} required></textarea>
                <button type="submit" className={`submit-btn ${submitted ? 'success' : ''}`}>
                  {submitted ? "Message Sent!" : "Send Message"} <Send size={18} />
                </button>
              </form>
            </div>

            {/* Map Side */}
            <div className="map-side">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7706606042467!2d104.8510!3d11.5681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDM0JzA1LjIiTiAxMDTCsDUxJDAzLjYiRQ!5e0!3m2!1sen!2skh!4v1700000000000!5m2!1sen!2skh" 
                className="map-iframe"
                allowFullScreen
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>

          </div>
        </div>

        {/* Quick Info */}
        <div className="quick-info-row">
          <div className="info-mini">
            <Phone size={18} className="gold-icon" />
            <span>+855 23 900 399</span>
          </div>
          <div className="info-mini">
            <Mail size={18} className="gold-icon" />
            <span>info@cgti-cambodia.org</span>
          </div>
        </div>

      </div>
    </section>
  );
};
export default ContactSection;