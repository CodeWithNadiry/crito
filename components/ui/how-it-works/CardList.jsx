"use client";

import Image from "next/image";
import Card from "./Card";
import { useLanguageStore } from "@/store/useLanguage";

const CardList = () => {
  const { t } = useLanguageStore();

  const steps = t("how_steps");
  return (
    <ul className="relative grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
      {/* Arrows ONLY on mobile */}
      <li
        className="absolute left-1/2 top-[25%] -translate-x-1/2 z-10 hidden md:block"
        aria-hidden="true"
      >
        <Image
          src="/icons/how-it-works/arrow.png"
          alt=""
          width={28}
          height={28}
        />
      </li>

      <li
        className="absolute left-1/2 top-[75%] -translate-x-1/2 z-10 hidden md:block"
        aria-hidden="true"
      >
        <Image
          src="/icons/how-it-works/arrow.png"
          alt=""
          width={28}
          height={28}
        />
      </li>

      {steps.map((step) => (
        <li key={step.id} className="w-full">
          <Card {...step} />
        </li>
      ))}
    </ul>
  );
};

export default CardList;
