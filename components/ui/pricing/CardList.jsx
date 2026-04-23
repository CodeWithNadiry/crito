import Card from "./Card";

const cards = [
  {
    heading: "Essential",
    time: "500",
    price: "€200",
    perMonth: true,
    btnText: "Start Free Trial",
    gradientBtn: false,
    scale: false,
    features: [
      "24/7 AI availability",
      "Calendar & CRM integration",
      "Call transcripts & recordings",
      "Basic analytics",
      "Email support",
      "Email & Sms notifications",
    ],
  },
  {
    heading: "Growth",
    time: "1000",
    price: "€495",
    perMonth: true,
    btnText: "Start Free Trial",
    gradientBtn: true,
    scale: true,
    features: [
      "24/7 AI availability",
      "All integrations included",
      "Calendar & CRM integration",
      "Call transcripts & recordings",
      "Email support",
      "Email & Sms notifications",
      "Custom API tools",
      "Team management",
      "Priority support",
    ],
  },
  {
    heading: "Enterprise",
    price: "Custom",
    perMonth: false,
    btnText: "Contact Sales",
    gradientBtn: false,
    scale: false,
    features: [
      "Multiple locations",
      "Unlimited calls",
      "24/7 AI availability",
      "All integrations",
      "Advanced analytics",
      "Custom API tools",
      "Dedicated support",
      "Custom SLA",
      "White-label option",
    ],
  },
];
const CardList = () => {
  return (
    <div
      className="
        w-full
        flex lg:grid
        lg:grid-cols-3
        gap-5 md:gap-6 lg:gap-8

        overflow-x-auto lg:overflow-visible
        scroll-smooth scrollbar-hide

        px-2 md:px-0 py-5
        text-[#FFFFFFCC]/80

        lg:max-w-6xl
        lg:mx-auto
        snap-x
        snap-mandatory
      "
    >
      {cards.map((card, index) => (
        <Card key={index} card={card} index={index} />
      ))}
    </div>
  );
};

export default CardList;
