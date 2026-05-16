import Link from "next/link";
import { format, parseISO } from "date-fns";
import { getAllPosts } from "@/lib/posts";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <div>
      <h1 className="mb-12 text-2xl font-semibold tracking-tight text-gray-100">
        Writing
      </h1>
      <ul className="space-y-10">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`} className="group block">
              <article>
                <div className="mb-1 flex items-baseline gap-4">
                  <h2 className="text-base font-medium text-gray-100 group-hover:text-white transition-colors">
                    {post.title}
                  </h2>
                  <time
                    dateTime={post.date}
                    className="shrink-0 text-xs text-gray-600 tabular-nums"
                  >
                    {post.date ? format(parseISO(post.date), "MMM d, yyyy") : ""}
                  </time>
                </div>
                {post.description && (
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {post.description}
                  </p>
                )}
                {post.tags.length > 0 && (
                  <div className="mt-2 flex gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] text-gray-700 bg-gray-900 border border-gray-800 rounded px-1.5 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
