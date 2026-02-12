import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/data";
import { formatDate } from "@/lib/utils";

export const metadata = {
  title: "Travel Blog - Pakistan Tourism",
  description: "Read our latest travel guides, tips, and stories about Pakistan's most beautiful destinations",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Travel Blog</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Stories, guides, and tips for your Pakistan adventure
          </p>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-medium transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-500 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100 mb-4">
                  <span className="font-medium">{post.author}</span>
                  <span>{formatDate(post.date)}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-50 text-gray-700 px-3 py-1 rounded-lg text-xs font-medium border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
