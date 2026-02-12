import { notFound } from "next/navigation";
import Image from "next/image";
import { blogPosts } from "@/lib/data";
import { formatDate } from "@/lib/utils";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export const dynamicParams = true;

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - Pakistan Tourism Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="mb-4">
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {post.title}
          </h1>
          <div className="flex items-center space-x-4 text-white/90">
            <span>{post.author}</span>
            <span>•</span>
            <span>{formatDate(post.date)}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            {post.excerpt}
          </p>
          <div className="text-gray-700 leading-relaxed whitespace-pre-line">
            {post.content}
          </div>
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
