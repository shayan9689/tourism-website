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
    >
      <div className="bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-medium transition-all duration-300 h-full flex flex-col border border-gray-100 hover:border-blue-200">
        <Link href={`/packages/${tourPackage.slug}`}>
          <div className="relative h-64 overflow-hidden">
            <Image
              src={tourPackage.image}
              alt={tourPackage.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
              {tourPackage.duration}
            </div>
          </div>
        </Link>
        <div className="p-6 flex-1 flex flex-col">
          <Link href={`/packages/${tourPackage.slug}`}>
            <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">{tourPackage.name}</h3>
          </Link>
          <p className="text-gray-600 mb-4 line-clamp-2 flex-1 leading-relaxed">{tourPackage.description}</p>
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
                <span className="text-2xl font-bold text-emerald-600">
                  Rs/-
                </span>
                <span className="text-gray-500 text-sm ml-2">per person</span>
              </div>
            </div>
            <Link
              href={`/packages/${tourPackage.slug}`}
              className="block w-full text-center bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
