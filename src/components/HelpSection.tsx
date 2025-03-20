// components/HelpSection.tsx
import { ArrowRight } from "lucide-react";

export default function HelpSection() {
  const services = [
    "To get fuel cards that have more discount comparing with others.",
    "To find verified factoring companies that charges less percentage.",
    "To get new insurance at more affordable rate.",
    "To get experienced truck drivers for your company. (Company, lease and owner operators)",
    "To find reliable eld partners, that can service you at affordable rate",
    "To find experienced dispatch service that can book loads at higher rate.",
  ];

  return (
    <section className=" py-20 bg-black relative">
      {/* Background effect */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-80"></div> */}

      <div className="absolute inset-0 help-bg"></div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Large title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12">
            We can help you
          </h2>

          {/* Service list */}
          <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl p-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-start group"
                  data-aos="fade-up"
                  data-aos-delay={index * 75}
                >
                  <div className="bg-white/10 group-hover:bg-white/20 p-2 rounded-full mr-4 transition-all duration-300">
                    <ArrowRight size={18} className="text-white" />
                  </div>
                  <p className="text-white text-base md:text-lg mt-1">
                    {service}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
