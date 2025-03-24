// components/BuyOrSell.tsx - Updated with improved alignment
import { ShoppingCart, DollarSign } from "lucide-react";
import Link from "next/link";

export default function BuyOrSell() {
  return (
    <section className="relative py-12 md:py-20 bg-gradient-to-b bg-black text-white">
      <div className="container mx-auto px-4 max-w-4xl overflow-x-hidden relative z-10">
        <div className="text-center mb-8 md:mb-16" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Are you looking to buy or sell a trucking company?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          {/* Sell Card */}
          <div
            className="bg-gray-800/90 text-white p-6 md:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="flex flex-col h-full">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-5 text-white text-center w-full md:h-[100px] flex items-center justify-center">
                I am looking to sell my trucking company
              </h3>

              <p className="text-white mb-4 md:mb-6 text-center h-[50px] flex items-center justify-center">
                Why you need to choose us ?
              </p>

              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 text-sm md:text-base flex-1">
                <li className="flex items-start min-h-[60px]">
                  <span className="mr-2">•</span>
                  <span>
                    We are experienced team that can help you to sell your
                    trucking company at higher rate.
                  </span>
                </li>
                <li className="flex items-start min-h-[90px]">
                  <span className="mr-2">•</span>
                  <span>
                    We work with 500+ partners who are looking to purchase aged
                    MC authority with or without trucks. So you will have
                    different good options.
                  </span>
                </li>
                <li className="flex items-start min-h-[60px]">
                  <span className="mr-2">•</span>
                  <span>
                    You will get secure transactions with escrow protection
                  </span>
                </li>
                <li className="flex items-start min-h-[50px]">
                  <span className="mr-2">•</span>
                  <span>Fast and easy processing</span>
                </li>
              </ul>

              <div className="flex flex-col items-center mt-auto">
                <Link
                  href="/sell-companies"
                  className="bg-[#2563EB] text-white px-6 py-3 md:px-8 md:py-4 rounded-xl hover:bg-[#1D4ED8] transition font-medium w-full text-center flex items-center justify-center"
                >
                  <ShoppingCart size={18} className="mr-2" /> Sell Business
                </Link>
              </div>
            </div>
          </div>

          {/* Buy Card */}
          <div
            className="bg-gray-800/90 text-white p-6 md:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="flex flex-col h-full">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-5 text-white text-center w-full md:h-[100px] flex items-center justify-center">
                Purchase now aged MC authority from verified and experienced
                team.
              </h3>

              <p className="text-white mb-4 md:mb-6 text-center h-[50px] flex items-center justify-center">
                Benefits of working with us:
              </p>

              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 text-sm md:text-base flex-1">
                <li className="flex items-start min-h-[60px]">
                  <span className="mr-2">•</span>
                  <span>Access of multiple MC numbers</span>
                </li>
                <li className="flex items-start min-h-[90px]">
                  <span className="mr-2">•</span>
                  <span>
                    We analyze your needs and offer MC number that suits you.
                  </span>
                </li>
                <li className="flex items-start min-h-[60px]">
                  <span className="mr-2">•</span>
                  <span>
                    Multiple payment options, including Zelle, Wire, ACH and etc
                  </span>
                </li>
                <li className="flex items-start min-h-[50px]">
                  <span className="mr-2">•</span>
                  <span>
                    Transition of MC Authority according to the Law and FMCSA
                    regulations
                  </span>
                </li>
              </ul>

              <div className="flex flex-col items-center mt-auto">
                <Link
                  href="/buy-companies"
                  className="bg-[#2563EB] text-white px-6 py-3 md:px-8 md:py-4 rounded-xl hover:bg-[#1D4ED8] transition font-medium w-full text-center flex items-center justify-center"
                >
                  <DollarSign size={18} className="mr-2" /> Buy Business
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
