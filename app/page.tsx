import Link from "next/link";
import { format, parseISO } from "date-fns";
import { getAllArticles, sourceTypeLabel } from "@/lib/articles";

export default function HomePage() {
  const recent = getAllArticles().slice(0, 3);

  return (
    <div className="max-w-3xl mx-auto px-6">

      {/* ── Hero ── */}
      <section className="py-20 animate-fade-up stagger-1">
        <p className="text-xs font-medium tracking-widest text-blue-600 uppercase mb-4">
          The Decoded
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-[1.15] tracking-tight mb-6">
          Research, decoded<br className="hidden sm:block" /> for everyone.
        </h1>
        <p className="text-[1.0625rem] text-gray-500 leading-relaxed max-w-[500px] mb-10">
          Economics and business research papers, broken down into plain English.
          No jargon. No paywalls. Just the ideas that matter.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-medium
                       px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Read the blog
          </Link>
          <Link
            href="/about"
            className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
          >
            About Veer
          </Link>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="border-t border-[#e8e6e0] animate-fade-in stagger-2" />

      {/* ── Recent articles ── */}
      <section className="py-14">
        <div className="flex items-center justify-between mb-8 animate-fade-up stagger-2">
          <h2 className="text-sm font-semibold text-gray-900 tracking-wide uppercase">
            Recent articles
          </h2>
          <Link
            href="/blog"
            className="text-xs text-blue-600 hover:text-blue-700 transition-colors font-medium"
          >
            View all
          </Link>
        </div>

        <div className="space-y-0 divide-y divide-[#e8e6e0]">
          {recent.map((article, i) => (
            <article
              key={article.slug}
              className={`py-7 animate-fade-up stagger-${i + 3}`}
            >
              <Link href={`/articles/${article.slug}`} className="group block">
                <div className="flex items-start justify-between gap-6 mb-2">
                  <h3 className="text-[1rem] font-semibold text-gray-900 leading-snug
                                 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <time
                    dateTime={article.date}
                    className="shrink-0 text-xs text-gray-400 pt-0.5 tabular-nums whitespace-nowrap"
                  >
                    {format(parseISO(article.date), "MMM d, yyyy")}
                  </time>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">
                  {article.summary}
                </p>
                <p className="text-[11px] text-gray-400">
                  {sourceTypeLabel(article.sourceType)}
                  {article.source && `, ${article.source}`}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}
