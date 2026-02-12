export const metadata = {
  title: "About Us - Pakistan Tourism",
  description: "Learn about Pakistan Tourism and our mission to showcase the beauty of Pakistan",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Discover the beauty of Pakistan with us
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Pakistan Tourism is dedicated to showcasing the breathtaking beauty and rich cultural heritage of Pakistan. 
              From the towering peaks of the Karakoram Range to the pristine valleys of the north, we aim to inspire 
              travelers to explore the diverse landscapes and experiences that Pakistan has to offer.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our mission is to make Pakistan's natural wonders and cultural treasures accessible to travelers from 
              around the world, while promoting sustainable tourism practices that benefit local communities.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🗺️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Curated Destinations</h3>
                <p className="text-gray-600 leading-relaxed">
                  Explore handpicked destinations that showcase the best of Pakistan's natural beauty and cultural heritage.
                </p>
              </div>
              <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🎒</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Tour Packages</h3>
                <p className="text-gray-600 leading-relaxed">
                  Choose from carefully designed tour packages that offer unforgettable experiences tailored to your preferences.
                </p>
              </div>
              <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Travel Guides</h3>
                <p className="text-gray-600 leading-relaxed">
                  Access comprehensive travel guides, tips, and insights to help you plan your perfect trip to Pakistan.
                </p>
              </div>
              <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Get assistance from our team of travel experts who are passionate about Pakistan and ready to help you.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Choose Us</h2>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full mt-1 flex-shrink-0 flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  <strong className="text-gray-900">Local Expertise:</strong> Deep knowledge of Pakistan's destinations and culture
                </p>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full mt-1 flex-shrink-0 flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  <strong className="text-gray-900">Sustainable Tourism:</strong> Committed to responsible travel practices
                </p>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full mt-1 flex-shrink-0 flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  <strong className="text-gray-900">Quality Service:</strong> Dedicated to providing exceptional travel experiences
                </p>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full mt-1 flex-shrink-0 flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  <strong className="text-gray-900">Comprehensive Resources:</strong> Everything you need to plan your trip in one place
                </p>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
