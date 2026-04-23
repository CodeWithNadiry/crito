"use client";

import { useLanguageStore } from "@/store/useLanguage";
import Card from "./Card";

const CardList = () => {
  const { t } = useLanguageStore();

  const cards = [
    {
      heading: t("pricing_essential"),
      time: "500",
      price: "€200",
      perMonth: true,
      btnText: t("pricing_start_trial"),
      gradientBtn: false,
      scale: false,
      features: [
        t("feature_24_7"),
        t("feature_calendar"),
        t("feature_transcripts"),
        t("feature_basic_analytics"),
        t("feature_email_support"),
        t("feature_notifications"),
      ],
    },
    {
      heading: t("pricing_growth"),
      time: "1000",
      price: "€495",
      perMonth: true,
      btnText: t("pricing_start_trial"),
      gradientBtn: true,
      scale: true,
      features: [
        t("feature_24_7"),
        t("feature_all_integrations"),
        t("feature_calendar"),
        t("feature_transcripts"),
        t("feature_email_support"),
        t("feature_notifications"),
        t("feature_custom_api"),
        t("feature_team"),
        t("feature_priority"),
      ],
    },
    {
      heading: t("pricing_enterprise"),
      price: "Custom",
      perMonth: false,
      btnText: t("pricing_contact_sales"),
      gradientBtn: false,
      scale: false,
      features: [
        t("feature_multi_location"),
        t("feature_unlimited_calls"),
        t("feature_24_7"),
        t("feature_all_integrations"),
        t("feature_advanced_analytics"),
        t("feature_custom_api"),
        t("feature_dedicated_support"),
        t("feature_sla"),
        t("feature_white_label"),
      ],
    },
  ];

  return (
    <div
      className="
        w-full
        flex lg:grid
        lg:grid-cols-3
        gap-5 md:gap-6 lg:gap-8
        overflow-x-auto lg:overflow-visible
        scroll-smooth scrollbar-hide
        px-2 md:px-0 py-5
        text-[#FFFFFFCC]/80
        lg:max-w-6xl
        lg:mx-auto
        snap-x snap-mandatory
      "
    >
      {cards.map((card, index) => (
        <Card key={index} card={card} index={index} />
      ))}
    </div>
  );
};

export default CardList;