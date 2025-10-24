import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const memories = [
    { id: 1, src: '/src/assets/WhatsApp Image 2025-10-24 at 07.47.20_276c749c.jpg', caption: 'Kencan pertama kita 💞 (di roblox dulu y.. , tunggu episode real life nya 😆)' },
    { id: 2, src: '/src/assets/WhatsApp Image 2025-10-24 at 07.46.14_d8903db5.jpg', caption: 'Kalau kamu buku, aku rela jadi pembatasnya… biar selalu di tengah-tengah kisahmu.” ❤️😜' },
    { id: 3, src: '/src/assets/WhatsApp Image 2025-10-24 at 07.30.20_42d4c78e.jpg', caption: 'Aku tak berani meminta kamu secara langsung, jadi aku titip lewat doa, karena hanya Dia yang tahu seberapa tulus rasaku.” 💞' },
    { id: 4, src: '/src/assets/WhatsApp Image 2025-10-24 at 07.32.54_5e5cd542.jpg', caption: 'membayangkan di pelaminan kamu salim kepadaku ☺️' },
    { id: 5, src: '/src/assets/WhatsApp Image 2025-10-24 at 07.30.19_5f674e8b.jpg', caption: 'walaupun hanyalah foto serasa sudah serumah' },
    { id: 6, src: '/src/assets/WhatsApp Image 2025-10-21 at 17.34.04_7680cd7b.jpg', caption: 'pelukan hangat  (buat aku ketiduran 💤)' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-200 to-rose-100 py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="playfair text-4xl md:text-5xl font-bold text-pink-600 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Galeri Kenangan Kita 💖
        </motion.h1>

        <p className="text-center text-gray-600 italic mb-10">
          Setiap foto di sini punya cerita... <br />
          Kadang romantis, kadang konyol — tapi semuanya tentang <span className="text-pink-500 font-semibold">kita 💞</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memories.map((memory, index) => (
            <GalleryItem key={memory.id} memory={memory} index={index} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link to="/">
            <motion.button
              className="bg-pink-500 hover:bg-pink-400 text-white font-medium py-2 px-6 rounded-full shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Balik ke Beranda 🏠 (tapi jangan balik ke mantan 😜)
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const GalleryItem = ({ memory, index }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="relative overflow-hidden rounded-2xl shadow-lg h-64 md:h-80 group cursor-pointer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <img
        src={memory.src}
        alt={memory.caption}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-4"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: isHovered ? 0.8 : 0.5 }}
        transition={{ duration: 0.3 }}
      >
        <motion.p
          className="text-white font-medium text-lg italic"
          initial={{ y: 20, opacity: 0 }}
          animate={isHovered ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
        >
          {memory.caption}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Gallery;
