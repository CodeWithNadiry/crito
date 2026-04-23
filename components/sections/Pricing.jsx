import Header from "../ui/Header";
import CardList from "../ui/pricing/CardList";

const Pricing = () => {
  return (
    <section aria-label="Pricing Plans" className="border-b border-black/10">
      <div className="px-4 md:px-8 lg:px-20 xl:px-25 py-16 flex flex-col gap-12 items-center">
        <Header
          heading="Simple, Transparent Pricing"
          para="Choose the plan that fits your business needs"
          className="flex flex-col gap-6 text-center"
        />

        <CardList />

        <p className="text-[#6B7280] mt-4 text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] font-medium">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
