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

    let cancelled = false;

    const ws = WaveSurfer.create({
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

    wavesurferRef.current = ws;

    const onAudioProcess = () => {
      if (cancelled) return;
      const time = ws.getCurrentTime();
      const mins = Math.floor(time / 60);
      const secs = Math.floor(time % 60)
        .toString()
        .padStart(2, "0");
      setCurrentTime(`${mins}:${secs}`);
    };

    ws.on("audioprocess", onAudioProcess);
    ws.on("play", () => !cancelled && setIsPlaying(true));
    ws.on("pause", () => !cancelled && setIsPlaying(false));
    ws.on("finish", () => !cancelled && setIsPlaying(false));

    (async () => {
      try {
        await ws.load(audioUrl);
      } catch {
        // Load aborted when track changes, language switches, or component unmounts
      }
    })();

    return () => {
      cancelled = true;
      wavesurferRef.current = null;
      ws.un("audioprocess", onAudioProcess);
      ws.stop();
      try {
        ws.destroy();
      } catch {
        // ignore sync teardown errors
      }
    };
  }, [audioUrl]);

  const handlePlay = () => {
    wavesurferRef.current?.playPause();
  };

  return (
    <div className="flex flex-col gap-4">
      <div ref={containerRef} className="w-1/2 mx-auto" />

      <div className="flex justify-center mt-2">
        <button
          onClick={handlePlay}
          className="w-12 h-12 rounded-full bg-white text-[#3B82F6] flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <rect x="3" y="2" width="4" height="12" rx="1" />
              <rect x="9" y="2" width="4" height="12" rx="1" />
            </svg>
          ) : (
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
