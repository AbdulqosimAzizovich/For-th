// components/Footer.tsx
import Link from "next/link";
import { Instagram, Youtube, Send, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-gradient-to-b bg-gray-900 text-white to-black py-12"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Vabank MC</h3>
            <p className="text-gray-400 mb-4">
              The fastest way to buy or sell MC, DOT, and Amazon.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link
                href="https://www.instagram.com/mcsale_vabank?igsh=dTNrbzN3ZXBkaTVk&utm_source=qr"
                className="hover:text-blue-400 transition"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://youtube.com"
                className="hover:text-blue-400 transition"
              >
                <Youtube size={20} />
              </Link>
              <Link
                href="https://t.me/mcforsalevabank"
                className="hover:text-blue-400 transition"
              >
                <Send size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/buy-companies"
                  className="text-gray-400 hover:text-white transition"
                >
                  Buy MC
                </Link>
              </li>
              <li>
                <Link
                  href="/sell-companies"
                  className="text-gray-400 hover:text-white transition"
                >
                  Sell MC
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-gray-400" />
                <span>+1 513 657-4858</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-gray-400" />
                <span>info@mcforsale.com</span>
              </div>
              <div className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 text-gray-400" />
                <span>There will be 20-30 MCs, they will rotate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
