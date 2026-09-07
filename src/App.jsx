import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import OpeningScreen from "./components/OpeningScreen";
import PhotoGallery from "./components/PhotoGallery";
import FinalLetter from "./components/FinalLetter";
import FinalSurprise from "./components/FinalSurprise";
import MusicControl from "./components/MusicControl";

export const FRIEND_DATA = {
  name: "Bestie",
  nextBirthday: "2027-09-08T00:00:00",
};

// Independent timing configs for staggered, realistic fairy light pulses
const FAIRY_LIGHTS_CONFIG = [
  { duration: 2.1, delay: 0.1 },
  { duration: 1.6, delay: 0.8 },
  { duration: 2.7, delay: 0.3 },
  { duration: 1.9, delay: 1.2 },
  { duration: 2.4, delay: 0.5 },
  { duration: 1.8, delay: 1.0 },
];

// Petals floating in Step 4 (Grand Finale)
const SIDE_PETALS = [
  { char: "🌹", side: "left", left: "4%", duration: 9, delay: 0, size: "text-2xl" },
  { char: "🪷", side: "left", left: "12%", duration: 12, delay: 1.5, size: "text-3xl" },
  { char: "🌸", side: "left", left: "8%", duration: 8, delay: 3, size: "text-xl" },
  { char: "🌷", side: "left", left: "16%", duration: 11, delay: 0.8, size: "text-2xl" },
  { char: "🍃", side: "left", left: "6%", duration: 10, delay: 2.2, size: "text-lg" },
  { char: "🌹", side: "right", right: "5%", duration: 10, delay: 0.5, size: "text-2xl" },
  { char: "🪷", side: "right", right: "13%", duration: 13, delay: 2, size: "text-3xl" },
  { char: "🌸", side: "right", right: "9%", duration: 8.5, delay: 1, size: "text-xl" },
  { char: "🌷", side: "right", right: "17%", duration: 11.5, delay: 3.5, size: "text-2xl" },
  { char: "🍃", side: "right", right: "7%", duration: 9.5, delay: 2.8, size: "text-lg" },
];

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

      <path
        d="M32 30 C28 12, 8 8, 6 22 C4 32, 22 38, 32 35 Z"
        fill="url(#pinkWingGrad)"
      />
      <path
        d="M30 29 C27 18, 12 15, 11 23 C10 29, 22 34, 30 33 Z"
        fill="url(#innerWingGlow)"
      />

      <path
        d="M32 30 C36 12, 56 8, 58 22 C60 32, 42 38, 32 35 Z"
        fill="url(#pinkWingGrad)"
      />
      <path
        d="M34 29 C37 18, 52 15, 53 23 C54 29, 42 34, 34 33 Z"
        fill="url(#innerWingGlow)"
      />

      <path
        d="M32 35 C20 37, 10 46, 16 56 C21 62, 30 48, 32 40 Z"
        fill="url(#pinkWingGrad)"
      />

      <path
        d="M32 35 C44 37, 54 46, 48 56 C43 62, 34 48, 32 40 Z"
        fill="url(#pinkWingGrad)"
      />

      <ellipse cx="32" cy="36" rx="2" ry="10" fill="#9d174d" />

      <path
        d="M31 27 C28 19, 22 17, 20 18 M33 27 C36 19, 42 17, 44 18"
        stroke="#9d174d"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
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

/* 🦋 STORYBOOK FLYING PINK BUTTERFLIES 🦋 */
function StorybookButterflies() {
  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden select-none">
      <motion.div
        initial={{ x: "-10vw", y: "75vh", rotate: 25 }}
        animate={{
          x: ["-10vw", "20vw", "48vw", "75vw", "110vw"],
          y: ["75vh", "65vh", "50vh", "35vh", "15vh"],
          rotate: [25, 10, -5, 20, 10],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatDelay: 12,
          ease: "easeInOut",
        }}
        className="fixed"
      >
        <motion.div
          animate={{ scaleX: [1, 0.2, 1] }}
          transition={{ duration: 0.28, repeat: Infinity, ease: "easeInOut" }}
        >
          <PinkButterfly size={34} />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ x: "110vw", y: "15vh", rotate: -25 }}
        animate={{
          x: ["110vw", "80vw", "55vw", "30vw", "-10vw"],
          y: ["15vh", "28vh", "38vh", "52vh", "70vh"],
          rotate: [-25, -10, 5, -15, -20],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatDelay: 16,
          delay: 7,
          ease: "easeInOut",
        }}
        className="fixed"
      >
        <motion.div
          animate={{ scaleX: [1, 0.2, 1] }}
          transition={{ duration: 0.32, repeat: Infinity, ease: "easeInOut" }}
        >
          <PinkButterfly size={26} />
        </motion.div>
      </motion.div>
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

  // Set default background music volume softly (30%)
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
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
          ? "bg-gradient-to-br from-rose-100 via-pink-50 to-rose-100 text-slate-800"
          : isScrapbook
          ? "bg-gradient-to-br from-[#fff3f5] via-[#fef7ee] to-[#fdeef2] text-slate-800"
          : "bg-gradient-to-br from-pink-100 via-purple-50 to-pink-50 text-slate-800"
      }`}
    >
      <CursorSparkleTrail />
      {(isScrapbook || currentStep === 1) && <StorybookButterflies />}

      {/* 📷 SCRAPBOOK ROOM BACKGROUND (STEP 2) 📷 */}
      {isScrapbook && (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
          <div className="absolute -top-16 left-1/4 w-[34rem] h-[34rem] rounded-full bg-amber-200/25 blur-3xl" />
          <div className="absolute top-1/2 -left-20 w-96 h-96 rounded-full bg-rose-200/35 blur-3xl" />
          <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-pink-200/30 blur-3xl" />

          {/* LEFT WING */}
          <div className="hidden lg:flex fixed left-6 xl:left-10 top-0 bottom-0 w-44 flex-col justify-between py-8 items-center">
            <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-amber-300/40 via-amber-400/20 to-transparent flex flex-col justify-around items-center">
              {FAIRY_LIGHTS_CONFIG.map((bulb, idx) => (
                <motion.div
                  key={idx}
                  animate={{
                    opacity: [0.35, 1, 0.45, 0.95, 0.35],
                    scale: [0.92, 1.15, 0.95, 1.1, 0.92],
                    boxShadow: [
                      "0 0 4px #f59e0b",
                      "0 0 16px #fbbf24, 0 0 24px #f59e0b",
                      "0 0 6px #f59e0b",
                      "0 0 14px #fbbf24",
                      "0 0 4px #f59e0b",
                    ],
                  }}
                  transition={{
                    duration: bulb.duration,
                    delay: bulb.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-2.5 h-3.5 rounded-full bg-gradient-to-b from-yellow-100 to-amber-300 -ml-[5px]"
                />
              ))}
            </div>

            <div className="relative bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow-[0_12px_28px_-6px_rgba(244,63,94,0.18),0_4px_10px_rgba(0,0,0,0.06)] border border-rose-200/90 -rotate-6 w-36 ml-10">
              <div className="w-10 h-3 bg-rose-200/80 -top-2 left-10 absolute rotate-2 shadow-xs" />
              <p className="text-[11px] font-mono uppercase tracking-wider text-rose-400 font-bold">
                Memories
              </p>
              <p className="font-handwriting text-slate-700 font-bold text-base leading-tight mt-0.5">
                Chapter: Golden Days 📖✨
              </p>
            </div>

            <div className="relative bg-amber-50/95 border-2 border-dashed border-amber-400/80 p-3 rounded-2xl shadow-[0_12px_28px_-6px_rgba(217,119,6,0.2),0_4px_10px_rgba(0,0,0,0.06)] rotate-3 ml-8 text-center">
              <span className="text-2xl">🧸</span>
              <p className="font-handwriting text-xs font-bold text-amber-800 mt-1">
                "Pure sunshine since day one" ☀️
              </p>
            </div>

            <div className="relative bg-white/95 p-2.5 pb-3 rounded-sm shadow-[0_14px_30px_-6px_rgba(244,63,94,0.2),0_4px_12px_rgba(0,0,0,0.08)] border border-pink-200 -rotate-3 ml-12">
              <div className="w-12 h-3 bg-pink-200/80 -top-2 left-6 absolute -rotate-3" />
              <div className="w-28 h-20 bg-rose-100/50 rounded flex items-center justify-center text-3xl">
                🌸
              </div>
              <p className="font-handwriting text-[12px] font-bold text-slate-600 text-center mt-1">
                Never change 
              </p>
            </div>
          </div>

          {/* RIGHT WING */}
          <div className="hidden lg:flex fixed right-6 xl:right-10 top-0 bottom-0 w-44 flex-col justify-between py-8 items-center">
            <div className="absolute right-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-amber-300/40 via-amber-400/20 to-transparent flex flex-col justify-around items-center">
              {FAIRY_LIGHTS_CONFIG.map((bulb, idx) => (
                <motion.div
                  key={idx}
                  animate={{
                    opacity: [0.35, 1, 0.45, 0.95, 0.35],
                    scale: [0.92, 1.15, 0.95, 1.1, 0.92],
                    boxShadow: [
                      "0 0 4px #f59e0b",
                      "0 0 16px #fbbf24, 0 0 24px #f59e0b",
                      "0 0 6px #f59e0b",
                      "0 0 14px #fbbf24",
                      "0 0 4px #f59e0b",
                    ],
                  }}
                  transition={{
                    duration: bulb.duration + 0.3,
                    delay: bulb.delay + 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-2.5 h-3.5 rounded-full bg-gradient-to-b from-yellow-100 to-amber-300 -mr-[5px]"
                />
              ))}
            </div>

            <div className="relative bg-white/95 p-2.5 pb-3 rounded-sm shadow-[0_14px_30px_-6px_rgba(244,63,94,0.2),0_4px_12px_rgba(0,0,0,0.08)] border border-pink-200 rotate-6 mr-12">
              <div className="w-3.5 h-5 bg-amber-700/80 -top-3 left-1/2 -translate-x-1/2 absolute rounded-xs shadow-xs" />
              <div className="w-28 h-20 bg-pink-100/50 rounded flex items-center justify-center">
                <PinkButterfly size={38} />
              </div>
              <p className="font-handwriting text-[12px] font-bold text-slate-600 text-center mt-1">
                Favorite human ✨
              </p>
            </div>

            <div className="relative bg-rose-50/95 border border-rose-300 p-2.5 rounded-xl shadow-[0_10px_25px_-5px_rgba(244,63,94,0.18),0_4px_10px_rgba(0,0,0,0.06)] -rotate-4 mr-8 text-center w-32">
              <div className="text-xl">💌</div>
              <p className="font-mono text-[10px] font-bold text-rose-500 uppercase tracking-widest mt-1">
                Air Mail
              </p>
              <p className="font-handwriting text-xs text-slate-700 font-bold">
                Special Delivery
              </p>
            </div>

            <div className="relative bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow-[0_12px_28px_-6px_rgba(244,63,94,0.18),0_4px_10px_rgba(0,0,0,0.06)] border border-pink-200 rotate-3 mr-10 w-36">
              <div className="w-10 h-3 bg-amber-200/80 -top-2 left-10 absolute -rotate-2" />
              <p className="text-[11px] font-mono uppercase tracking-wider text-pink-500 font-bold">
                Certified
              </p>
              <p className="font-handwriting text-slate-700 font-bold text-base leading-tight mt-0.5">
                100% Chaos & Laughs 😂
              </p>
            </div>
          </div>

          {/* Golden Bokeh Dust */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-amber-300/25 blur-[2px]"
              style={{
                width: `${12 + (i % 3) * 8}px`,
                height: `${12 + (i % 3) * 8}px`,
                left: `${i * 12 + 5}%`,
              }}
              initial={{ bottom: "-5%", opacity: 0 }}
              animate={{
                bottom: ["0%", "105%"],
                x: [0, i % 2 === 0 ? 15 : -15, 0],
                opacity: [0, 0.6, 0.8, 0],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.2,
              }}
            />
          ))}
        </div>
      )}

      {/* 🌸 FLORAL FINALE (STEP 4) 🌸 */}
      {isGrandFinale && (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
          <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-rose-300/40 blur-3xl" />
          <div className="absolute bottom-1/4 -left-20 w-80 h-80 rounded-full bg-pink-300/40 blur-3xl" />
          <div className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-rose-300/40 blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-pink-300/40 blur-3xl" />

          {/* Left Bouquets */}
          <div className="hidden lg:flex fixed left-4 top-0 bottom-0 w-48 flex-col justify-between py-10 items-center opacity-90">
            <div className="flex flex-col items-center gap-1">
              <span className="text-5xl filter drop-shadow-md">💐</span>
              <div className="flex gap-1 text-3xl">
                <span>🌹</span>
                <span>🪷</span>
              </div>
              <span className="text-2xl opacity-75">🌿🌸🌿</span>
            </div>
            <div className="flex flex-col items-center gap-4 text-3xl opacity-80">
              <span>🌸</span>
              <span>🪷</span>
              <span>🌹</span>
              <span>🌷</span>
              <span>🍃</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl opacity-75">🌿🪷🌿</span>
              <div className="flex gap-1 text-3xl">
                <span>🌹</span>
                <span>🌸</span>
              </div>
              <span className="text-5xl filter drop-shadow-md">💐</span>
            </div>
          </div>

          {/* Right Bouquets */}
          <div className="hidden lg:flex fixed right-4 top-0 bottom-0 w-48 flex-col justify-between py-10 items-center opacity-90">
            <div className="flex flex-col items-center gap-1">
              <span className="text-5xl filter drop-shadow-md">💐</span>
              <div className="flex gap-1 text-3xl">
                <span>🪷</span>
                <span>🌹</span>
              </div>
              <span className="text-2xl opacity-75">🌿🌸🌿</span>
            </div>
            <div className="flex flex-col items-center gap-4 text-3xl opacity-80">
              <span>🌷</span>
              <span>🌹</span>
              <span>🪷</span>
              <span>🌸</span>
              <span>🍃</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl opacity-75">🌿🌹🌿</span>
              <div className="flex gap-1 text-3xl">
                <span>🌸</span>
                <span>🪷</span>
              </div>
              <span className="text-5xl filter drop-shadow-md">💐</span>
            </div>
          </div>

          {/* Drifting Petals */}
          {SIDE_PETALS.map((petal, i) => (
            <motion.div
              key={i}
              className={`fixed ${petal.size} filter drop-shadow-sm`}
              style={petal.side === "left" ? { left: petal.left } : { right: petal.right }}
              initial={{ top: "-10%", rotate: 0 }}
              animate={{
                top: ["-5%", "110%"],
                x: [0, i % 2 === 0 ? 20 : -20, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: petal.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: petal.delay,
              }}
            >
              {petal.char}
            </motion.div>
          ))}
        </div>
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