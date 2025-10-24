import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// 🎵 Playlist lagu kamu
const playlist = [
  { src: "/assets/songs/Bergema.mp3", title: "Bergema" },
  { src: "/assets/songs/PenjagaHati.mp3", title: "Penjaga Hati" },
  { src: "/assets/songs/RumahItu.mp3", title: "Rumah Itu" },
  { src: "/assets/songs/CintaLuarBiasa.mp3", title: "Cinta Luar Biasa" },
];

const AudioPlayer = ({ isPlaying, onTogglePlay }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef(null);
  const currentTrack = playlist[currentTrackIndex];

  const nextTrack = () => setCurrentTrackIndex((i) => (i + 1) % playlist.length);
  const prevTrack = () => setCurrentTrackIndex((i) => (i - 1 + playlist.length) % playlist.length);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.src = currentTrack.src;
    if (isPlaying) {
      audioRef.current.play().catch((err) => console.error("Audio play failed:", err));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrack]);

  const handleSongEnd = () => nextTrack();

  return (
    <>
      <audio ref={audioRef} onEnded={handleSongEnd} />

      {/* 🎧 Pemutar mungil dan cute */}
      <motion.div
        className="fixed bottom-6 right-6 bg-pink-100/90 backdrop-blur-md rounded-full shadow-md p-1 flex items-center space-x-1 z-50 border border-pink-200"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
      >
        {/* Tombol Previous */}
        <motion.button
          onClick={prevTrack}
          className="text-pink-500 p-2 rounded-full hover:bg-pink-200/70 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8.445 14.832A1 1 0 0010 14v-8a1 1 0 00-1.555-.832L3 9.168V6a1 1 0 00-2 0v8a1 1 0 002 0v-3.168l5.445 4z" />
          </svg>
        </motion.button>

        {/* Tombol Play/Pause */}
        <motion.button
          onClick={onTogglePlay}
          className="bg-pink-400 text-white p-3 rounded-full shadow-sm hover:bg-pink-500 transition-all"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
        >
          {isPlaying ? (
            // Ikon Pause
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
            </svg>
          ) : (
            // Ikon Play
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132z" />
            </svg>
          )}
        </motion.button>

        {/* Tombol Next */}
        <motion.button
          onClick={nextTrack}
          className="text-pink-500 p-2 rounded-full hover:bg-pink-200/70 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 10.832V14a1 1 0 002 0V6a1 1 0 00-2 0v3.168L4.555 5.168z" />
          </svg>
        </motion.button>
      </motion.div>

      {/* 🎀 Nama lagu kecil di atas player */}
      <motion.div
        className="fixed bottom-20 right-6 bg-pink-50 text-pink-600 text-xs font-semibold rounded-full px-3 py-1 shadow-sm border border-pink-200 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        {currentTrack.title}
      </motion.div>
    </>
  );
};

export default AudioPlayer;
