import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllArticles, getArticle, sourceTypeLabel } from "@/lib/articles";
import type { Metadata } from "next";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const article = getArticle(slug);
    return { title: article.title, description: article.summary };
  } catch {
    return {};
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;

  let article;
  try {
    article = getArticle(slug);
  } catch {
    notFound();
  }

  return (
    <article>
      {/* Back */}
      <Link
        href="/"
        className="inline-block text-sm text-gray-400 hover:text-blue-600 transition-colors mb-10"
      >
        ← All articles
      </Link>

      {/* Header */}
      <header className="mb-10">
        <h1 className="text-[1.75rem] font-bold text-gray-900 leading-[1.25] tracking-tight mb-6">
          {article.title}
        </h1>

        {/* Meta */}
        <div className="space-y-1.5 text-sm text-gray-500 mb-6">
          <div className="flex items-center gap-2 flex-wrap">
            {article.date && (
              <time dateTime={article.date}>
                {format(parseISO(article.date), "MMMM d, yyyy")}
              </time>
            )}
            <span className="text-gray-300">·</span>
            <span>{article.readTime}</span>
          </div>

          <div className="flex items-center gap-2 flex-wrap text-gray-500">
            <span className="font-medium">{sourceTypeLabel(article.sourceType)}</span>
            {article.source && (
              <>
                <span className="text-gray-300">·</span>
                <span className="italic text-gray-400">{article.source}</span>
              </>
            )}
          </div>

          {article.authors && (
            <div className="text-gray-400">{article.authors}</div>
          )}

          {article.paperUrl && (
            <a
              href={article.paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700
                         transition-colors no-underline font-medium text-sm mt-1"
            >
              View original paper ↗
            </a>
          )}
        </div>

        {/* Tags */}
        {article.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-8 border-t border-gray-100" />
      </header>

      {/* Body */}
      <div className="prose prose-sm max-w-none">
        <MDXRemote source={article.content} />
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-gray-100">
        <Link
          href="/"
          className="text-sm text-gray-400 hover:text-blue-600 transition-colors"
        >
          ← All articles
        </Link>
      </div>
    </article>
  );
}
