import React, { useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function MusicControl({ audioRef, isPlaying, setIsPlaying }) {
  // Set soft initial background volume (30%)
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, [audioRef]);

  const toggleSound = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Playback error:", err));
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/River_Flows_in_You(1).mp3"
        loop
        preload="auto"
      />
      <button
        onClick={toggleSound}
        className="fixed top-4 right-4 z-50 p-3 rounded-full bg-white/80 backdrop-blur-md shadow-md border border-pink-200 text-pink-600 hover:scale-105 active:scale-95 transition-all cursor-pointer"
        aria-label="Toggle Sound"
        title={isPlaying ? "Mute Music" : "Play Music"}
      >
        {isPlaying ? (
          <Volume2 size={20} className="animate-pulse" />
        ) : (
          <VolumeX size={20} className="text-slate-400" />
        )}
      </button>
    </>
  );
}