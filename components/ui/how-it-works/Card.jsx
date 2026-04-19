import Image from "next/image";
import Button from "../Button";

const Card = ({ step, icon, title, description }) => {
  return (
    <article
      aria-label={`Step ${step}: ${title}`}
      className="
        w-full
        h-full
        rounded-3xl
        p-5 md:p-6 lg:p-7
        flex flex-col gap-5 md:gap-6
        border border-[#0000001A]
        shadow-lg
        bg-white
      "
    >
      {/* Header */}
      <header className="flex gap-4 md:gap-6 items-start">
        <Button className="flex items-center justify-center rounded-xl! p-3!">
          <Image src={icon} alt="" width={32} height={32} />
        </Button>

        <div className="flex flex-col gap-1">
          <p className="text-[12px] md:text-[13px] text-[#3B82F6]">
            STEP {step}
          </p>

          <h3 className="text-[18px] md:text-[20px] lg:text-[22px] font-bold text-[#1A1F2E] leading-snug">
            {title}
          </h3>
        </div>
      </header>

      {/* Description */}
      <p
        className="text-[16px] sm:text-[17px] md:text-[18px] lg:text-20px] 
        font-medium text-[#6B7280] leading-6"
      >
        {description}
      </p>
    </article>
  );
};

export default Card;
