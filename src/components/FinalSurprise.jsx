import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import OpeningScreen from "./components/OpeningScreen";
import PhotoGallery from "./components/PhotoGallery";
import FinalLetter from "./components/FinalLetter";
import FinalSurprise from "./components/FinalSurprise";
import MusicControl from "./components/MusicControl";

export const FRIEND_DATA = {
  name: "Ditya",
  nextBirthday: "2027-09-08T00:00:00",
};

// Realistic Fairy Lights config
const FAIRY_LIGHTS_CONFIG = [
  { duration: 2.1, delay: 0.1 },
  { duration: 1.6, delay: 0.8 },
  { duration: 2.7, delay: 0.3 },
  { duration: 1.9, delay: 1.2 },
  { duration: 2.4, delay: 0.5 },
  { duration: 1.8, delay: 1.0 },
];

/* 🌸 LUXURY FLORAL CORNER BOUQUET (SVG) 🌸 */
function LuxuryFloralArch({ position = "left" }) {
  const isLeft = position === "left";
  return (
    <div
      className={`hidden lg:flex fixed ${
        isLeft ? "left-0" : "right-0"
      } top-0 bottom-0 w-56 flex-col justify-between py-12 items-center pointer-events-none z-10 select-none`}
    >
      {/* Soft Romantic Vines & Glow */}
      <div
        className={`absolute inset-0 bg-gradient-to-${
          isLeft ? "r" : "l"
        } from-pink-200/20 via-rose-100/10 to-transparent blur-xl`}
      />

      {/* Top Rose Cluster Card */}
      <motion.div
        animate={{ y: [0, -6, 0], rotate: isLeft ? [-3, -1, -3] : [3, 1, 3] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative bg-white/70 backdrop-blur-md p-4 rounded-3xl border border-rose-200/80 shadow-[0_10px_25px_rgba(244,63,94,0.12)] flex flex-col items-center mx-6"
      >
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-rose-400 via-pink-400 to-rose-300 flex items-center justify-center shadow-[0_6px_16px_rgba(244,63,94,0.3)]">
          <svg className="w-8 h-8 text-white filter drop-shadow" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
        <span className="font-serif italic text-xs text-rose-800 font-semibold mt-2">
          {isLeft ? "Forever Loved 🌹" : "Pure Sunshine ☀️"}
        </span>
      </motion.div>

      {/* Mid Fluttering Butterfly */}
      <motion.div
        animate={{
          x: isLeft ? [0, 15, 0] : [0, -15, 0],
          y: [-10, 10, -10],
          rotate: isLeft ? [10, -5, 10] : [-10, 5, -10],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative flex flex-col items-center"
      >
        <div className="w-12 h-12 rounded-full bg-pink-100/80 backdrop-blur-sm border border-pink-300 flex items-center justify-center shadow-lg">
          <PinkButterfly size={28} />
        </div>
        <span className="text-[10px] font-mono tracking-widest text-rose-400 font-bold uppercase mt-1">
          {isLeft ? "Grace & Bloom" : "Joy & Laughter"}
        </span>
      </motion.div>

      {/* Bottom Botanical Glass Vignette */}
      <motion.div
        animate={{ y: [0, 6, 0], rotate: isLeft ? [2, 4, 2] : [-2, -4, -2] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
        className="relative bg-white/70 backdrop-blur-md p-4 rounded-3xl border border-rose-200/80 shadow-[0_10px_25px_rgba(244,63,94,0.12)] flex flex-col items-center mx-6"
      >
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-300 via-rose-300 to-pink-400 flex items-center justify-center shadow-[0_6px_16px_rgba(251,191,36,0.3)] text-2xl">
          🌸
        </div>
        <span className="font-serif italic text-xs text-rose-800 font-semibold mt-2">
          {isLeft ? "Rare & Cherished ✨" : "Always Shining 🌟"}
        </span>
      </motion.div>
    </div>
  );
}

/* 🌸 DELICATE FLOATING PETALS (Layered SVG + Soft Blur) 🌸 */
function LuxuryFloatingPetals() {
  const petals = [
    { left: "5%", size: 24, dur: 12, delay: 0 },
    { left: "15%", size: 18, dur: 14, delay: 2 },
    { left: "22%", size: 28, dur: 10, delay: 4 },
    { left: "78%", size: 22, dur: 13, delay: 1 },
    { left: "86%", size: 30, dur: 11, delay: 3 },
    { left: "93%", size: 16, dur: 15, delay: 5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {petals.map((p, idx) => (
        <motion.div
          key={idx}
          className="absolute"
          style={{ left: p.left }}
          initial={{ top: "-8%", rotate: 0, opacity: 0 }}
          animate={{
            top: ["-5%", "108%"],
            x: [0, idx % 2 === 0 ? 30 : -30, 0],
            rotate: [0, 240, 360],
            opacity: [0, 0.85, 0.85, 0],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        >
          {/* Artisanal Realistic Cherry Blossom Petal */}
          <svg width={p.size} height={p.size * 1.3} viewBox="0 0 40 50" fill="none">
            <path
              d="M20 0 C32 10, 40 30, 20 50 C0 30, 8 10, 20 0 Z"
              fill="url(#petalGrad)"
              className="filter drop-shadow-[0_4px_8px_rgba(244,63,94,0.25)]"
            />
            <defs>
              <linearGradient id="petalGrad" x1="20" y1="0" x2="20" y2="50" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#fff0f3" />
                <stop offset="50%" stopColor="#fca5a5" />
                <stop offset="100%" stopColor="#f43f5e" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

/* 🌸 CUTE ARTISANAL PINK BUTTERFLY COMPONENT 🌸 */
function PinkButterfly({ size = 32, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`filter drop-shadow-[0_4px_8px_rgba(244,63,94,0.35)] ${className}`}
    >
      <defs>
        <linearGradient id="pinkWingGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fb7185" />
          <stop offset="50%" stopColor="#f43f5e" />
          <stop offset="100%" stopColor="#f43f5e" />
        </linearGradient>
        <linearGradient id="innerWingGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#ffe4e6" stopOpacity="0.25" />
        </linearGradient>
      </defs>

      <path d="M32 30 C28 12, 8 8, 6 22 C4 32, 22 38, 32 35 Z" fill="url(#pinkWingGrad)" />
      <path d="M30 29 C27 18, 12 15, 11 23 C10 29, 22 34, 30 33 Z" fill="url(#innerWingGlow)" />
      <path d="M32 30 C36 12, 56 8, 58 22 C60 32, 42 38, 32 35 Z" fill="url(#pinkWingGrad)" />
      <path d="M34 29 C37 18, 52 15, 53 23 C54 29, 42 34, 34 33 Z" fill="url(#innerWingGlow)" />
      <path d="M32 35 C20 37, 10 46, 16 56 C21 62, 30 48, 32 40 Z" fill="url(#pinkWingGrad)" />
      <path d="M32 35 C44 37, 54 46, 48 56 C43 62, 34 48, 32 40 Z" fill="url(#pinkWingGrad)" />

      <ellipse cx="32" cy="36" rx="2" ry="10" fill="#9d174d" />
      <path d="M31 27 C28 19, 22 17, 20 18 M33 27 C36 19, 42 17, 44 18" stroke="#9d174d" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="20" cy="18" r="1.3" fill="#be185d" />
      <circle cx="44" cy="18" r="1.3" fill="#be185d" />
    </svg>
  );
}

/* ✨ SPARKLE CURSOR TRAIL ✨ */
function CursorSparkleTrail() {
  const [particles, setParticles] = useState([]);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsDesktop(true);
    }

    let lastTime = 0;
    const handlePointerMove = (e) => {
      const now = Date.now();
      if (now - lastTime < 45) return;
      lastTime = now;

      const newParticle = {
        id: `${now}-${Math.random()}`,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() > 0.5 ? "text-xs" : "text-sm",
        char: ["✨", "💖", "🌸", "⭐"][Math.floor(Math.random() * 4)],
        offsetX: (Math.random() - 0.5) * 14,
      };

      setParticles((prev) => [...prev.slice(-14), newParticle]);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  if (!isDesktop) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden select-none">
      <AnimatePresence>
        {particles.map((p) => (
          <motion.span
            key={p.id}
            initial={{ opacity: 1, scale: 1, x: p.x + p.offsetX, y: p.y }}
            animate={{ opacity: 0, scale: 0.3, y: p.y - 24 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className={`fixed ${p.size} filter drop-shadow-[0_0_4px_rgba(255,182,193,0.8)]`}
            style={{ left: 0, top: 0 }}
          >
            {p.char}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const isScrapbook = currentStep === 2;
  const isNightSky = currentStep === 3;
  const isGrandFinale = currentStep === 4;

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.35;
    }
  }, []);

  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`min-h-screen w-full relative transition-colors duration-1000 flex flex-col justify-center items-center overflow-x-hidden ${
        isNightSky
          ? "bg-gradient-to-b from-[#0f0c1b] via-[#1a102f] to-[#241442] text-white"
          : isGrandFinale
          ? "bg-gradient-to-br from-rose-50 via-[#fff5f6] to-pink-100 text-slate-800"
          : isScrapbook
          ? "bg-gradient-to-br from-[#fff3f5] via-[#fef7ee] to-[#fdeef2] text-slate-800"
          : "bg-gradient-to-br from-pink-100 via-purple-50 to-pink-50 text-slate-800"
      }`}
    >
      <CursorSparkleTrail />

      {/* 🌸 LUXURY FLORAL & BOTANICAL SURROUNDS ON GRAND FINALE (STEP 4) 🌸 */}
      {isGrandFinale && (
        <>
          <LuxuryFloralArch position="left" />
          <LuxuryFloralArch position="right" />
          <LuxuryFloatingPetals />
        </>
      )}

      {/* Floating Audio Controller */}
      <MusicControl
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />

      <main className="w-full max-w-lg md:max-w-2xl min-h-screen flex flex-col items-center justify-center p-2 md:p-4 relative z-10">
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <OpeningScreen
              key="opening"
              onComplete={handleNextStep}
              setIsPlaying={setIsPlaying}
              audioRef={audioRef}
              name={FRIEND_DATA.name}
            />
          )}

          {currentStep === 2 && (
            <PhotoGallery
              key="gallery"
              onComplete={handleNextStep}
            />
          )}

          {currentStep === 3 && (
            <FinalLetter
              key="final-letter"
              onComplete={handleNextStep}
              name={FRIEND_DATA.name}
            />
          )}

          {currentStep === 4 && (
            <FinalSurprise
              key="grand-surprise"
              name={FRIEND_DATA.name}
            />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}