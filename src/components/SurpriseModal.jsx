import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SurpriseModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-lg p-8 max-w-md w-full text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="playfair text-2xl md:text-3xl font-bold text-pink-pastel mb-4">
              Surprise!
            </h2>
            <p className="text-gray-700 mb-6">
             Selamat ulang tahun untuk orang yang paling bikin aku senyum-senyum tiap hari 😆🎂
            Maaf ya, kado utamanya masih OTW — soalnya aku kirim doa duluan, biar nyampe langsung ke hatimu 💌
            Jangan tambah manja ya (eh tapi gapapa deh, asal manjanya ke aku 😝).
            Love youuuuu, semesta kecilku 🌎💖
            </p>
            <button
              onClick={onClose}
              className="bg-pink-300 hover:bg-pink-300 text-white font-medium py-2 px-6 rounded-full transition-all duration-300"
            >
              Let's Begin! 💖
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SurpriseModal;