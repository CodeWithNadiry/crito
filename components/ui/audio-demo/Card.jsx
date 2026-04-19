import Image from "next/image";
import Button from "../Button";

const Card = ({ icon, title, description }) => {
  return (
    <article
      role="listitem"
      className="
        w-full h-full
        rounded-2xl 
        flex flex-col gap-3 md:gap-4
        p-5 md:p-6 lg:p-7
        border border-white/10
        bg-[linear-gradient(135deg,rgba(255,255,255,0.09)_0%,rgba(255,255,255,0.06)_50%,rgba(255,255,255,0.09)_100%)]
      "
    >
      {/* Icon */}
      <Button
        aria-label={title}
        className="flex items-center justify-center rounded-xl! p-2.5! md:p-3! text-white cursor-auto!"
      >
        <Image src={icon} alt="" width={26} height={26} />
      </Button>

      {/* Title */}
      <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold text-white leading-snug">
        {title}
      </h3>

      {/* Description */}
      <p
        className="
        text-[16px] sm:text-[17px] md:text-[18px] lg:text-20px] 
        font-medium
        text-white/70 
        leading-6
      "
      >
        {description}
      </p>
    </article>
  );
};

export default Card;
