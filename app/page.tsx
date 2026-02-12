"use client";

import HeroSection from "@/components/HeroSection";
import DestinationCard from "@/components/DestinationCard";
import PackageCard from "@/components/PackageCard";
import Link from "next/link";
import Image from "next/image";
import { destinations, tourPackages, blogPosts } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { motion } from "framer-motion";

export default function HomePage() {
  const featuredDestinations = destinations.slice(0, 3);
  const featuredPackages = tourPackages.slice(0, 3);
  const recentBlogPosts = blogPosts.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Destinations */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-50 mb-4">
              Featured Destinations
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Discover the most beautiful places Pakistan has to offer
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {featuredDestinations.map((destination, index) => (
              <DestinationCard key={destination.id} destination={destination} index={index} />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              href="/destinations"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
            >
              View All Destinations
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Tour Packages */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-50 mb-4">
              Popular Tour Packages
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Choose from our carefully curated tour packages
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((tourPackage, index) => (
              <PackageCard key={tourPackage.id} tourPackage={tourPackage} index={index} />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              href="/packages"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
            >
              View All Packages
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-50 mb-4">
              Latest Travel Guides
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Read our latest articles and travel tips
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentBlogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="bg-gray-800 rounded-xl md:rounded-2xl shadow-soft overflow-hidden hover:shadow-medium transition-all duration-300 border border-gray-700 hover:border-gray-600 group block"
                >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out will-change-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="p-4 md:p-6">
                  <span className="text-xs md:text-sm text-blue-300 font-semibold bg-blue-900/30 px-2 py-0.5 md:px-3 md:py-1 rounded-md md:rounded-lg inline-block">
                    {post.category}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-gray-50 mt-2 md:mt-3 mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs md:text-sm text-gray-400 pt-3 md:pt-4 border-t border-gray-700">
                    <span className="font-medium">{post.author}</span>
                    <span>{formatDate(post.date)}</span>
                  </div>
                </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              href="/blog"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Read More Articles
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1636997209370-e2042d01d5a5?w=1920&q=90"
          alt="Ready to Start Your Adventure"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/50"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Start Your Adventure?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-10 text-white/90 max-w-2xl mx-auto"
          >
            Contact us today to plan your perfect trip to Pakistan
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/contact"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </Link>
            <Link
              href="/packages"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200"
            >
              Browse Packages
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
