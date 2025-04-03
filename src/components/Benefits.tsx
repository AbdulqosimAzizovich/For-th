// components/Benefits.tsx
"use client";
import { useState, useEffect } from "react";
import { CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Benefits() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleItem = (index: number) => {
    setExpandedItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const isExpanded = (index: number) => expandedItems.includes(index);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const contentAnimation = {
    hidden: { height: 0, opacity: 0 },
    show: { height: "auto", opacity: 1 },
  };

  const benefits = [
    {
      title: "Established History",
      description:
        "An aged MC (Motor Carrier) authority provides your business with an established record, which can be an asset when working with brokers and shippers. Even if the company associated with the authority did not actively operate, its history still adds credibility to your business. Brokers and shippers often prefer working with carriers that have an older authority because it minimizes their perceived risk. A well-aged MC number signals stability and longevity, making it easier to build trust and form business relationships within the industry.",
    },
    {
      title: "Faster Operations",
      description:
        "When you purchase an aged MC authority, you can bypass the lengthy approval process required for a new authority. The Federal Motor Carrier Safety Administration (FMCSA) requires new MC authorities to go through a waiting period, which includes the 21-day vetting process and the BOC-3 filing, in addition to insurance verification. With an aged authority, these steps are already completed, allowing you to hit the ground running and start hauling loads immediately. This is especially beneficial for owner-operators or carriers looking to get into the industry without delays.",
    },
    {
      title: "Better Insurance Rates",
      description:
        "Insurance premiums are often lower for aged MC authorities because they come with an established track record. New authorities typically face higher insurance costs because insurers see them as higher risk. However, an older MC authority can demonstrate a longer history of compliance, even if it hasn't been used extensively. Some insurance companies may also waive additional fees or provide discounts to carriers with an aged authority, leading to significant cost savings in the long run.",
    },
    {
      title: "Easier Access to Loads",
      description:
        "Many freight brokers and direct shippers prefer working with trucking companies that have been in the system for a while. This is because an aged MC authority is perceived as more reliable and trustworthy than a newly established one. A well-established authority increases your chances of securing high-paying loads, as brokers often have policies requiring carriers to have an MC number active for at least six months to a year before working with them. By purchasing an aged MC authority, you can overcome this barrier and gain access to better freight opportunities faster.",
    },
    {
      title: "Lower Risk to Brokers/Shippers",
      description:
        "Brokers and shippers assess risk before awarding contracts to carriers. Aged MC authorities indicate that a company has been compliant with FMCSA regulations for a longer period, reducing the perceived risk. Many brokers have strict guidelines about how long a trucking company must have been in operation before they can work together. An aged MC authority allows you to meet these requirements and establish business relationships with major brokers and shippers more quickly than starting from scratch.",
    },
    {
      title: "Easier to work with Amazon with Aged MC Authoriity",
      description:
        "When you buy an aged MC authority, you increase your chances of being pre-approved or easily approved by major brokers such as Schneider, J.B. Hunt, and Amazon Relay. Many brokers require carriers to have at least 90 days to one year of operating authority before onboarding them. With an aged MC authority, you can bypass these waiting periods and start working with major brokers immediately.",
    },
    {
      title: "Work with Amazon Relay",
      description:
        "Many truckers and fleet owners aim to work with Amazon Relay, as it provides consistent freight opportunities with competitive rates. Having an aged MC authority increases your chances of getting approved by Amazon Relay and other major logistics companies. If you purchase an MC authority from us, it may already be set up with these brokers, allowing you to start hauling loads without delay.",
    },
    {
      title: "Hire the Best Drivers",
      description:
        "Experienced and reliable truck drivers often research the companies they consider working for. When a company has an aged MC authority, it signals to drivers that the business is established and reputable. This helps attract top-tier talent, including company drivers, lease operators, and owner-operators.Drivers prefer working for companies that have been in the industry for a while, as they offer more stability and better opportunities. With an aged MC authority, you will have a competitive edge in recruiting high-quality drivers who are essential for maintaining safe and efficient operations. In addition, thorough vetting and training can further enhance your company's reputation and ensure compliance with industry standards.",
    },
    {
      title: "Low Factoring Percentage with Aged MC Authority",
      description:
        "Factoring companies help trucking businesses manage cash flow by purchasing their unpaid invoices at a discount, providing immediate funds instead of waiting for payment from brokers or shippers. However, newer MC authorities often face higher factoring rates because they are considered higher risk. With an aged MC authority, you are more likely to qualify for lower factoring fees since your authority has an established history. Lower factoring percentages mean you retain more of your earnings, improving your overall profitability and financial stability.",
    },
    {
      title: "Easier to Get Truck Financing from Dealerships",
      description:
        "Truck dealerships and financial institutions often have strict requirements when approving financing for new trucks. Aged MC authorities provide a sense of stability and reliability, making it easier to secure loans or lease agreements. Dealerships and lenders typically prefer working with businesses that have an operational history, as they see them as lower risk compared to new authorities. By purchasing an aged MC authority, you increase your chances of qualifying for financing with better terms, lower interest rates, and fewer restrictions, allowing you to expand your fleet without major financial hurdles.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b bg-black text-white to-gray-900 py-16">
      <div className="absolute inset-0 benefit-bg"></div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Benefits of Buying Aged MC Authority
          </h2>

          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={container}
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="cursor-pointer bg-gray-900/70 backdrop-blur-sm rounded-lg p-6 shadow-lg transition-all duration-300 hover:bg-gray-800/70"
                variants={item}
                onClick={() => toggleItem(index)}
              >
                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <CheckCircle className="text-blue-500" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {benefit.title}
                      </h3>
                      <motion.div
                        animate={{ rotate: isExpanded(index) ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {isExpanded(index) ? (
                          <ChevronUp className="text-blue-500" size={20} />
                        ) : (
                          <ChevronDown className="text-blue-500" size={20} />
                        )}
                      </motion.div>
                    </div>

                    {/* Preview text (always visible) */}
                    <p className="text-gray-300">
                      {benefit.description.substring(0, 100)}
                      {benefit.description.length > 100 && "..."}
                    </p>

                    {/* Expandable content */}
                    <AnimatePresence>
                      {isExpanded(index) && (
                        <motion.div
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          variants={contentAnimation}
                          transition={{ duration: 0.3 }}
                          className="mt-2 overflow-hidden"
                        >
                          <p className="text-gray-200">{benefit.description}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Read more/less button */}
                    <motion.button
                      className="mt-3 text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isExpanded(index) ? "Show less" : "Read more"}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
