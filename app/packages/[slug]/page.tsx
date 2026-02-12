import { notFound } from "next/navigation";
import Link from "next/link";
import { tourPackages } from "@/lib/data";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return tourPackages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export const dynamicParams = true;

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const tourPackage = tourPackages.find((p) => p.slug === slug);
  
  if (!tourPackage) {
    return {
      title: "Package Not Found",
    };
  }

  return {
    title: `${tourPackage.name} - Pakistan Tourism`,
    description: tourPackage.description,
  };
}

export default async function PackageDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tourPackage = tourPackages.find((p) => p.slug === slug);

  if (!tourPackage) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-cyan-900 dark:from-blue-900 dark:via-blue-950 dark:to-black">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            {tourPackage.name}
          </h1>
          <p className="text-xl text-white/90">{tourPackage.duration}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-50 mb-4">Package Overview</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {tourPackage.description}
              </p>
            </section>

            {/* Highlights */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-50 mb-6">Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tourPackage.highlights.map((highlight, index) => {
                  const searchQuery = highlight + ' ' + tourPackage.destinations.join(' ');
                  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(searchQuery)}`;
                  return (
                    <a
                      key={index}
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer group"
                    >
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{highlight}</span>
                    </a>
                  );
                })}
              </div>
            </section>

            {/* Destinations */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-50 mb-6">Destinations</h2>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {tourPackage.destinations.map((destination, index) => (
                  <Link
                    key={index}
                    href={`/destinations/${destination.toLowerCase().replace(/\s+/g, "-")}`}
                    className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white px-3 py-1.5 md:px-4 md:py-2 rounded-md font-semibold transition-colors duration-200 text-sm md:text-base"
                  >
                    {destination}
                  </Link>
                ))}
              </div>
            </section>

            {/* What's Included */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-50 mb-6">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tourPackage.includes.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <svg
                      className="w-5 h-5 text-gray-700 dark:text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-gray-700 dark:text-gray-300 mb-2">
                  Rs/-
                </div>
                <p className="text-gray-600 dark:text-gray-400">per person</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{tourPackage.duration}</p>
              </div>

              <Link
                href="/contact"
                className="block w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white text-center px-6 py-3 rounded-md font-semibold transition-colors duration-200 mb-3"
              >
                Book Now
              </Link>
              <Link
                href="/contact"
                className="block w-full bg-transparent border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white text-center px-6 py-3 rounded-md font-semibold transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
