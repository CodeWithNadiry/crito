import Image from "next/image";
import Card from "./Card";

const steps = [
  {
    id: 1,
    step: "01",
    icon: "/icons/how-it-works/step1-icon.png",
    title: "Connect Your Phone Line",
    description:
      "Add your Twilio phone number and Retell agent. No hardware, no PBX changes.",
  },
  {
    id: 2,
    step: "02",
    icon: "/icons/how-it-works/step2-icon.png",
    title: "Configure Your Assistant",
    description:
      "Set the welcome message, business hours, operating mode, and customize instructions for your business.",
  },
  {
    id: 3,
    step: "03",
    icon: "/icons/how-it-works/step3-icon.png",
    title: "Go Live",
    description:
      "Your AI assistant starts answering customer calls immediately with intelligent routing and natural conversation.",
  },
  {
    id: 4,
    step: "04",
    icon: "/icons/how-it-works/step4-icon.png",
    title: "Track Every Call",
    description:
      "Every call is recorded, transcribed, and analyzed with full sentiment analysis and cost breakdowns.",
  },
];

const CardList = () => {
  return (
    <ul className="relative grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
      {/* Arrows ONLY on mobile */}
      <li
        className="absolute left-1/2 top-[25%] -translate-x-1/2 z-10 hidden md:block"
        aria-hidden="true"
      >
        <Image
          src="/icons/how-it-works/arrow.png"
          alt=""
          width={28}
          height={28}
        />
      </li>

      <li
        className="absolute left-1/2 top-[75%] -translate-x-1/2 z-10 hidden md:block"
        aria-hidden="true"
      >
        <Image
          src="/icons/how-it-works/arrow.png"
          alt=""
          width={28}
          height={28}
        />
      </li>

      {steps.map((step) => (
        <li key={step.id} className="w-full">
          <Card {...step} />
        </li>
      ))}
    </ul>
  );
};

export default CardList;
