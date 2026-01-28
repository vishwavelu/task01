import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { CarCategory } from '../types';

const CATEGORIES: CarCategory[] = [
  { 
    id: 1, 
    name: 'Infiniti Q-Series', 
    image: 'https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvNDY2LW1zYy02MTc5LWFfMS5wbmc.png' 
  },
  { 
    id: 2, 
    name: 'BMW M2 Blue', 
    image: 'https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGQyMC0xLTA0LWNoYW5uZWwucG5n.png' 
  },
  { 
    id: 3, 
    name: 'Audi S3 Yellow', 
    image: 'https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGQyMC0xLTA0LWF1ZGkucG5n.png' 
  },
  { 
    id: 4, 
    name: 'Hyundai Tucson', 
    image: 'https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvNDY2LW1zYy02OTI5LWFfMS5wbmc.png' 
  },
];

const Categories: React.FC = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <div>
            <h2 className="fw-bold mb-1 h1">Browse by Brand</h2>
            <p className="text-secondary mb-0">Discover our newly added premium fleet</p>
          </div>
          <button className="btn btn-outline-dark rounded-pill px-4 py-2 d-flex align-items-center gap-2 fw-bold">
            All Brands <ChevronRight size={18} />
          </button>
        </div>

        <div className="row g-4">
          {CATEGORIES.map((cat) => (
            <div key={cat.id} className="col-12 col-sm-6 col-lg-3">
              <div className="card h-100 border-0 bg-light rounded-5 p-4 category-card">
                <div className="mb-4 text-center d-flex align-items-center justify-content-center" style={{ height: '160px' }}>
                  <img 
                    src={cat.image} 
                    alt={cat.name}
                    className="img-fluid transition-transform car-image"
                    style={{ 
                      maxHeight: '140px', 
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))'
                    }}
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <span className="fw-bold fs-5">{cat.name}</span>
                  <div className="btn btn-white border rounded-circle p-2 d-flex align-items-center justify-content-center shadow-sm">
                    <ArrowRight size={18} className="text-indigo" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .car-image {
          transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .category-card:hover .car-image {
          transform: scale(1.1) rotate(-2deg);
        }
      `}</style>
    </section>
  );
};

export default Categories;