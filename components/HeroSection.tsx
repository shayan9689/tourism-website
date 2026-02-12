"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative h-[70vh] min-h-[600px] max-h-[800px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=90"
          alt="Pakistan Mountains"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium">
              Explore Pakistan
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              Beauty
            </span>{" "}
            of Pakistan
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-gray-100 leading-relaxed max-w-2xl">
            From majestic mountains to pristine valleys, explore destinations that will leave you in awe.
          </p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/95 backdrop-blur-md rounded-2xl p-2 flex flex-col sm:flex-row gap-2 shadow-2xl max-w-2xl"
          >
            <input
              type="text"
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-6 py-4 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            />
            <Link
              href={`/destinations${searchQuery ? `?search=${encodeURIComponent(searchQuery)}` : ""}`}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 text-center shadow-lg hover:shadow-xl"
            >
              Search
            </Link>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href="/destinations"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Explore Destinations
            </Link>
            <Link
              href="/packages"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200"
            >
              View Packages
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
