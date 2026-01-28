import React from 'react';
import { MapPin, Calendar, Clock } from 'lucide-react';

const SearchForm: React.FC = () => {
  return (
    <div className="card border-0 rounded-4 shadow-sm p-4 mx-auto bg-white" style={{ maxWidth: '1100px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
      <div className="row g-3 align-items-end">
        
        {/* Pickup Location */}
        <div className="col-12 col-lg-3">
          <label className="form-label small fw-bold text-secondary mb-2">Pickup location</label>
          <div className="input-group border rounded-3 overflow-hidden">
            <span className="input-group-text bg-white border-0 pe-1">
              <MapPin size={18} className="text-muted" />
            </span>
            <input 
              type="text" 
              placeholder="Enter location here" 
              className="form-control border-0 py-2 fs-6 shadow-none"
            />
          </div>
        </div>

        {/* Pickup Date & Time */}
        <div className="col-12 col-lg-3">
          <label className="form-label small fw-bold text-secondary mb-2">Pickup date & time</label>
          <div className="d-flex gap-0 border rounded-3 overflow-hidden">
            <div className="input-group flex-nowrap border-end">
              <input type="text" defaultValue="03/12/22" className="form-control border-0 py-2 fs-7 px-2 text-center shadow-none" style={{ width: '85px' }} />
              <span className="input-group-text bg-white border-0 ps-0">
                <Calendar size={16} className="text-muted" />
              </span>
            </div>
            <div className="input-group flex-nowrap">
              <input type="text" defaultValue="02:30 PM" className="form-control border-0 py-2 fs-7 px-2 text-center shadow-none" style={{ width: '90px' }} />
              <span className="input-group-text bg-white border-0 ps-0">
                <Clock size={16} className="text-muted" />
              </span>
            </div>
          </div>
        </div>

        {/* Drop-off Date & Time */}
        <div className="col-12 col-lg-3">
          <label className="form-label small fw-bold text-secondary mb-2">Drop-off date & time</label>
          <div className="d-flex gap-0 border rounded-3 overflow-hidden">
            <div className="input-group flex-nowrap border-end">
              <input type="text" defaultValue="03/12/22" className="form-control border-0 py-2 fs-7 px-2 text-center shadow-none" style={{ width: '85px' }} />
              <span className="input-group-text bg-white border-0 ps-0">
                <Calendar size={16} className="text-muted" />
              </span>
            </div>
            <div className="input-group flex-nowrap">
              <input type="text" defaultValue="02:30 PM" className="form-control border-0 py-2 fs-7 px-2 text-center shadow-none" style={{ width: '90px' }} />
              <span className="input-group-text bg-white border-0 ps-0">
                <Clock size={16} className="text-muted" />
              </span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="col-12 col-lg-3">
          <button className="btn btn-indigo w-100 rounded-pill py-2 fw-medium">
            Find a Car
          </button>
        </div>
      </div>

      <style>{`
        .fs-7 { font-size: 0.875rem; }
        .input-group-text { color: #adb5bd; }
        .form-control::placeholder { color: #adb5bd; font-size: 0.9rem; }
        .btn-indigo { background-color: #5840FF !important; }
        .btn-indigo:hover { background-color: #4633CC !important; }
      `}</style>
    </div>
  );
};

export default SearchForm;