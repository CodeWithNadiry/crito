import CardList from "../ui/pain-points/CardList";

const PainPoints = () => {
  return (
    <section aria-label="Pain Points" className="border-b border-black/10">
      <div className="px-4 md:px-10 lg:px-25 flex flex-col gap-10 md:gap-12 py-12 md:py-14 lg:py-16">
        <article className="flex flex-col gap-4 md:gap-6 w-full md:max-w-2xl lg:max-w-175">
          <header>
            <h2 className="text-[31px] md:text-[36px] lg:text-[48px] font-bold leading-tight text-[#1A1F2E]">
              Businesses lose customers every day to unanswered calls
            </h2>
          </header>

          <p className="text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] font-medium leading-6 md:leading-6.5 lg:leading-7 text-[#6B7280]">
            Missing a phone call isn&apos;t just an inconvenience — it&apos;s
            lost revenue, damaged reputation, and customers choosing your
            competitors instead.
          </p>
        </article>

        <CardList />
      </div>
    </section>
  );
};

export default PainPoints;
