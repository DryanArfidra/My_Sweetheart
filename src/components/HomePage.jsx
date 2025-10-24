import React from 'react';
import HeroSection from './HeroSection';
import BirthdayMessage from './BirthdayMessage';

const HomePage = ({ onSurpriseClick }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 
        HeroSection sekarang memiliki tinggi maksimal 80% dari layar (h-[80vh]).
        Ini akan memastikan ada ruang yang tersisa di bawahnya.
      */}
      <div className="h-[80vh]">
        <HeroSection onSurpriseClick={onSurpriseClick} />
      </div>
      
      {/* 
        BirthdayMessage sekarang berada di container dengan latar belakang 
        yang berbeda agar mudah terlihat. flex-shrink-0 memastikan ukurannya tidak berubah.
      */}
      <div className="flex-shrink-0 py-12 px-4 md:px-12 bg-gradient-to-b from-cream to-pink-pastel">
        <BirthdayMessage />
      </div>
    </div>
  );
};

export default HomePage;