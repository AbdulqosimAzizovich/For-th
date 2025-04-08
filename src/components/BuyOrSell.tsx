import { JSX } from "react";
import { DollarSign } from "lucide-react";
import Link from "next/link";

const TruckingMarketplace = () => {
  const buyDetails = {
    headline:
      "Purchase now aged MC authority from verified and experienced team.",
    subheadline: "Benefits of working with us:",
    benefits: [
      {
        text: "Access of multiple MC numbers. We maintain an extensive database of available MC authorities across all states and operational categories. You can browse through different options based on age, compliance history, and operational capacity to find the perfect match for your business needs.",
      },
      {
        text: "We analyze your needs and offer MC number that suits you. Our expert team conducts a thorough assessment of your business requirements, operational scope, and long-term goals. Based on this analysis, we recommend MC authorities that align perfectly with your specific situation, saving you time and ensuring optimal compatibility.",
      },
      {
        text: "Multiple payment options, including Zelle, Wire, ACH and etc. We understand the importance of convenient transactions, which is why we offer diverse payment methods to accommodate your preferences. All payment channels are secure, verified, and designed to process your transaction quickly with proper documentation provided at every step.",
      },
      {
        text: "Transition of MC Authority according to the Law and FMCSA regulations. Our legal team handles all paperwork and compliance requirements to ensure a smooth and legal transfer process. We maintain strict adherence to all FMCSA guidelines, helping you avoid common pitfalls and potential legal issues that could arise during transfer.",
      },
      {
        text: "Bulk Purchase Discounts: Get special pricing when purchasing multiple MC authorities. For fleet expansion or establishing subsidiary operations, our tiered discount structure offers substantial savings. The more authorities you acquire, the greater your cost efficiency, with dedicated account managers assigned to coordinate complex multi-authority transfers.",
      },
      {
        text: "Trusted by Hundreds of Carriers: Our proven track record ensures a reliable and secure transaction process. With over a decade in the industry, we've facilitated thousands of successful authority transfers across the country. Our customer testimonials and 4.9-star rating demonstrate our commitment to exceptional service and transparent dealings.",
      },
      {
        text: "Reduced Insurance Hassle: Aged MCs often qualify for better insurance rates compared to new authorities. Insurance providers typically offer more favorable premiums for established authorities with clean records. Our pre-screened MC authorities can help you save 15-30% on insurance costs, significantly reducing your operational expenses and improving your bottom line.",
      },
      {
        text: "Custom Consultation: Our team guides you on choosing the best MC authority for your business needs. We provide personalized advisory services to help you understand the implications of different authority types, operational histories, and compliance records. This expertise ensures you make an informed decision aligned with your business strategy and growth objectives.",
      },
      {
        text: "No Hidden Fees: Clear pricing with no unexpected charges, ensuring a smooth and trustworthy transaction. We provide a comprehensive pricing breakdown before you commit, detailing all costs involved in the transfer process. Our transparent approach means the price quoted is the price you pay, with no surprises or additional fees later.",
      },
      {
        text: "Amazon Relay Ready Options: Choose MC authorities that are pre-approved for Amazon Relay for faster operational start. These specially vetted authorities meet Amazon's stringent requirements and can immediately access lucrative Amazon freight opportunities. This gives you a significant competitive advantage, allowing you to start generating revenue faster without waiting through typical approval processes.",
      },
    ],
  };

  const renderBenefitsList = (): JSX.Element => (
    <ul className="space-y-3 md:space-y-0 mb-4 md:mb-0 text-sm md:text-base flex-1 grid md:grid-cols-2 gap-4">
      {buyDetails.benefits.map((benefit, index) => (
        <li
          key={index}
          className="flex flex-col items-start min-h-[60px] bg-gray-700/50 p-4 rounded-lg overflow-hidden"
        >
          <div className="flex items-start w-full">
            <span className="mr-2 text-blue-400 font-bold">•</span>
            <div className="flex-1">
              <p>{benefit.text}</p>
            </div>
          </div>
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

        {/* Content */}
        <div className="grid md:grid-cols-1 gap-8">
          <div
            className="bg-gray-800/90 text-white p-6 md:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
            data-aos="fade-up"
          >
            <div className="flex flex-col h-full">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-white text-center">
                {buyDetails.headline}
              </h3>

              <p className="text-blue-400 mb-8 text-center text-xl font-medium">
                {buyDetails.subheadline}
              </p>

              {renderBenefitsList()}

              <div className="flex flex-col items-center mt-8">
                <Link
                  href="/buy-companies"
                  className="bg-[#2563EB] text-white px-10 py-4 rounded-xl hover:bg-[#1D4ED8] transition font-medium text-lg w-full md:w-auto text-center flex items-center justify-center"
                >
                  <DollarSign size={20} className="mr-2" /> Buy Business
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TruckingMarketplace;
