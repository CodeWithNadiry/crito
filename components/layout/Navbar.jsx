"use client";

import Image from "next/image";
import logoImage from "@/public/images/hero/logo-image.png";
import Link from "next/link";
import NavLink from "../ui/NavLink";
import Button from "../ui/Button";
import { useState } from "react";
import { useLanguageStore } from "@/store/useLanguage";

const Navbar = () => {
  const { t, setLang, lang } = useLanguageStore();
  const [showMenu, setShowMenu] = useState(false);

  const links = [
    { href: "/", label: "nav_features" },
    { href: "/how-it-works", label: "nav_how_it_works" },
    { href: "/industries", label: "nav_industries" },
    { href: "/pricing", label: "nav_pricing" },
    { href: "/faq", label: "nav_faq" },
  ];

  return (
    <nav
      aria-label="Main navigation"
      className="bg-[#FFFFFF]/5 backdrop-blur-[20px]"
    >
      <div className="relative px-4 md:px-10 lg:px-25 flex items-center justify-between py-5">
        {/* Logo */}
        <Link href="/" aria-label="Home">
          <Image src={logoImage} alt="Crito logo" priority />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <NavLink href={href}>{t(label)}</NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden bg-[#C2CAD4] text-black absolute top-full right-0 w-52 p-5 rounded-lg transition-all duration-300 ${
            showMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-4">
            {links.map(({ href, label }) => (
              <li key={href}>
                <NavLink href={href}>{t(label)}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <Button
            variant="secondary"
            className="max-lg:px-4! max-lg:py-px!  "
            onClick={() => setLang(lang === "de" ? "en" : "de")}
          >
            {lang === "de" ? "EN" : "DE"}
          </Button>
          {/* Toggle Button */}
          <button
            className="lg:hidden cursor-pointer text-white"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? (
              // ✅ CLOSE ICON (SVG)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // MENU ICON IMAGE
              <Image
                src="/icons/menu-icon.png"
                width={25}
                height={25}
                alt="menu icon"
              />
            )}
          </button>

          {/* Language Switch */}

          {/* CTA Button */}
          <Button className="hidden! lg:block!">{t("book_demo")}</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
