import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Heart } from "lucide-react";

// Verbatim photo array with unique items
const PHOTOS = [
  {
    id: 1,
    url: "/images/image2.jpeg",
    caption: "The sister I got to choose ✨",
    modalNote: "",
  },
  {
    id: 2,
    url: "/images/image3.jpeg",
    caption: "",
    rotation: "-rotate-3",
    modalNote: "",
  },
  {
    id: 3,
    url: "/images/image8.jpeg",
    caption: "",
    rotation: "rotate-2",
    sticky: "",
    modalNote: "",
  },
  {
    id: 4,
    url: "/images/image10.jpeg",
    caption: "Protect this smile at all costs 🥺",
    modalNote: "",
  },
  {
    id: 5,
    url: "/images/image17.jpeg",
    caption: "",
    modalNote: "",
  },
  {
    id: 6,
    url: "/images/image18.jpeg",
    caption: "",
    rotation: "-rotate-2",
    sticky: "",
    modalNote: "",
  },
  {
    id: 7,
    url: "/images/image19.jpeg",
    caption: "",
    modalNote: "",
  },
  {
    id: 8,
    url: "/images/image20.jpeg",
    caption: "",
    rotation: "rotate-2",
    sticky: "",
    modalNote: "",
  },
  {
    id: 9,
    url: "/images/image27.jpeg",
    caption: "Konchem Navvinattu act chedham",
    rotation: "-rotate-2",
    sticky: "",
    modalNote: "",
  },
  {
    id: 10,
    url: "/images/image28.jpeg",
    caption: "",
    rotation: "rotate-3",
    sticky: "",
    modalNote: "",
  },
  {
    id: 11,
    url: "/images/image29.jpeg",
    caption: "",
    rotation: "-rotate-1",
    sticky: "",
    modalNote: "",
  },
  {
    id: 12,
    url: "/images/image30.jpeg",
    caption: "",
    rotation: "rotate-2",
    sticky: "",
    modalNote: "",
  },
  {
    id: 13,
    url: "/images/image33.jpeg",
    caption: "",
    rotation: "-rotate-3",
    sticky: "",
    modalNote: "",
  },
  {
    id: 14,
    url: "/images/image36.jpeg",
    caption: "",
    rotation: "rotate-1",
    sticky: "",
    modalNote: "",
  },
  {
    id: 15,
    url: "/images/image38.jpeg",
    caption: "",
    rotation: "-rotate-2",
    sticky: "",
    modalNote: "",
  },
  {
    id: 16,
    url: "/images/image40.jpeg",
    caption: "",
    rotation: "rotate-2",
    sticky: "",
    modalNote: "",
  },
  {
    id: 17,
    url: "/images/image41.jpeg",
    caption: "",
    rotation: "-rotate-1",
    sticky: "",
    modalNote: "",
  },
  {
    id: 18,
    url: "/images/image45.jpeg",
    caption: "",
    rotation: "rotate-3",
    sticky: "",
    modalNote: "",
  },
  {
    id: 19,
    url: "/images/image4.jpeg",
    caption: "",
    rotation: "-rotate-2",
    sticky: "",
    modalNote: "",
  },
  {
    id: 20,
    url: "/images/image5.jpeg",
    caption: "",
    rotation: "rotate-2",
    sticky: "",
    modalNote: "",
  },
  {
    id: 22,
    url: "/images/image7.jpeg",
    caption: "",
    rotation: "rotate-2",
    sticky: "",
    modalNote: "",
  },
  {
    id: 23,
    url: "/images/image9.jpeg",
    caption: "",
    rotation: "-rotate-2",
    sticky: "",
    modalNote: "",
  },
  {
    id: 24,
    url: "/images/image14.jpeg",
    caption: "",
    rotation: "rotate-2",
    sticky: "",
    modalNote: "",
  },
  {
    id: 25,
    url: "/images/image15.jpeg",
    caption: "",
    rotation: "-rotate-2",
    sticky: "",
    modalNote: "",
  },
  {
    id: 26,
    url: "/images/image21.jpeg",
    caption: "",
    rotation: "rotate-2",
    sticky: "",
    modalNote: "",
  },
  {
    id: 27,
    url: "/images/image23.jpeg",
    caption: "Okoka mettu ekkuthane building ekkuthav",
    rotation: "-rotate-2",
    sticky: "",
    modalNote: "",
  },
  {
    id: 28,
    url: "/images/image25.jpeg",
    caption: "",
    rotation: "rotate-2",
    sticky: "",
    modalNote: "",
  },
  {
    id: 29,
    url: "/images/image31.jpeg",
    caption: "Endhi chusthunav, Attitude queen bolthey",
    rotation: "-rotate-2",
    sticky: "",
    modalNote: "",
  },
  {
    id: 30,
    url: "/images/image32.jpeg",
    caption: "",
    rotation: "rotate-2",
    sticky: "",
    modalNote: "",
  },
  {
    id: 31,
    url: "/images/image35.jpeg",
    caption: "",
    rotation: "-rotate-2",
    sticky: "",
    modalNote: "",
  },
  {
    id: 32,
    url: "/images/image42.jpeg",
    caption: "",
    rotation: "-rotate-2",
    sticky: "",
    modalNote: "",
  },
  {
    id: 33,
    url: "/images/image43.jpeg",
    caption: "Happiness caught on camera ✨",
    rotation: "rotate-2",
    sticky: "",
    modalNote: "",
  },
  {
    id: 34,
    url: "/images/image44.jpeg",
    caption: "",
    rotation: "-rotate-2",
    sticky: "",
    modalNote: "",
  },
  {
    id: 35,
    url: "/images/image46.jpeg",
    caption: "",
    rotation: "rotate-2",
    sticky: "",
    modalNote: "",
  },
  {
    id: 36,
    url: "/images/image47.jpeg",
    caption: "",
    rotation: "-rotate-2",
    sticky: "",
    modalNote: "",
  },
  {
    id: 37,
    url: "/images/image50.jpeg",
    caption: "",
    rotation: "rotate-2",
    sticky: "",
    modalNote: "",
  },
  {
    id: 38,
    url: "/images/image51.jpeg",
    caption: "",
    rotation: "-rotate-2",
    sticky: "",
    modalNote: "",
  },
  {
    id: 40,
    url: "/images/image54.jpeg",
    caption: "",
    rotation: "-rotate-2",
    sticky: "",
    modalNote: "",
  },
  {
    id: 41,
    url: "/images/image55.jpeg",
    caption: "",
    rotation: "rotate-2",
    sticky: "",
    modalNote: "",
  },
  {
    id: 42,
    url: "/images/image56.jpeg",
    caption: "",
    rotation: "-rotate-2",
    sticky: "",
    modalNote: "",
  },
  {
    id: 43,
    url: "/images/image57.jpeg",
    caption: "Chikkadpally don ni ra betey, kantichupu tho Champestha",
    rotation: "rotate-2",
    sticky: "",
    modalNote: "",
  },
  {
    id: 44,
    url: "/images/image58.jpeg",
    caption: "Navvukunta puvvu lepestha",
    rotation: "-rotate-2",
    sticky: "",
    modalNote: "",
  },
  {
    id: 45,
    url: "/images/image59.jpeg",
    caption: "",
    rotation: "rotate-2",
    sticky: "",
    modalNote: "",
  },
  {
    id: 46,
    url: "/images/image60.jpeg",
    caption: "",
    rotation: "-rotate-2",
    sticky: "",
    modalNote: "",
  },
  {
    id: 47,
    url: "/images/image61.jpeg",
    caption: "",
    rotation: "rotate-2",
    sticky: "",
    modalNote: "",
  },
  {
    id: 48,
    url: "/images/image62.jpeg",
    caption: "",
    rotation: "-rotate-2",
    sticky: "",
    modalNote: "",
  },
  {
    id: 49,
    url: "/images/image63.jpeg",
    caption: "",
    rotation: "-rotate-2",
    sticky: "",
    modalNote: "",
  },
];

// Reusable Polaroid Frame Component with washi-tape & optional sticky note
const PolaroidCard = ({ photo, onClick }) => (
  <motion.div
    onClick={onClick}
    whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className={`relative bg-white p-3 pt-4 pb-6 shadow-xl rounded-sm border border-slate-100 max-w-[210px] w-full cursor-pointer group origin-center ${
      photo.rotation || "rotate-1"
    }`}
  >
    {/* Realistic washi tape */}
    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-6 bg-amber-100/75 backdrop-blur-sm rotate-1 shadow-xs border border-amber-200/50" />
    <img
      src={photo.url}
      alt={photo.caption || "Polaroid snapshot"}
      className="w-full h-44 object-cover bg-rose-50"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = "/images/image2.jpeg"; // graceful fallback if file is missing
      }}
    />
    <p className="text-center font-handwriting text-slate-700 text-base font-bold mt-3 px-1 leading-snug">
      {photo.caption || ""}
    </p>

    {/* Optional Sticky Note */}
    {photo.sticky && (
      <div className="absolute -bottom-3 -right-5 w-26 p-1.5 bg-yellow-200/95 shadow-md rounded-xs -rotate-6 border border-yellow-300 pointer-events-none group-hover:rotate-0 transition-transform">
        <p className="text-[10px] font-handwriting leading-tight font-bold text-slate-800 text-center">
          {photo.sticky}
        </p>
      </div>
    )}
  </motion.div>
);

export default function PhotoGallery({ onComplete }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Group photos into unique sets of 7
  const photoChunks = [];
  for (let i = 0; i < PHOTOS.length; i += 7) {
    photoChunks.push(PHOTOS.slice(i, i + 7));
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
      className="w-full flex flex-col items-center py-6 px-3 relative"
    >
      {/* Scrapbook Header */}
      <div className="text-center mb-14 relative z-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-pink-200/60 text-pink-700 text-xs font-bold uppercase tracking-wider mb-2.5">
          Digital Scrapbook
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-pink-600 mb-2">
          A Little Scrapbook of You 🎀
        </h2>
        <p className="text-sm md:text-base font-semibold text-slate-600 italic max-w-md mx-auto">
          The best times, the wildest moments, and every single memory I cherish ✨
        </p>
      </div>

      {/* RENDER CHUNKS: Distinct assignment for each slot (0 through 6) */}
      <div className="w-full flex flex-col gap-16 items-center">
        {photoChunks.map((chunk, chunkIdx) => {
          const p1_hanging = chunk[0];
          const p2_featured = chunk[1];
          const p3_heart = chunk[2];
          const p4_polaroidA = chunk[3];
          const p5_polaroidB = chunk[4];
          const p6_polaroidC = chunk[5];
          const p7_rounded = chunk[6];

          return (
            <div key={chunkIdx} className="w-full flex flex-col gap-12 items-center">
              {/* 1. Hanging Clothesline */}
              {p1_hanging && (
                <div className="w-full relative flex flex-col items-center pt-2 pb-2">
                  <div className="w-full max-w-md relative flex justify-center items-center mb-1">
                    <div className="w-full h-4 border-b-2 border-amber-700/60 rounded-[50%] shadow-[0_1px_3px_rgba(180,83,9,0.3)] relative" />
                    <div className="absolute left-[18%] -bottom-1 w-2.5 h-2.5 rounded-full bg-amber-300 shadow-[0_0_8px_#f59e0b]" />
                    <div className="absolute right-[18%] -bottom-1 w-2.5 h-2.5 rounded-full bg-amber-300 shadow-[0_0_8px_#f59e0b]" />
                  </div>

                  <div
                    onClick={() => setSelectedPhoto(p1_hanging)}
                    className="relative cursor-pointer group hover:scale-105 transition-transform mt-[-4px]"
                  >
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-3.5 h-6 bg-gradient-to-b from-amber-700 via-amber-600 to-amber-800 rounded-[2px] shadow-md border-t border-amber-400/40 z-20" />
                    <div className="p-2.5 bg-white/95 rounded-lg shadow-[0_14px_28px_-6px_rgba(0,0,0,0.12),0_4px_10px_rgba(0,0,0,0.06)] border border-rose-100 max-w-[220px]">
                      <img
                        src={p1_hanging.url}
                        alt="Hanging snapshot"
                        className="w-full h-44 object-cover rounded bg-rose-50"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/images/image2.jpeg";
                        }}
                      />
                      <p className="text-center font-handwriting text-slate-600 mt-2 font-bold text-lg">
                        {p1_hanging.caption || ""}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. Featured Large Portrait */}
              {p2_featured && (
                <div
                  onClick={() => setSelectedPhoto(p2_featured)}
                  className="w-full max-w-sm cursor-pointer group relative"
                >
                  <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-rose-300 via-pink-200 to-amber-200 opacity-75 blur-md group-hover:opacity-100 transition duration-500 shadow-[0_12px_30px_rgba(244,63,94,0.2)]" />
                  <div className="relative p-3 bg-white/95 backdrop-blur rounded-3xl shadow-xl border border-rose-200/80 flex flex-col items-center transition-transform duration-300 group-hover:scale-[1.02]">
                    <img
                      src={p2_featured.url}
                      alt="Featured portrait"
                      className="w-full h-72 md:h-80 object-cover rounded-2xl bg-rose-50"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/images/image3.jpeg";
                      }}
                    />
                    <div className="flex items-center gap-2 mt-3">
                      <Sparkles className="w-4 h-4 text-rose-400" />
                      <p className="font-bold text-rose-600 font-handwriting text-xl text-center">
                        {p2_featured.caption || ""}
                      </p>
                      <Sparkles className="w-4 h-4 text-rose-400" />
                    </div>
                  </div>
                </div>
              )}

              {/* 3. Circular Frame Snapshot */}
              {p3_heart && (
                <div className="flex flex-col items-center my-2">
                  <div
                    onClick={() => setSelectedPhoto(p3_heart)}
                    className="cursor-pointer group relative flex flex-col items-center"
                  >
                    <div className="w-48 h-48 md:w-56 md:h-56 relative rounded-full overflow-hidden p-1.5 bg-gradient-to-tr from-pink-400 to-rose-300 shadow-xl group-hover:scale-105 transition-transform">
                      <img
                        src={p3_heart.url}
                        alt="Heart themed snapshot"
                        className="w-full h-full object-cover rounded-full bg-rose-50"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/images/image8.jpeg";
                        }}
                      />
                    </div>
                    <p className="font-handwriting text-pink-600 font-bold text-xl mt-3 text-center">
                      {p3_heart.caption || ""}
                    </p>
                  </div>
                </div>
              )}

              {/* 4. Polaroids Cluster */}
              {(p4_polaroidA || p5_polaroidB || p6_polaroidC) && (
                <div className="w-full flex flex-wrap justify-center items-center gap-6 md:gap-8 max-w-3xl">
                  {p4_polaroidA && (
                    <PolaroidCard
                      photo={p4_polaroidA}
                      onClick={() => setSelectedPhoto(p4_polaroidA)}
                    />
                  )}
                  {p5_polaroidB && (
                    <PolaroidCard
                      photo={p5_polaroidB}
                      onClick={() => setSelectedPhoto(p5_polaroidB)}
                    />
                  )}
                  {p6_polaroidC && (
                    <PolaroidCard
                      photo={p6_polaroidC}
                      onClick={() => setSelectedPhoto(p6_polaroidC)}
                    />
                  )}
                </div>
              )}

              {/* 5. Rounded Stationery Card Frame */}
              {p7_rounded && (
                <div
                  onClick={() => setSelectedPhoto(p7_rounded)}
                  className="relative bg-white/90 p-3 rounded-3xl shadow-lg border border-pink-200 flex flex-col items-center max-w-xs cursor-pointer hover:scale-105 transition-transform mt-4"
                >
                  <img
                    src={p7_rounded.url}
                    alt="Rounded frame"
                    className="w-full h-52 object-cover rounded-2xl bg-rose-50"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/image19.jpeg";
                    }}
                  />
                  <p className="font-handwriting text-pink-600 font-bold text-xl mt-2 text-center">
                    {p7_rounded.caption || ""}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Gallery Footer */}
      <div className="text-center mt-16 mb-6 flex flex-col items-center gap-4">
        <Heart className="w-8 h-8 text-pink-400 fill-pink-200 animate-pulse" />
        <p className="text-base md:text-lg font-bold text-slate-700">
          And honestly...
        </p>
        <p className="text-sm md:text-base font-semibold text-pink-600 italic max-w-xs">
          There are way too many beautiful pictures to fit on one page ✨
        </p>
        <button
          onClick={onComplete}
          className="mt-2 px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-full shadow-lg hover:shadow-pink-300/50 active:scale-95 transition-all text-base flex items-center gap-2 cursor-pointer"
        >
          <span>Continue</span>
          <span>➡️</span>
        </button>
      </div>

      {/* Enlarged Photo Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl p-4 shadow-2xl max-w-sm w-full flex flex-col items-center relative border-2 border-pink-200"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-3 right-3 p-2 bg-pink-100 rounded-full text-pink-600 hover:bg-pink-200 transition-colors z-10 cursor-pointer"
              >
                <X size={18} />
              </button>

              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.caption || "Enlarged photo"}
                className="w-full h-64 object-cover rounded-2xl mt-4"
              />

              {selectedPhoto.caption && (
                <p className="font-bold font-handwriting text-pink-600 text-xl mt-3 text-center">
                  {selectedPhoto.caption}
                </p>
              )}

              {selectedPhoto.modalNote && (
                <p className="text-sm text-slate-600 text-center font-medium mt-1 px-2 mb-2">
                  {selectedPhoto.modalNote}
                </p>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}