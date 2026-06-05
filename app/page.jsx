'use client';

import { useState } from "react";
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
import DemoCallModal from "@/components/ui/DemoCallModal";

const Home = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <>
      <ScrollToTopButton />
      <Hero onBookDemo={() => setDemoOpen(true)} />
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
      <DemoCallModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
};

export default Home;
