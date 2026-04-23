"use client";
import { useState } from "react";
import audioDemoBg from "@/public/images/audio-demo/audioDemo.jpg";
import CardList from "../ui/audio-demo/CardList";
import Button from "../ui/Button";
import Header from "../ui/Header";
import { useLanguageStore } from "@/store/useLanguage";

const AudioDemo = () => {
  const {t} = useLanguageStore();
  const [activeTab, setActiveTab] = useState("operations");

  function handleActiveTab(tab) {
    setActiveTab(tab);
  }

  return (
    <section aria-label="Audio Demo" className="border-b border-black/10">
      <div
        className="px-4 md:px-8 lg:px-20 xl:px-25 relative py-16 bg-cover flex flex-col gap-8 items-center bg-[#1E3A5F] text-white"
        style={{ backgroundImage: `url(${audioDemoBg.src})` }}
      >
        {/* overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_top,#1E3A5F_0%,rgba(30,58,95,0.85)_40%,rgba(30,58,95,0.6)_100%)]"
        />

        <Header
          white
          heading={t("audio_heading")}
          para={t("audio_description")}
          className="flex flex-col gap-6 text-center z-20"
        />

        <nav
          aria-label="Audience selection"
          className="z-20 w-full flex justify-center"
        >
          <div
            className="
              p-2
              rounded-3xl
              bg-black/40
              flex
              flex-col sm:flex-row
              gap-2 sm:gap-4 md:gap-6
              w-full
              max-w-md sm:max-w-2xl lg:max-w-3xl
            "
          >
            <Button
              variant={
                activeTab === "customerFacing"
                  ? "pricing-gradient"
                  : "pricing-transparent"
              }
              onClick={() => handleActiveTab("customerFacing")}
              className="w-full sm:w-auto flex-1 text-center py-2.5 sm:py-2 text-sm sm:text-base rounded-2xl transition-all duration-200"
            >
              {t("audio_tab_customer")}
            </Button>

            <Button
              variant={
                activeTab === "operations"
                  ? "pricing-gradient"
                  : "pricing-transparent"
              }
              onClick={() => handleActiveTab("operations")}
              className="w-full sm:w-auto flex-1 text-center py-2.5 sm:py-2 text-sm sm:text-base rounded-2xl transition-all duration-200"
            >
              {t("audio_tab_operations")}
            </Button>

            <Button
              variant={
                activeTab === "enterprise"
                  ? "pricing-gradient"
                  : "pricing-transparent"
              }
              onClick={() => handleActiveTab("enterprise")}
              className="w-full sm:w-auto flex-1 text-center py-2.5 sm:py-2 text-sm sm:text-base rounded-2xl transition-all duration-200"
            >
              {t("audio_tab_enterprise")}
            </Button>
          </div>
        </nav>

        <section aria-label="Audio demo features" className="z-20 w-full">
          <CardList activeTab={activeTab} />
        </section>
      </div>
    </section>
  );
};

export default AudioDemo;
