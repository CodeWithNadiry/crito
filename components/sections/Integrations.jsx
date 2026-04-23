"use client";

import Image from "next/image";
import Header from "../ui/Header";
import { useLanguageStore } from "@/store/useLanguage";

const Integrations = () => {
  const { t } = useLanguageStore();

  const integrations = [
    {
      icon: "/images/integration/twillio.webp",
      title: "Twilio",
      description: t("integration_twilio_desc"),
      width: 70,
      height: 50,
    },
    {
      icon: "/images/integration/rest.jpg",
      title: "REST API",
      description: t("integration_rest_desc"),
      width: 75,
      height: 25,
    },
    {
      icon: "/images/integration/open.png",
      title: "OpenAI",
      description: t("integration_openai_desc"),
      width: 70,
      height: 20,
    },
  ];

  return (
    <section aria-label="Integrations" className="border-b border-black/10">
      <div className="px-4 md:px-8 lg:px-20 xl:px-25 py-12 md:py-16 flex flex-col items-center gap-10 bg-[#E8F1FF]">
        
        <Header
          heading={t("integrations_heading")}
          para={t("integrations_para")}
        />

        {/* GRID */}
        <div
          className="
            w-full
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            gap-5 md:gap-6 lg:gap-8
            max-w-5xl lg:max-w-6xl
          "
        >
          {integrations.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-2xl
                p-5 md:p-6
                flex flex-col items-center text-center
                gap-4
                shadow-sm
                hover:shadow-md transition
              "
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={item.width}
                height={item.height}
                className="object-contain mix-blend-multiply"
              />

              <div className="flex flex-col gap-1">
                <h4 className="font-bold text-[16px] md:text-[18px]">
                  {item.title}
                </h4>
                <p className="text-[#6B7280] text-[16px] sm:text-[17px] md:text-[18px] font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CARD */}
        <div
          className="
            bg-white
            p-4 md:p-5
            flex flex-col md:flex-row
            gap-3 md:gap-4
            items-start md:items-center
            border border-[#0000001A]/80
            rounded-xl
            shadow-lg
            mt-2
            w-full max-w-xl
          "
        >
          <Image
            src="/icons/battery.png"
            alt="battery icon"
            width={32}
            height={32}
            className="self-center"
          />

          <div className="flex flex-col gap-3">
            <p className="font-bold text-[16px] md:text-[18px]">
              {t("integration_support_title")}
            </p>
            <p className="text-[#6B7280] text-[15px] md:text-[16px] font-medium">
              {t("integration_support_desc")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;