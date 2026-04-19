"use client";

import { useEffect, useRef, useState } from "react";
import Card from "./Card";
const cards = [
  {
    image: "/images/pain-points/card-image1.jpg",
    badge: "AFTER HOURS",
    heading: "Missed calls mean missed revenue",
    paragraph:
      "Customers call outside business hours, get voicemail, and book with your competitor who answers immediately.",
    btnText: "67% of calls go unanswered during peak hours",
  },
  {
    image: "/images/pain-points/card-image2.jpg",
    badge: "EVERY DAY",
    heading: "Competitors are one call away",
    paragraph: "Every unanswered call is a customer choosing someone else.",
    btnText:
      "85% of customers call a second business when first call goes unanswered",
  },
  {
    image: "/images/pain-points/card-image3.jpg",
    badge: "PEAK TIMES",
    heading: "Overwhelmed teams lose customers",
    paragraph: "Your staff juggles walk-ins and calls — leading to mistakes.",
    btnText: "40% of callers hang up after waiting 60 seconds",
  },
];
const CardList = () => {
  const scrollRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;

    const interval = setInterval(() => {
      setActive((prevIndex) => {
        const nextIndex = (prevIndex + 1) % cards.length;

        const cardWidth = container.children[0].offsetWidth + 20;

        container.scrollTo({
          left: nextIndex * cardWidth,
          behavior: "smooth",
        });

        return nextIndex; // ✅ MUST return this
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleScroll = () => {
    const container = scrollRef.current;
    const cardWidth = container.children[0].offsetWidth + 20;
    const index = Math.round(container.scrollLeft / cardWidth);
    setActive(index);
  };

  const scrollToCard = (index) => {
    const container = scrollRef.current;

    const cardWidth = container.children[0].offsetWidth + 20;
    // console.log(container.children[0].offsetWidth);
    // it is actually the first card in the card array
    container.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });

    setActive(index);
  };

  return (
    <div>
      {/* Cards */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="
          flex gap-5 overflow-x-auto pb-4
          scrollbar-hide
          snap-x snap-mandatory
          scroll-smooth
          md:grid md:grid-cols-2 lg:grid-cols-3
        "
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className={`
              min-w-[85%] sm:min-w-[70%] md:min-w-0
              snap-center
              transition-all duration-300
              ${active === index ? "bg-blue-50 rounded-xl" : ""}
            `}
          >
            <Card {...card} />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4 md:hidden">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToCard(i)}
            className={`
              h-2.5 rounded-full transition-all duration-300 cursor-pointer
              ${active === i ? "bg-blue-500 w-5" : "bg-gray-300 w-2.5"}
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
