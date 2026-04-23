"use client";

import { useState } from "react";
import Header from "../ui/Header";
import { FiPlus, FiMinus } from "react-icons/fi";
import Button from "../ui/Button";
import { useLanguageStore } from "@/store/useLanguage";

const Faq = () => {
  const { t } = useLanguageStore();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: t("faq_q1"), answer: t("faq_a1") },
    { question: t("faq_q2"), answer: t("faq_a2") },
    { question: t("faq_q3"), answer: t("faq_a3") },
    { question: t("faq_q4"), answer: t("faq_a4") },
    { question: t("faq_q5"), answer: t("faq_a5") },
  ];

  function toggleIndex(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section
      aria-label="Frequently Asked Questions"
      className="border-b border-black/10"
    >
      <div className="px-4 md:px-8 lg:px-20 xl:px-25 py-16 flex flex-col gap-10 items-center">

        <Header
          heading={t("faq_heading")}
          para={t("faq_para")}
        />

        <div className="shadow-xl rounded-2xl p-6 bg-[#0000001A]/10 border border-[#0000001A] flex flex-col gap-4 w-full max-w-3xl">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-black/10 rounded-xl bg-[#F5F3F080]/50 overflow-hidden"
              >
                {/* Question */}
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex justify-between items-center p-4 text-left cursor-pointer"
                >
                  <h4 className="font-medium">{faq.question}</h4>

                  <span className="text-xl">
                    {isOpen ? <FiMinus /> : <FiPlus />}
                  </span>
                </button>

                {isOpen && (
                  <p className="text-[#6B7280] px-4 pb-4 text-[16px] sm:text-[17px] md:text-[18px] font-medium animate-fadeIn">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-4 text-center">
          <p className="font-bold text-[#6B7280]">
            {t("faq_still")}
          </p>

          <Button className="w-auto!">
            {t("faq_contact")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Faq;