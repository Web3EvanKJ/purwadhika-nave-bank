import { Blog } from "@/components/BlogPreview";
import Image from "next/image";
import { Calendar, User } from "lucide-react";

export default async function BlogDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  const res = await fetch(
    `https://squareburst-us.backendless.app/api/data/blogs/${id}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const post: Blog = await res.json();

  if (!post)
    return (
      <p className="text-center py-20 text-gray-500 text-lg">Post not found</p>
    );

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Blog Header */}
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent mb-4 leading-snug">
        {post.title}
      </h1>

      <div className="flex items-center gap-4 text-gray-500 text-sm mb-8">
        <span className="flex items-center gap-1">
          <User size={16} /> {post.author}
        </span>
        <span className="flex items-center gap-1">
          <Calendar size={16} /> {post.dates}
        </span>
      </div>

      {/* Featured Image */}
      <div className="relative w-full sm:h-[200px] sm:mb-10 md:h-[500px] md:mb-20">
        {post.image && (
          <Image
            src={post?.image}
            alt={post.title}
            width={300}
            height={200}
            className="rounded-lg shadow-lg mb-6 w-full object-cover"
          />
        )}
      </div>
      {/* Blog Content */}
      <article className="leading-relaxed text-gray-800">{post.body}</article>
    </div>
  );
}
