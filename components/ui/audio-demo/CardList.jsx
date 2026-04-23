import { useLanguageStore } from "@/store/useLanguage";
import Card from "./Card";


const CardList = ({ activeTab }) => {
  const {t} = useLanguageStore();

  const cards = t('audio_cards') || [];

  const activeCards = cards[activeTab] || [];
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
        {activeCards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default CardList;
