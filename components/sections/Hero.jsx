import heroImage from "@/public/images/hero/hero-image.png";
import Image from "next/image";
import Navbar from "../layout/Navbar";
import playIcon from "@/public/icons/play-icon.png";
import Button from "../ui/Button";
const Hero = () => {
  return (
    <section className="relative min-h-screen text-white ">
      <Image
        src={heroImage}
        alt="AI model with microphone"
        fill
        priority
        className="max-md:object-cover max-md:object-bottom-right md:object-center"
      />

      <div className="absolute inset-0 bg-linear-to-r from-[#1E3A5FF2]/95 via-[#1E3A5FD9]/85 to-[#1E3A5F00]/0 ">
        <Navbar />
        <div className="px-4.5 md:px-10 lg:px-25 flex justify-between max-md:mt-[20%] md:mt-[7%] h-full">
          <div className="w-146 flex flex-col max-md:gap-4 gap-3">
            <h1 className="max-md:text-[42px] md:text-[60px] md:w-135.5 md:leading-18.75 traking-normal font-bold ">
              Every call answered. Every customer kept.
            </h1>

            <p className="text-[20px] leading-[32.5px]">
              Crito AI answers calls, books appointments, responds to commona
              questions, and escalates when needed — around the clock, without
              adding headcount.
            </p>
            <div className="flex max-md:flex-col gap-4 mt-3">
              <Button className="max-md:w-full! max-md:p-2.5!">
                Book a Demo
              </Button>
              <Button
                variant="secondary"
                className="flex items-center gap-4 max-md:w-full! max-md:p-2.5!"
              >
                <Image src={playIcon} alt="play icon" width={16} height={16} />
                <span>Listen to a Sample Call</span>
              </Button>
            </div>
            <div className="flex items-center md:justify-start max-md:gap-6 gap-4 mt-3">
              <p>Powered by OpenAI</p>
              <p>Connects to your existing tools</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
