import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 border-bottom border-light">
      <div className="container">
        <a className="navbar-brand fw-bold fs-3" href="#">
          <span className="text-primary">CAR</span>RENTAL
        </a>
        
        <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link px-3" href="#">Vehicles</a></li>
            <li className="nav-item"><a className="nav-link px-3" href="#">Offers</a></li>
            <li className="nav-item"><a className="nav-link px-3" href="#">Locations</a></li>
            <li className="nav-item"><a className="nav-link px-3" href="#">Support</a></li>
          </ul>
          
          <div className="d-flex align-items-center gap-2">
            <button className="btn btn-link text-decoration-none text-secondary d-none d-xl-block fw-semibold">
              Contact us
            </button>
            <button className="btn btn-indigo rounded-pill px-4 fw-bold shadow-sm">
              Login / Signup
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;