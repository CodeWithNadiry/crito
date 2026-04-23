"use client";

import Header from "../ui/Header";
import CardList from "../ui/pricing/CardList";
import { useLanguageStore } from "@/store/useLanguage";

const Pricing = () => {
  const { t } = useLanguageStore();

  return (
    <section aria-label="Pricing Plans" className="border-b border-black/10">
      <div className="px-4 md:px-8 lg:px-20 xl:px-25 py-16 flex flex-col gap-12 items-center">
        <Header
          heading={t("pricing_heading")}
          para={t("pricing_para")}
          className="flex flex-col gap-6 text-center"
        />

        <CardList />

        <p className="text-[#6B7280] mt-4 text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] font-medium">
          {t("pricing_note")}
        </p>
      </div>
    </section>
  );
};

export default Pricing;