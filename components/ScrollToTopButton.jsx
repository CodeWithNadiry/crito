"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-2 md:right-5 w-14 h-14 flex items-center justify-center mix-blend-mode rounded-full bg-[#3B82F6] text-white border border-[#3B82F64D] shadow-lg hover:bg-[#2563EB] hover:-translate-y-0.5 transition-all z-100 cursor-pointer"
    >
      <FaArrowUp size={16} />
    </button>
  );
}
