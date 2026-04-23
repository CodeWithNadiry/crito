"use client";

import Image from "next/image";
import Button from "../ui/Button";
import uno from "@/public/logos/uno.webp";
import amstern from "@/public/logos/am-stern.jpg";
import capridal from "@/public/logos/capridal.png";
import north from "@/public/logos/north.png";
import skyware from '@/public/logos/skywaree.png'
const socialLinks = [
  { src: skyware, alt: "social link 1", },
  { src: uno, alt: "social link 2" },
  { src: capridal, alt: "social link 4" },
  { src: amstern, alt: "social link 3" },
  { src: north, alt: "social link 5" },
];

const SocialProof = () => {
  return (
    <section aria-label="Social proof" className="border-b border-black/10">
      <div className="px-4 md:px-10 lg:px-25 flex flex-col items-center pt-12 pb-10 ms:pb-3 md:pb-8 py-16">
        {/* Top Content */}
        <div className="flex flex-col items-center text-center gap-6 md:gap-8">
          <Button variant="tertiary">
            10,000+ customer calls handled monthly
          </Button>

          <p className="text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] text-[#6B7280] font-semibold max-w-md md:max-w-lg">
            Trusted by service businesses across multiple industries
          </p>
        </div>

        {/* Logos */}
        <ul
          aria-label="Trusted companies"
          className="
            flex mt-5 flex-wrap justify-center  items-center space-y-5
            gap-x-6 md:gap-x-10  lg:gap-x-12
            w-full
          "
        >
          {socialLinks.map(({ src, alt, highlight }) => (
            <li key={alt} className="flex justify-center items-center">
              <Image
                src={src}
                alt={alt}
                width={119}
                height={43}
                className={`w-28 md:w-32 lg:w-38 object-cover ${
                  highlight
                    ? "bg-[#027785] border border-cyan-600 rounded-md p-1"
                    : ""
                }`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SocialProof;
