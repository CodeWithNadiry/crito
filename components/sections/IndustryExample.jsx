import Image from "next/image";
import Button from "../ui/Button";
import Header from "../ui/Header";

const industries = [
  {
    id: 1,
    icon: "/icons/industry-example/icon1.png",
    label: "Hotels & Hospitality",
  },
  {
    id: 2,
    icon: "/icons/industry-example/icon2.png",
    label: "Medical & Dental",
  },
  { id: 3, icon: "/icons/industry-example/icon3.png", label: "Restaurants" },
  { id: 4, icon: "/icons/industry-example/icon4.png", label: "Gyms & Fitness" },
];

const IndustryExample = () => {
  return (
    <section className="border-b border-black/10">
      <div className="px-4 md:px-8 lg:px-20 xl:px-25 py-12 md:py-16 flex flex-col gap-10">
        <Header
          heading="Built for Service Businesses"
          para="Experience how our Voice AI handles real conversations across different industries. Select an industry to explore."
        />

        <div className="items-center gap-3 grid place-items-center lg:grid-cols-4 lg:mx-auto ">
          {industries.map((item, index) => (
            <Button
              key={item.id}
              className={`
                flex items-center gap-2 justify-center
                w-full max-w-xs
                md:w-auto md:max-w-none
                ${index === 0 || index === 3 ? "max-lg:col-span-2" : ""}
              `}
              variant={index === 0 ? "default" : "bordered-secondary"}
            >
              <Image src={item.icon} alt={item.label} width={14} height={14} />
              <span className="text-sm md:text-base">{item.label}</span>
            </Button>
          ))}
        </div>

        {/* ✅ CARDS */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 mt-4">
          {/* LEFT CARD */}
          <div className="w-full lg:flex-1 rounded-2xl shadow-xl p-5 md:p-6 flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <Button className="rounded-xl! p-2.5! cursor-auto!">
                <Image
                  src="/icons/industry-example/icon5.png"
                  alt=""
                  width={26}
                  height={26}
                />
              </Button>

              <div>
                <h4 className="font-bold text-[18px] md:text-[20px] lg:text-[22px]">
                  Hotels & Hospitality
                </h4>
                <p className="text-[#6B7280] text-[13px] md:text-[14px] font-semibold">
                  Handle reservations, guest inquiries, and booking
                  modifications 24/7 with natural conversation
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <p className="font-bold uppercase text-[13px] tracking-wide">
                Key Capabilities
              </p>

              <ul className="flex flex-col gap-3">
                {[
                  "Room availability checks",
                  "Booking creation & modification",
                  "Amenity information",
                  "Check-in/out assistance",
                  "Special requests handling",
                ].map((item) => (
                  <li key={item} className="flex gap-2 items-center">
                    <Image
                      src="/icons/industry-example/icon6.png"
                      alt=""
                      width={14}
                      height={14}
                    />
                    <p className="text-[13px] md:text-[14px] font-medium">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-between md:justify-around border-t pt-4 mt-2 text-center">
              {[
                ["2,400+", "Calls/Month"],
                ["340+", "Conversations"],
                ["94%", "Satisfaction"],
              ].map(([num, label]) => (
                <div key={label}>
                  <p className="font-bold text-[16px] md:text-[18px]">{num}</p>
                  <p className="text-[11px] md:text-[12px] text-[#6B7280]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:flex-1">
            <div className="rounded-2xl shadow-xl p-5 md:p-6 flex flex-col gap-6 bg-[#E8F1FF]">
              <div className="flex items-start gap-4">
                <Button className="rounded-full! p-2! bg-[#3B82F633]/70! text-[#3B82F6] cursor-auto!">
                  <Image
                    src="/icons/industry-example/icon7.png"
                    alt=""
                    width={20}
                    height={20}
                  />
                </Button>

                <div>
                  <h4 className="font-bold text-[14px] md:text-[15px]">
                    Guest Booking Inquiry
                  </h4>
                  <p className="text-[#6B7280] text-[11px] md:text-[12px] font-semibold">
                    Live conversation simulation
                  </p>
                </div>
              </div>

              {/* ✅ CHAT MESSAGES */}
              <div className="flex flex-col gap-4">
                <div className="self-end max-w-[85%]">
                  <Button className="rounded-lg! text-left w-full">
                    Hi, do you have any rooms available for this weekend?
                  </Button>
                </div>

                <div className="self-start max-w-[85%]">
                  <Button
                    variant="secondary"
                    className="text-black/70! font-medium text-left rounded-lg! w-full"
                  >
                    Hello! Yes, we do have rooms available for this weekend.
                    Would you like to know about our room options and rates?
                  </Button>
                </div>

                <div className="self-end max-w-[70%]">
                  <Button className="rounded-lg! text-left w-full">
                    Yes, sure
                  </Button>
                </div>

                <div className="self-start max-w-[85%]">
                  <Button
                    variant="secondary"
                    className="text-black/70! text-left leading-7 font-medium rounded-lg! w-full"
                  >
                    Alright, we have several options. We have the Coral Suite at
                    $499/night, the Azure View at $399/night, and the Starfish
                    Room at $299/night. Which one would you like to proceed
                    with? Let me know if you want me to repeat.
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryExample;
