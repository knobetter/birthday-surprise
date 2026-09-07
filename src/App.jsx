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

/* 💡 OPTION 3: VERTICAL SUSPENDED FAIRY LIGHT CASCADES 💡 */
function VerticalFairyLightCascades() {
  const leftStrands = [
    { left: "2.5%", length: "72vh", bulbs: [0.15, 0.35, 0.55, 0.72] },
    { left: "6.5%", length: "54vh", bulbs: [0.2, 0.42, 0.6] },
  ];

  const rightStrands = [
    { right: "2.5%", length: "72vh", bulbs: [0.18, 0.38, 0.58, 0.74] },
    { right: "6.5%", length: "54vh", bulbs: [0.22, 0.45, 0.62] },
  ];

  return (
    <div className="hidden lg:block fixed inset-0 pointer-events-none z-10 overflow-hidden select-none">
      {/* Left Strands */}
      {leftStrands.map((strand, sIdx) => (
        <div
          key={`l-strand-${sIdx}`}
          className="absolute top-0 flex flex-col items-center"
          style={{ left: strand.left, height: strand.length }}
        >
          <div className="w-[1px] h-full bg-gradient-to-b from-amber-400/40 via-amber-300/25 to-transparent relative">
            {strand.bulbs.map((pos, bIdx) => (
              <motion.div
                key={bIdx}
                style={{ top: `${pos * 100}%` }}
                animate={{
                  opacity: [0.55, 1, 0.65, 0.95, 0.55],
                  scale: [0.92, 1.12, 0.95, 1.08, 0.92],
                  boxShadow: [
                    "0 0 6px #f59e0b",
                    "0 0 16px #fbbf24, 0 0 28px #f59e0b",
                    "0 0 8px #f59e0b",
                    "0 0 14px #fbbf24",
                    "0 0 6px #f59e0b",
                  ],
                }}
                transition={{
                  duration: 2.2 + (sIdx + bIdx) * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: (sIdx * 2 + bIdx) * 0.3,
                }}
                className="absolute -left-[4px] w-2.5 h-3.5 rounded-full bg-gradient-to-b from-amber-100 via-amber-200 to-yellow-400"
              />
            ))}
          </div>
        </div>
      ))}

      {/* Right Strands */}
      {rightStrands.map((strand, sIdx) => (
        <div
          key={`r-strand-${sIdx}`}
          className="absolute top-0 flex flex-col items-center"
          style={{ right: strand.right, height: strand.length }}
        >
          <div className="w-[1px] h-full bg-gradient-to-b from-amber-400/40 via-amber-300/25 to-transparent relative">
            {strand.bulbs.map((pos, bIdx) => (
              <motion.div
                key={bIdx}
                style={{ top: `${pos * 100}%` }}
                animate={{
                  opacity: [0.55, 1, 0.65, 0.95, 0.55],
                  scale: [0.92, 1.12, 0.95, 1.08, 0.92],
                  boxShadow: [
                    "0 0 6px #f59e0b",
                    "0 0 16px #fbbf24, 0 0 28px #f59e0b",
                    "0 0 8px #f59e0b",
                    "0 0 14px #fbbf24",
                    "0 0 6px #f59e0b",
                  ],
                }}
                transition={{
                  duration: 2.5 + (sIdx + bIdx) * 0.35,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5 + (sIdx * 2 + bIdx) * 0.3,
                }}
                className="absolute -left-[4px] w-2.5 h-3.5 rounded-full bg-gradient-to-b from-amber-100 via-amber-200 to-yellow-400"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* 🎈 OPTION 4: LUXURY FLOATING PASTEL HELIUM BALLOONS WITH RIBBONS 🎈 */
function PastelHeliumBalloons({ side = "left" }) {
  const isLeft = side === "left";

  const balloons = [
    {
      color: "from-rose-200/90 via-pink-300/80 to-rose-400/80",
      highlight: "from-white/80 to-transparent",
      w: 68,
      h: 84,
      yOff: 0,
      xOff: isLeft ? 10 : -10,
      rotate: isLeft ? -8 : 8,
      dur: 6,
    },
    {
      color: "from-amber-100/95 via-amber-200/85 to-yellow-300/70",
      highlight: "from-white/90 to-transparent",
      w: 62,
      h: 78,
      yOff: -38,
      xOff: isLeft ? 48 : -48,
      rotate: isLeft ? 6 : -6,
      dur: 5.2,
    },
    {
      color: "from-white/95 via-rose-100/90 to-pink-200/85",
      highlight: "from-white to-transparent",
      w: 58,
      h: 74,
      yOff: -65,
      xOff: isLeft ? 18 : -18,
      rotate: isLeft ? -4 : 4,
      dur: 5.8,
    },
  ];

  return (
    <motion.div
      animate={{
        y: [0, -14, 0],
        rotate: isLeft ? [0, 2, 0] : [0, -2, 0],
      }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className={`hidden lg:flex fixed bottom-6 ${
        isLeft ? "left-10" : "right-10"
      } flex-col items-center pointer-events-none z-10 select-none`}
    >
      <div className="relative w-36 h-48 flex items-center justify-center">
        {balloons.map((b, idx) => (
          <motion.div
            key={idx}
            animate={{
              y: [0, idx % 2 === 0 ? -8 : 8, 0],
              rotate: [b.rotate, b.rotate + (isLeft ? 3 : -3), b.rotate],
            }}
            transition={{
              duration: b.dur,
              repeat: Infinity,
              ease: "easeInOut",
              delay: idx * 0.4,
            }}
            className="absolute flex flex-col items-center"
            style={{
              top: `calc(35% + ${b.yOff}px)`,
              left: `calc(28% + ${b.xOff}px)`,
            }}
          >
            {/* Balloon Body */}
            <div
              className={`rounded-[50%_50%_48%_48%/55%_55%_45%_45%] bg-gradient-to-tr ${b.color} shadow-[0_12px_24px_rgba(244,63,94,0.18)] relative border border-white/60`}
              style={{ width: `${b.w}px`, height: `${b.h}px` }}
            >
              {/* Glossy Specular Light Reflection */}
              <div
                className={`absolute top-2 left-3 w-4 h-7 rounded-full bg-gradient-to-b ${b.highlight} rotate-[-30deg] blur-[0.6px]`}
              />
              {/* Balloon Tie Knot */}
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2 bg-rose-400/80 rounded-b-xs" />
            </div>

            {/* Curled Shimmer Ribbon */}
            <svg
              width="24"
              height="80"
              viewBox="0 0 24 80"
              fill="none"
              className="mt-[-2px] text-rose-300/70"
            >
              <path
                d={
                  isLeft
                    ? "M12 0 C4 20, 20 40, 12 60 C8 70, 16 75, 12 80"
                    : "M12 0 C20 20, 4 40, 12 60 C16 70, 8 75, 12 80"
                }
                stroke="currentColor"
                strokeWidth="1.2"
                strokeDasharray="3 1"
              />
            </svg>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Warm Hanging Top Fairy Lights Garland
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
      <svg
        className="w-full h-16 absolute top-0 text-amber-900/20"
        preserveAspectRatio="none"
        viewBox="0 0 1200 60"
      >
        <path
          d="M0,10 Q150,45 300,10 Q450,45 600,10 Q750,45 900,10 Q1050,45 1200,10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>

      {bulbs.map((b, idx) => (
        <div
          key={idx}
          className="absolute flex flex-col items-center"
          style={{ left: b.left, top: 0 }}
        >
          <div className="w-[1px] bg-amber-900/25" style={{ height: `${b.drop}px` }} />
          <div className="w-2 h-1.5 bg-amber-700/60 rounded-xs" />
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

// Cinematic Bokeh Orbs & Gold Dust
function AmbientBokehAtmosphere() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[42rem] h-[26rem] bg-gradient-to-b from-amber-200/25 via-rose-200/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-1/3 w-[30rem] h-80 bg-pink-200/25 rounded-full blur-3xl" />

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

      {/* Atmospheric Accents on Grand Finale (Step 4) */}
      {isGrandFinale && (
        <>
          {/* Top Hanging Garland */}
          <HangingFairyLights />

          {/* Option 3: Cascading Vertical Fairy Lights */}
          <VerticalFairyLightCascades />

          {/* Option 4: Floating Pastel Helium Balloon Clusters */}
          <PastelHeliumBalloons side="left" />
          <PastelHeliumBalloons side="right" />

          {/* Golden Bokeh Atmosphere */}
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