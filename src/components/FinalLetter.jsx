import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Stars, Gift } from "lucide-react";

export default function FinalLetter({ onComplete, name }) {
  const [isReadingFinished, setIsReadingFinished] = useState(false);
  const [showFinalButton, setShowFinalButton] = useState(false);

  const letterLines = [
    "I don't know if I say this enough...",
    "But I'm genuinely grateful that you came into my life. 🌸",
    "From our random midnight conversations to our most stupid arguments, and all the chaotic moments in between—you've become someone I truly value and cherish.",
    "Thank you for always listening when I rant, for laughing at my terrible jokes, and for just being someone I can always count on without hesitation.",
    "You have a genuine heart, a stubborn spirit that never gives up, and an infectious smile that brightens up even the dullest rooms.",
    "I hope you always remember how rare and wonderful you are. Never let anyone dim your sparkle, bestie.",
    "I wish you nothing but genuine peace, boundless happiness, and massive success in everything you set your heart on this year. ❤️",
  ];

  const handleFinishReading = () => {
    setIsReadingFinished(true);
    // Suspense pause before showing the final surprise trigger
    setTimeout(() => {
      setShowFinalButton(true);
    }, 1800);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="w-full flex flex-col items-center py-8 px-4 text-center relative z-10"
    >
      {/* Floating Animated Stars & Glowing Particles */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {[...Array(24)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white shadow-[0_0_8px_#ffffff]"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {!isReadingFinished ? (
        <div className="max-w-xl w-full flex flex-col items-center">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 mb-6"
          >
            <Stars className="text-pink-300 w-5 h-5 animate-spin" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-pink-200 tracking-wide">
              One Last Thing...
            </h2>
            <Stars className="text-pink-300 w-5 h-5 animate-spin" />
          </motion.div>

          {/* Letter Card with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full p-6 md:p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl text-left font-handwriting text-xl md:text-2xl leading-relaxed text-pink-100 flex flex-col gap-4"
          >
            <p className="text-pink-300 font-bold">Dearest {name},</p>

            {letterLines.map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.3 }}
              >
                {line}
              </motion.p>
            ))}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.8 }}
              className="text-right text-pink-300 font-bold pt-4"
            >
              Always by your side,
              <br />
              Your Annoying Best Friend 💗
            </motion.p>
          </motion.div>

          {/* Reading Completed Trigger */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2 }}
            onClick={handleFinishReading}
            className="mt-8 px-8 py-3 bg-pink-500/80 hover:bg-pink-500 text-white font-bold rounded-full shadow-lg border border-pink-300/40 backdrop-blur-sm active:scale-95 transition-all text-base"
          >
            I've read it all... 🥺💗
          </motion.button>
        </div>
      ) : (
        /* Section 5: The Suspense Transition */
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center min-h-[60vh] gap-6"
        >
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-extrabold text-white"
          >
            Wait...
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl font-semibold text-pink-200"
          >
            There's one more thing... 👀
          </motion.p>

          <AnimatePresence>
            {showFinalButton && (
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="mt-6"
              >
                <button
                  onClick={onComplete}
                  className="px-8 py-5 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white font-extrabold text-lg md:text-xl rounded-full shadow-[0_0_30px_rgba(244,63,94,0.7)] hover:shadow-[0_0_40px_rgba(244,63,94,0.9)] hover:scale-105 active:scale-95 transition-all flex items-center gap-3 border border-pink-200/50 animate-pulse"
                >
                  <Gift className="w-6 h-6 text-white" />
                  <span>🎁 OPEN YOUR FINAL SURPRISE</span>
                  <Sparkles className="w-6 h-6 text-yellow-300" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </motion.div>
  );
}