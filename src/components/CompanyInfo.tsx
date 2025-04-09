// components/CompanyInfo.tsx
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Instagram, Youtube, Send, X } from "lucide-react";

interface CompanyData {
  id: number;
  name: string;
  salary: string;
  level: string;
  workType: string;
  timeRange: string;
  description?: string;
  phone: string;
  imageSrc?: string;
}

interface CompanyInfoProps {
  type: "buy" | "sell";
}

export default function CompanyInfo({ type }: CompanyInfoProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<CompanyData | null>(
    null
  );
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOpenModal = (company: CompanyData) => {
    setSelectedCompany(company);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });
    handleCloseModal();
  };

  // Sample data for companies
  const buyCompanies: CompanyData[] = [
    {
      id: 1,
      name: "UIC Group Company",
      salary: "$500+",
      level: "Middle",
      workType: "Online",
      timeRange: "10:00 - 20:00",
      phone: "+94 099 4001",
      imageSrc: "/next.svg", // Add your image path here
    },
    {
      id: 2,
      name: "UIC Group Company",
      salary: "$500+",
      level: "Middle",
      workType: "Online",
      timeRange: "10:00 - 20:00",
      description:
        "Bu Programma Dasturi Juda Yaxshi Bajarilgan Bo'lib Bu Kompaniya Juda Ko'p Mijozlarga Ega Bo'lgan. Programma Dasturlash Kompaniyasi Bu Programma Yordamida Ko'p Foydalanuvchilar Ehtiyojlari Qondiriladi.",
      phone: "+94 099 4001",
      imageSrc: "/next.svg", // Add your image path here
    },
  ];

  const sellCompanies: CompanyData[] = [
    {
      id: 3,
      name: "UIC Group Company",
      salary: "$500+",
      level: "Middle",
      workType: "Online",
      timeRange: "10:00 - 20:00",
      phone: "+94 099 4001",
      imageSrc: "/next.svg", // Add your image path here
    },
    {
      id: 4,
      name: "UIC Group Company",
      salary: "$500+",
      level: "Middle",
      workType: "Online",
      timeRange: "10:00 - 20:00",
      description:
        "Bu Programma Dasturi Juda Yaxshi Bajarilgan Bo'lib Bu Kompaniya Juda Ko'p Mijozlarga Ega Bo'lgan. Programma Dasturlash Kompaniyasi Bu Programma Yordamida Ko'p Foydalanuvchilar Ehtiyojlari Qondiriladi.",
      phone: "+94 099 4001",
      imageSrc: "/next.svg", // Add your image path here
    },
  ];

  const companies = type === "buy" ? buyCompanies : sellCompanies;

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            {type === "buy"
              ? "Companies Buying Digital Assets"
              : "Companies Selling Digital Assets"}
          </h2>
        </div>

        <div className="space-y-4">
          {companies.map((company) => (
            <div
              key={company.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row">
                {/* Company Image */}
                <div className="w-full md:w-1/3 p-6 flex items-center justify-center bg-gray-50">
                  {company.imageSrc ? (
                    <img
                      src={company.imageSrc}
                      alt={`${company.name} logo`}
                      className="max-h-32 max-w-full object-contain"
                    />
                  ) : (
                    <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">No Image</span>
                    </div>
                  )}
                </div>

                {/* Company Info */}
                <div className="w-full md:w-2/3 p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {company.name}
                    </h3>
                    <a href="tel:+15136574858">
                      <ExternalLink className="h-5 w-5 text-gray-400" />
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-4">
                    <div>
                      <p className="text-xs text-gray-500">price</p>
                      <p className="text-gray-800">{company.salary}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">status</p>
                      <p className="text-gray-800">{company.level}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">work type</p>
                      <p className="text-gray-800">{company.workType}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">hours</p>
                      <p className="text-gray-800">{company.timeRange}</p>
                    </div>
                  </div>

                  {company.description && (
                    <div className="mt-4">
                      <p className="text-gray-700 text-sm">
                        {company.description}
                      </p>
                    </div>
                  )}

                  <div className="mt-4 flex items-center space-x-4">
                    <div className="cursor-pointer w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <a
                        href="https://www.instagram.com/mcsale_vabank?igsh=dTNrbzN3ZXBkaTVk&utm_source=qr"
                        className="text-blue-600"
                      >
                        <Instagram size={20} />
                      </a>
                    </div>
                    <div className="cursor-pointer w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <a
                        href="https://t.me/Thomas_Hiring"
                        className="text-blue-600"
                      >
                        <Send size={20} />
                      </a>
                    </div>
                    <div className="cursor-pointer w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <a href="#" className="text-blue-600">
                        <Youtube size={20} />
                      </a>
                    </div>
                    <div className="ml-auto flex items-center">
                      <button
                        onClick={() => handleOpenModal(company)}
                        className="bg-blue-600 text-white py-1 px-2 rounded cursor-pointer flex items-center justify-center mr-2 hover:bg-blue-700 transition-colors"
                      >
                        Contact
                      </button>
                      {/* <a
                        href={`tel:${company.phone.replace(/\s+/g, "")}`}
                        className="text-blue-600 font-medium"
                      >
                        {company.phone}
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && selectedCompany && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                duration: 0.3,
              }}
              className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4 z-10 relative"
            >
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="text-lg font-semibold text-gray-800">
                  Contact {selectedCompany.name}
                </h3>
                <motion.button
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleCloseModal}
                  className="text-gray-500 hover:text-gray-700 cursor-pointer"
                >
                  <X size={20} />
                </motion.button>
              </div>

              <form onSubmit={handleSubmit} className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-gray-900"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-gray-900"
                    />
                  </motion.div>
                </div>

                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-gray-900"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-gray-900"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full bg-blue-600 cursor-pointer text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-offset-2"
                  >
                    Submit
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>

            {/* Blurred Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            ></motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
