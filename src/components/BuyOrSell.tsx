import React, { JSX, useState } from "react";
import { ShoppingCart, DollarSign, ChevronRight, Info } from "lucide-react";
import Link from "next/link";

const TruckingMarketplace = () => {
  const [activeTab, setActiveTab] = useState("sell");

  const sellDetails = {
    headline: "I am looking to sell my trucking company",
    subheadline: "Why you need to choose us ?",
    benefits: [
      {
        text: "We are experienced team that can help you to sell your trucking company at higher rate.",
      },
      {
        text: "We work with 500+ partners who are looking to purchase aged MC authority with or without trucks. So you will have different good options.",
      },
      {
        text: "You will get secure transactions with escrow protection",
      },
      {
        text: "Fast and easy processing",
      },
      {
        text: "Confidential & Private Transactions: Your business details remain secure, and we only share them with verified buyers.",
      },
      {
        text: "Sell Quickly & Hassle-Free: Our streamlined process helps you find the right buyer fast, with minimal effort on your end.",
      },
      {
        text: "Get the Best Market Value: We analyze market trends to ensure you get the highest price for your MC authority.",
      },
      {
        text: "Flexible Selling Options: Sell with or without trucks, DOT compliance history, or insurance—tailored to your situation.",
      },
      {
        text: "Trusted Industry Experts: Our reputation and experience in the industry make selling your MC authority safe and stress-free.",
      },
    ],
  };

  const buyDetails = {
    headline:
      "Purchase now aged MC authority from verified and experienced team.",
    subheadline: "Benefits of working with us:",
    benefits: [
      {
        text: "Access of multiple MC numbers",
      },
      {
        text: "We analyze your needs and offer MC number that suits you.",
      },
      {
        text: "Multiple payment options, including Zelle, Wire, ACH and etc",
      },
      {
        text: "Transition of MC Authority according to the Law and FMCSA regulations",
      },
      {
        text: "Bulk Purchase Discounts: Get special pricing when purchasing multiple MC authorities.",
      },
      {
        text: "Trusted by Hundreds of Carriers: Our proven track record ensures a reliable and secure transaction process.",
      },
      {
        text: "Reduced Insurance Hassle: Aged MCs often qualify for better insurance rates compared to new authorities.",
      },
      {
        text: "Custom Consultation: Our team guides you on choosing the best MC authority for your business needs.",
      },
      {
        text: "No Hidden Fees: Clear pricing with no unexpected charges, ensuring a smooth and trustworthy transaction.",
      },
      {
        text: "Full Transparency: We provide complete documentation and background checks for every MC authority we sell.",
      },
      {
        text: "Amazon Relay Ready Options: Choose MC authorities that are pre-approved for Amazon Relay for faster operational start.",
      },
    ],
  };

  interface Benefit {
    text: string;
  }

  const renderBenefitsList = (benefits: Benefit[]): JSX.Element => (
    <ul className="space-y-3 md:space-y-0 mb-4 md:mb-0 text-sm md:text-base flex-1">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-start min-h-[60px]">
          <span className="mr-2">•</span>
          <span>{benefit.text}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Trucking Company Marketplace
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-800 rounded-full p-1">
            <button
              onClick={() => setActiveTab("sell")}
              className={`px-6 py-2 rounded-full cursor-pointer transition-colors ${
                activeTab === "sell"
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              Sell
            </button>
            <button
              onClick={() => setActiveTab("buy")}
              className={`px-6 py-2 rounded-full cursor-pointer transition-colors ${
                activeTab === "buy"
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              Buy
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-1 gap-8">
          <div
            className="bg-gray-800/90 text-white p-6 md:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="flex flex-col h-full ">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-5 text-white text-center w-full md:h-[100px] flex items-center justify-center">
                {activeTab === "sell"
                  ? sellDetails.headline
                  : buyDetails.headline}
              </h3>

              <p className="text-white mb-4 md:mb-6 text-center h-[50px] flex items-center justify-center">
                {activeTab === "sell"
                  ? sellDetails.subheadline
                  : buyDetails.subheadline}
              </p>

              {activeTab === "sell"
                ? renderBenefitsList(sellDetails.benefits)
                : renderBenefitsList(buyDetails.benefits)}

              <div className="flex flex-col items-center mt-auto">
                {activeTab === "sell" ? (
                  <Link
                    href="/sell-companies"
                    className="bg-[#2563EB] text-white px-6 py-3 md:px-8 md:py-4 rounded-xl hover:bg-[#1D4ED8] transition font-medium w-full text-center flex items-center justify-center"
                  >
                    <ShoppingCart size={18} className="mr-2" /> Sell Business
                  </Link>
                ) : (
                  <Link
                    href="/buy-companies"
                    className="bg-[#2563EB] text-white px-6 py-3 md:px-8 md:py-4 rounded-xl hover:bg-[#1D4ED8] transition font-medium w-full text-center flex items-center justify-center"
                  >
                    <DollarSign size={18} className="mr-2" /> Buy Business
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TruckingMarketplace;
