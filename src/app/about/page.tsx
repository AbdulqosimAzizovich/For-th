"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TruckIcon,
  ShieldCheckIcon,
  ClockIcon,
  UsersIcon,
  BarChart3Icon,
  Globe2Icon,
} from "lucide-react";
import Image from "next/image";

const AboutUs = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url("/Hero1.jpg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <motion.div
          className="relative z-10 text-center max-w-4xl px-4"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-5xl font-bold mb-6">About Vabank MC Sale</h1>
          <p className="text-xl mb-8">
            The trusted marketplace connecting buyers and sellers in the
            trucking industry since 2018
          </p>
        </motion.div>
      </div>

      {/* Our Story Section */}
      <motion.section
        className="py-20 px-4 max-w-7xl mx-auto "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-blue-400">Our Story</h2>
            <p className="text-lg mb-6">
              Vabank MC Sale was founded by industry veterans who recognized the
              challenges that trucking company owners face when buying or
              selling their businesses. With over 25 years of combined
              experience in the transportation industry, our team has built a
              reliable marketplace that simplifies the complex process of MC
              authority transfers.
            </p>
            <p className="text-lg mb-6">
              What started as a small brokerage has grown into the leading
              platform for trucking company transactions, with more than 500
              partners and thousands of successful transfers completed.
            </p>
            <p className="text-lg">
              Our mission is to create a transparent, secure environment where
              carriers can confidently buy or sell MC authorities and trucking
              businesses with full regulatory compliance and maximum value.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/4.jpg"
              alt="Vabank MC team"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-[#000] ">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Why Choose Vabank MC Sale
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              We deliver exceptional value through our industry expertise,
              network, and commitment to your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheckIcon size={48} className="text-blue-400" />,
                title: "Verified & Trusted",
                description:
                  "All MC authorities and companies are thoroughly vetted to ensure compliance with FMCSA regulations",
              },
              {
                icon: <ClockIcon size={48} className="text-blue-400" />,
                title: "Fast Transactions",
                description:
                  "Our streamlined process allows for quicker transfers, getting you operational in less time",
              },
              {
                icon: <UsersIcon size={48} className="text-blue-400" />,
                title: "Expert Support",
                description:
                  "Our team of industry professionals guides you through every step of the buying or selling process",
              },
              {
                icon: <BarChart3Icon size={48} className="text-blue-400" />,
                title: "Value Maximization",
                description:
                  "We help sellers get the best price and buyers find the right MC authority for their specific needs",
              },
              {
                icon: <Globe2Icon size={48} className="text-blue-400" />,
                title: "Extensive Network",
                description:
                  "Access to over 500 partners looking to buy or sell MC authorities across the United States",
              },
              {
                icon: <TruckIcon size={48} className="text-blue-400" />,
                title: "Complete Solutions",
                description:
                  "Beyond MC transfers, we offer insurance, factoring, and operational support to help your business thrive",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/90 p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="mb-5">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Meet Our Leadership Team</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Experienced professionals dedicated to revolutionizing the trucking
            industry
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              name: "Alex Johnson",
              position: "Founder & CEO",
              bio: "Former trucking company owner with 15+ years in the transportation industry",
              image: "/X9.png",
            },
            {
              name: "Sarah Miller",
              position: "Chief Operations Officer",
              bio: "Logistics expert with experience at major freight brokerages",
              image: "/X9.png",
            },
            {
              name: "Michael Rodriguez",
              position: "Head of Compliance",
              bio: "Former FMCSA advisor ensuring all transactions meet regulatory requirements",
              image: "/X9.png",
            },
          ].map((member, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="relative h-64 w-64 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-blue-400 mb-2">{member.position}</p>
              <p>{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-blue-900 to-gray-800/90">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Partner Companies" },
              { number: "1,200+", label: "Successful Transfers" },
              { number: "7+", label: "Years in Business" },
              { number: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                </h3>
                <p className="text-blue-200">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Read about the experiences of trucking company owners who have
            worked with us
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              quote:
                "Vabank MC Sale made selling my trucking company a smooth process. Their valuation was fair, and they found a buyer within two weeks. The transaction was handled professionally from start to finish.",
              author: "Robert T.",
              company: "RT Logistics (Sold 2023)",
            },
            {
              quote:
                "As a first-time buyer, I was nervous about purchasing an MC authority. The team at Vabank walked me through every step and helped me secure favorable insurance rates. Six months in, and my business is thriving.",
              author: "Maria G.",
              company: "MG Transport (Purchased 2024)",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/90 p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-blue-400">{testimonial.company}</p>
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
          <h2 className="text-3xl font-bold mb-6">
            Ready to Buy or Sell a Trucking Company?
          </h2>
          <p className="text-xl mb-8">
            Our team of experts is ready to help you navigate the process with
            confidence and ease
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/sell-companies"
              className="bg-white text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              Sell Your Business
            </a>
            <a
              href="/buy-companies"
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-900 transition duration-300"
            >
              Buy a Business
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;
