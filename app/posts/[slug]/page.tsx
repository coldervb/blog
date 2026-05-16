import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost } from "@/lib/posts";
import type { Metadata } from "next";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPost(slug);
    return { title: post.title, description: post.description };
  } catch {
    return {};
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = getPost(slug);
  } catch {
    notFound();
  }

  return (
    <div>
      <Link
        href="/"
        className="mb-12 inline-flex items-center gap-1 text-xs text-gray-600 hover:text-gray-300 transition-colors"
      >
        ← all posts
      </Link>

      <header className="mt-8 mb-12">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-100 mb-3">
          {post.title}
        </h1>
        <div className="flex items-center gap-4">
          {post.date && (
            <time dateTime={post.date} className="text-sm text-gray-600 tabular-nums">
              {format(parseISO(post.date), "MMMM d, yyyy")}
            </time>
          )}
          {post.tags.length > 0 && (
            <div className="flex gap-2">
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
        </div>
        {post.description && (
          <p className="mt-4 text-sm text-gray-500 leading-relaxed">
            {post.description}
          </p>
        )}
      </header>

      <article className="prose prose-sm max-w-none">
        <MDXRemote source={post.content} />
      </article>
    </div>
  );
}
