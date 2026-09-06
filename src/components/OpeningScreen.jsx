import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export default function OpeningScreen({ onComplete, setIsPlaying, audioRef, name }) {
  const [showNoPopup, setShowNoPopup] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ff719a", "#ffe17d", "#8ce4ff"],
    });
  };

  const handleOpenSurprise = () => {
    triggerConfetti();
    if (audioRef.current) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
    setTimeout(() => {
      onComplete();
    }, 600);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col items-center text-center relative px-4"
    >
      {/* Floating Sparkles, Hearts, Flowers & Ribbons */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {[...Array(16)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-2xl select-none"
            initial={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.3,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {["💗", "✨", "🌸", "🎀"][i % 4]}
          </motion.span>
        ))}
      </div>

      <motion.h1
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-3xl md:text-4xl font-extrabold text-pink-600 mb-2"
      >
        🎀 Hey {name}...
      </motion.h1>

      <p className="text-xl md:text-2xl font-bold text-slate-700 mb-2">
        I have something special for you 🥹💗
      </p>
      <p className="text-base font-semibold text-slate-500 mb-8">
        Are you ready? 👀
      </p>

      {!isAgreed ? (
        <div className="flex gap-4">
          <button
            onClick={() => setIsAgreed(true)}
            className="px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-full shadow-lg hover:shadow-pink-300/60 transform hover:-translate-y-0.5 active:translate-y-0 transition-all text-lg"
          >
            💗 YES
          </button>
          <button
            onClick={() => setShowNoPopup(true)}
            className="px-8 py-3 bg-white/80 hover:bg-white text-slate-700 font-bold rounded-full border border-pink-200 shadow hover:shadow-slate-300/50 transform hover:-translate-y-0.5 active:translate-y-0 transition-all text-lg"
          >
            😏 NO
          </button>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <p className="text-pink-600 font-bold text-xl">Good choice 😌</p>
          <button
            onClick={handleOpenSurprise}
            className="px-8 py-4 bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 text-white font-extrabold rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all text-lg flex items-center gap-2 animate-bounce"
          >
            🎁 OPEN YOUR BIRTHDAY SURPRISE
          </button>
        </motion.div>
      )}

      {/* Playful Telugu popup modal if NO is clicked */}
      <AnimatePresence>
        {showNoPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl p-6 shadow-2xl max-w-xs text-center border-2 border-pink-300"
            >
              <h2 className="text-xl font-black text-rose-500 mb-2">
                🚨 You are on my list!!!
              </h2>
              <p className="text-2xl font-extrabold text-slate-800 mb-1">
                Champesthaaa!!!
              </p>
              <p className="text-base font-bold text-slate-600 mb-6">
                YES nokku! 😤
              </p>
              <button
                onClick={() => {
                  setShowNoPopup(false);
                  setIsAgreed(true);
                }}
                className="w-full py-3 bg-pink-500 hover:bg-pink-600 text-white font-extrabold rounded-2xl shadow-md transition-all active:scale-95"
              >
                😭 Okay Okay... YES
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}