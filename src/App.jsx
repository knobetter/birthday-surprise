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

// Warm Glowing Hanging Fairy Lights (Luxury Filament Bulbs)
function HangingFairyLights() {
  const bulbs = [
    { left: "6%", drop: 28, delay: 0.1, dur: 2.4 },
    { left: "18%", drop: 44, delay: 0.8, dur: 3.1 },
    { left: "30%", drop: 22, delay: 0.4, dur: 2.1 },
    { left: "42%", drop: 48, delay: 1.2, dur: 2.8 },
    { left: "54%", drop: 26, delay: 0.2, dur: 2.6 },
    { left: "68%", drop: 46, delay: 0.9, dur: 3.0 },
    { left: "80%", drop: 24, delay: 0.5, dur: 2.2 },
    { left: "92%", drop: 42, delay: 1.1, dur: 2.9 },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 h-32 pointer-events-none z-20 overflow-hidden select-none">
      {/* Delicate Curved Cord */}
      <svg className="w-full h-16 absolute top-0 text-amber-900/20" preserveAspectRatio="none" viewBox="0 0 1200 60">
        <path d="M0,10 Q150,45 300,10 Q450,45 600,10 Q750,45 900,10 Q1050,45 1200,10" fill="none" stroke="currentColor" strokeWidth="1.2" />
      </svg>

      {/* Hanging Warm Gold Bulbs */}
      {bulbs.map((b, idx) => (
        <div key={idx} className="absolute flex flex-col items-center" style={{ left: b.left, top: 0 }}>
          {/* Filament cord */}
          <div className="w-[1px] bg-amber-900/25" style={{ height: `${b.drop}px` }} />
          {/* Cap */}
          <div className="w-2 h-1.5 bg-amber-700/60 rounded-xs" />
          {/* Bulb with Aura */}
          <motion.div
            animate={{
              opacity: [0.75, 1, 0.8, 0.95, 0.75],
              scale: [0.95, 1.08, 0.98, 1.05, 0.95],
              boxShadow: [
                "0 0 8px #fbbf24, 0 0 16px #f59e0b",
                "0 0 18px #fde68a, 0 0 32px #fbbf24",
                "0 0 10px #fbbf24, 0 0 20px #f59e0b",
                "0 0 16px #fde68a, 0 0 28px #fbbf24",
                "0 0 8px #fbbf24, 0 0 16px #f59e0b",
              ],
            }}
            transition={{
              duration: b.dur,
              delay: b.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-3 h-4 rounded-full bg-gradient-to-b from-amber-100 via-amber-200 to-yellow-400"
          />
        </div>
      ))}
    </div>
  );
}

// Cinematic Ambient Golden Dust & Bokeh Orbs
function AmbientBokehAtmosphere() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Warm Ambient Radial Halos */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[42rem] h-[26rem] bg-gradient-to-b from-amber-200/25 via-rose-200/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-1/3 w-[30rem] h-80 bg-pink-200/25 rounded-full blur-3xl" />

      {/* Slowly Drifting Soft Gold Dust */}
      {[...Array(14)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-tr from-amber-200 to-yellow-100 shadow-[0_0_8px_rgba(251,191,36,0.5)]"
          style={{
            width: `${(i % 3) * 3 + 3}px`,
            height: `${(i % 3) * 3 + 3}px`,
            left: `${(i * 7.5 + 3) % 96}%`,
            top: `${(i * 8 + 8) % 92}%`,
          }}
          animate={{
            y: [0, -35, 0],
            x: [0, i % 2 === 0 ? 12 : -12, 0],
            opacity: [0.2, 0.85, 0.2],
            scale: [0.8, 1.3, 0.8],
          }}
          transition={{
            duration: 5 + (i % 5) * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}
    </div>
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
          ? "bg-gradient-to-b from-[#fff6f7] via-[#fef2f4] to-[#fdeef2] text-slate-800"
          : isScrapbook
          ? "bg-gradient-to-br from-[#fff3f5] via-[#fef7ee] to-[#fdeef2] text-slate-800"
          : "bg-gradient-to-br from-pink-100 via-purple-50 to-pink-50 text-slate-800"
      }`}
    >
      <CursorSparkleTrail />

      {/* Elegant Atmospheric Lighting for Grand Finale (Step 4) */}
      {isGrandFinale && (
        <>
          <HangingFairyLights />
          <AmbientBokehAtmosphere />
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