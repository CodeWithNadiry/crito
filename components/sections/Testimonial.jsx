"use client";

import Header from "../ui/Header";
import Image from "next/image";
import starIcon from "@/public/icons/star.png";
import Button from "../ui/Button";
import { useRef, useState } from "react";
import { useLanguageStore } from "@/store/useLanguage";


const Testimonial = () => {
  const {t} = useLanguageStore();
  const scrollRef = useRef(null);
  const [active, setActive] = useState(0);

  const testimonials = t('testimonials') || [];
  const handleScroll = () => {
    const container = scrollRef.current;
    const cardWidth = container.children[0].offsetWidth;
    const index = Math.round(container.scrollLeft / cardWidth);
    setActive(index);
  };

  const scrollToCard = (index) => {
    const container = scrollRef.current;
    const cardWidth = container.children[0].offsetWidth;

    container.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });

    setActive(index);
  };

  return (
    <section className="border-b border-black/10 bg-[#E8F1FF]">
      <div className="px-4 md:px-8 lg:px-20 xl:px-25 py-12 md:py-16 flex flex-col gap-10 items-center">

        <Header
          heading={t("testimonial_heading")}
          para={t("testimonial_description")}
        />

        {/* CAROUSEL */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="
            w-full flex gap-5
            overflow-x-auto scroll-smooth scrollbar-hide
            snap-x snap-mandatory
            md:grid md:grid-cols-2 lg:grid-cols-3
          "
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="
                min-w-full sm:min-w-[70%] md:min-w-0
                snap-center
                bg-white rounded-2xl
                p-5 flex flex-col gap-4 shadow-sm
              "
            >
              {/* STARS + BADGE */}
              <div className="flex justify-between items-center">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Image key={i} src={starIcon} alt="star" className="w-4 h-4" />
                  ))}
                </div>

                <Button variant="tertiary" className="text-xs px-3 py-0.5 rounded-full">
                  {item.badge}
                </Button>
              </div>

              {/* TEXT */}
              <p className="text-black/70 flex-1">
                {item.text}
              </p>

              {/* AUTHOR */}
              <div className="flex gap-3 items-center pt-3 border-t">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="rounded-full w-11 h-11"
                />

                <div className="flex justify-between w-full">
                  <div>
                    <h4 className="font-bold">{item.name}</h4>
                    <p className="text-black/50">{item.role}</p>
                  </div>

                  <p className="text-sm text-blue-500 self-end">
                    {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DOTS */}
        <div className="flex gap-2 mt-4 md:hidden">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`h-2.5 rounded-full ${
                active === index ? "bg-blue-500 w-5" : "bg-gray-300 w-2.5"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
