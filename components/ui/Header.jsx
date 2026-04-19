const Header = ({ heading, para, white }) => {
  return (
    <header
      className={`flex flex-col justify-center items-center gap-4 md:gap-6 text-center ${
        white ? "z-20" : ""
      }`}
    >
      <h2
        id="how-it-works-heading"
        className={`font-bold leading-tight 
          text-[30px] sm:text-[33px] md:text-[36px] lg:text-[40px] 
          ${white ? "text-white" : "text-[#1A1F2E]"}
        `}
      >
        {heading}
      </h2>

      <p
        className={`w-full  max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl 
        text-[16px] sm:text-[17px] md:text-[18px] lg:text-20px] 
        font-medium md:font-medium text-center 
        ${white ? "text-white/60" : "text-[#6B7280]"}
      `}
      >
        {para}
      </p>
    </header>
  );
};

export default Header;
