
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-5 mt-auto">
      <div className="container py-4">
        <div className="row justify-content-between g-5 mb-5">
          {/* Brand and Description */}
          <div className="col-12 col-md-5">
            <div className="mb-4">
              <span className="fw-bold fs-3 tracking-tighter">
                <span className="text-indigo">CAR</span>RENTAL
              </span>
            </div>
            <p className="text-white-50 lh-lg" style={{ maxWidth: '400px', fontSize: '0.95rem' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
          </div>

          {/* Quick Contact */}
          <div className="col-12 col-md-4 col-lg-3 text-md-end">
            <h6 className="text-uppercase fw-bold mb-4 tracking-widest" style={{ fontSize: '0.9rem' }}>quick contact</h6>
            <ul className="list-unstyled text-white-50 mb-0" style={{ fontSize: '0.9rem' }}>
              <li className="mb-3">Office : 42 Marine Parade, Australia</li>
              <li className="mb-3">Mail : info@8pxlstudio.com</li>
              <li>Phone : +0123456789</li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <hr className="border-secondary opacity-25 mb-4" />

        {/* Bottom Bar */}
        <div className="row align-items-center">
          <div className="col-12 col-md-6 mb-3 mb-md-0 text-center text-md-start">
            <p className="text-white-50 small mb-0">
              Copyright © 2025 Driveways. All Rights Reserved.
            </p>
          </div>
          <div className="col-12 col-md-6 text-center text-md-end">
            <div className="d-inline-flex align-items-center gap-3">
              <a href="#" className="text-white-50 text-decoration-none small hover-white transition-all">Privacy Policy</a>
              <span className="text-white-50 opacity-25">|</span>
              <a href="#" className="text-white-50 text-decoration-none small hover-white transition-all">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .bg-black { background-color: #000000 !important; }
        .hover-white:hover { color: #ffffff !important; }
        .transition-all { transition: all 0.2s ease; }
      `}</style>
    </footer>
  );
};

export default Footer;
