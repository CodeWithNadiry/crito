import Card from "./Card";

const cards = [
  {
    heading: "Essential",
    quality: "Perfect for single locations",
    price: "$299",
    perMonth: true,
    btnText: "Start Free Trial",
    gradientBtn: false,
    scale: false,
    features: [
      "One business location",
      "Unlimited calls",
      "24/7 AI availability",
      "Calendar & CRM integration",
      "Call transcripts & recordings",
      "Basic analytics",
      "Email support",
    ],
  },
  {
    heading: "Growth",
    quality: "For growing businesses",
    price: "$799",
    perMonth: true,
    btnText: "Start Free Trial",
    gradientBtn: true,
    scale: true,
    features: [
      "Up to 5 locations",
      "Unlimited calls",
      "24/7 AI availability",
      "All integrations included",
      "Call transcripts & recordings",
      "Advanced analytics & insights",
      "Custom API tools",
      "Team management",
      "Priority support",
    ],
  },
  {
    heading: "Enterprise",
    quality: "For multi-location businesses",
    price: "Custom",
    perMonth: false,
    btnText: "Contact Sales",
    gradientBtn: false,
    scale: false,
    features: [
      "Unlimited locations",
      "Unlimited calls",
      "24/7 AI availability",
      "All integrations",
      "Advanced analytics",
      "Custom API tools",
      "Multi-location management",
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
