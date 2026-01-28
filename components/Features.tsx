
import React from 'react';
import { Sparkles, Home, Headset, Scale, DollarSign, Zap } from 'lucide-react';
import { Feature } from '../types';

const FEATURES: Feature[] = [
  { id: 1, title: 'Clean & sanitized rides', description: 'Because your safety and comfort come first.', icon: <Sparkles size={24} />, color: '#fef3c7' },
  { id: 2, title: 'Doorstep pickup & drop', description: 'Get picked up wherever you are.', icon: <Home size={24} />, color: '#fef3c7' },
  { id: 3, title: 'Customer service', description: '24/7 support to assist you needed.', icon: <Headset size={24} />, color: '#fef3c7' },
  { id: 4, title: 'Price comparison', description: 'Find the best rates instantly.', icon: <Scale size={24} />, color: '#fef3c7' },
  { id: 5, title: 'Affordable pricing', description: 'No hidden fees, no surprises.', icon: <DollarSign size={24} />, color: '#fef3c7' },
  { id: 6, title: 'Instant booking', description: 'Book a ride in seconds.', icon: <Zap size={24} />, color: '#fef3c7' }
];

const Features: React.FC = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container py-5">
        <div className="text-center mb-5">
          <p className="text-indigo-600 fw-bold text-uppercase tracking-widest small mb-2">Why Choose Us</p>
          <h2 className="fw-bold">Providing Reliable Car Rental</h2>
        </div>

        <div className="row g-5 align-items-center">
          <div className="col-12 col-lg-6">
            <img 
              src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800" 
              alt="Car Preview"
              className="img-fluid rounded-5 shadow-lg"
            />
          </div>

          <div className="col-12 col-lg-6">
            <div className="row g-4">
              {FEATURES.map((feature) => (
                <div key={feature.id} className="col-12 col-sm-6">
                  <div className="mb-3 d-inline-flex p-3 rounded-4" style={{ backgroundColor: feature.color, color: '#92400e' }}>
                    {feature.icon}
                  </div>
                  <h5 className="fw-bold">{feature.title}</h5>
                  <p className="text-secondary small">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
