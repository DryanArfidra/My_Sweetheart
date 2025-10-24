import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import StarBackground from './StarBackground';

const HeroSection = ({ onSurpriseClick }) => {
  return (
    <div className="relative h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-pink-100 via-rose-100 to-pink-200">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-90 saturate-125 blur-[1px] scale-105 transition-all duration-700"
        style={{ backgroundImage: "url('/src/assets/WhatsApp Image 2025-10-21 at 17.34.04_7680cd7b.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-rose-600/60 via-pink-400/30 to-transparent mix-blend-multiply"></div>
      </div>

      {/* Efek Bintang */}
      <StarBackground />

      {/* Efek Hati Melayang */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-rose-400/80"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 18 + 12}px`,
            }}
            initial={{ y: '100vh', opacity: 0 }}
            animate={{
              y: ['100vh', '-10vh'],
              opacity: [0.8, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            ❤️
          </motion.span>
        ))}
      </div>

      {/* Konten Utama */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-12 max-w-lg sm:max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-2xl border border-white/30">
        <motion.h1 
          className="playfair text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-3 sm:mb-4 drop-shadow-[0_0_15px_rgba(255,182,193,0.7)] leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Selamat Ulang Tahun, Sayangku 💖
        </motion.h1>
        
        <motion.p 
          className="text-base sm:text-lg md:text-2xl text-pink-50 mb-6 sm:mb-8 drop-shadow-md italic tracking-wide leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Buat <span className="text-rose-200 font-semibold">Si Nuy</span> —  
          Kamu itu bukan cuma spesial, tapi juga alasan kenapa aku sering jarang makan... soalnya udah kenyang mikirin kamu 😋💗  
        </motion.p>

        {/* Foto Profil */}
        <motion.img
          src="/src/assets/WhatsApp Image 2025-10-24 at 07.30.19_262f2ef3.jpg"
          alt="Profile"
          className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover mx-auto mb-6 sm:mb-8 border-4 border-rose-200 shadow-[0_0_20px_rgba(255,192,203,0.6)]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Tombol Kejutan */}
        <motion.button
          onClick={onSurpriseClick}
          className="bg-gradient-to-r from-rose-400 to-pink-400 hover:from-rose-300 hover:to-pink-300 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full shadow-lg shadow-rose-300/50 transition-all duration-300 text-sm sm:text-base"
          whileHover={{ scale: 1.05, rotate: 3 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Buka 🎁 (janji gak baper ya 😜)
        </motion.button>

        {/* Navigasi ke Halaman Lain */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link to="/gallery">
            <motion.button
              className="bg-white/80 hover:bg-white text-rose-500 font-medium py-2 px-5 sm:px-6 rounded-full shadow-md border border-rose-200 transition-all duration-300 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ada Foto Ciapa Ni 📸
            </motion.button>
          </Link>
          <Link to="/our-story">
            <motion.button
              className="bg-white/80 hover:bg-white text-rose-500 font-medium py-2 px-5 sm:px-6 rounded-full shadow-md border border-rose-200 transition-all duration-300 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Cinta Di Pondok Al-Huda 💌
            </motion.button>
          </Link>
          <Link to="/story">
            <motion.button
              className="bg-white/80 hover:bg-white text-rose-500 font-medium py-2 px-5 sm:px-6 rounded-full shadow-md border border-rose-200 transition-all duration-300 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Mimpi Kita Nanti 🏡
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
