import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from './components/HomePage';
import Gallery from './components/Gallery';
import StoryPage from './components/StoryPage';
import LoveLetter from './components/LoveLetter';
import AudioPlayer from './components/AudioPlayer';
import SurpriseModal from './components/SurpriseModal';
import OurStoryPage from './components/OurStoryPage';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSurpriseClick = () => {
    setShowModal(true);
    setIsPlaying(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Router>
      {/* Background Gradasi Romantis */}
      <div className="relative min-h-screen bg-gradient-to-b from-pink-100 via-pink-200 to-pink-50 text-gray-800 flex flex-col justify-between">

        {/* Efek Hati Mengambang (opsional jika ingin lebih romantis) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="animate-pulse absolute top-10 left-5 text-pink-300 text-4xl opacity-60">💖</div>
          <div className="animate-bounce absolute top-20 right-8 text-pink-400 text-3xl opacity-70">💞</div>
          <div className="animate-ping absolute bottom-16 left-1/3 text-pink-200 text-2xl opacity-80">🌸</div>
        </div>

        {/* Konten Utama */}
        <AnimatePresence mode="wait">
          <Routes>
            <Route
              path="/"
              element={<HomePage onSurpriseClick={handleSurpriseClick} />}
            />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/story" element={<StoryPage />} />
            <Route path="/our-story" element={<OurStoryPage z/>} />
            <Route path="/love-letter" element={<LoveLetter />} />
          </Routes>
        </AnimatePresence>

        {/* Pemutar Musik & Modal Kejutan */}
        <AudioPlayer isPlaying={isPlaying} onTogglePlay={toggleAudio} />
        <SurpriseModal isOpen={showModal} onClose={handleModalClose} />

        {/* Footer Romantis */}
        <footer className="bg-pink-200 bg-opacity-60 backdrop-blur-md py-4 text-center text-sm md:text-base text-pink-700 shadow-inner">
          <p className="font-playfair italic">
            Made with 💕 by <span className="font-semibold text-pink-800">Dryanz</span> 
            {' '}for <span className="text-pink-900">Nayluferr</span> — because every heartbeat deserves a story 🌹
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
