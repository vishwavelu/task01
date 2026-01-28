
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const MobileApp: React.FC = () => {
  return (
    <section className="py-5 bg-white overflow-hidden">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-12 col-lg-6 position-relative">
            <div className="d-flex justify-content-center justify-content-lg-start position-relative z-1">
               <img 
                src="https://picsum.photos/seed/mobile1/300/600" 
                alt="App Screenshot 1"
                className="rounded-5 shadow-lg border border-5 border-dark"
                style={{ width: '220px', transform: 'rotate(-6deg)' }}
              />
              <img 
                src="https://picsum.photos/seed/mobile2/300/600" 
                alt="App Screenshot 2"
                className="rounded-5 shadow-lg border border-5 border-dark position-relative"
                style={{ width: '220px', transform: 'rotate(6deg)', marginLeft: '-80px', marginTop: '60px' }}
              />
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <h2 className="display-5 fw-bold mb-4">Download mobile app</h2>
            <p className="text-secondary mb-4 lead">
              Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa. Fermentum urna ut at et in.
            </p>

            <div className="row g-3 mb-5">
              {['Special Promotions', 'Service Coverage', 'Flexible Booking'].map((item) => (
                <div key={item} className="col-12 col-sm-4 d-flex align-items-center gap-2">
                  <CheckCircle2 className="text-success" size={20} />
                  <span className="fw-semibold small">{item}</span>
                </div>
              ))}
            </div>

            <div className="d-flex flex-wrap gap-3">
              <button className="btn btn-dark d-flex align-items-center gap-3 px-4 py-3 rounded-4 shadow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M17.05 20.28c-.96.00-1.76-.56-2.62-.56-.85.00-1.6.51-2.51.51-1.84.00-4.04-1.61-4.04-4.89 0-2.43 1.54-3.71 3.01-3.71.79.00 1.54.54 2.02.54.47.00 1.29-.51 2.15-.51 1.07.00 1.93.55 2.5 1.4-2.22 1.34-1.86 4.38.42 5.39-.45 1.14-1.01 2.22-1.93 2.83zM14.64 10.22c-.12-1.33 1.05-2.67 2.37-2.72.18 1.51-1.22 2.76-2.37 2.72z"/></svg>
                <div className="text-start">
                  <div className="text-uppercase opacity-50" style={{ fontSize: '9px', fontWeight: 800 }}>Download on the</div>
                  <div className="fw-bold h5 mb-0">App Store</div>
                </div>
              </button>
              <button className="btn btn-dark d-flex align-items-center gap-3 px-4 py-3 rounded-4 shadow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M5.5 3.5l11.5 6.6-11.5 6.6v-13.2zm12.5 7.1l-2.4-1.4-2.1 4.1 4.5-2.7zm-13.5 7.6v-15.4l11.1 7.7-11.1 7.7z"/></svg>
                <div className="text-start">
                  <div className="text-uppercase opacity-50" style={{ fontSize: '9px', fontWeight: 800 }}>Get it on</div>
                  <div className="fw-bold h5 mb-0">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
