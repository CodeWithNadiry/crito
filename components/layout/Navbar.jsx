"use client";
import Image from "next/image";
import logoImage from "@/public/images/hero/logo-image.png";
import Link from "next/link";
import NavLink from "../ui/NavLink";
import Button from "../ui/Button";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const links = [
    { href: "/", label: "Features" },
    { href: "#", label: "How It Works" },
    { href: "#", label: "Industries" },
    { href: "#", label: "Pricing" },
    { href: "#", label: "FAQ" },
  ];

  return (
    <nav
      aria-label="Main navigation"
      className="bg-[#FFFFFF]/5 backdrop-blur-[20px]"
    >
      <div className="relative px-4 md:px-10 lg:px-25 flex items-center justify-between py-5">
        <Link href="/" aria-label="Home">
          <Image src={logoImage} alt="Crito logo" priority />
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <NavLink href={href}>{label}</NavLink>
            </li>
          ))}
        </ul>

        <div
          className={`lg:hidden bg-[#C2CAD4] text-black absolute top-full right-0 w-52 p-5 rounded-lg transition-all ease-in-out duration-300 ${
            showMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-4">
            {links.map(({ href, label }) => (
              <li key={href}>
                <NavLink href={href}>{label}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <button
            className="lg:hidden cursor-pointer text-white"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? (
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
                  d="M6 6l12 12M6 18L18 6"
                />
              </svg>
            ) : (
              <Image
                src="/icons/menu-icon.png"
                width={25}
                height={25}
                alt="menu icon"
              />
            )}
          </button>

          <Button className="hidden! lg:block!">Book a Demo</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
