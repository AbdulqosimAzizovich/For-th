"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

interface ServiceCardProps {
  number: string;
  category: string;
  title: string;
  description: string;
  imageSrc: string;
}

const benefitsData: ServiceCardProps[] = [
  {
    number: "01",
    category: "Getting Started",
    title: "Access to Multiple MC Numbers",
    description:
      "We maintain one of the largest private databases of aged MC authorities available on the market. Our listings cover all 50 states and include authorities for various operational types—whether you're planning to run dry van, reefer, flatbed, or specialized freight. You can choose based on the age of the authority (6 months, 1 year, 2+ years), its safety history, insurance status, and more. Each listing is verified for clean records, and we can provide supporting documents upon request. The search process is made simple with our team offering support to help you navigate the best match for your business goals. We update our inventory frequently to ensure fresh, high-quality options are available at all times. Whether you're buying your first MC or expanding with multiple authorities, you'll find what you need through our network.",
    imageSrc: "/Contract.jpg",
  },
  {
    number: "02",
    category: "Payment & Transactions",
    title: "Multiple Payment Options, Including Zelle, Wire, ACH, and More",
    description:
      "We understand how important it is to have flexible and secure payment options, especially when making a large business investment. That’s why we offer a wide range of methods including Zelle, wire transfers, ACH payments, and more to meet your preferences. All of our payment channels are encrypted and verified for security to ensure that your transaction is safe. You’ll also receive clear invoices and receipts with every payment, giving you a full paper trail for your records. Our team is available to walk you through any payment process and answer questions if you’re unfamiliar with a specific method. We make sure all payments are processed efficiently, minimizing delays in your transfer process. You can feel confident knowing you're paying securely and getting full documentation at each step.",
    imageSrc: "/Contract2.jpg",
  },
  {
    number: "03",
    category: "Cost Saving",
    title: "Save Money When You Buy More MC Numbers",
    description:
      "Planning to expand your fleet or invest in multiple authorities? We offer competitive bulk purchase discounts to help you save as you grow. The more MC authorities you purchase, the more you save—our tiered pricing structure is built for scalability. These discounts are ideal for logistics firms, fleet owners, or investors looking to establish subsidiary companies. With multiple purchases, you'll receive a dedicated account manager who will coordinate the transfers and ensure everything is completed efficiently. We also help plan your acquisitions strategically, so you're not just saving money, but getting the right types of authorities for your operations. Discounts can significantly lower your per-authority cost, which can be reinvested into insurance, equipment, or onboarding. Whether you're buying 2 or 20 MC numbers, our bulk pricing helps you get more for less.",
    imageSrc: "/Contract3.jpg",
  },
  {
    number: "04",
    category: "Insurance Benefits",
    title: "Lower Insurance Costs with Aged MC Numbers",
    description:
      "One of the biggest benefits of buying an aged MC authority is the potential for lower insurance premiums. Insurance providers often charge less for established authorities, especially those with clean histories and no claims. This could save you anywhere from 15% to 30% on your monthly insurance costs—an important advantage for any new business owner. We pre-screen all our MC listings for compliance and cleanliness, which makes them more attractive to insurers. This can also make your insurance approval process much faster and less complicated. In many cases, you’ll also gain access to better terms, such as higher coverage limits or fewer restrictions. With an aged authority, you’re not only getting a faster start, you’re also saving significantly on long-term operating expenses.",
    imageSrc: "/Contract.jpg",
  },
  {
    number: "05",
    category: "Transparency & Trust",
    title: "No Hidden Fees",
    description:
      "Transparency is at the core of our business. We believe in honest pricing with no hidden costs or surprise fees after the sale. Before you make a purchase, you’ll receive a detailed quote that includes every charge—transfer fees, documentation, legal costs, and any other applicable service. Once you commit, that’s the final price—no extra charges later. We never tack on last-minute fees or leave you guessing about what you’re paying for. Our full-service approach means everything is clearly outlined from the beginning, and your satisfaction is guaranteed. This level of transparency builds trust and makes the process smoother for you, allowing you to focus on launching your business instead of managing unexpected costs.",
    imageSrc: "/Contract2.jpg",
  },
  {
    number: "06",
    category: "Consultation & Support",
    title: "We Analyze Your Needs and Recommend the Right MC Number",
    description:
      "Choosing the right MC authority is more than just picking a number — it’s about finding one that aligns with your long-term goals and operational needs. That’s why we take the time to get to know your business plan, route preferences, equipment, and freight types. Based on your unique situation, our experts recommend MC numbers that are the best fit, saving you the guesswork. We consider factors like age of authority, region, insurance appeal, and more to ensure compatibility. If you're unsure what to choose, we'll walk you through the pros and cons of different options. This personalized approach means you're not just buying any MC—you’re investing in one that can help your business grow sustainably. Our clients often say this custom analysis is one of the most valuable parts of our service.",
    imageSrc: "/Contract3.jpg",
  },
  {
    number: "07",
    category: "Legal Compliance",
    title:
      "Transition of MC Authority According to the Law and FMCSA Regulations",
    description:
      "We handle every MC transfer with full legal compliance and according to FMCSA and DOT regulations. This includes everything from name changes and BOC-3 filings to insurance updates and authority reactivation if needed. Our legal and compliance team has years of experience navigating the paperwork, so you don’t have to worry about mistakes or delays. We make sure all required documents are submitted on time and correctly formatted. Many new business owners aren’t familiar with these steps, and that’s why we take care of the hard parts. You’ll be updated throughout the process and receive confirmation once your authority is fully and legally transferred. With us, you avoid costly errors and get on the road faster—with everything done right the first time.",
    imageSrc: "/Contract.jpg",
  },
  {
    number: "08",
    category: "Reputation & Trust",
    title: "Trusted by Hundreds of Carriers",
    description:
      "Over the past decade, we’ve built a strong reputation by helping thousands of drivers and carriers across the country. Our client base includes solo owner-operators, growing fleets, and investors—all of whom trust us to deliver what we promise. We’re proud to maintain a 4.9-star satisfaction rating thanks to our honest service, detailed communication, and proven results. Most of our business comes from referrals and repeat customers, which speaks volumes about the value we provide. Every transaction is handled with professionalism and care, regardless of order size. When you work with us, you're not just another customer—you’re part of a growing community of successful trucking entrepreneurs. We’re here to support you at every stage, from purchase to long-term business growth.",
    imageSrc: "/Contract2.jpg",
  },
  {
    number: "09",
    category: "Consultation & Support",
    title: "Custom Consultation",
    description:
      "Navigating the MC authority market can be confusing—but you don’t have to do it alone. Our team offers personalized consultations to help you understand your options and make informed decisions. We take time to explain how different authorities perform, what insurance companies look for, and how operational history can affect your success. Whether you're buying your first MC or growing a multi-truck business, we tailor our advice to fit your vision. We answer your questions, offer strategic insights, and help you feel confident in your purchase. You’ll walk away with clarity and a solid game plan to launch or grow your company. It's not just a consultation—it’s a roadmap for your next big move.",
    imageSrc: "/Contract3.jpg",
  },
  {
    number: "10",
    category: "Fast Start Opportunities",
    title: "Amazon Relay Ready Options",
    description:
      "Want to haul Amazon, Jb Hunt, Schneider freights without delays? We offer MC authorities that are already approved for Amazon Relay, JbHunt and others so you can bypass the usual wait and start earning faster. These authorities meet all of Amazon’s operational and compliance standards, allowing for immediate onboarding. With Amazon loads in high demand, being ready on day one gives you a major head start over the competition. Our team verifies each Relay-ready MC to ensure it’s up to date and qualified. You’ll also receive guidance on how to get connected with Amazon’s load board and start bidding right away. This is an excellent option if you're looking for steady, high-paying freight with a trusted shipper. It's one of the fastest ways to start generating revenue with your new authority.",
    imageSrc: "/Contract.jpg",
  },
];

const ServiceCard: React.FC<ServiceCardProps> = ({
  number,
  category,
  title,
  description,
  imageSrc,
}) => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-900 text-white mb-16 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02]">
      <div className="md:w-1/2" data-aos="fade-right" data-aos-duration="1000">
        <div className="relative h-64 md:h-full w-full">
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="h-full w-full"
          />
        </div>
      </div>
      <div
        className="md:w-1/2 p-8 flex flex-col justify-center"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div className="mb-6">
          <div
            className="flex items-center"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <div className="text-6xl text-gray-700 font-bold mr-4">
              {number}
            </div>
            <div className="h-1 w-16 bg-yellow-500 mr-4"></div>
            <div className="text-yellow-500">{category}</div>
          </div>
          <h2
            className="text-4xl font-bold mt-2 mb-4"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="500"
          >
            {title}
          </h2>
          <p
            className="text-gray-300"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600"
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const ServiceCardAlternate: React.FC<ServiceCardProps> = ({
  number,
  category,
  title,
  description,
  imageSrc,
}) => {
  return (
    <div className="flex flex-col md:flex-row-reverse bg-gray-900 text-white mb-16 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02]">
      <div className="md:w-1/2" data-aos="fade-left" data-aos-duration="1000">
        <div className="relative h-64 md:h-full w-full">
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="h-full w-full"
          />
        </div>
      </div>
      <div
        className="md:w-1/2 p-8 flex flex-col justify-center"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div className="mb-6">
          <div
            className="flex items-center"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <div className="text-6xl text-gray-700 font-bold mr-4">
              {number}
            </div>
            <div className="h-1 w-16 bg-yellow-500 mr-4"></div>
            <div className="text-yellow-500">{category}</div>
          </div>
          <h2
            className="text-4xl font-bold mt-2 mb-4"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="500"
          >
            {title}
          </h2>
          <p
            className="text-gray-300"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600"
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const BenefitsServiceCards: React.FC = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <div
        className="text-center mb-16"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <h1 className="text-5xl font-bold text-white mb-6">
          Purchase Now: Aged MC Authority from a Verified and Experienced Team
        </h1>
        <div className="h-1 w-24 bg-yellow-500 mx-auto"></div>
        <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
          Benefits of working with us:
        </p>
      </div>

      {benefitsData.map((service, index) =>
        index % 2 === 0 ? (
          <ServiceCard
            key={index}
            number={service.number}
            category={service.category}
            title={service.title}
            description={service.description}
            imageSrc={service.imageSrc}
          />
        ) : (
          <ServiceCardAlternate
            key={index}
            number={service.number}
            category={service.category}
            title={service.title}
            description={service.description}
            imageSrc={service.imageSrc}
          />
        )
      )}
    </div>
  );
};

export default BenefitsServiceCards;
