"use client";
// service.tsx
import React from "react";
import { motion } from "framer-motion";
import {
  TruckIcon,
  BarChart3Icon,
  ShieldCheckIcon,
  BadgeCheckIcon,
  CreditCardIcon,
  ClipboardCheckIcon,
  UsersIcon,
  BuildingIcon,
  HeadphonesIcon,
  FileTextIcon,
} from "lucide-react";
import Image from "next/image";

const Services = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Service categories
  const coreServices = [
    {
      icon: <BadgeCheckIcon size={48} className="text-blue-400" />,
      title: "MC Authority Sales",
      description:
        "Purchase verified aged MC authorities with established history. Get faster approval from brokers and shippers, and better insurance rates.",
      link: "/buy-business",
    },
    {
      icon: <BarChart3Icon size={48} className="text-blue-400" />,
      title: "Trucking Company Valuation",
      description:
        "Get a complete business valuation of your trucking company based on market data, asset value, and revenue history.",
      link: "/sell-business",
    },
    {
      icon: <TruckIcon size={48} className="text-blue-400" />,
      title: "Trucking Business Sales",
      description:
        "List your trucking company on our secure marketplace with valuation and transaction support. Work with our experienced team to sell at a higher rate.",
      link: "/sell-business",
    },
    {
      icon: <ShieldCheckIcon size={48} className="text-blue-400" />,
      title: "Transaction Security",
      description:
        "All transactions are secured with escrow protection, ensuring safe transfers for both buyers and sellers.",
      link: "/services#security",
    },
  ];

  const supportServices = [
    {
      icon: <CreditCardIcon size={48} className="text-blue-400" />,
      title: "Discounted Fuel Cards",
      description:
        "Access fuel cards with higher discounts compared to standard offerings in the market.",
      link: "/services#fuel-cards",
    },
    {
      icon: <FileTextIcon size={48} className="text-blue-400" />,
      title: "Insurance Assistance",
      description:
        "Get help securing affordable insurance rates specifically designed for trucking companies.",
      link: "/services#insurance",
    },
    {
      icon: <ClipboardCheckIcon size={48} className="text-blue-400" />,
      title: "Factoring Services",
      description:
        "Connect with verified factoring companies that charge lower percentages on your invoices.",
      link: "/services#factoring",
    },
    {
      icon: <UsersIcon size={48} className="text-blue-400" />,
      title: "Driver Recruitment",
      description:
        "Find experienced truck drivers for your company, including company drivers, lease operators, and owner-operators.",
      link: "/services#drivers",
    },
    {
      icon: <BuildingIcon size={48} className="text-blue-400" />,
      title: "ELD Partner Connections",
      description:
        "Get connected with reliable ELD partners that offer services at affordable rates.",
      link: "/services#eld",
    },
    {
      icon: <HeadphonesIcon size={48} className="text-blue-400" />,
      title: "Dispatch Services",
      description:
        "Find experienced dispatch services that can book loads at higher rates for your fleet.",
      link: "/services#dispatch",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url("/Hero1.jpg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <motion.div
          className="relative z-10 text-center max-w-4xl px-4"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl mb-8">
            Comprehensive solutions for trucking companies from start to success
          </p>
        </motion.div>
      </div>

      {/* Core Services Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Core Services</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Our primary focus is helping trucking companies buy and sell MC
            authorities with confidence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {coreServices.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/90 p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="mb-5">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="mb-5">{service.description}</p>
              <a
                href={service.link}
                className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center"
              >
                Learn more
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Benefits of Aged MC Authority
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Why purchasing an established MC authority gives your business an
              advantage
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Established History",
                description:
                  "An aged MC authority has an established record, making it appealing to brokers and shippers who want to minimize risk.",
              },
              {
                title: "Faster Operations",
                description:
                  "Start your business operations faster without waiting for new authority approval or the lengthy setup process.",
              },
              {
                title: "Better Insurance Rates",
                description:
                  "Insurance providers may offer more competitive rates for aged MC authorities since they come with a track record.",
              },
              {
                title: "Easier Access to Loads",
                description:
                  "Many brokers prefer to work with carriers that have been in the system for a while because they view them as more reliable.",
              },
              {
                title: "Lower Risk to Brokers/Shippers",
                description:
                  "An established authority signals compliance with FMCSA regulations, reducing risk for others in the supply chain.",
              },
              {
                title: "Amazon Advantage",
                description:
                  "Aged MC authorities have a better chance of approval with Amazon Relay, opening up more opportunities for your business.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/90 p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Additional Support Services
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Beyond MC transfers, we provide comprehensive solutions to help your
            trucking business thrive
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {supportServices.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/90 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="mb-4">{service.description}</p>
              <a
                href={service.link}
                className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center"
              >
                Learn more
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partner Companies */}
      <section className="py-20 bg-gradient-to-l from-blue-900 to-gray-800/90">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Trusted Partners</h2>
            <p className="text-xl max-w-3xl mx-auto">
              We work with leading companies in the industry to provide you with
              the best service
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              "/greenland.jpg",
              "/Minessota.jpg",
              "/Karnab.jpg",
              "/X9.png",
              "/twenty.jpg",
            ].map((logo, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 rounded-lg flex items-center justify-center h-32"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <Image
                  src={logo}
                  alt="Partner company"
                  width={150}
                  height={80}
                  className="max-w-full max-h-full object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Service Process</h2>
          <p className="text-xl max-w-3xl mx-auto">
            How we deliver exceptional results for our clients
          </p>
        </motion.div>

        <div className="grid gap-8">
          {[
            {
              step: "01",
              title: "Initial Consultation",
              description:
                "We start by understanding your specific needs and goals, whether you're buying or selling an MC authority or trucking business.",
            },
            {
              step: "02",
              title: "Valuation & Assessment",
              description:
                "For sellers, we provide a comprehensive business valuation. For buyers, we assess your requirements to find the perfect match.",
            },
            {
              step: "03",
              title: "Matching & Presentation",
              description:
                "We connect buyers with the most suitable MC authorities and sellers with qualified buyers from our extensive network of 500+ partners.",
            },
            {
              step: "04",
              title: "Secure Transaction",
              description:
                "All transactions are handled through secure escrow services, protecting both parties throughout the process.",
            },
            {
              step: "05",
              title: "Compliance & Transfer",
              description:
                "We assist with all FMCSA compliance requirements and paperwork to ensure a smooth transfer of authority.",
            },
            {
              step: "06",
              title: "Ongoing Support",
              description:
                "Our relationship doesn't end after the transaction. We provide continuous support with insurance, factoring, and other essential services.",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row gap-6 bg-[#1c2843] p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-700/25 rounded-full flex items-center justify-center text-2xl font-bold">
                  {step.step}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-20 px-4 text-center bg-gradient-to-r from-blue-900 to-gray-800/90"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Connect with our team today to discuss how we can help your trucking
            business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacts"
              className="bg-white text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              Contact Us
            </a>
            <a
              href="/sell-business"
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-900 transition duration-300"
            >
              List Your Business
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Services;
