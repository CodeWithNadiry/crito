"use client";
import { useState } from "react";
import audioDemoBg from "@/public/images/audio-demo/audioDemo.jpg";
import CardList from "../ui/audio-demo/CardList";
import Button from "../ui/Button";
import Header from "../ui/Header";

const AudioDemo = () => {
  const [activeTab, setActiveTab] = useState("operations");

  function handleActiveTab(tab) {
    setActiveTab(tab);
  }

  return (
    <section aria-label="Audio Demo" className="border-b border-black/10">
      <div
        className="px-4 md:px-8 lg:px-20 xl:px-25 relative py-16 bg-cover flex flex-col gap-8 items-center bg-[#1E3A5F] text-white"
        style={{ backgroundImage: `url(${audioDemoBg.src})` }}
      >
        {/* overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_top,#1E3A5F_0%,rgba(30,58,95,0.85)_40%,rgba(30,58,95,0.6)_100%)]"
        />

        <Header
          white
          heading="Everything You Need to Delight Your Customers"
          para="Powerful features designed for service businesses that value every customer interaction"
          className="flex flex-col gap-6 text-center z-20"
        />

        {/* RESPONSIVE BUTTON GROUP */}
        <nav
          aria-label="Audience selection"
          className="z-20 w-full flex justify-center"
        >
          <div
            className="
            p-2 px-2 sm:px-4
            rounded-4xl
            bg-black/40
            flex
            gap-3 sm:gap-6 md:gap-8
            items-stretch sm:items-center
            w-full sm:w-auto
            max-w-md sm:max-w-none
          "
          >
            <Button
              variant={
                activeTab === "customerFacing"
                  ? "pricing-gradient"
                  : "pricing-transparent"
              }
              onClick={() => handleActiveTab("customerFacing")}
              className="cursor-pointer whitespace-nowrap"
            >
              Customer-Facing
            </Button>

            <Button
              variant={
                activeTab === "operations"
                  ? "pricing-gradient"
                  : "pricing-transparent"
              }
              onClick={() => handleActiveTab("operations")}
              className="cursor-pointer"
            >
              Operations
            </Button>

            <Button
              variant={
                activeTab === "enterprise"
                  ? "pricing-gradient"
                  : "pricing-transparent"
              }
              onClick={() => handleActiveTab("enterprise")}
              className="cursor-pointer"
            >
              Enterprise
            </Button>
          </div>
        </nav>

        {/* CARDS */}
        <section aria-label="Audio demo features" className="z-20 w-full">
          <CardList activeTab={activeTab} />
        </section>
      </div>
    </section>
  );
};

export default AudioDemo;
