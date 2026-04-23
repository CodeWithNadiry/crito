import Card from "./Card";

const cards = {
  operations: [
    {
      id: 1,
      icon: "/icons/audio-demo/icon1.png",
      title: "Smart Call Transfer",
      description:
        "When a customer needs a human, the AI transfers the call instantly to the right person.",
    },
    {
      id: 2,
      icon: "/icons/audio-demo/icon2.png",
      title: "Call Logs & Recordings",
      description:
        "Every call logged with transcript, audio recording, AI summary, and caller sentiment.",
    },
    {
      id: 3,
      icon: "/icons/audio-demo/icon3.png",
      title: "Post-Call Summary Emails",
      description:
        "Receive an email after each call with summary, sentiment, and recording link.",
    },
    {
      id: 4,
      icon: "/icons/audio-demo/icon4.png",
      title: "Configurable Personality",
      description:
        "Custom welcome message, system instructions, and brand voice for your business.",
    },
  ],

  customerFacing: [
    {
      id: 1,
      icon: "/icons/audio-demo/icon1.png",
      title: "24/7 AI Receptionist",
      description:
        "Answers every customer call instantly, even outside business hours.",
    },
    {
      id: 2,
      icon: "/icons/audio-demo/icon2.png",
      title: "Instant Appointment Booking",
      description:
        "Lets customers book, reschedule, or cancel appointments during the call.",
    },
    {
      id: 3,
      icon: "/icons/audio-demo/icon3.png",
      title: "Smart FAQ Handling",
      description:
        "Responds instantly to common questions like pricing, location, and services.",
    },
    {
      id: 4,
      icon: "/icons/audio-demo/icon4.png",
      title: "Lead Capture System",
      description:
        "Collects and stores customer details from every call for follow-up.",
    },
  ],

  enterprise: [
    {
      id: 1,
      icon: "/icons/audio-demo/icon1.png",
      title: "Multi-Location Control",
      description:
        "Manage all branches from one unified dashboard with full visibility.",
    },
    {
      id: 2,
      icon: "/icons/audio-demo/icon2.png",
      title: "Advanced API Access",
      description: "Integrate deeply with your CRM, ERP, and internal systems.",
    },
    {
      id: 3,
      icon: "/icons/audio-demo/icon3.png",
      title: "Enterprise Security",
      description:
        "Secure infrastructure with encryption and compliance-ready setup.",
    },
    {
      id: 4,
      icon: "/icons/audio-demo/icon4.png",
      title: "Custom AI Training",
      description:
        "Train AI using your own business data for smarter responses.",
    },
  ],
};

const CardList = ({ activeTab }) => {
  return (
    <section aria-label="Feature cards">
      <div
        className="
          grid grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-2 
          gap-6 md:gap-8 lg:gap-10 
          text-white mt-4 md:mt-10
        "
        role="list"
      >
        {cards[activeTab].map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default CardList;
