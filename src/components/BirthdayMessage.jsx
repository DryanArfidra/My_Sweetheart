import React from "react";
import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";

const BirthdayMessage = () => {
  // 🎂 Ubah tanggal ulang tahun di sini
  const targetDate = "2025-10-25";

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-300 to-purple-200 flex flex-col items-center justify-center px-4 sm:px-6 py-8 relative overflow-hidden">
      {/* ❤️ Efek hati lembut melayang */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-400 opacity-70"
            initial={{
              opacity: 0,
              y: "100vh",
              x: Math.random() * window.innerWidth,
            }}
            animate={{
              opacity: [0.4, 1, 0],
              y: ["100vh", "-10vh"],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 5,
              repeat: Infinity,
              delay: i * 0.7,
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      {/* 💌 Kartu utama */}
      <div className="relative z-10 w-full max-w-md sm:max-w-lg text-center backdrop-blur-md bg-white/40 rounded-3xl shadow-xl p-6 sm:p-8 border border-pink-200">
        <motion.h2
          className="font-[Playfair_Display] text-2xl sm:text-3xl md:text-4xl font-bold text-pink-600 mb-4 sm:mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Menghitung Detik Menuju Harimu 🎂
        </motion.h2>

        <motion.p
          className="text-gray-700 text-base sm:text-lg italic mb-6 sm:mb-10 px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Setiap detik berlalu, aku makin deg-degan... 😳 <br />
          Karena sebentar lagi <span className="text-pink-500 font-semibold">Bidadari kesayanganku</span> ulang tahun 💖
        </motion.p>

        {/* ⏳ Countdown */}
        <CountdownTimer targetDate={targetDate} />

        <motion.p
          className="text-gray-700 text-base sm:text-lg italic mt-8 px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Aku udah siapin doa terbaik buatmu... <br />
          dan sedikit candaan biar kamu senyum (kan kamu suka senyumku juga 😜)
        </motion.p>

        <motion.div
          className="mt-8 text-gray-600 text-sm italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Dengan cinta yang gak ada expired-nya 💕 <br />
          — dari seseorang yang selalu nyuri hatimu tiap hari 😘
        </motion.div>
      </div>
    </div>
  );
};

export default BirthdayMessage;
