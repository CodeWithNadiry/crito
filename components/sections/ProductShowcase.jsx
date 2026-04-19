import Image from "next/image";
import Button from "../ui/Button";
import screenImage from "@/public/images/product-showcase/screen.png";

const ProductShowcase = () => {
  return (
    <section
      aria-labelledby="product-showcase-heading"
      className="border-b border-black/10 bg-[#E8F1FF]"
    >
      <div className="px-4 md:px-8 lg:px-20 xl:px-25 py-12 md:py-16 lg:py-20 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 md:gap-12 lg:gap-16">
        {/* Content */}
        <article className="flex flex-col gap-4 md:gap-5 w-full max-w-xl lg:max-w-146 text-left">
          <header className="flex flex-col gap-3 items-start">
            <Button variant="tertiary">AI-Powered Solution</Button>

            <h2
              id="product-showcase-heading"
              className="text-[26px] md:text-[30px] lg:text-[36px] font-bold leading-tight text-[#1A1F2E] text-left"
            >
              A Voice Assistant Built for Your Business
            </h2>
          </header>

          <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 mt-2 text-left">
            <p className="text-[15px] md:text-[16px] lg:text-[18px] text-[#6B7280] font-semibold leading-[22px] md:leading-[24px] lg:leading-7">
              Crito AI is a voice assistant that answers your business phone and
              talks to customers like a real person. It checks availability,
              books appointments, answers common questions about your services
              and pricing, handles scheduling, and transfers to your team when a
              human touch is needed.
            </p>

            <p className="text-[15px] md:text-[16px] lg:text-[18px] text-[#6B7280] font-semibold leading-[22px] md:leading-[24px] lg:leading-7">
              Every call is recorded, transcribed, and summarized in your
              dashboard — with sentiment analysis, cost tracking, and full
              analytics. Connect to your calendar, CRM, payment systems, and
              business tools with ready-made integrations.
            </p>
          </div>
        </article>

        {/* Image */}
        <figure className="w-full flex justify-start lg:justify-end lg:flex-1">
          <Image
            src={screenImage}
            alt="Dashboard view of Crito AI showing call analytics and assistant interface"
            className="
              w-full
              max-w-full
              sm:max-w-md
              md:max-w-lg
              lg:max-w-xl
              xl:max-w-[530px]
              h-auto
              rounded-[20px]
              shadow-md
              transition-transform duration-300 hover:scale-105
            "
          />
        </figure>
      </div>
    </section>
  );
};

export default ProductShowcase;
