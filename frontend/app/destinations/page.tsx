"use client";

import { useState, Suspense } from "react";
import DestinationCard from "@/components/DestinationCard";
import { destinations } from "@/lib/data";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

function DestinationsContent() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  
  const [selectedLocation, setSelectedLocation] = useState<string>("all");
  const [selectedBestTime, setSelectedBestTime] = useState<string>("all");

  const locations = Array.from(new Set(destinations.map((d) => d.location)));
  const bestTimes = Array.from(new Set(destinations.map((d) => d.bestTimeToVisit)));

  let filteredDestinations = destinations;

  // Filter by search query
  if (searchQuery) {
    filteredDestinations = filteredDestinations.filter(
      (dest) =>
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Filter by location
  if (selectedLocation !== "all") {
    filteredDestinations = filteredDestinations.filter(
      (dest) => dest.location === selectedLocation
    );
  }

  // Filter by best time
  if (selectedBestTime !== "all") {
    filteredDestinations = filteredDestinations.filter(
      (dest) => dest.bestTimeToVisit === selectedBestTime
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1612128952123-88ed13410495?w=1920&q=90"
          alt="Destinations"
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
              Destinations
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-white/90 max-w-2xl"
            >
              Explore the breathtaking beauty of Pakistan
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 rounded-2xl shadow-soft p-8 mb-8 border border-gray-700"
        >
          <h2 className="text-2xl font-semibold text-gray-50 mb-6">Filter Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Location Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Location
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                <option value="all">All Locations</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>

            {/* Best Time Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Best Time to Visit
              </label>
              <select
                value={selectedBestTime}
                onChange={(e) => setSelectedBestTime(e.target.value)}
                className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                <option value="all">Any Time</option>
                {bestTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <p className="text-gray-300 text-lg">
            Showing <span className="font-bold text-gray-50">{filteredDestinations.length}</span>{" "}
            destination{filteredDestinations.length !== 1 ? "s" : ""}
          </p>
        </motion.div>

        {/* Destinations Grid */}
        {filteredDestinations.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredDestinations.map((destination, index) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                index={index}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <p className="text-gray-300 text-lg">
              No destinations found matching your criteria.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default function DestinationsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <DestinationsContent />
    </Suspense>
  );
}
