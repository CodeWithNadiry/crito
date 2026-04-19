import ScrollToTopButton from "@/components/ScrollToTopButton";
import {
  AudioDemo,
  Hero,
  HowItWorks,
  IndustryExample,
  PainPoints,
  Pricing,
  ProductShowcase,
  SocialProof,
  Testimonial,
  VoiceDemo,
} from "@/components/sections";
import Cta from "@/components/sections/Cta";
import Faq from "@/components/sections/Faq";
import Integrations from "@/components/sections/Integrations";

const Home = () => {
  return (
    <>
      <ScrollToTopButton />
      <Hero />
      <SocialProof />
      <PainPoints />
      <ProductShowcase />
      <HowItWorks />
      <AudioDemo />
      <IndustryExample />
      <VoiceDemo />
      <Testimonial />
      <Pricing />
      <Integrations />
      <Faq />
      <Cta />
    </>
  );
};

export default Home;
