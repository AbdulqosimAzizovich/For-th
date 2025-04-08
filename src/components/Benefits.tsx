// components/Benefits.tsx
import React, { useEffect } from "react";
import Link from "next/link";
import { Truck, Shield, DollarSign, FileCheck } from "lucide-react";
import { motion } from "framer-motion";
import AOS from "aos";

const TruckingServicesSection = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="bg-gray-900 text-white py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Aged MC Authority Marketplace
          </h2>
          <p className="text-lg text-blue-400 max-w-2xl mx-auto">
            Fast-track your trucking business with verified MC authorities
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <FeatureCard
            icon={<Truck className="w-8 h-8" />}
            title="Multiple MC Options"
            description="Access our database of aged MC authorities covering all 50 states and various operational types."
            index={0}
          />
          <FeatureCard
            icon={<Shield className="w-8 h-8" />}
            title="Lower Insurance Costs"
            description="Save 15-30% on insurance premiums with established authorities with clean histories."
            index={1}
          />
          <FeatureCard
            icon={<DollarSign className="w-8 h-8" />}
            title="Bulk Purchase Discounts"
            description="Get special pricing when purchasing multiple MC authorities for your growing fleet."
            index={2}
          />
          <FeatureCard
            icon={<FileCheck className="w-8 h-8" />}
            title="Amazon Relay Ready"
            description="Get Amazon Relay approved authorities to start hauling premium loads immediately."
            index={3}
          />
        </motion.div>

        <div
          className="bg-gray-800 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between"
          data-aos="zoom-in"
        >
          <div className="mb-6 md:mb-0 md:mr-6">
            <h3 className="text-2xl font-bold mb-2">
              Ready to accelerate your trucking business?
            </h3>
            <p className="text-gray-300">
              Purchase an aged MC authority today and start operating faster
              with better opportunities.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/benefits-services"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg flex items-center justify-center transition-colors"
              >
                Explore More Benefits
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/#footer"
                className="inline-block border border-gray-500 hover:border-gray-400 text-white py-3 px-6 rounded-lg transition-colors text-center"
              >
                Get a Consultation
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="bg-gray-800 rounded-xl p-6 h-full cursor-pointer"
      variants={cardVariants}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.div
        className="bg-blue-600 rounded-full p-3 inline-flex mb-4"
        initial={{ rotate: -10 }}
        whileHover={{ rotate: 0, scale: 1.1 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

export default TruckingServicesSection;
