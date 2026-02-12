"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { TourPackage } from "@/lib/data";

interface PackageCardProps {
  tourPackage: TourPackage;
  index?: number;
}

export default function PackageCard({ tourPackage, index = 0 }: PackageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
      whileHover={{ y: -4 }}
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-soft overflow-hidden hover:shadow-medium transition-all duration-300 h-full flex flex-col border border-gray-100 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600">
        <Link href={`/packages/${tourPackage.slug}`}>
          <div className="relative h-64 overflow-hidden">
            <Image
              src={tourPackage.image}
              alt={tourPackage.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute top-4 right-4 bg-gray-800/90 dark:bg-gray-900/90 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg backdrop-blur-sm">
              {tourPackage.duration}
            </div>
          </div>
        </Link>
        <div className="p-6 flex-1 flex flex-col">
          <Link href={`/packages/${tourPackage.slug}`}>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">{tourPackage.name}</h3>
          </Link>
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 flex-1 leading-relaxed">{tourPackage.description}</p>
          <div className="mb-4">
            <p className="text-sm text-gray-500 mb-2 font-medium">Destinations:</p>
            <div className="flex flex-wrap gap-2">
              {tourPackage.destinations.map((dest, idx) => (
                <span
                  key={idx}
                  className="bg-gray-50 text-gray-700 px-3 py-1 rounded-lg text-xs font-medium border border-gray-200"
                >
                  {dest}
                </span>
              ))}
            </div>
          </div>
          <div className="pt-4 border-t border-gray-100 mt-auto">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-2xl font-bold text-gray-700 dark:text-gray-300">
                  Rs/-
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">per person</span>
              </div>
            </div>
            <Link
              href={`/packages/${tourPackage.slug}`}
              className="block w-full text-center bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
