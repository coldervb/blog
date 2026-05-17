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
    <div className="max-w-3xl mx-auto px-6 py-12">

      {/* Back */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-accent
                   transition-colors mb-10 animate-fade-in"
      >
        ← All articles
      </Link>

      {/* Header */}
      <header className="mb-12 animate-fade-up stagger-1">

        {/* Source label */}
        <p className="text-[11px] font-semibold text-accent uppercase tracking-widest mb-4">
          {sourceTypeLabel(article.sourceType)}
          {article.source && ` · ${article.source}`}
        </p>

        {/* Title */}
        <h1 className="font-serif text-[2.5rem] sm:text-5xl font-bold text-gray-900
                       leading-[1.15] tracking-tight mb-6">
          {article.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500 mb-5">
          {article.date && (
            <time dateTime={article.date} className="tabular-nums">
              {format(parseISO(article.date), "MMMM d, yyyy")}
            </time>
          )}
          {article.readTime && (
            <>
              <span className="text-gray-300">·</span>
              <span>{article.readTime}</span>
            </>
          )}
          {article.authors && (
            <>
              <span className="text-gray-300">·</span>
              <span className="italic text-gray-500">{article.authors}</span>
            </>
          )}
          {article.paperUrl && (
            <>
              <span className="text-gray-300">·</span>
              <a
                href={article.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover transition-colors font-medium"
              >
                View source ↗
              </a>
            </>
          )}
        </div>

        {/* Tags */}
        {article.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-7">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] text-accent bg-accent-pale px-2.5 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Standfirst */}
        {article.summary && (
          <div className="border-l-[3px] border-accent pl-5 py-0.5 mb-8">
            <p className="text-[1.0625rem] text-gray-700 leading-relaxed font-medium">
              {article.summary}
            </p>
          </div>
        )}

        <div className="border-t border-[#ddd9d0]" />
      </header>

      {/* Body */}
      <div className="prose max-w-none animate-fade-up stagger-2">
        <MDXRemote source={article.content} />
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-[#ddd9d0]">
        <Link
          href="/blog"
          className="text-sm text-gray-400 hover:text-accent transition-colors"
        >
          ← Back to all articles
        </Link>
      </div>

    </div>
  );
}
