"use client";

import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { motion } from "framer-motion";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1511497584788-876760111969?w=1920&q=90"
          alt="Travel Blog"
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
              Travel Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-white/90 max-w-2xl"
            >
              Stories, guides, and tips for your Pakistan adventure
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                  className="bg-gray-800 rounded-xl md:rounded-2xl shadow-soft overflow-hidden hover:shadow-medium transition-all duration-300 border border-gray-700 hover:border-gray-600 group block"
              >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-2 left-2 md:top-4 md:left-4">
                  <span className="bg-blue-600/90 text-white px-2 py-1 md:px-4 md:py-2 rounded-lg md:rounded-xl text-xs md:text-sm font-semibold shadow-lg backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-50 mb-2 md:mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-3 md:mb-4 line-clamp-3 leading-relaxed text-sm md:text-base">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs md:text-sm text-gray-400 pt-3 md:pt-4 border-t border-gray-700 mb-3 md:mb-4">
                  <span className="font-medium truncate pr-2">{post.author}</span>
                  <span className="whitespace-nowrap">{formatDate(post.date)}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-0.5 md:px-3 md:py-1 rounded-md md:rounded-lg text-xs font-medium border border-blue-200 dark:border-blue-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
