"use client";

import heroImage from "@/public/images/hero/hero-image.png";
import Image from "next/image";
import Navbar from "../layout/Navbar";
import playIcon from "@/public/icons/play-icon.png";
import Button from "../ui/Button";
import { useLanguageStore } from "@/store/useLanguage";

const Hero = ({ onBookDemo }) => {
  const {t, lang} = useLanguageStore()

  return (
    <section className="relative min-h-screen text-white">
      <Image
        src={heroImage}
        alt="AI model with microphone"
        fill
        priority
        className="max-md:object-cover max-md:object-bottom md:object-center"
      />

      <div className="absolute inset-0 bg-linear-to-r from-[#1E3A5FF2]/95 via-[#1E3A5FD9]/85 to-[#1E3A5F00]/0">
        <Navbar onBookDemo={onBookDemo} />

        <div className={`px-4.5 md:px-10 lg:px-25 flex justify-between ${lang === 'de' ? 'max-sm:mt-[11%]': 'max-sm:mt-[17%]'} max-md:mt-[20%] md:mt-[7%] h-full`}>
          <div className={`w-146 flex flex-col max-md:gap-7 gap-3 ${lang === 'de' ? 'max-sm:gap-3': ''}`}>
            <h1 className="max-md:text-[42px] md:text-[60px] md:w-135.5 max-sm:leading-12 md:leading-18.75 tracking-normal font-bold lg:w-full">
              {t("hero_title")}
            </h1>

            <p className="text-[20px] leading-[32.5px]">
              {t("hero_description")}
            </p>

            <div className="flex max-md:flex-col max-sm:gap-3 max-md:gap-5 gap-4 mt-3">
              <Button onClick={onBookDemo} className="max-md:w-full! max-md:p-2.5!">
                {t("book_demo")}
              </Button>

              <Button
                variant="secondary"
                className="flex items-center gap-4 max-md:w-full! max-md:p-2.5!"
              >
                <Image src={playIcon} alt="play icon" width={16} height={16} />
                <span>{t("listen_sample")}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;