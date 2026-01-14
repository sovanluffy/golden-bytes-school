import React from 'react';
import './Institutes.css';

interface Institute {
  id: string;
  name: string;
  description?: string;
  image: string;
  link: string;
  type: 'gradient' | 'info';
}

const institutes: Institute[] = [
  {
    id: 'idt',
    name: 'Institute of  Gloden Future  (IGF)',
    image: 'https://educationcambodia.org/wp-content/uploads/2024/01/International-Schools-Phnom-Penh.jpg',
    link: '#idt',
    type: 'gradient',
  },
  {
    id: 'idg',
    name: 'Institute of Digital Governance (IDG)',
    description: 'An institution for building digital human capital through training, assessing, and certifying digital skills for civil servants',
    image: 'https://paragon.com.vn/wp-content/uploads/2023/04/truong-dinh-thien-ly.webp',
    link: '#idg',
    type: 'info',
  },
  {
    id: 'idri',
    name: 'Institute of Digital Research and Innovation (GOLDEN BYTES IDRI)',
    image: 'https://media.timbu.com/poi/2124/nti1-2124-57a02f4f0d383.jpg?w=300?w=300',
    link: '#idri',
    type: 'gradient',
  },
];

export const InstituteSection: React.FC = () => {
  return (
    <section className="container-institute">
      <h2 className="title">
        We have three institutes and each has mission focus on digital technologies development for Cambodia future
      </h2>
      <div className="divider" />
      
      <div className="grid-layout">
        {institutes.map((item) => (
          <a key={item.id} href={item.link} className="card">
            <img src={item.image} alt={item.name} className="card-image" />
            
            <div className={`overlay ${item.type === 'info' ? 'overlay-info' : 'overlay-gradient'}`}>
              <div className="overlay-content">
                <h3 className="card-title">{item.name}</h3>
                {item.description && <p className="card-description">{item.description}</p>}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
export default InstituteSection;