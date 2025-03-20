// components/Hero.tsx
import { ChevronDown, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative text-white py-20 md:py-36 min-h-[100svh] flex items-center">
      {/* Background image using your CSS class */}
      <div className="absolute inset-0 hero-bg"></div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content section with z-index */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto" data-aos="fade-up">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div
              className="w-full md:w-3/5 mb-10 md:mb-0"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight">
                The Marketplace for Trucking Companies
              </h1>

              {/* Two-column layout for features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="bg-gray-700 p-1 rounded-full mt-1 mr-3">
                      <ArrowRight size={16} className="text-white" />
                    </div>
                    <p className="text-base">Verified Leading Marketplace</p>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gray-700 p-1 rounded-full mt-1 mr-3">
                      <ArrowRight size={16} className="text-white" />
                    </div>
                    <p className="text-base">
                      Professional MC Authority Service
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gray-700 p-1 rounded-full mt-1 mr-3">
                      <ArrowRight size={16} className="text-white" />
                    </div>
                    <p className="text-base">Complete Business Valuation</p>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gray-700 p-1 rounded-full mt-1 mr-3">
                      <ArrowRight size={16} className="text-white" />
                    </div>
                    <p className="text-base">Multiple MC Authority Options</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="bg-gray-700 p-1 rounded-full mt-1 mr-3">
                      <ArrowRight size={16} className="text-white" />
                    </div>
                    <p className="text-base">Verified Aged MC Numbers</p>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gray-700 p-1 rounded-full mt-1 mr-3">
                      <ArrowRight size={16} className="text-white" />
                    </div>
                    <p className="text-base">Affordable Pricing</p>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gray-700 p-1 rounded-full mt-1 mr-3">
                      <ArrowRight size={16} className="text-white" />
                    </div>
                    <p className="text-base">Setup with Major Brokers</p>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gray-700 p-1 rounded-full mt-1 mr-3">
                      <ArrowRight size={16} className="text-white" />
                    </div>
                    <p className="text-base">Compliance Support Services</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="bg-white cursor-pointer text-black px-5 py-2.5 md:px-6 md:py-3 rounded-lg font-medium hover:bg-gray-300 transition duration-300 shadow-lg">
                  Get Started
                </button>
                <button className="border-2 border-white cursor-pointer px-5 py-2.5 md:px-6 md:py-3 rounded-lg font-medium hover:bg-white/10 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>

            {/* Optional: Add an image or graphic on the right side */}
            <div
              className="md:w-2/5 hidden md:block"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              {/* You could add a truck icon or image here */}
            </div>
          </div>

          <div className="mt-24 animate-bounce text-center">
            <ChevronDown size={32} className="mx-auto text-gray-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
