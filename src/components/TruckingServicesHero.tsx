"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Truck, ShieldCheck, DollarSign, Users } from "lucide-react";

const TruckingServicesHero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Background images for slider
  const backgroundImages = ["/help1.jpg", "/help2.jpg", "/help3.jpg"];

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % backgroundImages.length);
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="py-20 bg-black relative">
      {/* Background slider - each slide has fade transition */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center"
          style={{
            backgroundImage: `url(${image})`,
            opacity: currentSlide === index ? 1 : 0,
            zIndex: 1,
          }}
        ></div>
      ))}

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-70 z-[2]"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Content */}
        <div className="flex flex-col lg:flex-row items-center mb-16">
          <div
            className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Helping You Find the Right Aged{" "}
              <span className="text-blue-500">MC Authority </span>
              for Sale
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              We make it easy to buy aged MC authorities. Whether you&apos;re
              starting out or expanding your fleet, we connect you with the best
              options available.
              <br />
              <br />
              We offer simple, effective solutions for trucking businesses -
              like fuel discounts, insurance help, and more. Everything you need
              to keep your trucks moving and your business growing.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/trucking-services"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center justify-center"
              >
                Explore Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="/#footer"
                className="border-2 border-white hover:border-blue-500 text-white hover:text-blue-500 font-bold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
          {/* <div
            className="lg:w-1/2"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden">
              <Image
                src="/images/hero-truck.jpg"
                alt="Trucking Business Services"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div> */}
        </div>

        {/* Service Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div
            className="cursor-pointer bg-gray-900/70 backdrop-blur-sm rounded-lg p-6 shadow-lg transition-all duration-300 hover:bg-gray-800/70 text-center"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <div className="bg-blue-500 text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <DollarSign size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Cost Savings</h3>
            <p className="text-gray-300">
              Access fuel cards, insurance, and factoring services at discounted
              rates.
            </p>
          </div>

          <div
            className="cursor-pointer bg-gray-900/70 backdrop-blur-sm rounded-lg p-6 shadow-lg transition-all duration-300 hover:bg-gray-800/70 text-center"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="bg-blue-500 text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Compliance</h3>
            <p className="text-gray-300">
              Stay compliant with regulations including ELD systems and safety
              protocols.
            </p>
          </div>

          <div
            className="cursor-pointer bg-gray-900/70 backdrop-blur-sm rounded-lg p-6 shadow-lg transition-all duration-300 hover:bg-gray-800/70 text-center"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <div className="bg-blue-500 text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Truck size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Operations</h3>
            <p className="text-gray-300">
              Enhance your operations with dispatch services and route
              optimization.
            </p>
          </div>

          <div
            className="cursor-pointer bg-gray-900/70 backdrop-blur-sm rounded-lg p-6 shadow-lg transition-all duration-300 hover:bg-gray-800/70 text-center"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <div className="bg-blue-500 text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Staffing</h3>
            <p className="text-gray-300">
              Connect with qualified drivers and reduce turnover rates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TruckingServicesHero;
