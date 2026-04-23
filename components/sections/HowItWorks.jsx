'use client';
import Image from "next/image";
import CardList from "../ui/how-it-works/CardList";
import Button from "../ui/Button";
import Header from "../ui/Header";
import { useLanguageStore } from "@/store/useLanguage";

const HowItWorks = () => {
  const {t} = useLanguageStore();
  return (
    <section
      aria-label="how-it-works-heading"
      className="border-b border-black/10"
    >
      <div className="px-4 md:px-8 lg:px-20 xl:px-25 flex flex-col gap-10 py-16 items-center">
        <Button variant="tertiary" className="flex items-center gap-3">
          <Image
            src="/icons/how-it-works/vector-icon.png"
            alt="vector icon"
            width={15}
            height={15}
          />
          <span>{t('how_badge')}</span>
        </Button>

        <Header
           heading={t("how_heading")}
          para={t("how_description")}
        />

        <CardList />

        <div className="flex items-center gap-4 mt-10 justify-center">
          <div className="w-14 h-px bg-[#6B7280]/20" />
          <p className="text-[#6B7280] text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] whitespace-nowrap font-medium">
            {t("how_footer")}
          </p>
          <div className="h-px bg-[#6B7280]/20 w-14" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
