import HeroSection from "@/components/HeroSection";
import DestinationCard from "@/components/DestinationCard";
import PackageCard from "@/components/PackageCard";
import Link from "next/link";
import { destinations, tourPackages, blogPosts } from "@/lib/data";
import Image from "next/image";
import { formatDate } from "@/lib/utils";

export default function HomePage() {
  const featuredDestinations = destinations.slice(0, 3);
  const featuredPackages = tourPackages.slice(0, 3);
  const recentBlogPosts = blogPosts.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Destinations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Destinations
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover the most beautiful places Pakistan has to offer
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination, index) => (
              <DestinationCard key={destination.id} destination={destination} index={index} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/destinations"
              className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
            >
              View All Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Tour Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Popular Tour Packages
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose from our carefully curated tour packages
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((tourPackage, index) => (
              <PackageCard key={tourPackage.id} tourPackage={tourPackage} index={index} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/packages"
              className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
            >
              View All Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Latest Travel Guides
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Read our latest articles and travel tips
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentBlogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-medium transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-blue-600 font-semibold bg-blue-50 px-3 py-1 rounded-lg inline-block">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                    <span className="font-medium">{post.author}</span>
                    <span>{formatDate(post.date)}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Read More Articles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
            Contact us today to plan your perfect trip to Pakistan
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </Link>
            <Link
              href="/packages"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200"
            >
              Browse Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
