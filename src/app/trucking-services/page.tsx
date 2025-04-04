"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import das4 from "../../../public/das4.jpg";

export default function TruckingServicesPage() {
  const [currentSection, setCurrentSection] = useState(0);
  const [animateServices, setAnimateServices] = useState(false);

  useEffect(() => {
    // Trigger animation for services when component mounts
    setAnimateServices(true);
  }, []);

  const sections = [
    {
      number: "01",
      category: "Getting started",
      title: "Finding The Right Trucking Services",
      description:
        "Determining which trucking services are essential for your business can be an important tool when planning for growth and efficiency. This guide will help you identify which services can benefit your operation according to different business sizes and operational needs. What type of support does your trucking business need – basic, moderate, comprehensive, or specialized services?",
    },
    {
      number: "02",
      category: "Service Essentials",
      title: "Selecting The Right Partners!",
      description:
        "The nice thing about optimizing your trucking business is that you don't need to pay premium rates for essential services. Let's start with the basics. A typical mistake trucking business owners make is working with the first service provider they find, which can lead to higher costs and subpar service quality.",
    },
    {
      number: "03",
      category: "Where you spend is the key",
      title: "Understanding Your Budget & Timing",
      description:
        "To start, evaluate your current expenses and operational needs. If you're experiencing cash flow issues, consider factoring services. Review service contracts carefully, and have a good idea of what to expect from each provider. I recommend knowing what key performance indicators to track as you implement new services.",
    },
  ];

  const services = [
    {
      title: "Fuel Cards with Maximum Discounts for Trucking Businesses",
      description:
        "Get access to fuel cards offering discounts of up to $0.50 per gallon at major truck stops like Pilot, Flying J, and Love's. Manage your fuel expenses effectively with nationwide coverage, expense tracking, and cashback rewards for additional savings.",
    },
    {
      title: "Cost-Effective Insurance Solutions for Trucking Companies",
      description:
        "Find customized insurance plans designed to protect your vehicles, drivers, and cargo. Compare multiple insurance options with flexible payment plans and benefit from bundled policies for comprehensive coverage at a lower cost.",
    },
    {
      title: "User-Friendly and Budget-Friendly ELD Solutions",
      description:
        "Ensure federal compliance with low-cost ELD systems featuring real-time tracking, automated alerts, and seamless integration with fleet management software. Benefit from 24/7 support and effortless setup for smooth operations.",
    },
    {
      title: "Factoring Services with Low Fees and Fast Payments",
      description:
        "Improve your cash flow by partnering with factoring companies offering rates as low as 1-3%. Access funds within 24-48 hours with transparent pricing and non-recourse options for added security.",
    },
    {
      title: "Hire Skilled and Qualified Truck Drivers",
      description:
        "Connect with experienced drivers who meet industry standards through thorough screening processes. Reduce turnover rates and build a reliable team with drivers specialized in refrigerated goods, hazardous materials, and more.",
    },
    {
      title: "Professional Dispatch Services for Better Profitability",
      description:
        "Maximize your revenue with expert dispatchers who book higher-paying loads and optimize routes. Reduce empty miles, enhance efficiency, and ensure on-time deliveries with advanced planning tools and 24/7 support.",
    },
    {
      title: "Specialized Accounting Services for Trucking Businesses",
      description:
        "Stay financially organized with accountants who understand the trucking industry. From tax preparation and expense tracking to IFTA reporting, get tailored services to enhance profitability and compliance.",
    },
    {
      title: "Comprehensive Safety and Compliance Services",
      description:
        "Ensure your fleet meets DOT and FMCSA regulations with expert safety consultants. From driver training and vehicle inspections to compliance reviews, enhance your company's reputation and minimize risks.",
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header/Hero Section */}
      <div className="container mx-auto px-4 md:px-8 pt-16 pb-12 transition-all duration-500 opacity-100">
        <h1 className="text-5xl font-bold mb-6 transition-all duration-500">
          Trucking Services
        </h1>
        <p className="text-gray-300 text-xl max-w-3xl transition-all duration-500">
          Comprehensive solutions to help your trucking business operate more
          efficiently and profitably. Explore our range of specialized services
          designed specifically for the trucking industry.
        </p>
      </div>

      {/* Getting Started Guide Section */}
      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Navigation */}
          <div className="lg:w-1/3 space-y-10">
            {sections.map((section, index) => (
              <div
                key={index}
                className={`cursor-pointer transition-all duration-300 ${
                  currentSection === index
                    ? "opacity-100"
                    : "opacity-50 hover:opacity-80"
                }`}
                onClick={() => setCurrentSection(index)}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-5xl text-gray-700 font-bold">
                    {section.number}
                  </div>
                  <div className="h-px w-16 bg-yellow-500"></div>
                  <div className="text-yellow-500">{section.category}</div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{section.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {section.description}
                </p>
                <div className="flex items-center text-yellow-500 font-medium">
                  <span>Read more</span>
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Selected Content */}
          <div className="lg:w-2/3">
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-500">
              <div className="lg:flex">
                <div className="lg:w-1/2 p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-5xl text-gray-700 font-bold">
                      {sections[currentSection].number}
                    </div>
                    <div className="h-px w-16 bg-yellow-500"></div>
                    <div className="text-yellow-500">
                      {sections[currentSection].category}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    {sections[currentSection].title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {sections[currentSection].description}
                  </p>
                  <div className="flex items-center text-yellow-500 font-medium">
                    <span>Read more</span>
                    <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
                <div className="lg:w-1/2 h-64 lg:h-auto">
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                    <img
                      src={das4.src}
                      alt="Trucking services illustration"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <h2 className="text-3xl font-bold mb-12">Our Trucking Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-gray-800 rounded-lg p-6 shadow-lg transition-all duration-500 transform ${
                animateServices
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start mb-4">
                <div className="bg-yellow-500 p-2 rounded-full mr-4">
                  <ArrowRight size={18} className="text-gray-900" />
                </div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-300 text-sm ml-12">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
