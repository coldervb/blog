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

      <div className="mb-12 animate-fade-up stagger-1">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">
          All Articles
        </h1>
        <p className="text-[15px] text-gray-500">
          {articles.length} {articles.length === 1 ? "article" : "articles"} published.
        </p>
      </div>

      <div className="divide-y divide-[#e8e6e0]">
        {articles.map((article, i) => (
          <article
            key={article.slug}
            className={`py-7 group animate-fade-up stagger-${Math.min(i + 2, 8)}`}
          >
            <Link href={`/articles/${article.slug}`} className="block">

              <div className="flex items-start justify-between gap-6 mb-2">
                <h2 className="text-[1rem] font-semibold text-gray-900 leading-snug
                               group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h2>
                <time
                  dateTime={article.date}
                  className="shrink-0 text-xs text-gray-400 pt-0.5 tabular-nums whitespace-nowrap"
                >
                  {format(parseISO(article.date), "MMM d, yyyy")}
                </time>
              </div>

              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                {article.summary}
              </p>

              <div className="flex items-center justify-between">
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
                <span className="text-xs text-gray-400 shrink-0">{article.readTime}</span>
              </div>

              <p className="text-[11px] text-gray-400 mt-3">
                {sourceTypeLabel(article.sourceType)}
                {article.source && `, ${article.source}`}
              </p>

            </Link>
          </article>
        ))}
      </div>

    </div>
  );
}
