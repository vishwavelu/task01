import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-5 pb-4 bg-white overflow-hidden">
      <div className="container text-center pt-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <h1 className="fw-bold mb-2 tracking-tight" style={{ fontSize: 'calc(1.8rem + 2vw)' }}>
              Your Journey Starts Here.
            </h1>
            <h1 className="fw-bold mb-4 tracking-tight" style={{ fontSize: 'calc(1.8rem + 2vw)' }}>
              <span className="text-indigo">Compare & Book</span> Instantly!
            </h1>
            <p className="fs-5 text-dark mb-5 fw-medium">
              Cover More than 47 Provinces
            </p>
            <div className="d-flex justify-content-center mb-5">
              <button className="btn btn-outline-dark rounded-pill px-4 py-2 fw-medium border-secondary-subtle">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;