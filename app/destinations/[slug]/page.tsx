import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/lib/data";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return destinations.map((destination) => ({
    slug: destination.slug,
  }));
}

export const dynamicParams = true;

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const destination = destinations.find((d) => d.slug === slug);
  
  if (!destination) {
    return {
      title: "Destination Not Found",
    };
  }

  return {
    title: `${destination.name} - Pakistan Tourism`,
    description: destination.description,
  };
}

export default async function DestinationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Image */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 lg:p-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
            {destination.name}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90">{destination.location}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <section className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-50 mb-4">About {destination.name}</h2>
              <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                {destination.description}
              </p>
            </section>


            {/* Highlights */}
            <section className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-50 mb-4 md:mb-6">Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {destination.highlights.map((highlight, index) => {
                  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(highlight + ' ' + destination.location + ' ' + destination.name)}`;
                  return (
                    <a
                      key={index}
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 md:p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer group"
                    >
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                      <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{highlight}</span>
                    </a>
                  );
                })}
              </div>
            </section>

            {/* Map Section */}
            <section className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-50 mb-4 md:mb-6">Location</h2>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg h-48 sm:h-64 md:h-80 flex items-center justify-center">
                <div className="text-center p-4">
                  <p className="text-gray-600 dark:text-gray-300 mb-2 text-sm md:text-base">Map View</p>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-3">
                    Coordinates: {destination.coordinates.lat}, {destination.coordinates.lng}
                  </p>
                  <a
                    href={`https://www.google.com/maps?q=${destination.coordinates.lat},${destination.coordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:underline mt-2 inline-block text-sm md:text-base font-semibold"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 sm:p-6 sticky top-20 lg:top-24">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-50 mb-4">Travel Information</h3>
              
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                <div>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1">Location</p>
                  <p className="text-sm md:text-base text-gray-800 dark:text-gray-200 font-semibold">{destination.location}</p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1">Best Time to Visit</p>
                  <p className="text-sm md:text-base text-gray-800 dark:text-gray-200 font-semibold">{destination.bestTimeToVisit}</p>
                </div>
              </div>

              <Link
                href="/packages"
                className="block w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white text-center px-4 sm:px-6 py-2 sm:py-3 rounded-md text-sm sm:text-base font-semibold transition-colors duration-200 mb-3 md:mb-4"
              >
                View Tour Packages
              </Link>
              <Link
                href="/contact"
                className="block w-full bg-transparent border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white text-center px-4 sm:px-6 py-2 sm:py-3 rounded-md text-sm sm:text-base font-semibold transition-colors duration-200"
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
