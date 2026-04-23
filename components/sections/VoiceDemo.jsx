"use client";

import Header from "../ui/Header";
import audioDemoBg from "@/public/images/audio-demo/audioDemo.jpg";
import Button from "../ui/Button";
import WaveForm from "../ui/WaveForm";
import { useState } from "react";
import { useLanguageStore } from "@/store/useLanguage";

const VoiceDemo = () => {
  const { lang, t } = useLanguageStore();

  const tracks = {
    book: {
      id: 1,
      title: t("voice_book_title"),
      description: t("voice_book_desc"),
      duration: lang === 'de' ? '0:56': '0:48',
      audioUrl: lang === "de" ? "/audio/booking_de.mp3" : "/audio/booking_en.mp3",
    },

    check: {
      id: 2,
      title: t("voice_check_title"),
      description: t("voice_check_desc"),
      duration: lang === 'de' ? '0:14': '0:13',
      audioUrl: lang === "de" ? "/audio/checking_de.mp3" : "/audio/checking_en.mp3",
    },

    ask: {
      id: 3,
      title: t("voice_ask_title"),
      description: t("voice_ask_desc"),
      duration: lang === 'de' ? '0:23': '0:17',
      audioUrl: lang === "de" ? "/audio/asking_de.mp3" : "/audio/asking_en.mp3",
    },
  };

  const [activeVoice, setActiveVoice] = useState("book");

  const currentTrack = tracks[activeVoice];

  function handleChangeVoice(voice) {
    setActiveVoice(voice);
  }

  return (
    <section className="border-b border-black/10">
      <div
        className="px-4 md:px-8 lg:px-20 xl:px-25 relative py-16 bg-cover flex flex-col gap-10 items-center text-white"
        style={{ backgroundImage: `url(${audioDemoBg.src})` }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_top,#1E3A5F_0%,rgba(30,58,95,0.85)_40%,rgba(30,58,95,0.6)_100%)]" />

        <Header
          white
          heading={t("voice_heading")}
          para={t("voice_para")}
          className="text-center z-20"
        />

        {/* MAIN PLAYER */}
        <div className="w-full max-w-3xl rounded-2xl border border-white/20 bg-white/10 p-8 flex flex-col gap-6 z-20">
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold text-[20px]">{currentTrack.title}</h3>
              <p className="text-white/60 text-[13px]">
                {currentTrack.description}
              </p>
            </div>

            <span className="text-white/60 text-[14px]">
              {currentTrack.duration}
            </span>
          </div>

          <WaveForm audioUrl={currentTrack.audioUrl} />
        </div>

        {/* TRACK BUTTONS */}
        <div className="z-20 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
          {Object.entries(tracks).map(([key, track]) => (
            <div
              key={track.id}
              onClick={() => handleChangeVoice(key)}
              className={`rounded-xl border p-5 cursor-pointer transition ${
                activeVoice === key
                  ? "border-blue-400 bg-white/20"
                  : "border-white/20 bg-white/10 hover:bg-white/15"
              }`}
            >
              <p className="font-semibold text-[14px]">{track.title}</p>
              <p className="text-white/50 text-[13px]">{track.duration}</p>
            </div>
          ))}
        </div>

        <Button className="z-20 px-8! py-3! rounded-full!">
          {t("voice_cta")}
        </Button>
      </div>
    </section>
  );
};

export default VoiceDemo;