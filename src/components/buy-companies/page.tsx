import CompanyInfo from "../CompanyInfo";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BuyCompaniesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/"
          className="flex items-center text-blue-600 mb-6 hover:underline"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to home
        </Link>

        <CompanyInfo type="buy" />
      </div>
    </div>
  );
}
