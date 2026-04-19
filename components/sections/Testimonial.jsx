"use client";

import Header from "../ui/Header";
import Image from "next/image";
import starIcon from "@/public/icons/star.png";
import Button from "../ui/Button";
import { useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    text: "Crito AI has been a game-changer for our practice. We were missing so many calls during appointments, and now every patient gets an immediate response. Our booking rate has increased by 40%.",
    name: "Dr. Sarah Martinez",
    role: "Practice Owner",
    company: "Riverside Medical Clinic",
    badge: "40% increase in bookings",
    avatar: "/images/testimonial/woman-avatar.avif",
  },
  {
    id: 2,
    text: "The AI handles our routine inquiries flawlessly. Our team can now focus on delivering exceptional service instead of being tied to the phone all day. It's like having an extra team member.",
    name: "Michael Chen",
    role: "Operations Manager",
    company: "Fitness First Gym",
    badge: "15 hours saved per week",
    avatar: "/images/testimonial/man1-avatar.jpg",
  },
  {
    id: 3,
    text: "Managing multiple locations used to be a nightmare. With Crito AI, each location has its own assistant, and I can monitor everything from one dashboard. It's incredibly efficient.",
    name: "Emma Thompson",
    role: "Operations Director",
    company: "Bliss Spa & Wellness Group",
    badge: "5 locations managed seamlessly",
    avatar: "/images/testimonial/man2-avatar.jpg",
  },
];

const Testimonial = () => {
  const scrollRef = useRef(null);
  const [active, setActive] = useState(0);

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
      <div className="px-4 md:px-8 lg:px-20 xl:px-25 py-12 md:py-16 flex flex-col gap-10 md:gap-12 items-center">
        <Header
          heading="Trusted by Service Professionals"
          para="See what business owners and operators are saying about their experience"
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
                p-5 md:p-6
                flex flex-col gap-4 md:gap-5
                shadow-sm
              "
            >
              {/* STARS + BADGE */}
              <div className="flex justify-between items-center md:flex-col md:items-start md:gap-4 xl:flex-row">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      src={starIcon}
                      alt="star"
                      className="w-3 h-3 md:w-4 md:h-4"
                    />
                  ))}
                </div>

                <Button
                  variant="tertiary"
                  className="text-[11px]! md:text-[13px]! px-3 md:px-4 py-0.5! rounded-full!"
                >
                  {item.badge}
                </Button>
              </div>

              {/* TEXT */}
              <p
                className="text-[16px] sm:text-[17px] 
        font-medium text-black/70 leading-relaxed flex-1"
              >
                {item.text}
              </p>

              {/* AUTHOR */}
              <div className="flex gap-3 items-center pt-3 border-t border-black/5">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover w-11 h-11"
                />

                <div className="flex justify-between w-full">
                  <div className="flex flex-col gap-0.5">
                    <h4 className="text-[14px] md:text-[15px] font-bold">
                      {item.name}
                    </h4>
                    <p className="text-[14px] md:text-[16px] text-black/50 font-medium">
                      {item.role}
                    </p>
                  </div>

                  <p className="text-[12px] md:text-[13px] text-[#3F81F5] font-medium self-end">
                    {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DOTS */}
        <div className="flex gap-2 mt-4 justify-center md:hidden">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
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
