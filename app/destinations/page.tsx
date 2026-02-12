"use client";

import { useState, Suspense } from "react";
import DestinationCard from "@/components/DestinationCard";
import { destinations } from "@/lib/data";
import { useSearchParams } from "next/navigation";

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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Destinations</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Explore the breathtaking beauty of Pakistan
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-soft p-8 mb-8 border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Filter Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Location Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Location
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Best Time to Visit
              </label>
              <select
                value={selectedBestTime}
                onChange={(e) => setSelectedBestTime(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-700 text-lg">
            Showing <span className="font-bold text-gray-900">{filteredDestinations.length}</span>{" "}
            destination{filteredDestinations.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Destinations Grid */}
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination, index) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No destinations found matching your criteria.
            </p>
          </div>
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
