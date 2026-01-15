import React, { useState, useMemo, Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Html, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { Phone, Mail, Send, MapPin } from 'lucide-react';
import './ContactSection.css';

// --- Configuration ---
const GLOBE_RADIUS = 0.75; 

const projectLocations = [
  { name: "Bangladesh", lat: 23.684994, lon: 90.356331 },
  { name: "Cambodia", lat: 11.5449, lon: 104.8921 },
  { name: "Singapore", lat: 1.3521, lon: 103.8198 },
  { name: "Vietnam", lat: 14.0583, lon: 108.2772 },
  { name: "Jordan", lat: 30.5852, lon: 36.2384 },
];

const staffMembers = [
  { id: 1, name: "Andrew Tey", role: "Center Director", tel: "088 969 6688", email: "andrewtey@cgti-cambodia.org", img: "https://www.cgti-cambodia.org/uploads/01JQMZZRYE1TY2CQCDACPPVMDH.jpg" },
  { id: 2, name: "Monh Timsorortha", role: "Program Manager", tel: "077 529 7766", email: "morhtimsorortha@cgti-cambodia.org", img: "https://www.cgti-cambodia.org/uploads/01JQMZZRYM973FAATCAVW71HBY.jpg" },
  { id: 3, name: "Sao Chhayaroat", role: "Business Dev Manager", tel: "016 498 778", email: "skanharoat@cgti-cambodia.org", img: "https://www.cgti-cambodia.org/uploads/01JQQRREFE3QEBCTK19MRJ5AQB.jpg" },
  { id: 4, name: "Vang Rotha", role: "Senior Program Manager", tel: "012 609 890", email: "rathavong@cgti-cambodia.org", img: "https://www.cgti-cambodia.org/uploads/01JQMZZRYYDV6ZQ7CSA5R03VBK.jpg" }
];

const getPos = (lat: number, lon: number, radius: number) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return [
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  ] as [number, number, number];
};

const Marker = ({ name, lat, lon }: { name: string; lat: number; lon: number }) => {
  const [hovered, setHovered] = useState(false);
  const position = useMemo(() => getPos(lat, lon, GLOBE_RADIUS), [lat, lon]);

  return (
    <group position={position}>
      <Html center distanceFactor={5} occlude>
        <div 
          className="pin-wrapper"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <MapPin size={14} className={`map-pin-icon ${hovered ? 'active' : ''}`} />
          <div className={`pin-label ${hovered ? 'visible' : ''}`}>
            {name}
          </div>
        </div>
      </Html>
    </group>
  );
};

const GlobeScene = () => {
  const globeRef = useRef<THREE.Mesh>(null);
  const texture = useTexture('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg');

  useFrame(() => {
    if (globeRef.current) globeRef.current.rotation.y += 0.0015;
  });

  return (
    <>
      <mesh scale={1.1}>
        <sphereGeometry args={[GLOBE_RADIUS, 64, 64]} />
        <meshBasicMaterial color="#4db8ff" transparent opacity={0.05} side={THREE.BackSide} />
      </mesh>
      <mesh ref={globeRef}>
        <sphereGeometry args={[GLOBE_RADIUS, 64, 64]} />
        <meshStandardMaterial map={texture} roughness={0.8} metalness={0.2} />
      </mesh>
      {projectLocations.map((loc, i) => (
        <Marker key={i} name={loc.name} lat={loc.lat} lon={loc.lon} />
      ))}
    </>
  );
};

const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Contact Us</h2>
          <div className="gold-divider"></div>
        </div>

        <div className="staff-grid">
          {staffMembers.map(staff => (
            <div key={staff.id} className="staff-card">
              <div className="staff-img-wrapper">
                <img src={staff.img} alt={staff.name} className="staff-img" />
              </div>
              <div className="staff-info">
                <h4 className="staff-name">{staff.name}</h4>
                <p className="staff-role">{staff.role}</p>
                <div className="staff-links">
                  <div className="link-item"><a href={`tel:${staff.tel}`}>{staff.tel}</a></div>
                  <div className="link-item"><a href={`mailto:${staff.email}`}>{staff.email}</a></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="main-contact-card">
          <div className="contact-grid-inner">
            <div className="form-side">
              <h3 className="section-small-title">Send a Message</h3>
              <form className="actual-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <div className="form-row">
                  <input type="text" placeholder="Name" required />
                  <input type="email" placeholder="Email" required />
                </div>
                <input type="text" placeholder="Subject" required />
                <textarea placeholder="Your Message..." rows={5} required></textarea>
                <button type="submit" className={`submit-btn ${submitted ? 'success' : ''}`}>
                  {submitted ? "Message Sent!" : "Send Message"} <Send size={18} />
                </button>
              </form>
            </div>

            <div className="map-side">
              <Canvas camera={{ position: [0, 0, 3.5], fov: 40 }}>
                <ambientLight intensity={1.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <Suspense fallback={null}>
                  <GlobeScene />
                  <Stars radius={100} depth={50} count={2500} factor={4} fade />
                </Suspense>
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
              </Canvas>
              <div className="globe-label">
                <strong>CGTI HEADQUARTERS</strong>
                <span>Phnom Penh, Cambodia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;