import Image from "next/image";
import Button from "../Button";

const Card = ({ card, index }) => {
  return (
    <article
      className={`
    min-w-[80%] sm:min-w-[60%] md:min-w-[50%]
    lg:min-w-0 
    w-full lg:max-w-[340px] xl:max-w-[360px]
    bg-[#1E3A5F]
    rounded-xl
    p-5 md:p-6
    flex flex-col
    transition-all duration-300
    ${card.scale ? "lg:scale-105 lg:shadow-xl z-10" : ""}
  `}
    >
      {/* Header */}
      <header className="flex flex-col gap-2">
        <h2 className="text-white text-[20px] md:text-[22px] font-semibold">
          {card.heading}
        </h2>
        <p className="text-[13px] md:text-[14px] text-white/70">
          {card.quality}
        </p>
      </header>

      {/* Pricing */}
      <div className="flex flex-col gap-4 mt-5">
        <h3 className="text-[26px] md:text-[30px] text-white font-bold">
          {card.price}
          {card.perMonth && (
            <span className="text-[13px] md:text-[14px] font-normal">
              {" "}
              / month
            </span>
          )}
        </h3>

        {/* Button */}
        <Button
          variant={card.gradientBtn ? "pricing-gradient" : "pricing-dark"}
          className={`${!card.gradientBtn ? "bg-[#E9E9E9]/10!" : ""} md:w-auto!`}
        >
          {card.btnText}
        </Button>

        {/* Features */}
        <ul className="flex flex-col gap-3 md:gap-4 mt-4">
          {card.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3">
              <Image src="/icons/tick.png" alt="" width={16} height={16} />
              <span className="text-[13px] md:text-[14px] text-white/80">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default Card;
