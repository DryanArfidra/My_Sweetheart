import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const StoryPage = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${Math.random() * 5 + 10}s`,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-10 bg-gradient-to-br from-pink-200 via-pink-300 to-purple-300 overflow-hidden">

      {/* ❤️ Efek hati lembut melayang */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-pink-400 opacity-70 pointer-events-none z-0"
          style={{
            left: heart.left,
            animation: `float-up ${heart.animationDuration} ease-in-out infinite`,
            animationDelay: heart.animationDelay,
          }}
          initial={{ y: '100vh', opacity: 0 }}
          animate={{ y: '-10vh', opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 12, repeat: Infinity }}
        >
          ❤️
        </motion.div>
      ))}

      {/* 🌸 Konten utama */}
      <div className="relative z-10 w-full max-w-3xl bg-white/40 backdrop-blur-lg rounded-3xl shadow-2xl p-6 sm:p-10 border border-pink-200">
        <motion.h1
          className="font-[Playfair_Display] text-3xl sm:text-5xl font-bold text-pink-600 text-center mb-10 drop-shadow-md"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Mimpi Kita Kelak 💞
        </motion.h1>

        <div className="space-y-6">
          {[
            "Ada satu hal yang selalu aku yakini sejak mengenalmu  bahwa kamu adalah pilihan terbaik yang Allah hadirkan dalam hidupku. Bukan sekadar pelengkap hari-hari, tapi seseorang yang membuatku yakin untuk melangkah ke tahap yang lebih sakral: menikah. Aku ingin menikah denganmu bukan hanya karena cinta yang tumbuh setiap hari, tapi karena aku ingin menyempurnakan separuh agamaku bersamamu. Bersama dalam doa, bersama dalam ketaatan, dan saling menuntun menuju ridha Allah.",
            "Kelak, aku ingin kita menjadi teman hidup yang benar-benar samawa: sakinah, mawaddah, warahmah. Kita saling belajar, saling memahami, dan saling menenangkan di setiap keadaan. Aku ingin rumah kita menjadi tempat paling damai di dunia, tempat di mana tawa anak-anak kita menggema setiap pagi. Aku ingin kita dikaruniai anak-anak yang saleh dan salihah, yang tumbuh dengan cinta, dididik dengan iman, dan dibesarkan dalam kehangatan kasih sayang kita.",
            "Aku juga bermimpi membangun bisnis bersama kamu. Bukan hanya untuk mengejar harta dunia, tapi untuk membangun sesuatu yang bisa kita perjuangkan berdua. Kita jatuh bangun bersama, saling menyemangati saat lelah, dan bersyukur setiap kali berhasil melewati satu rintangan lagi. Hingga suatu hari nanti, ketika orang bertanya bagaimana kita bisa sampai di titik sukses, aku bisa dengan bangga mengatakan: “Karena aku menjalaninya bersama orang yang tak pernah menyerah yaitu bersama kamu.",
            "Kehidupan yang aku impikan bukanlah kehidupan yang mewah, tapi kehidupan yang sederhana namun penuh berkah. Mungkin rumah kita tidak besar, tapi hatinya lapang. Mungkin makan kita tidak selalu istimewa, tapi rasanya akan selalu nikmat karena disantap dengan cinta. Namun di balik kesederhanaan itu, kita punya impian besar memiliki aset di mana-mana, hasil dari kerja keras, kesabaran, dan kebersamaan kita selama ini.",
            "Dan tentu saja, aku ingin menjelajahi dunia bersamamu. Traveling ke berbagai negara, mengelilingi indahnya Indonesia dengan touring berdua, menikmati matahari terbit di tempat-tempat baru, dan mengukir kenangan di setiap langkah perjalanan. Karena bersamamu, setiap perjalanan terasa bermakna bukan tentang tempatnya, tapi tentang siapa yang menemani.",
            "Namun di atas semua impian itu, yang terbesar dalam hatiku adalah berdiri di hadapan Ka’bah bersamamu. Menunaikan ibadah haji, memanjatkan doa di tempat paling suci, dan menangis bahagia karena akhirnya bisa menyelesaikan rukun Islam bersama orang yang selalu aku cintai. Itulah puncak dari semua mimpi bukan sekadar tentang dunia, tapi tentang perjalanan menuju akhirat bersama."
          ].map((text, index) => (
            <motion.p
              key={index}
              className="text-base sm:text-lg md:text-xl text-gray-800 bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-md border border-pink-100"
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.25 }}
            >
              {text}
            </motion.p>
          ))}
        </div>

        {/* Tombol kembali */}
        <div className="mt-10 flex justify-center">
          <Link to="/">
            <motion.button
              className="bg-pink-500 text-white hover:bg-pink-400 font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to Home 🏠
            </motion.button>
          </Link>
        </div>
      </div>

      {/* ✨ Animasi lembut */}
      <style>{`
        @keyframes float-up {
          0% { transform: translateY(100vh) scale(0.8); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-10vh) scale(1.2); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default StoryPage;
