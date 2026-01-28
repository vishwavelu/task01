import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchForm from './components/SearchForm';
import Categories from './components/Categories';
import Features from './components/Features';
import MobileApp from './components/MobileApp';
import BookingCheck from './components/BookingCheck';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-vh-100 d-flex flex-column bg-white">
      <Navbar />
      <main className="flex-grow-1">
        <Hero />
        
        {/* Overlapping Search Form */}
        <div className="container position-relative z-3" style={{ marginTop: '-80px' }}>
          <SearchForm />
        </div>
        
        {/* Content Sections */}
        <div className="pt-5 mt-5">
           <Categories />
        </div>
        
        <Features />
        <MobileApp />
        <BookingCheck />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;