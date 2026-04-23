"use client";

import { useState } from "react";
import Header from "../ui/Header";
import { FiPlus, FiMinus } from "react-icons/fi";
import Button from "../ui/Button";

const faqs = [
  {
    question: "Does it sound like a real person?",
    answer:
      "Yes, our AI uses advanced voice technology to deliver natural, human-like conversations that feel smooth and realistic to callers.",
  },
  {
    question: "Can it handle multiple languages?",
    answer:
      "Yes, the AI supports multiple languages and can adapt to your customers’ preferred language for a seamless experience.",
  },
  {
    question: "Does it integrate with our existing systems?",
    answer:
      "Absolutely. It integrates with CRMs, calendars, and custom APIs, so it fits easily into your existing workflow.",
  },
  {
    question: "What happens after hours?",
    answer:
      "Your AI continues working 24/7, answering calls, assisting customers, and booking appointments even when your team is offline.",
  },
  {
    question: "Can I manage multiple locations?",
    answer:
      "Yes, you can manage multiple locations from a single dashboard with centralized control, insights, and reporting.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

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
          heading="Frequently Asked Questions"
          para="Everything you need to know about Crito AI"
        />

        <div className="shadow-xl rounded-2xl p-6 bg-[#0000001A]/10 border border-[#0000001A] flex flex-col gap-4 w-full max-w-3xl">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-black/10 rounded-xl bg-[#F5F3F080]/50 overflow-hidden "
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
                  <p
                    className="text-[#6B7280] px-4 pb-4 text-[16px] sm:text-[17px] md:text-[18px] lg:text-20px] 
        font-medium animate-fadeIn"
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-4 text-center">
          <p className="font-bold text-[#6B7280]">Still have questions?</p>
          <Button className=" w-auto! ">Contact Support →</Button>
        </div>
      </div>
    </section>
  );
};

export default Faq;
