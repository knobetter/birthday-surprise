import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export default function FinalSurprise({ name = "Ditya" }) {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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

  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date();
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
      particleCount: 180,
      spread: 90,
      origin: { y: 0.5 },
      colors: ["#f43f5e", "#fb7185", "#ffd700", "#ffffff", "#fbcfe8"],
    });
  };

  const formatNumber = (num) => String(num).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9 }}
      className="w-full flex flex-col items-center py-6 px-3 text-center relative max-w-xl mx-auto z-10"
    >
      {/* Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[34rem] h-[34rem] bg-rose-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ y: -25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-8 flex flex-col items-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-rose-200/70 text-rose-600 font-bold text-xs uppercase tracking-widest mb-4 shadow-sm backdrop-blur-md">
          <span>✨</span>
          <span>A Special Day For A Special Person</span>
          <span>✨</span>
        </div>

        <h1 className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-rose-900 tracking-tight leading-tight">
          Happy Birthday,{" "}
          <span className="not-italic font-bold bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600 bg-clip-text text-transparent block sm:inline mt-1 sm:mt-0 drop-shadow-sm">
            Ditya
          </span>{" "}
          ✨
        </h1>

        <p className="text-sm md:text-base font-medium text-rose-800/90 mt-4 italic bg-white/70 backdrop-blur-md py-1.5 px-6 rounded-full border border-rose-200/60 shadow-xs inline-flex items-center gap-2">
          <span>Another year older... But unfortunately, still as crazy 😂💗</span>
        </p>
      </motion.div>

      {/* Cake Card */}
      <div className="w-full bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-[0_20px_50px_rgba(244,63,94,0.12)] border border-white/70 mb-8 flex flex-col items-center relative overflow-hidden">
        <div className="absolute top-4 left-5 text-[11px] font-mono tracking-widest text-rose-400/80 uppercase">
          ✧ Patisserie Royale ✧
        </div>
        <div className="absolute top-4 right-5 flex gap-1 text-xs text-amber-400">
          ✨✨
        </div>

        <div className="mt-4 mb-2">
          <h3 className="text-2xl md:text-3xl font-serif italic text-rose-700 flex items-center justify-center gap-2">
            <span>Make A Wish...</span>
            <span className="not-italic">💫</span>
          </h3>
          <p className="text-xs md:text-sm text-slate-500 font-normal mt-1">
            Close your eyes for a second, hold that wish close to your heart 💗
          </p>
        </div>

        {/* Cake Container */}
        <div
          onClick={handleBlowCandles}
          className="relative cursor-pointer group flex flex-col items-center pt-8 pb-4 select-none"
        >
          {/* Ambient Candle Glow */}
          <motion.div
            animate={{
              opacity: candlesBlown ? 0 : [0.6, 0.95, 0.65, 0.9, 0.6],
              scale: candlesBlown ? 0.7 : [1, 1.08, 0.96, 1.04, 1],
            }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 w-48 h-20 rounded-full bg-gradient-to-b from-amber-300/40 via-yellow-200/20 to-transparent blur-xl pointer-events-none z-20"
          />

          {/* Candles */}
          <div className="flex gap-8 mb-[-4px] z-30 relative">
            {[1, 2, 3].map((candle, idx) => (
              <div key={candle} className="flex flex-col items-center relative">
                {!candlesBlown ? (
                  <div className="relative flex flex-col items-center">
                    <motion.div
                      animate={{
                        opacity: [0.5, 0.9, 0.5],
                        scale: [1, 1.15, 1],
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

                <div className="w-3 h-12 rounded-t-sm shadow-md relative overflow-hidden bg-gradient-to-r from-amber-50 via-white to-rose-100 border-x border-pink-200/60">
                  <div className="absolute inset-0 flex justify-between opacity-30 px-[2px]">
                    <div className="w-[1px] h-full bg-amber-300" />
                    <div className="w-[1px] h-full bg-pink-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Top Tier */}
          <div className="w-44 h-20 rounded-t-3xl relative shadow-[inset_0_-8px_14px_rgba(0,0,0,0.1)] border-t-2 border-white/90 bg-gradient-to-r from-[#fdf2f4] via-[#fce7ea] to-[#f8d7dc] flex flex-col justify-between overflow-hidden z-20">
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

          {/* Bottom Tier */}
          <div className="w-64 h-24 rounded-2xl relative shadow-[inset_0_-10px_18px_rgba(0,0,0,0.12),0_12px_24px_rgba(244,63,94,0.12)] border-t border-white/80 bg-gradient-to-r from-[#fce7ea] via-[#fad2d8] to-[#f5b8c2] flex flex-col justify-between overflow-hidden z-10">
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

          {/* Pedestal */}
          <div className="flex flex-col items-center -mt-0.5">
            <div className="w-72 h-3.5 rounded-full bg-gradient-to-r from-amber-100 via-white to-amber-100 shadow-[0_6px_14px_rgba(0,0,0,0.12)] border-t border-amber-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-300/30 via-transparent to-rose-300/30" />
            </div>
            <div className="w-24 h-4 bg-gradient-to-b from-white to-slate-200 shadow-md border-x border-slate-300/50 rounded-b-md" />
            <div className="w-40 h-2 bg-gradient-to-r from-slate-200 via-white to-slate-200 rounded-full shadow-lg" />
          </div>

          {/* Action Button */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className={`mt-6 px-7 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-500 flex items-center gap-2.5 shadow-md ${
              candlesBlown
                ? "bg-emerald-500 text-white shadow-emerald-200/50 border border-emerald-400"
                : "bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 text-white shadow-rose-300/50 border border-rose-300 animate-pulse"
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
                <span>Tap the candles to blow!</span>
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
              className="mt-4 p-4 rounded-2xl bg-white/90 border border-rose-200/80 shadow-sm max-w-md"
            >
              <p className="text-xl md:text-2xl font-serif italic text-rose-600 font-semibold">
                "May every silent wish you made today turn into reality." ✨
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Sisterly Message */}
      <div className="w-full bg-white/80 backdrop-blur-xl rounded-3xl p-7 shadow-[0_20px_50px_rgba(244,63,94,0.1)] border border-white/70 mb-8 text-left relative overflow-hidden">
        <h3 className="text-lg md:text-xl font-bold text-rose-950 mb-4 text-center font-serif">
          I hope this new year brings you everything you deserve, sister. 🤍
        </h3>

        <div className="flex flex-col gap-2.5 font-medium text-slate-700 text-sm md:text-base pl-2">
          <p className="flex items-center gap-2">
            <span>🌸</span> <span>Peace of mind and good health always.</span>
          </p>
          <p className="flex items-center gap-2">
            <span>📸</span> <span>More unforgettable memories and spontaneous trips.</span>
          </p>
          <p className="flex items-center gap-2">
            <span>🎯</span> <span>Big success in everything you're working toward.</span>
          </p>
          <p className="flex items-center gap-2">
            <span>😊</span> <span>Countless reasons to laugh till your stomach hurts.</span>
          </p>
          <p className="flex items-center gap-2">
            <span>✨</span> <span>The confidence to never doubt your worth.</span>
          </p>
          <p className="pt-2 text-rose-400 font-serif italic text-sm">And of course...</p>
          <p className="text-rose-600 font-bold">
            😂 Many more years of having to tolerate your annoying brother!
          </p>
        </div>

        <div className="text-center mt-6 pt-4 border-t border-rose-100">
          <p className="text-xl md:text-2xl font-black bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
            🌸 HAPPIEST BIRTHDAY TO THE BEST SISTER & BEST FRIEND! 🎂✨
          </p>
        </div>
      </div>

      {/* Countdown Card */}
      <div className="w-full rounded-3xl p-6 md:p-8 bg-gradient-to-br from-rose-500/95 via-pink-500/95 to-rose-600/95 backdrop-blur-xl text-white shadow-2xl flex flex-col items-center relative overflow-hidden border border-rose-300/40">
        <span className="text-xs font-bold uppercase tracking-widest bg-white/20 px-4 py-1.5 rounded-full mb-3 backdrop-blur-md">
          👀 See You Next Year...
        </span>

        <h4 className="text-lg md:text-xl font-bold mb-4 font-serif">
          🎂 Your Next Birthday Begins In:
        </h4>

        <div className="grid grid-cols-4 gap-2 md:gap-4 w-full max-w-md">
          <div className="flex flex-col items-center bg-white/15 backdrop-blur-md rounded-2xl py-3 px-1 border border-white/25 shadow-inner">
            <span className="text-2xl md:text-4xl font-black tracking-tight tabular-nums">
              {formatNumber(timeLeft.days)}
            </span>
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-pink-100 mt-1">
              Days
            </span>
          </div>

          <div className="flex flex-col items-center bg-white/15 backdrop-blur-md rounded-2xl py-3 px-1 border border-white/25 shadow-inner">
            <span className="text-2xl md:text-4xl font-black tracking-tight tabular-nums">
              {formatNumber(timeLeft.hours)}
            </span>
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-pink-100 mt-1">
              Hours
            </span>
          </div>

          <div className="flex flex-col items-center bg-white/15 backdrop-blur-md rounded-2xl py-3 px-1 border border-white/25 shadow-inner">
            <span className="text-2xl md:text-4xl font-black tracking-tight tabular-nums">
              {formatNumber(timeLeft.minutes)}
            </span>
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-pink-100 mt-1">
              Mins
            </span>
          </div>

          <div className="flex flex-col items-center bg-white/25 backdrop-blur-md rounded-2xl py-3 px-1 border border-white/40 shadow-inner ring-2 ring-white/30">
            <span className="text-2xl md:text-4xl font-black tracking-tight tabular-nums text-yellow-200">
              {formatNumber(timeLeft.seconds)}
            </span>
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-pink-100 mt-1">
              Secs
            </span>
          </div>
        </div>

        <p className="text-sm md:text-base font-semibold italic mt-4 text-pink-100">
          Until then... I'll continue annoying you 😂💗
        </p>

        <div className="flex items-center gap-1.5 mt-4 text-xs opacity-90">
          <span>💖</span>
          <span className="font-semibold">Best Friends Forever</span>
          <span>💖</span>
        </div>
      </div>
    </motion.div>
  );
}