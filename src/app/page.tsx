"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../components/Hero";
import BuyOrSell from "../components/BuyOrSell";
import SoldItems from "../components/SoldItems";
import PartnersSection from "../components/TruckingServicesHero";
import Benefits from "../components/Benefits";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <BuyOrSell />
      <Benefits />
      <SoldItems />
      <PartnersSection />
    </main>
  );
}
