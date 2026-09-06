import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Heart } from "lucide-react";

export default function FinalSurprise({ name }) {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Grand celebration confetti burst
  useEffect(() => {
    const fireCelebrationConfetti = () => {
      const count = 220;
      const defaults = { origin: { y: 0.7 } };

      function fire(particleRatio, opts) {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio),
        });
      }

      fire(0.25, { spread: 26, startVelocity: 55, colors: ["#ff719a", "#ffd1dc", "#fff176"] });
      fire(0.2, { spread: 60, colors: ["#f472b6", "#fbcfe8", "#ffffff"] });
      fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
      fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
      fire(0.1, { spread: 120, startVelocity: 45 });
    };

    fireCelebrationConfetti();
    const timer = setTimeout(fireCelebrationConfetti, 1400);
    return () => clearTimeout(timer);
  }, []);

  // Real-time countdown to NEXT YEAR'S Birthday: September 8, 2027
  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date();
      // Target is explicitly September 8, 2027 at 00:00:00
      const target = new Date("2027-09-08T00:00:00");
      const diff = target - now;

      if (diff > 0) {
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const m = Math.floor((diff / 1000 / 60) % 60);
        const s = Math.floor((diff / 1000) % 60);

        setTimeLeft({
          days: d,
          hours: h,
          minutes: m,
          seconds: s,
        });
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleBlowCandles = () => {
    if (candlesBlown) return;
    setCandlesBlown(true);

    confetti({
      particleCount: 170,
      spread: 100,
      origin: { y: 0.5 },
      colors: ["#f43f5e", "#fb7185", "#ffd700", "#fff", "#fbcfe8"],
    });
  };

  const formatNumber = (num) => String(num).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full flex flex-col items-center py-6 px-3 text-center relative max-w-xl mx-auto"
    >
      {/* 6. GRAND HAPPY BIRTHDAY TITLE */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100/90 border border-rose-200 text-rose-600 font-bold text-xs uppercase tracking-widest mb-3 shadow-sm">
          <span>🌹</span>
          <span>A Special Day For A Special Person</span>
          <span>🪷</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-rose-500 tracking-tight my-1 drop-shadow-sm">
          HAPPY BIRTHDAY
              DITYA
        </h1>
        <h2 className="text-3xl md:text-5xl font-extrabold text-pink-600 font-handwriting">
          DITYA 🌸🪷
        </h2>
        <p className="text-sm md:text-base font-bold text-slate-600 mt-3 italic bg-white/85 backdrop-blur-md py-1.5 px-5 rounded-full border border-pink-200 inline-block shadow-sm">
          Another year older... But unfortunately, still as crazy 😂💗
        </p>
      </motion.div>

      {/* 7. LUXURY ARTISANAL BIRTHDAY CAKE */}
      <div className="w-full bg-gradient-to-b from-white/95 via-rose-50/70 to-white/95 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-2xl border border-rose-200/80 mb-8 flex flex-col items-center relative overflow-hidden">
        <div className="absolute top-3 left-4 text-xs font-serif text-rose-400/80 tracking-widest uppercase">
          ✧ Patisserie Royale ✧
        </div>
        <div className="absolute top-3 right-4 flex gap-1 text-xs text-amber-400">
          ✨✨
        </div>

        <div className="mt-4 mb-2">
          <h3 className="text-2xl md:text-3xl font-bold text-pink-600 flex items-center justify-center gap-2">
  <span>Make A Wish...</span>
  <span>💫</span>
</h3>
          <p className="text-xs md:text-sm text-slate-500 font-medium mt-1">
            Close your eyes for a second, hold that wish close to your heart 💗
          </p>
        </div>

        {/* INTERACTIVE CAKE */}
        <div
          onClick={handleBlowCandles}
          className="relative cursor-pointer group flex flex-col items-center pt-8 pb-4 select-none"
        >
          {/* Ambient Candlelight Reflection */}
          <motion.div
            animate={{
              opacity: candlesBlown ? 0 : [0.65, 0.95, 0.7, 0.9, 0.65],
              scale: candlesBlown ? 0.8 : [1, 1.05, 0.98, 1.03, 1],
            }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-12 w-44 h-16 rounded-full bg-gradient-to-b from-amber-300/40 via-yellow-200/20 to-transparent blur-xl pointer-events-none z-20"
          />

          {/* 3 SLENDER ARTISANAL CANDLES */}
          <div className="flex gap-8 mb-[-4px] z-30 relative">
            {[1, 2, 3].map((candle, idx) => (
              <div key={candle} className="flex flex-col items-center relative">
                {!candlesBlown ? (
                  <div className="relative flex flex-col items-center">
                    <motion.div
                      animate={{
                        opacity: [0.5, 0.85, 0.55, 0.8, 0.5],
                        scale: [1, 1.15, 0.95, 1.1, 1],
                      }}
                      transition={{
                        duration: 0.8 + idx * 0.15,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute -top-3 w-10 h-14 rounded-full bg-amber-400/35 blur-md pointer-events-none"
                    />

                    <motion.div
                      animate={{
                        scaleY: [1, 1.18, 0.92, 1.12, 1],
                        scaleX: [1, 0.88, 1.08, 0.92, 1],
                        rotate: [idx === 1 ? -1 : idx === 2 ? 2 : -2, 2, -1, 1, 0],
                      }}
                      transition={{
                        duration: 0.65 + idx * 0.1,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative w-4 h-7 rounded-[50%_50%_35%_35%/60%_60%_40%_40%] bg-gradient-to-t from-rose-500 via-amber-400 to-yellow-100 shadow-[0_0_12px_#f59e0b,0_0_24px_#fbbf24]"
                    >
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2.5 rounded-full bg-gradient-to-t from-blue-400/90 to-white/90 blur-[0.5px]" />
                    </motion.div>
                  </div>
                ) : (
                  <div className="relative flex flex-col items-center">
                    {[1, 2, 3].map((wisp) => (
                      <motion.div
                        key={wisp}
                        initial={{ opacity: 0.85, y: 0, x: 0, scale: 0.6 }}
                        animate={{
                          opacity: 0,
                          y: -38 - wisp * 14,
                          x: (wisp % 2 === 0 ? 12 : -12) * (idx + 0.5),
                          scale: 2.2 + wisp * 0.5,
                        }}
                        transition={{
                          duration: 1.6 + wisp * 0.3,
                          ease: "easeOut",
                        }}
                        className="absolute -top-2 w-2.5 h-3.5 rounded-full bg-slate-300/80 blur-[2px]"
                      />
                    ))}
                  </div>
                )}

                <div className="w-[1.5px] h-2.5 bg-neutral-900 rounded-t-full relative z-10" />

                <div className="w-3 h-12 rounded-t-sm shadow-md relative overflow-hidden bg-gradient-to-r from-amber-100 via-white to-pink-200 border-x border-pink-200/60">
                  <div className="absolute inset-0 flex justify-between opacity-30 px-[2px]">
                    <div className="w-[1px] h-full bg-amber-300" />
                    <div className="w-[1px] h-full bg-pink-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* TOP CAKE TIER */}
          <div className="w-44 h-20 rounded-t-3xl relative shadow-[inset_0_-8px_14px_rgba(0,0,0,0.12)] border-t-2 border-white/90 bg-gradient-to-r from-[#fdf2f4] via-[#fce7ea] to-[#f8d7dc] flex flex-col justify-between overflow-hidden z-20">
            <svg
              className="absolute top-0 left-0 w-full h-8 text-white/95 filter drop-shadow-[0_2px_2px_rgba(0,0,0,0.06)]"
              viewBox="0 0 176 32"
              fill="currentColor"
              preserveAspectRatio="none"
            >
              <path d="M0,0 L176,0 L176,14 C162,14 158,28 144,28 C130,28 126,10 112,10 C98,10 94,24 80,24 C66,24 62,8 48,8 C34,8 30,22 16,22 C8,22 4,14 0,14 Z" />
            </svg>

            <div className="relative z-10 flex justify-around items-center px-4 pt-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-rose-200 via-white to-rose-300 shadow-sm" />
                  <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-amber-300 shadow-[0_0_4px_#fde047]" />
                </div>
              ))}
            </div>

            <div className="w-full h-2 bg-gradient-to-r from-rose-300/30 via-rose-400/40 to-rose-300/30 blur-[1px]" />
          </div>

          {/* BOTTOM CAKE TIER */}
          <div className="w-64 h-24 rounded-2xl relative shadow-[inset_0_-10px_18px_rgba(0,0,0,0.15),0_12px_24px_rgba(244,63,94,0.15)] border-t border-white/80 bg-gradient-to-r from-[#fce7ea] via-[#fad2d8] to-[#f5b8c2] flex flex-col justify-between overflow-hidden z-10">
            <svg
              className="absolute top-0 left-0 w-full h-9 text-white/90 filter drop-shadow-[0_2px_3px_rgba(0,0,0,0.06)]"
              viewBox="0 0 256 36"
              fill="currentColor"
              preserveAspectRatio="none"
            >
              <path d="M0,0 L256,0 L256,12 C240,12 234,30 216,30 C198,30 192,10 174,10 C156,10 150,26 132,26 C114,26 108,8 90,8 C72,8 66,24 48,24 C30,24 24,10 0,10 Z" />
            </svg>

            <div className="relative z-10 flex justify-around items-center px-6 pt-5">
              {[1, 2, 3, 4, 5].map((item, idx) => (
                <div key={item} className="flex flex-col items-center">
                  {idx % 2 === 0 ? (
                    <div className="w-4 h-2.5 rounded-full bg-gradient-to-b from-rose-300 via-white to-rose-400 shadow-sm border-y border-rose-400/40" />
                  ) : (
                    <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-amber-400 via-yellow-100 to-amber-500 shadow-[0_0_6px_#fde047]" />
                  )}
                </div>
              ))}
            </div>

            <div className="w-full h-3 bg-gradient-to-r from-rose-400/40 via-rose-500/50 to-rose-400/40 blur-[1px]" />
          </div>

          {/* PEDESTAL */}
          <div className="flex flex-col items-center -mt-0.5">
            <div className="w-72 h-3.5 rounded-full bg-gradient-to-r from-amber-100 via-white to-amber-100 shadow-[0_6px_14px_rgba(0,0,0,0.14)] border-t border-amber-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-300/30 via-transparent to-rose-300/30" />
            </div>
            <div className="w-24 h-4 bg-gradient-to-b from-white to-slate-200 shadow-md border-x border-slate-300/50 rounded-b-md" />
            <div className="w-40 h-2 bg-gradient-to-r from-slate-200 via-white to-slate-200 rounded-full shadow-lg" />
          </div>

          {/* BUTTON */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`mt-6 px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-500 flex items-center gap-2 shadow-lg ${
              candlesBlown
                ? "bg-emerald-500 text-white shadow-emerald-200 border border-emerald-400"
                : "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-rose-300 border border-rose-300 animate-pulse"
            }`}
          >
            {candlesBlown ? (
              <>
                <span>✨</span>
                <span>Wishes Whispered To The Stars</span>
                <span>✨</span>
              </>
            ) : (
              <>
                <span>🕯️</span>
                <span>Click the candles to blow!</span>
                <span>💨</span>
              </>
            )}
          </motion.div>
        </div>

        <AnimatePresence>
          {candlesBlown && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-4 p-4 rounded-2xl bg-white/80 border border-rose-200 shadow-sm max-w-md"
            >
              <p className="text-xl md:text-2xl font-bold text-rose-500 font-handwriting">
                "May every silent wish you made today turn into reality." ❤️✨
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 8. SISTERLY BIRTHDAY MESSAGE */}
<div className="w-full bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-pink-200 mb-8 text-left relative overflow-hidden">
  <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-3 text-center font-serif">
    I hope this new year brings you everything you deserve, sister. 🤍
  </h3>

  <div className="flex flex-col gap-2 font-semibold text-slate-700 text-sm md:text-base pl-2">
    <p>🌸 Peace of mind and good health always.</p>
    <p>📸 More unforgettable memories and trips.</p>
    <p>🎯 Big success in everything you're working toward.</p>
    <p>😊 Countless reasons to laugh till your stomach hurts.</p>
    <p>✨ The confidence to never doubt your worth.</p>
    <p className="pt-2 text-slate-500 font-medium">And of course...</p>
    <p className="text-pink-600 font-bold">
      😂 Many more years of having to tolerate me annoying you!
    </p>
  </div>

  <div className="text-center mt-6 pt-4 border-t border-pink-100">
    <p className="text-xl md:text-2xl font-black text-pink-600">
      🌸 HAPPYYYYY BIRTHDAYYYYY TO THE BEST SISTER & BEST FRIEND! 🎂✨
    </p>
    <p className="text-sm font-handwriting text-slate-500 font-bold mt-1 text-base">
      💌 From Your Most Annoying Brother
    </p>
  </div>
</div>

      {/* 9. REAL-TIME COUNTDOWN TO NEXT YEAR'S BIRTHDAY (SEPTEMBER 8, 2027) */}
      <div className="w-full rounded-3xl p-6 md:p-8 bg-gradient-to-br from-rose-500 via-pink-500 to-rose-600 text-white shadow-2xl flex flex-col items-center relative overflow-hidden border border-rose-300/40">
        <div className="absolute -top-3 -right-3 text-2xl opacity-40">🌸</div>
        <div className="absolute -bottom-3 -left-3 text-2xl opacity-40">🪷</div>

        <span className="text-xs font-black uppercase tracking-widest bg-white/20 px-4 py-1.5 rounded-full mb-2 backdrop-blur-sm">
          👀 See You Next Year...
        </span>

        <h4 className="text-lg md:text-xl font-bold mb-4 font-serif">
          🎂 Your Next Birthday Begins In:
        </h4>

        {/* 4-Box Digital Clock Grid */}
        <div className="grid grid-cols-4 gap-2 md:gap-4 w-full max-w-md">
          {/* Days */}
          <div className="flex flex-col items-center bg-white/20 backdrop-blur-md rounded-2xl py-3 px-1 border border-white/30 shadow-inner">
            <span className="text-2xl md:text-4xl font-black tracking-tight tabular-nums">
              {formatNumber(timeLeft.days)}
            </span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-pink-100 mt-1">
              Days
            </span>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center bg-white/20 backdrop-blur-md rounded-2xl py-3 px-1 border border-white/30 shadow-inner">
            <span className="text-2xl md:text-4xl font-black tracking-tight tabular-nums">
              {formatNumber(timeLeft.hours)}
            </span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-pink-100 mt-1">
              Hours
            </span>
          </div>

          {/* Minutes */}
          <div className="flex flex-col items-center bg-white/20 backdrop-blur-md rounded-2xl py-3 px-1 border border-white/30 shadow-inner">
            <span className="text-2xl md:text-4xl font-black tracking-tight tabular-nums">
              {formatNumber(timeLeft.minutes)}
            </span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-pink-100 mt-1">
              Mins
            </span>
          </div>

          {/* Seconds */}
          <div className="flex flex-col items-center bg-white/30 backdrop-blur-md rounded-2xl py-3 px-1 border border-white/40 shadow-inner ring-2 ring-white/30">
            <span className="text-2xl md:text-4xl font-black tracking-tight tabular-nums text-yellow-200">
              {formatNumber(timeLeft.seconds)}
            </span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-pink-100 mt-1">
              Secs
            </span>
          </div>
        </div>

        <p className="text-sm md:text-base font-bold italic mt-4 text-pink-100">
          Until then... I'll continue annoying you 😂💗
        </p>

        <div className="flex items-center gap-1.5 mt-4 text-xs opacity-90">
          <Heart size={14} className="fill-white" />
          <span className="font-semibold">Best Friends Forever</span>
          <Heart size={14} className="fill-white" />
        </div>
      </div>
    </motion.div>
  );
}