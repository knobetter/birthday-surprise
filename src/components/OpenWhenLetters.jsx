import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const LETTERS = [
  {
    id: "sad",
    tag: "A Comfort  🌧️",
    title: "Open When You're Sad",
    subtitle: "When everything feels heavy & quiet",
    envelopeBg: "bg-[#D9E8F7]/60 border-[#bfdaf5]",
    cardAccent: "#D9E8F7",
    icon: "🌧️",
    previewText: "Take a deep breath. You don't have to be strong today.",
    fullLetter: {
      salutation: "Hey Ditya,",
      p1: "First of all, take a slow, deep breath. Unclench your jaw and let your shoulders drop. It is completely okay to feel drained, overwhelmed, or sad right now. You don't have to carry the whole world on your shoulders every single second.",
      p2: "Bad days don't mean a bad life—they just mean your heart and mind need rest. Wrap yourself in a cozy blanket, sip some warm water or tea, and remember you never have to deal with anything alone.",
      p3: "I'm always just one phone call or message away—whether you want to vent for an hour, distract yourself with total nonsense, or just sit on call in comfortable silence. You're going to get through this, just like you always do.",
      signoff: "Always here for you, no matter what 🤍",
    },
  },
  {
    id: "angry",
    tag: "Emergency Vent ☕",
    title: "Open When You're Stressed",
    subtitle: "When you're angry, annoyed, or overwhelmed",
    envelopeBg: "bg-[#DCD5F5]/60 border-[#cbbfef]",
    cardAccent: "#DCD5F5",
    icon: "🍵",
    previewText: "Emergency pause. Step away from whatever is annoying you.",
    fullLetter: {
      salutation: "Listen to me for a second,",
      p1: "Step 1: Put down whatever you are holding. Step 2: Step away from whatever situation or person is testing your patience right now.",
      p2: "Whoever or whatever annoyed you today is NOT worthy of your peace of mind. Your energy is too valuable to be wasted on things that won't even matter a month from now.",
      p3: "Go grab a snack, put on your comfort show, and let the storm blow over. Later on, tell me everything and we can talk all the trash you want. For now: breathe. You run your world—don't let temporary chaos run you.",
      signoff: "Your personal peacekeeper & hype team 💅✨",
    },
  },
  {
    id: "doubt",
    tag: "Reality Check ⭐",
    title: "Open When You Doubt Yourself",
    subtitle: "A reminder of exactly who you are",
    envelopeBg: "bg-[#F8D7E3]/60 border-[#f2b9cf]",
    cardAccent: "#F8D7E3",
    icon: "🌸",
    previewText: "Do not let your brain tell you lies today. Read this.",
    fullLetter: {
      salutation: "A quick reminder,",
      p1: "Do NOT let your brain lie to you today. Self-doubt is just a temporary cloud passing over the sun, and you happen to be the sun in this equation.",
      p2: "Look back at everything you thought you couldn't survive in the past—every exam, stressful week, and difficult moment. You overcame every single one of them. You are capable, intelligent, and possess a quiet strength that people look up to more than you realize.",
      p3: "Straighten your crown, hold your head up, and walk with confidence. I believe in you completely, especially on the days you forget to believe in yourself.",
      signoff: "Your biggest fan & lifelong cheerleader 🌸👑",
    },
  },
];

// Configuration for cute, big floating bubbles
const BUBBLES = [
  { size: 280, x: "8%", y: "15%", duration: 9, delay: 0, gradient: "from-pink-200/50 via-rose-100/40 to-transparent" },
  { size: 340, x: "78%", y: "10%", duration: 11, delay: 1, gradient: "from-purple-200/50 via-lavender-100/40 to-transparent" },
  { size: 240, x: "12%", y: "65%", duration: 8, delay: 0.5, gradient: "from-blue-200/50 via-sky-100/40 to-transparent" },
  { size: 300, x: "72%", y: "60%", duration: 10, delay: 2, gradient: "from-pink-200/45 via-amber-100/30 to-transparent" },
  { size: 180, x: "48%", y: "4%", duration: 7, delay: 1.5, gradient: "from-rose-200/40 via-purple-100/30 to-transparent" },
  { size: 210, x: "46%", y: "78%", duration: 8.5, delay: 2.5, gradient: "from-sky-200/40 via-pink-100/30 to-transparent" },
];

export default function OpenWhenLetters({ onComplete }) {
  const [openedLetter, setOpenedLetter] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -25 }}
      transition={{ duration: 0.6 }}
      className="w-full flex flex-col items-center py-6 px-3 relative select-none overflow-hidden min-h-screen"
    >
      {/* 🫧 FLOATING BIG PASTEL BUBBLES BACKGROUND 🫧 */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {BUBBLES.map((bubble, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full bg-gradient-to-tr ${bubble.gradient} backdrop-blur-[1px] border border-white/60 shadow-[0_8px_32px_0_rgba(255,182,193,0.2)]`}
            style={{
              width: bubble.size,
              height: bubble.size,
              left: bubble.x,
              top: bubble.y,
            }}
            animate={{
              y: [0, -35, 15, 0],
              x: [0, 15, -15, 0],
              scale: [1, 1.06, 0.96, 1],
            }}
            transition={{
              duration: bubble.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: bubble.delay,
            }}
          >
            {/* Cute Bubble Glass Sheen Reflex */}
            <div className="absolute top-5 left-7 w-10 h-6 bg-white/60 rounded-full rotate-[-35deg] blur-[1px]" />
            <div className="absolute top-12 left-5 w-3 h-3 bg-white/50 rounded-full blur-[0.5px]" />
          </motion.div>
        ))}
      </div>

      {/* Header */}
      <div className="text-center mb-8 relative z-10">
        <span className="inline-block px-4 py-1 rounded-full bg-[#F8D7E3] text-[#D93678] text-xs font-bold uppercase tracking-widest mb-2 border border-[#f2b9cf]/70 shadow-xs">
          Reminders For You 💌
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-[#D93678] tracking-tight mb-2">
          For The Days You Need This...
        </h2>
        <p className="text-sm md:text-base font-semibold text-[#49354D]/80 max-w-md mx-auto">
          No matter what kind of day you are having, there is always a calm little message waiting here for you.
        </p>
      </div>

      {/* 3 Interactive Envelopes Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl relative z-10">
        {LETTERS.map((letter) => (
          <motion.div
            key={letter.id}
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setOpenedLetter(letter)}
            className={`p-5 rounded-3xl cursor-pointer shadow-[0_12px_28px_-6px_rgba(73,53,77,0.08)] border backdrop-blur-md flex flex-col justify-between transition-all duration-300 ${letter.envelopeBg}`}
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold text-[#49354D]/90 bg-white/80 px-2.5 py-1 rounded-full border border-white/60 shadow-xs">
                  {letter.tag}
                </span>
                <div className="w-5 h-5 rounded-full bg-[#F3C97A] flex items-center justify-center text-[10px] shadow-sm text-amber-900 border border-[#e5b65f]">
                  ✦
                </div>
              </div>

              <div className="text-3xl mb-2">{letter.icon}</div>
              <h3 className="text-xl font-extrabold text-[#49354D] leading-snug mb-1">
                {letter.title}
              </h3>
              <p className="text-xs font-semibold text-[#49354D]/75 mb-3">
                {letter.subtitle}
              </p>
              <p className="text-xs italic text-[#49354D]/80 bg-white/60 p-2.5 rounded-xl border border-white/50">
                "{letter.previewText}"
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-[#49354D]/10 flex items-center justify-between text-xs font-extrabold text-[#D93678]">
              <span>Tap to Open Letter</span>
              <span>💌</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer & Continue Button */}
      <div className="mt-12 text-center relative z-10 flex flex-col items-center">
        <p className="text-xs font-semibold text-[#49354D]/70 mb-3">
          Whenever you are ready to proceed...
        </p>
        <button
          onClick={onComplete}
          className="px-8 py-3 bg-[#D93678] hover:bg-[#be2563] text-white font-bold rounded-full shadow-[0_10px_25px_-5px_rgba(217,54,120,0.35)] active:scale-95 transition-all text-sm md:text-base flex items-center gap-2"
        >
          <span>One Last Thing...</span>
          <span>➡️</span>
        </button>
      </div>

      {/* 💌 FULL STATIONERY LETTER MODAL 💌 */}
      <AnimatePresence>
        {openedLetter && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#49354D]/40 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-[#FFF7F8] rounded-3xl p-6 md:p-8 shadow-2xl max-w-lg w-full relative border-2 border-[#F8D7E3] text-left overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F8D7E3] via-[#F3C97A] to-[#F8D7E3]" />

              <button
                onClick={() => setOpenedLetter(null)}
                className="absolute top-4 right-4 p-2 bg-[#F8D7E3]/60 rounded-full text-[#49354D] hover:bg-[#F8D7E3] transition-colors"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{openedLetter.icon}</span>
                <h4 className="text-xl font-bold text-[#D93678]">
                  {openedLetter.title}
                </h4>
              </div>

              <div className="bg-white/80 p-5 rounded-2xl border border-[#F8D7E3] shadow-inner font-serif text-[#49354D] text-sm md:text-base leading-relaxed flex flex-col gap-3">
                <p className="font-bold text-[#D93678]">
                  {openedLetter.fullLetter.salutation}
                </p>
                <p>{openedLetter.fullLetter.p1}</p>
                <p>{openedLetter.fullLetter.p2}</p>
                <p>{openedLetter.fullLetter.p3}</p>
                <p className="font-handwriting font-bold text-lg text-[#49354D] pt-2 border-t border-[#F8D7E3]">
                  {openedLetter.fullLetter.signoff}
                </p>
              </div>

              <div className="mt-5 text-center">
                <button
                  onClick={() => setOpenedLetter(null)}
                  className="px-6 py-2 rounded-full bg-[#49354D] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#39293c] transition-colors shadow-sm"
                >
                  Fold Letter Back 🤍
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}