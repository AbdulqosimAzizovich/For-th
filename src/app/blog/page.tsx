"use client";
import React, { useEffect } from "react";
import {
  ChevronRight,
  FileText,
  BookOpen,
  GraduationCap,
  HelpCircle,
  // Download,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const ResourcesPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const resourceCategories = [
    {
      title: "Compliance Guides",
      description:
        "Essential documentation to help you stay compliant with FMCSA regulations",
      icon: <FileText size={24} />,
      resources: [
        "FMCSA Registration Checklist",
        "DOT Compliance Manual",
        "Hours of Service Guidelines",
        "Safety Management Practices",
      ],
    },
    {
      title: "Industry Knowledge",
      description:
        "Stay informed about the latest trucking industry trends and best practices",
      icon: <BookOpen size={24} />,
      resources: [
        "Quarterly Market Insights",
        "Freight Rate Analysis",
        "Fuel Cost Management",
        "Industry Outlook Report",
      ],
    },
    {
      title: "Learning Center",
      description:
        "Educational resources for new and experienced trucking business owners",
      icon: <GraduationCap size={24} />,
      resources: [
        "Starting Your Trucking Business",
        "Managing Fleet Operations",
        "Scaling Your Trucking Company",
        "Accounting for Trucking Businesses",
      ],
    },
    {
      title: "Support Materials",
      description:
        "Tools and templates to help run your trucking business more efficiently",
      icon: <HelpCircle size={24} />,
      resources: [
        "Driver Onboarding Templates",
        "Load Planning Worksheets",
        "Maintenance Schedule Templates",
        "Business Plan Framework",
      ],
    },
  ];

  const testimonials = [
    {
      quote:
        "The resources provided by Vabank MC helped me understand the MC authority process and saved me countless hours of research.",
      author: "Michael T., Owner of Greenland Logistics",
    },
    {
      quote:
        "As a new trucking business owner, the compliance guides were invaluable. Everything was clear and easy to follow.",
      author: "Sarah K., Founder of Express LLC",
    },
    {
      quote:
        "The industry knowledge section keeps me informed about market trends that directly impact my business decisions.",
      author: "Robert J., Fleet Manager",
    },
  ];

  return (
    <div className="bg-[#0d1117] text-white min-h-screen">
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-[500px] flex items-center justify-center relative"
        style={{
          backgroundImage: "url('/images/highway-night.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div
          className="container mx-auto px-6 z-10 text-center"
          data-aos="fade-up"
        >
          <h1 className="text-5xl font-bold mb-6">
            Trucking Industry Resources
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Access guides, templates, and knowledge to help your trucking
            business thrive
          </p>
          {/* <div className="flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md flex items-center"
            >
              Browse Resources <ChevronRight className="ml-2" size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border border-white hover:bg-white hover:text-[#0d1117] text-white px-8 py-3 rounded-md flex items-center"
            >
              Download Catalog <Download className="ml-2" size={20} />
            </motion.button>
          </div> */}
        </div>
      </div>

      {/* Resource Categories */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center" data-aos="fade-up">
          Resource Categories
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resourceCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1a202c] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
              <p className="text-gray-400 mb-4">{category.description}</p>
              <ul className="space-y-2">
                {category.resources.map((resource, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle size={16} className="text-blue-600 mr-2" />
                    <span>{resource}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-6 text-blue-500 flex items-center"
              >
                View All Resources <ChevronRight size={16} className="ml-1" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured Resource */}
      <div className="bg-[#14202a] py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0" data-aos="fade-right">
              <h2 className="text-3xl font-bold mb-4">
                Featured Guide: MC Authority Compliance
              </h2>
              <p className="text-gray-300 mb-6">
                Our comprehensive guide covers everything you need to know about
                maintaining compliance with your MC authority. This 45-page
                document has helped hundreds of trucking companies avoid costly
                violations and operate with confidence.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle size={20} className="text-blue-600 mr-3" />
                  <span>Complete FMCSA regulation breakdown</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={20} className="text-blue-600 mr-3" />
                  <span>Monthly compliance checklist templates</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={20} className="text-blue-600 mr-3" />
                  <span>Audit preparation walkthrough</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle size={20} className="text-blue-600 mr-3" />
                  <span>Expert insights from industry veterans</span>
                </li>
              </ul>
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md flex items-center"
              >
                Download Free Guide <Download className="ml-2" size={20} />
              </motion.button> */}
            </div>
            <div className="md:w-1/2 pl-0 md:pl-10" data-aos="fade-left">
              <div className="bg-[#0d1117] p-6 rounded-lg shadow-lg">
                <Image
                  width={800}
                  height={80}
                  src="/standard.jpg"
                  alt="MC Authority Compliance Guide"
                  className="rounded-md shadow-md w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center" data-aos="fade-up">
          What Trucking Business Owners Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1a202c] p-6 rounded-lg shadow-lg"
            >
              <p className="italic text-gray-300 mb-4">
                &quot;{testimonial.quote}&quot;
              </p>
              <p className="font-semibold text-blue-500">
                {testimonial.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      {/* <div className="bg-[#14202a] py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with Industry Resources
            </h2>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter to receive the latest compliance
              updates, market insights, and exclusive resources for trucking
              business owners.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-3 rounded-md bg-[#0d1117] border border-gray-700 focus:outline-none focus:border-blue-500 flex-grow max-w-md"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md whitespace-nowrap"
              >
                Subscribe Now
              </motion.button>
            </div>
          </div>
        </div>
      </div> */}

      {/* Contact & Support */}
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-16">
          <div className="md:w-1/2 mb-8 md:mb-0" data-aos="fade-right">
            <h2 className="text-3xl font-bold mb-4">
              Need Personalized Support?
            </h2>
            <p className="text-gray-300 mb-6">
              Our team of trucking industry experts is ready to help you with
              tailored guidance for your specific situation. Contact us for a
              free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md"
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border border-white hover:bg-white hover:text-[#0d1117] text-white px-6 py-3 rounded-md"
              >
                Contact Support
              </motion.button>
            </div>
          </div>
          <div
            className="md:w-1/2 md:pl-10 flex justify-center md:justify-end"
            data-aos="fade-left"
          >
            <div className="bg-[#1a202c] p-6 rounded-lg shadow-lg max-w-md">
              <h3 className="text-xl font-semibold mb-4">
                Fast Response Guaranteed
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-600 rounded-full p-2 mr-3 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <span className="font-medium">Phone Support</span>
                    <p className="text-gray-400">+988 99 123 45 67</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-600 rounded-full p-2 mr-3 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <span className="font-medium">Email Support</span>
                    <p className="text-gray-400">info@vabankmc.com</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-600 rounded-full p-2 mr-3 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <span className="font-medium">Response Time</span>
                    <p className="text-gray-400">
                      Within 24 hours (business days)
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
