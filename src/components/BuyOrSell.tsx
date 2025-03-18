// components/BuyOrSell.tsx
import { ShoppingCart, DollarSign } from "lucide-react";
import Link from "next/link";

export default function BuyOrSell() {
  return (
    <section className="py-20 bg-black text-white ">
      <div className="container mx-auto px-4 max-w-4xl overflow-x-hidden">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-white">
            Would you like to buy or sell logistics companies?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Sell Card */}
          <div
            className="bg-[#111827] p-10 rounded-2xl shadow-lg border border-gray-700 hover:shadow-xl transition-shadow"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-semibold mb-6 text-gray-100 text-center">
                I want to sell my logistics business
              </h3>

              <p className="text-gray-300 mb-6 text-center">
                List your logistics company on our secure marketplace. We
                provide valuation and transaction support.
              </p>

              <div className="space-y-4 mb-8">
                <p className="text-gray-400">
                  • Secure transactions with escrow protection
                </p>
                <p className="text-gray-400">• Competitive market rates</p>
                <p className="text-gray-400">
                  • Fast processing and settlement
                </p>
              </div>

              <div className="flex flex-col items-center mt-auto">
                <Link
                  href="/sell-companies"
                  className="bg-[#2563EB] text-white px-8 py-4 rounded-xl hover:bg-[#1D4ED8] transition font-medium w-full sm:w-auto text-center"
                >
                  <ShoppingCart size={18} className="inline mr-2" /> Sell
                  Business
                </Link>
              </div>
            </div>
          </div>

          {/* Buy Card */}
          <div
            className="bg-[#111827] p-10 rounded-2xl shadow-lg border border-gray-700 hover:shadow-xl transition-shadow"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-semibold mb-6 text-gray-100 text-center">
                I want to buy a logistics business
              </h3>

              <p className="text-gray-300 mb-6 text-center">
                Purchase verified logistics companies with confidence through
                our secure platform.
              </p>

              <div className="space-y-4 mb-8">
                <p className="text-gray-400">• Verified sellers only</p>
                <p className="text-gray-400">• Multiple payment options</p>
                <p className="text-gray-400">• Transparent pricing</p>
              </div>

              <div className="flex flex-col items-center mt-auto">
                <Link
                  href="/buy-companies"
                  className="bg-[#2563EB] text-white px-8 py-4 rounded-xl hover:bg-[#1D4ED8] transition font-medium w-full sm:w-auto text-center"
                >
                  <DollarSign size={18} className="inline mr-2" /> Buy Business
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
