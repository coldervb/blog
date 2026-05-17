import Link from "next/link";
import { format, parseISO } from "date-fns";
import { getAllArticles, sourceTypeLabel } from "@/lib/articles";

export default function HomePage() {
  const articles = getAllArticles();

  return (
    <div>
      <div className="mb-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Research Papers</h1>
        <p className="text-[15px] text-gray-500 leading-relaxed">
          Economics and business research, explained in plain English.
        </p>
      </div>

      <div className="divide-y divide-gray-100">
        {articles.map((article) => (
          <article key={article.slug} className="py-8 group">
            <Link href={`/articles/${article.slug}`} className="block">

              {/* Title + date */}
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

              {/* Summary */}
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {article.summary}
              </p>

              {/* Tags + read time */}
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

              {/* Source */}
              <p className="text-[11px] text-gray-400 mt-3">
                <span className="text-gray-500">
                  {sourceTypeLabel(article.sourceType)}
                </span>
                {article.source && (
                  <span> — {article.source}</span>
                )}
              </p>

            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
