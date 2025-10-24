import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LoveLetter = () => {
  const [hearts, setHearts] = useState([]);
  const [letterVisible, setLetterVisible] = useState(false);

  useEffect(() => {
    const newHearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${Math.random() * 5 + 10}s`,
    }));
    setHearts(newHearts);

    const timer = setTimeout(() => setLetterVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-rose-50 to-white flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden font-[Poppins]">
      {/* Hati Melayang */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-pink-400 text-xl pointer-events-none z-0"
          style={{
            left: heart.left,
            animation: `heart-float ${heart.animationDuration} linear infinite`,
            animationDelay: heart.animationDelay,
          }}
        >
          💖
        </div>
      ))}

      {/* Judul */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-pink-500 text-center mb-8 z-10 drop-shadow-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        A Special Letter For You 💌
      </motion.h1>

      {/* Isi Surat */}
      {letterVisible && (
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-8 w-full max-w-md z-10 border border-pink-100"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <motion.p
              className="text-lg text-center text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Untuk kekasihku tersayang, <span className="text-pink-500 font-semibold">Nayla</span>,
            </motion.p>

            <motion.p
            className="text-base sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Hari ini bukan hari biasa, karena hari ini dunia dikasih bonus istimewa yaitu kamu lahir 😆🎂  
            Semoga setiap langkahmu dipenuhi tawa, keberkahan, dan sedikit drama biar hidup gak bosenin 🤭✨
          </motion.p>

          <motion.p
            className="text-base sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Kamu tuh bukan cuma bikin hidupku berwarna, tapi juga bikin aku lupa password WiFi setiap ku melihat senyum kamu 😝  
            Semoga senyum itu gak pernah pudar, dan hatimu selalu tenang meski dunia kadang berisik 💖
          </motion.p>

          <motion.p
            className="text-base sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Aku berdoa semoga kamu selalu sehat, dilindungi Allah di setiap langkah,  
            rezekimu lancar, impianmu tercapai, dan semoga... cintamu gak berpindah arah 😜🙏
          </motion.p>

          <motion.p
            className="text-center text-pink-500 font-semibold italic text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            Dengan segunung cinta dan secubit gombalan, <br />
            <span className="text-pink-400 font-bold">Dari seseorang yang gak bisa jauh dari kamu 💘</span>
          </motion.p>
          </div>
        </motion.div>
      )}

      {/* Tombol Kembali */}
      <motion.div
        className="mt-8 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <Link to="/">
          <motion.button
            className="bg-pink-400 hover:bg-pink-500 text-white font-medium py-2 px-6 rounded-full shadow-md transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Home 🏠
          </motion.button>
        </Link>
      </motion.div>

      {/* Animasi hati melayang */}
      <style>{`
        @keyframes heart-float {
          0% { transform: translateY(100vh) scale(1); opacity: 1; }
          100% { transform: translateY(-10vh) scale(1.2); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default LoveLetter;
