import Image from "next/image";
import Button from "../Button";

const Card = ({ image, badge, heading, paragraph, btnText }) => {
  return (
    <div className="h-full rounded-2xl overflow-hidden border border-black/10 bg-white hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-44 md:h-48 lg:h-52 aspect-video">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover object-[center_30%]"
        />

        <span className="absolute left-3 top-3 px-3 py-1 bg-white text-[11px] md:text-[12px] lg:text-[13px] font-extrabold rounded-full">
          {badge}
        </span>
      </div>

      <div className="p-4 md:p-5 flex flex-col gap-3 md:gap-4">
        <h3 className="font-bold text-[15px] md:text-[16px] lg:text-[17px] text-[#1A1F2E]">
          {heading}
        </h3>

        <p
          className="text-[16px] sm:text-[17px] md:text-[18px] lg:text-20px] 
        font-medium text-[#6B7280] leading-6"
        >
          {paragraph}
        </p>

        <Button variant="tertiary" className="text-[11px]!">
          {btnText}
        </Button>
      </div>
    </div>
  );
};

export default Card;
