"use client";

import Image from "next/image";
import Button from "../ui/Button";
import ctaBg from "@/public/images/cta/ctaBg.jpg";
import { useLanguageStore } from "@/store/useLanguage";

const Cta = () => {
  const { t } = useLanguageStore();

  return (
    <section aria-label="CTA">
      <div
        className="
        relative bg-cover bg-center flex flex-col items-center text-white
        px-4 md:px-10 lg:px-20 xl:px-25
        py-20 md:py-24 lg:py-28
        gap-10 md:gap-12 text-center
      "
        style={{ backgroundImage: `url(${ctaBg.src})` }}
      >
        {/* Overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_top,#1E3A5F_0%,rgba(30,58,95,0.85)_45%,rgba(30,58,95,0.55)_100%)]"
        />

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center gap-6 md:gap-8 w-full max-w-3xl">
          
          <h1
            className="
            font-bold leading-tight
            text-[28px] sm:text-[34px] md:text-[40px] lg:text-[45px]
          "
          >
            {t("cta_heading")}
          </h1>

          <div
            className="
              flex flex-col
              sm:flex-row sm:justify-center
              gap-4 md:gap-6
              w-full md:w-auto
            "
          >
            <Button
              className="
                flex items-center justify-center gap-2
                min-w-full sm:min-w-auto
              "
            >
              <span>{t("cta_book_demo")}</span>
              <Image
                src="/icons/arrow.png"
                alt="arrow"
                width={16}
                height={16}
              />
            </Button>

            <Button variant="secondary" className="min-w-full sm:min-w-auto">
              {t("cta_start_trial")}
            </Button>
          </div>

          {/* Footer text */}
          <p
            className="
              text-[#FFFFFFB2]
              text-[15px] sm:text-[17px] md:text-[18px]
              font-medium tracking-wide mt-3
              max-w-xl
            "
          >
            {t("cta_footer")}
          </p>

        </div>
      </div>
    </section>
  );
};

export default Cta;