"use client";
import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

const WaveForm = ({ audioUrl }) => {
  const containerRef = useRef(null);
  const wavesurferRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("0:00");

  useEffect(() => {
    if (!containerRef.current) return;

    wavesurferRef.current = WaveSurfer.create({
      container: containerRef.current,
      waveColor: "rgba(255,255,255,0.25)",
      progressColor: "#3B82F6",
      cursorColor: "transparent",
      barWidth: 4,
      barGap: 2,
      barRadius: 10,
      height: 80,
      normalize: true,
    });

    wavesurferRef.current.load(audioUrl);

    wavesurferRef.current.on("audioprocess", () => {
      const time = wavesurferRef.current.getCurrentTime();
      const mins = Math.floor(time / 60);
      const secs = Math.floor(time % 60)
        .toString()
        .padStart(2, "0");
      setCurrentTime(`${mins}:${secs}`);
    });

    wavesurferRef.current.on("play", () => setIsPlaying(true));
    wavesurferRef.current.on("pause", () => setIsPlaying(false));
    wavesurferRef.current.on("finish", () => setIsPlaying(false));

    return () => {
      const ws = wavesurferRef.current;
      wavesurferRef.current = null;
      if (!ws) return;
      try {
        ws.destroy();
      } catch {
        // WaveSurfer may abort an in-flight load during teardown — safe to ignore
      }
    };
  }, [audioUrl]);

  const handlePlay = () => {
    wavesurferRef.current?.playPause();
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Waveform bars */}
      <div ref={containerRef} className="w-1/2 mx-auto" />

      {/* Play button */}
      <div className="flex justify-center mt-2">
        <button
          onClick={handlePlay}
          className="w-12 h-12 rounded-full bg-white text-[#3B82F6] flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            // Pause icon
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <rect x="3" y="2" width="4" height="12" rx="1" />
              <rect x="9" y="2" width="4" height="12" rx="1" />
            </svg>
          ) : (
            // Play icon
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M4 2l10 6-10 6V2z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default WaveForm;
