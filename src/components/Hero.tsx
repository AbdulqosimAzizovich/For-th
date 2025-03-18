// components/Hero.tsx
import { ChevronDown, Truck, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gray-900 bg-gradient-to-b to-black text-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div
              className="md:w-3/5 mb-10 md:mb-0"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                The Marketplace for Trucking Companies
              </h1>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="bg-gray-700 p-1 rounded-full mt-1 mr-3">
                    <ArrowRight size={16} className="text-white" />
                  </div>
                  <p className="text-lg">
                    Leading marketplace for purchasing and selling trucking
                    companies
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-700 p-1 rounded-full mt-1 mr-3">
                    <ArrowRight size={16} className="text-white" />
                  </div>
                  <p className="text-lg">
                    We are professional service dedicated to assisting clients
                    in purchasing aged MC authority with or without Amazon
                    relay. Our expertise ensures efficient process tailored to
                    meet your business needs
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-700 p-1 rounded-full mt-1 mr-3">
                    <ArrowRight size={16} className="text-white" />
                  </div>
                  <p className="text-lg">
                    <span className="font-semibold">Our Services:</span>{" "}
                    Business valuation, transaction management, and compliance
                    support
                  </p>
                </li>
              </ul>
              <div className="flex space-x-4">
                <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition duration-300 shadow-lg border border-gray-700">
                  Get Started
                </button>
                <button className="border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
            <div
              className="md:w-2/5 flex justify-center"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-gray-800 rounded-full animate-pulse"></div>
                <div className="absolute inset-4 bg-gray-700 rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Truck size={80} className="text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 animate-bounce text-center">
            <ChevronDown size={32} className="mx-auto text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
