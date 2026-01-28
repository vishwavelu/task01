import React from 'react';

const BookingCheck: React.FC = () => {
  return (
    <section className="container mb-5 pb-5">
      <div className="bg-dark-premium rounded-5 p-4 p-lg-5 text-center text-white position-relative overflow-hidden shadow-lg border border-secondary border-opacity-10">
        {/* Background Decorative Blurs */}
        <div className="blur-circle bg-primary top-0 end-0 translate-middle-y"></div>
        <div className="blur-circle bg-indigo bottom-0 start-0 translate-middle-y"></div>

        <div className="position-relative z-1 py-4 mx-auto" style={{ maxWidth: '800px' }}>
          <h2 className="display-4 fw-bold mb-4">Ready to hit the road?</h2>
          <p className="text-white-50 mb-5 fs-5">
            Retrieve your booking details instantly. Enter your unique booking ID below to check status, modify dates, or upgrade your vehicle.
          </p>

          <div className="row g-3 justify-content-center">
            <div className="col-12 col-md-7">
              <input 
                type="text" 
                placeholder="Ex: BK-9921-X" 
                className="form-control form-control-lg rounded-4 border-0 py-3 px-4 shadow-sm"
              />
            </div>
            <div className="col-12 col-md-4">
              <button className="btn btn-indigo btn-lg w-100 rounded-4 py-3 fw-bold shadow">
                Check Booking
              </button>
            </div>
          </div>
          
          <div className="mt-4">
            <p className="small text-white-50">Lost your booking number? <a href="#" className="text-indigo text-decoration-none">Contact support</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCheck;