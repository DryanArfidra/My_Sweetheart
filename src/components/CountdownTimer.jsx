import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isBirthday, setIsBirthday] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
        setIsBirthday(false);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsBirthday(true);
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 via-pink-300 to-purple-200 overflow-hidden">
      {/* ❤️ Efek partikel hati melayang */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-400"
            initial={{
              opacity: 0,
              y: "100vh",
              x: Math.random() * window.innerWidth,
            }}
            animate={{
              opacity: [0.3, 1, 0],
              y: ["100vh", "-10vh"],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.8,
            }}
          >
            💖
          </motion.div>
        ))}
      </div>

      {/* 💌 Kartu countdown */}
      <motion.div
        className="relative z-10 bg-white/40 backdrop-blur-md text-gray-800 rounded-3xl p-8 shadow-2xl max-w-md w-[90%] border border-pink-200"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {!isBirthday ? (
          <>
            <h3 className="text-3xl font-[Playfair_Display] font-bold text-pink-600 mb-6 text-center">
              Menuju Hari Spesialmu 🎂
            </h3>

            <div className="flex justify-center gap-3 md:gap-5 mb-6">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <motion.div
                    className="bg-pink-500/80 text-white rounded-2xl p-4 md:p-5 min-w-[70px] md:min-w-[90px] shadow-lg"
                    key={value}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-2xl md:text-3xl font-bold">
                      {String(value).padStart(2, "0")}
                    </div>
                  </motion.div>
                  <div className="text-sm mt-1 capitalize">{unit}</div>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-700 italic">
             Tinggal {timeLeft.days} hari lagi menuju hari di mana <br />
             bintang aja kalah terang... soalnya kamu yang bersinar ✨😳

            </p>

            <p className="text-center text-gray-600 text-sm mt-3">
              Aku udah siapin ucapan, doa, dan mungkin... sedikit gombalan biar kamu senyum 🤭
            </p>
          </>
        ) : (
          <div className="text-center">
            <h3 className="text-3xl font-[Playfair_Display] font-bold text-pink-600 mb-4 animate-bounce">
              Selamat Ulang Tahun, Sayangku! 🎉
            </h3>

            <p className="mb-6 text-gray-700">
              Hari ini dunia lebih cerah, burung-burung lebih semangat,  
              dan aku… makin jatuh cinta (lagi) sama kamu 😍  
              Siap buka surat cintanya nggak nih? 💌
            </p>

            <Link to="/love-letter">
              <motion.button
                className="bg-pink-500 hover:bg-pink-400 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Buka Surat Cintamu 💕
              </motion.button>
            </Link>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default CountdownTimer;
