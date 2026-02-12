import PackageCard from "@/components/PackageCard";
import { tourPackages } from "@/lib/data";

export const metadata = {
  title: "Tour Packages - Pakistan Tourism",
  description: "Explore our carefully curated tour packages for the best destinations in Pakistan",
};

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Tour Packages</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Choose from our carefully curated packages for an unforgettable experience
          </p>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourPackages.map((tourPackage, index) => (
            <PackageCard key={tourPackage.id} tourPackage={tourPackage} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
