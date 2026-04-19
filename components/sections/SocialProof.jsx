import Image from "next/image";
import Button from "../ui/Button";
import socialLink1 from "@/public/icons/social-link1.png";

const socialLinks = [
  { src: socialLink1, alt: "social link 1" },
  { src: socialLink1, alt: "social link 2" },
  { src: socialLink1, alt: "social link 3" },
  { src: socialLink1, alt: "social link 4" },
  { src: socialLink1, alt: "social link 5" },
  { src: socialLink1, alt: "social link 6" },
  { src: socialLink1, alt: "social link 7" },
];

const SocialProof = () => {
  return (
    <section aria-label="Social proof" className="border-b border-black/10">
      <div className="px-4 md:px-10 lg:px-25 flex flex-col items-center gap-10 md:gap-12 lg:gap-13 py-10 md:py-12">
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
            flex flex-wrap justify-center items-center
            gap-x-6 gap-y-6 md:gap-x-10 md:gap-y-8 lg:gap-x-12
            w-full
          "
        >
          {socialLinks.map(({ src, alt }) => (
            <li key={alt} className="flex justify-center items-center">
              <Image
                src={src}
                alt={alt}
                width={119}
                height={43}
                className="w-20 md:w-25 lg:w-29.75 h-auto"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SocialProof;
