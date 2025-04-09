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
  description1: string;
  imageSrc: string;
}

const serviceData: ServiceCardProps[] = [
  {
    number: "01",
    category: "Getting started",
    title: "Fuel Cards with Maximum Discounts for Trucking Businesses",
    description:
      "We help you get fuel cards that offer bigger discounts than most, helping you save more money. These cards also have easy payment options and are accepted in many places, making them a great choice for your business. By using these fuel cards, you can better manage your fuel expenses, track your spending, and reduce overall operational costs. Many of our partnered fuel card providers also offer cashback rewards and loyalty programs, giving you additional savings over time. With nationwide coverage, you don’t have to worry about finding a station that accepts your card, ensuring convenience wherever your route takes you.",
    description1:
      "For example, some of our fuel card partners provide discounts of up to $0.50 per gallon at major truck stops like Pilot, Flying J, and Love’s. These savings add up significantly over time, especially for owner-operators and small fleets. Additionally, many of these cards allow you to set spending limits for drivers, ensuring better financial control. Some fuel cards even offer expense tracking features, which help streamline bookkeeping and tax reporting. By leveraging these benefits, trucking businesses can cut costs while improving financial efficiency.",
    imageSrc: "/trucking-services/trs1.png",
  },
  {
    number: "02",
    category: "Affordable and Reliable Insurance",
    title: "Cost-Effective Insurance Solutions for Trucking Companies",
    description:
      "We help you find insurance at a lower cost while still getting the protection you need. We work with trusted insurance companies that offer plans designed for your specific needs, so you don’t overpay. Our team understands the unique risks associated with the trucking industry and ensures you receive coverage that protects your business, vehicles, and drivers. We help you compare multiple insurance options, making sure you get the best value for your money. Additionally, we connect you with providers who offer flexible payment plans, making it easier to manage your expenses.",
    description1:
      "For instance, some of our insurance partners offer policies that bundle cargo insurance, liability coverage, and physical damage protection, allowing you to save more compared to purchasing separate plans. We also help businesses find insurance plans with lower deductibles or accident forgiveness programs, reducing financial strain in case of an incident. If you operate in high-risk areas or transport hazardous materials, we ensure you get specialized coverage that meets federal and state regulations. Furthermore, we work with insurers who provide 24/7 claims support, ensuring fast resolution in case of accidents or damages.",
    imageSrc: "/trucking-services/trs2.png",
  },
  {
    number: "03",
    category: "Easy and Affordable ELD Solutions",
    title: "Easy and Affordable ELD Solutions",
    description:
      "Following the Electronic Logging Device (ELD) rules is important for your business. We connect you with trusted ELD providers that offer low-cost solutions with great customer support. They help with setup and provide ongoing assistance to keep everything running smoothly. These ELD solutions ensure compliance with federal regulations, avoiding costly fines and penalties. Our partners offer user-friendly systems that are easy to install and operate, reducing downtime and training time for your drivers. Additionally, the ELDs provide real-time tracking and reporting features, helping you monitor fleet performance and improve efficiency.",
    description1:
      "For instance, some of our insurance partners offer policies that bundle cargo insurance, liability coverage, and physical damage protection, allowing you to save more compared to purchasing separate plans. We also help businesses find insurance plans with lower deductibles or accident forgiveness programs, reducing financial strain in case of an incident. If you operate in high-risk areas or transport hazardous materials, we ensure you get specialized coverage that meets federal and state regulations. Furthermore, we work with insurers who provide 24/7 claims support, ensuring fast resolution in case of accidents or damages.",
    imageSrc: "/trucking-services/trs3.png",
  },

  {
    number: "04",
    category: "Team Building",
    title: "Factoring Companies with Low Fees",
    description:
      "Keeping cash flow steady is important. We help you find factoring companies that take a smaller percentage from your earnings, so you keep more of your money. These companies also offer flexible terms and fast payments to help your business stay on track. Instead of waiting weeks for payments, factoring services allow you to access funds within 24 to 48 hours, improving your financial stability. Our partners have transparent pricing, with no hidden fees, so you always know what to expect. Additionally, factoring can help cover expenses like fuel, maintenance, and payroll, ensuring smooth operations without financial stress.",
    description1:
      "For example, our ELD partners provide solutions that integrate with fleet management software, allowing businesses to track fuel usage, route efficiency, and driver behavior. Many of these ELDs offer mobile apps that drivers can use to log their hours effortlessly, reducing paperwork and ensuring accuracy. Some providers also offer automated alerts for HOS (Hours of Service) violations, helping drivers stay compliant. Additionally, our partners offer training sessions and 24/7 technical support, making the transition to ELD compliance seamless for businesses of all sizes.",

    imageSrc: "/trucking-services/trs4.png",
  },
  {
    number: "05",
    category: "Experienced and Reliable Truck Drivers",
    title: "Experienced and Reliable Truck Drivers",
    description:
      "Whether you need company drivers, lease operators, or owner-operators, we help you find experienced and well-trained drivers who meet industry standards. This helps your business run safely and efficiently. Our network includes skilled drivers who have undergone thorough background checks, ensuring they meet safety and compliance requirements. We also connect you with drivers who have experience in specific freight types, whether it’s refrigerated goods, dry vans, or hazardous materials. Additionally, by hiring the right drivers, you can reduce turnover rates and build a more reliable and productive team.",
    description1:
      "For example, our hiring partners conduct extensive screening, including driving record checks, drug tests, and previous employment verification, to ensure only the most qualified drivers join your fleet. We also match businesses with drivers who hold specialized endorsements, such as Hazmat or Tanker certifications, for companies dealing with sensitive cargo. Some of our partners offer driver retention programs, helping businesses reduce turnover by improving job satisfaction. By working with us, you gain access to a pool of skilled drivers who are committed to safety and professionalism.",
    imageSrc: "/trucking-services/trs5.png",
  },
  {
    number: "06",
    category: "Dispatch Services to Increase Your Earnings",
    title: "Dispatch Services to Increase Your Earnings",
    description:
      "We work with expert dispatchers who can book higher-paying loads and plan better routes. This means more money for you, fewer empty miles, and on-time deliveries. Our dispatch partners have strong relationships with shippers and brokers, giving you access to better freight opportunities. They also use advanced route optimization tools to reduce fuel costs and minimize downtime. Additionally, having a dedicated dispatcher allows you to focus on driving while they handle negotiations, paperwork, and scheduling to keep your business running smoothly.",
    description1:
      "For example, our dispatchers have access to premium load boards and industry connections that help secure more profitable routes. They negotiate on your behalf to get better rates per mile, ensuring your business remains competitive. Some dispatch services also provide load planning strategies to minimize deadhead miles, saving fuel and maximizing profits. With 24/7 support, dispatchers can quickly resolve any issues that arise, keeping operations running efficiently.",

    imageSrc: "/trucking-services/trs6.png",
  },
  {
    number: "07",
    category: "Trucking-Focused Accounting Services",
    title: "Trucking-Focused Accounting Services",
    description:
      "Managing finances can be tough in the trucking business. We connect you with accountants who specialize in trucking. They help you keep track of your finances, follow all rules, and stay organized so you can focus on running your business. Our accounting partners offer services such as tax preparation, expense tracking, and financial planning tailored specifically for trucking companies. They help ensure compliance with IRS regulations and prevent costly mistakes. Additionally, by having a clear financial strategy, you can maximize profits, reduce tax liabilities, and plan for future growth.",
    description1:
      "For example, our accounting experts can help you take advantage of tax deductions specific to the trucking industry, such as per diem allowances, fuel expenses, and depreciation. They also assist with IFTA reporting, ensuring compliance with fuel tax regulations across state lines. Many of our partners provide bookkeeping software integration, making it easy to track profits and expenses in real-time. By working with professionals who understand trucking finances, you can avoid penalties and keep your business financially secure.",

    imageSrc: "/Contract2.jpg",
  },
  {
    number: "08",
    category: "Safety and Compliance Services",
    title: "Safety and Compliance Services",
    description:
      "Staying safe and following trucking laws is very important. We help you find safety experts who offer driver training, vehicle inspections, and compliance services. This helps lower risks and keeps your fleet running safely. Our safety partners provide ongoing support, including audits and compliance reviews, to ensure you meet DOT and FMCSA regulations. They also offer customized safety programs to reduce accidents and improve driver awareness. By prioritizing safety, you not only avoid penalties but also improve your company’s reputation, making it easier to secure more contracts and long-term success.",
    description1:
      "For instance, our safety consultants conduct mock DOT audits, helping businesses prepare for official inspections and avoid costly violations. They also provide ongoing driver education, ensuring that employees stay up to date on new industry regulations. Some partners offer telematics solutions that monitor driver behavior, helping businesses identify areas for improvement. Investing in safety not only protects drivers but also enhances overall efficiency and profitability.",
    imageSrc: "/trucking-services/trs8.png",
  },
];

const ServiceCard: React.FC<ServiceCardProps> = ({
  number,
  category,
  title,
  description,
  description1,
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
          <br />
          <p
            className="text-gray-300"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600"
          >
            {description1}
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
  description1,
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
          <br />
          <p
            className="text-gray-300"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600"
          >
            {description1}
          </p>
        </div>
      </div>
    </div>
  );
};

const TruckingServiceCards: React.FC = () => {
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
          Trucking Business Services
        </h1>
        <div className="h-1 w-24 bg-yellow-500 mx-auto"></div>
        <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
          Discover comprehensive services designed to help your trucking
          business operate efficiently, reduce costs, and maximize
          profitability.
        </p>
      </div>

      {serviceData.map((service, index) =>
        index % 2 === 0 ? (
          <ServiceCard
            key={index}
            number={service.number}
            category={service.category}
            title={service.title}
            description={service.description}
            description1={service.description1}
            imageSrc={service.imageSrc}
          />
        ) : (
          <ServiceCardAlternate
            key={index}
            number={service.number}
            category={service.category}
            title={service.title}
            description={service.description}
            description1={service.description1}
            imageSrc={service.imageSrc}
          />
        )
      )}
    </div>
  );
};

export default TruckingServiceCards;
