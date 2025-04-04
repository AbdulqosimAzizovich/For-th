// components/HelpSection.tsx
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function HelpSection() {
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

  const services = [
    "Fuel Cards with the Best Discounts\nWe help you get fuel cards that offer bigger discounts than most, helping you save more money. These cards also have easy payment options and are accepted in many places, making them a great choice for your business. By using these fuel cards, you can better manage your fuel expenses, track your spending, and reduce overall operational costs. Many of our partnered fuel card providers also offer cashback rewards and loyalty programs, giving you additional savings over time. With nationwide coverage, you don't have to worry about finding a station that accepts your card, ensuring convenience wherever your route takes you.",

    "Affordable and Reliable Insurance\nWe help you find insurance at a lower cost while still getting the protection you need. We work with trusted insurance companies that offer plans designed for your specific needs, so you don't overpay. Our team understands the unique risks associated with the trucking industry and ensures you receive coverage that protects your business, vehicles, and drivers. We help you compare multiple insurance options, making sure you get the best value for your money. Additionally, we connect you with providers who offer flexible payment plans, making it easier to manage your expenses.",

    "Easy and Affordable ELD Solutions\nFollowing the Electronic Logging Device (ELD) rules is important for your business. We connect you with trusted ELD providers that offer low-cost solutions with great customer support. They help with setup and provide ongoing assistance to keep everything running smoothly. These ELD solutions ensure compliance with federal regulations, avoiding costly fines and penalties. Our partners offer user-friendly systems that are easy to install and operate, reducing downtime and training time for your drivers. Additionally, the ELDs provide real-time tracking and reporting features, helping you monitor fleet performance and improve efficiency.",

    "Factoring Companies with Low Fees\nKeeping cash flow steady is important. We help you find factoring companies that take a smaller percentage from your earnings, so you keep more of your money. These companies also offer flexible terms and fast payments to help your business stay on track. Instead of waiting weeks for payments, factoring services allow you to access funds within 24 to 48 hours, improving your financial stability. Our partners have transparent pricing, with no hidden fees, so you always know what to expect. Additionally, factoring can help cover expenses like fuel, maintenance, and payroll, ensuring smooth operations without financial stress.",

    "Experienced and Reliable Truck Drivers\nWhether you need company drivers, lease operators, or owner-operators, we help you find experienced and well-trained drivers who meet industry standards. This helps your business run safely and efficiently. Our network includes skilled drivers who have undergone thorough background checks, ensuring they meet safety and compliance requirements. We also connect you with drivers who have experience in specific freight types, whether it's refrigerated goods, dry vans, or hazardous materials. Additionally, by hiring the right drivers, you can reduce turnover rates and build a more reliable and productive team.",

    "Dispatch Services to Increase Your Earnings\nWe work with expert dispatchers who can book higher-paying loads and plan better routes. This means more money for you, fewer empty miles, and on-time deliveries. Our dispatch partners have strong relationships with shippers and brokers, giving you access to better freight opportunities. They also use advanced route optimization tools to reduce fuel costs and minimize downtime. Additionally, having a dedicated dispatcher allows you to focus on driving while they handle negotiations, paperwork, and scheduling to keep your business running smoothly.",

    "Trucking-Focused Accounting Services\nManaging finances can be tough in the trucking business. We connect you with accountants who specialize in trucking. They help you keep track of your finances, follow all rules, and stay organized so you can focus on running your business. Our accounting partners offer services such as tax preparation, expense tracking, and financial planning tailored specifically for trucking companies. They help ensure compliance with IRS regulations and prevent costly mistakes. Additionally, by having a clear financial strategy, you can maximize profits, reduce tax liabilities, and plan for future growth.",

    "Safety and Compliance Services\nStaying safe and following trucking laws is very important. We help you find safety experts who offer driver training, vehicle inspections, and compliance services. This helps lower risks and keeps your fleet running safely. Our safety partners provide ongoing support, including audits and compliance reviews, to ensure you meet DOT and FMCSA regulations. They also offer customized safety programs to reduce accidents and improve driver awareness. By prioritizing safety, you not only avoid penalties but also improve your company's reputation, making it easier to secure more contracts and long-term success.",
  ];

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
      <div className="absolute inset-0 bg-black opacity-40 z-[2]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Large title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12">
            We can assist
          </h2>

          {/* Service list */}
          <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl p-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => {
                // Split the service string to get the title and description
                const [title, description] = service.split("\n");

                return (
                  <div
                    key={index}
                    className="flex items-start group"
                    data-aos="fade-up"
                    data-aos-delay={index * 75}
                  >
                    <div className="bg-white/10 group-hover:bg-white/20 p-2 rounded-full mr-4 transition-all duration-300 mt-1 flex-shrink-0">
                      <ArrowRight size={18} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-2">
                        {title}
                      </h3>
                      <p className="text-white/90 text-base">{description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Optional: Slider indicator dots */}
          {/* <div className="flex justify-center mt-6 space-x-2">
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-white scale-125" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
