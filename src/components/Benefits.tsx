// components/Benefits.tsx
import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Benefits() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

  const benefits = [
    {
      title: "Established History",
      description:
        "An aged MC authority has an established record, even if the company didn't operate actively. This history can be appealing to brokers and shippers who want to minimize risk.",
    },
    {
      title: "Faster Operations",
      description:
        "Since the authority is already established, you can start your business operations faster without waiting for new authority approval or the long setup process.",
    },
    {
      title: "Better Insurance Rates",
      description:
        "Insurance providers may offer more competitive rates for aged MC authorities since they come with a track record, even if it's minimal.",
    },
    {
      title: "Easier Access to Loads",
      description:
        "Many brokers prefer to work with carriers that have been in the system for a while because they view them as more reliable and trustworthy. Aged MC authority can help you secure contracts or load offers quicker.",
    },
    {
      title: "Lower Risk to Brokers/Shippers",
      description:
        "Since the authority has been around for a while, it signals that the company may have been compliant with FMCSA regulations for longer, reducing risk for others in the supply chain.",
    },
    {
      title: "Easier to work with Amazon with Aged MC Authoriity. ",
      description:
        "Most people prefer to work with Amazon relay, so with Aged MC authority you will have more chance to get approved by Amazon team. Or you can buy MC authority from us that has already been working with Amazon.",
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
                className="cursor-pointer  bg-gray-900/70 backdrop-blur-sm rounded-lg p-6 shadow-lgo transition-all duration-300"
                variants={item}
              >
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <CheckCircle className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-200">{benefit.description}</p>
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
