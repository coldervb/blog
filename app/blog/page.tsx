import Link from "next/link";
import { format, parseISO } from "date-fns";
import { getAllArticles, sourceTypeLabel } from "@/lib/articles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "All articles on The Decoded.",
};

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <div className="max-w-3xl mx-auto px-6 py-14">

      <div className="mb-10 pb-8 border-b border-[#ddd9d0] animate-fade-up stagger-1">
        <h1 className="font-serif text-4xl font-bold text-gray-900 mb-2">
          All Articles
        </h1>
        <p className="text-[15px] text-gray-500">
          {articles.length} {articles.length === 1 ? "article" : "articles"} published.
        </p>
      </div>

      <div className="space-y-5">
        {articles.map((article, i) => (
          <article
            key={article.slug}
            className={`animate-fade-up stagger-${Math.min(i + 2, 8)}`}
          >
            <Link
              href={`/articles/${article.slug}`}
              className="group block bg-white border border-[#ddd9d0] rounded-lg p-6
                         hover:border-accent hover:shadow-sm transition-all"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <p className="text-[11px] font-semibold text-accent uppercase tracking-widest">
                  {sourceTypeLabel(article.sourceType)}
                  {article.source && ` · ${article.source}`}
                </p>
                <time
                  dateTime={article.date}
                  className="shrink-0 text-xs text-gray-400 tabular-nums whitespace-nowrap"
                >
                  {format(parseISO(article.date), "MMM d, yyyy")}
                </time>
              </div>

              <h2 className="font-serif text-[1.2rem] font-bold text-gray-900 leading-snug mb-3
                             group-hover:text-accent transition-colors">
                {article.title}
              </h2>

              <p className="text-[0.9375rem] text-gray-600 leading-relaxed mb-4">
                {article.summary}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] text-accent bg-accent-pale px-2.5 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-gray-400 shrink-0">{article.readTime}</span>
              </div>
            </Link>
          </article>
        ))}
      </div>

    </div>
  );
}
