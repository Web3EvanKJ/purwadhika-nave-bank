import Link from "next/link";
import Image from "next/image";
import AddBlog from "./AddBlog";

export type Blog = {
  id: number;
  title: string;
  body: string;
  author: string;
  dates: string;
  image: string;
  objectId?: string;
};

const BlogPreview = async () => {
  const res = await fetch(
    "https://squareburst-us.backendless.app/api/data/blogs"
  );

  if (!res.ok) {
    // throw new Error("Failed to fetch blogs");
    console.log(res);
  }

  const posts: Blog[] = await res.json();
  console.log(posts);

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <AddBlog />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.objectId}`}>
            <div
              key={post.id}
              className="p-6 bg-white shadow-sm hover:shadow-lg transition"
            >
              {post.image && (
                <Image
                  src={post?.image}
                  alt={post.title}
                  width={300}
                  height={200}
                  className=" mb-6 w-full h-48 object-cover"
                />
              )}
              <h2 className="text-2xl font-semibold text-red-600">
                {post.title}
              </h2>
              <p className="text-gray-600 mt-2 line-clamp-4">{post.body}</p>
              <p className="text-sm text-gray-400 mt-2">
                By {post.author} on {post.dates}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default BlogPreview;
