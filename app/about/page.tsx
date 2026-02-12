"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1464822759844-d150ad6d0e9a?w=1920&q=90"
          alt="About Us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-4"
            >
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-white/90 max-w-2xl"
            >
              Discover the beauty of Pakistan with us
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-50 mb-6">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Pakistan Tourism is dedicated to showcasing the breathtaking beauty and rich cultural heritage of Pakistan. 
              From the towering peaks of the Karakoram Range to the pristine valleys of the north, we aim to inspire 
              travelers to explore the diverse landscapes and experiences that Pakistan has to offer.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our mission is to make Pakistan's natural wonders and cultural treasures accessible to travelers from 
              around the world, while promoting sustainable tourism practices that benefit local communities.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-50 mb-8">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -4 }}
                className="p-8 bg-gray-800 rounded-2xl border border-gray-700 hover:border-gray-600 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🗺️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-50 mb-3">Curated Destinations</h3>
                <p className="text-gray-300 leading-relaxed">
                  Explore handpicked destinations that showcase the best of Pakistan's natural beauty and cultural heritage.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -4 }}
                className="p-8 bg-gray-800 rounded-2xl border border-gray-700 hover:border-gray-600 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🎒</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-50 mb-3">Tour Packages</h3>
                <p className="text-gray-300 leading-relaxed">
                  Choose from carefully designed tour packages that offer unforgettable experiences tailored to your preferences.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ y: -4 }}
                className="p-8 bg-gray-800 rounded-2xl border border-gray-700 hover:border-gray-600 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-50 mb-3">Travel Guides</h3>
                <p className="text-gray-300 leading-relaxed">
                  Access comprehensive travel guides, tips, and insights to help you plan your perfect trip to Pakistan.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ y: -4 }}
                className="p-8 bg-gray-800 rounded-2xl border border-gray-700 hover:border-gray-600 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-50 mb-3">Expert Support</h3>
                <p className="text-gray-300 leading-relaxed">
                  Get assistance from our team of travel experts who are passionate about Pakistan and ready to help you.
                </p>
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-50 mb-8">Why Choose Us</h2>
            <ul className="space-y-6">
              {[
                { title: "Local Expertise", desc: "Deep knowledge of Pakistan's destinations and culture" },
                { title: "Sustainable Tourism", desc: "Committed to responsible travel practices" },
                { title: "Quality Service", desc: "Dedicated to providing exceptional travel experiences" },
                { title: "Comprehensive Resources", desc: "Everything you need to plan your trip in one place" }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-6 h-6 bg-blue-600 rounded-full mt-1 flex-shrink-0 flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    <strong className="text-gray-50">{item.title}:</strong> {item.desc}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
