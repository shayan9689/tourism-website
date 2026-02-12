"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Destination } from "@/lib/data";

interface DestinationCardProps {
  destination: Destination;
  index?: number;
}

export default function DestinationCard({ destination, index = 0 }: DestinationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
      whileHover={{ y: -4 }}
    >
      <Link href={`/destinations/${destination.slug}`}>
        <div className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl shadow-soft overflow-hidden hover:shadow-medium transition-all duration-300 h-full border border-gray-100 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600">
          <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
            <Image
              src={destination.image}
              alt={destination.name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 33vw"
              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5">
              <h3 className="text-white text-lg md:text-2xl font-bold mb-1 drop-shadow-lg line-clamp-1">{destination.name}</h3>
              <p className="text-white/90 text-xs md:text-sm font-medium">{destination.location}</p>
            </div>
          </div>
          <div className="p-3 md:p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-3 md:mb-4 line-clamp-2 leading-relaxed text-sm md:text-base">{destination.shortDescription}</p>
            <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-gray-100 dark:border-gray-700">
              <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium line-clamp-1">
                {destination.bestTimeToVisit}
              </span>
              <span className="text-blue-600 dark:text-blue-400 font-bold text-lg md:text-xl group-hover:translate-x-1 transition-transform duration-200">→</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
