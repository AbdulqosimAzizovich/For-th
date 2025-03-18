// components/PartnersSection.tsx
import { Building, Users } from "lucide-react";

export default function PartnersSection() {
  return (
    <section className="py-16 bg-gradient-to-b bg-black to-gray-900">
      <div
        className="container mx-auto px-4 max-w-3xl"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="bg-[#111827] text-white p-8 rounded-lg ">
          <div className="flex items-center justify-center mb-4">
            <Building size={24} className="mr-2" />
            <h2 className="text-xl font-bold">Our Partners</h2>
          </div>
          <p className="text-center">
            Company owners that we work with, or a list of company owners we
            collaborate with.
          </p>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-gray-600 p-4 rounded-md flex flex-col items-center transition-all hover:duration-300 hover:scale-105 cursor-pointer"
                data-aos="zoom-in"
                data-aos-delay={item * 50}
              >
                <Users size={32} className="mb-2" />
                <p className="text-sm">Partner {item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
