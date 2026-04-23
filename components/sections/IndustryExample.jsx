'use client';
import Image from "next/image";
import Button from "../ui/Button";
import Header from "../ui/Header";
import { useLanguageStore } from "@/store/useLanguage";


const IndustryExample = () => {
  const {t} = useLanguageStore();
  const industries = t('industry_list') || [];
  const capabilities = t('industry_capabilities') || [];
  const stats = t('industry_stats') || [];
  return (
    <section className="border-b border-black/10">
      <div className="px-4 md:px-8 lg:px-20 xl:px-25 py-12 md:py-16 flex flex-col gap-10">

        <Header
          heading={t("industry_heading")}
          para={t("industry_description")}
        />

        {/* INDUSTRY BUTTONS */}
        <div className="items-center gap-3 grid place-items-center lg:grid-cols-4 lg:mx-auto">
          {industries.map((item, index) => (
            <Button
              key={item.id}
              className={`flex items-center gap-2 justify-center w-full max-w-xs md:w-auto ${
                index === 0 || index === 3 ? "max-lg:col-span-2" : ""
              }`}
              variant={index === 0 ? "default" : "bordered-secondary"}
            >
              <Image src={item.icon} alt={item.label} width={14} height={14} />
              <span>{item.label}</span>
            </Button>
          ))}
        </div>

        {/* MAIN CARDS */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 mt-4">

          {/* LEFT */}
          <div className="w-full lg:flex-1 rounded-2xl shadow-xl p-6 flex flex-col gap-6">
            <h4 className="font-bold text-xl">
              {t("industry_card_title")}
            </h4>

            <p className="text-[#6B7280]">
              {t("industry_card_desc")}
            </p>

            <p className="font-bold uppercase text-sm">
              {t("industry_capabilities_title")}
            </p>

            <ul className="flex flex-col gap-2">
              {capabilities.map((item) => (
                <li key={item} className="flex gap-2 items-center">
                  <Image src="/icons/industry-example/icon6.png" alt="" width={14} height={14} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex justify-around border-t pt-4">
              {stats.map(([num, label]) => (
                <div key={label}>
                  <p className="font-bold">{num}</p>
                  <p className="text-sm text-gray-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CHAT */}
          <div className="w-full lg:flex-1 bg-[#E8F1FF] rounded-2xl p-6 flex flex-col gap-6">
            <div>
              <h4 className="font-bold">{t("industry_chat_title")}</h4>
              <p className="text-gray-500">{t("industry_chat_sub")}</p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="self-end">
                <Button>{t("chat_1")}</Button>
              </div>

              <div className="self-start">
                <Button variant="secondary">{t("chat_2")}</Button>
              </div>

              <div className="self-end">
                <Button>{t("chat_3")}</Button>
              </div>

              <div className="self-start">
                <Button variant="secondary">{t("chat_4")}</Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IndustryExample;
