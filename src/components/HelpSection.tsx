// components/HelpSection.tsx
import { ArrowRight } from "lucide-react";

export default function HelpSection() {
  const services = [
    "To get fuel cards that offer better discounts compared to others, helping you save more on fuel costs. Additionally,  fuel cards come with flexible payment options and wide acceptance, making them a convenient choice for your business.",
    "To  get new insurance at a more affordable rate, ensuring you receive the coverage you need without breaking your budget. Plus,  working  with the trusted providers to offer you customized plans that fit your specific needs and risk profile.",
    "To find reliable ELD partners that offer services at an affordable rate, ensuring compliance and efficiency for your fleet. Moreover, our partners provide excellent customer support to ensure smooth installation and ongoing assistance whenever needed.",
    "To find verified factoring companies that charge lower percentages, helping you keep more of your earnings. Additionally, our trusted partners offer flexible terms and quick funding, so you can maintain cash flow without delays.",
    "To get experienced truck drivers for your company, including company drivers, lease operators, and owner-operators. Our drivers are thoroughly vetted and trained to ensure they meet the highest industry standards, helping you maintain safe and efficient operations.",
    "To find experienced dispatch services that can book loads at higher rates, maximizing your revenue. Additionally, our trusted dispatch partners are skilled in optimizing routes to ensure timely deliveries and improve overall efficiency.",
    "To work with professional accounting service tailored to the trucking industry, providing timely and accurate financial statements. Our experienced team is dedicated to helping trucking companies stay on top of their finances, ensuring smooth operations and regulatory compliance.",
    "To find the experienced safety service specifically designed for the trucking industry in the USA, ensuring your fleet operates in compliance with all regulations. Our expert team provides proactive safety solutions, from driver training to vehicle inspections, to minimize risks and enhance the overall safety of your operations.",
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
            We can assist you
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
