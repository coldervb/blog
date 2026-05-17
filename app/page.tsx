import Link from "next/link";
import { format, parseISO } from "date-fns";
import { getAllArticles, sourceTypeLabel } from "@/lib/articles";

export default function HomePage() {
  const recent = getAllArticles().slice(0, 3);

  return (
    <div className="max-w-3xl mx-auto px-6">

      {/* ── Hero ── */}
      <section className="pt-16 pb-14 border-b border-[#ddd9d0] animate-fade-up stagger-1">
        <p className="text-[11px] font-semibold tracking-widest text-accent uppercase mb-5">
          The Decoded
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6">
          Research, decoded
          <br className="hidden sm:block" />
          <em className="font-normal"> for everyone.</em>
        </h1>
        <p className="text-[1.0625rem] text-gray-600 leading-relaxed max-w-[500px] mb-10">
          Economics and business research papers, broken down into plain English.
          No jargon. No paywalls. Just the ideas that matter.
        </p>
        <div className="flex items-center gap-5">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium
                       px-5 py-2.5 rounded hover:bg-accent-hover transition-colors"
          >
            Read the blog
          </Link>
          <Link
            href="/about"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            About Veer
          </Link>
        </div>
      </section>

      {/* ── Recent articles ── */}
      <section className="py-14">
        <div className="flex items-center justify-between mb-8 animate-fade-up stagger-2">
          <h2 className="font-serif text-2xl font-bold italic text-gray-900">
            Recent articles
          </h2>
          <Link
            href="/blog"
            className="text-xs font-semibold text-accent hover:text-accent-hover transition-colors tracking-wide uppercase"
          >
            View all →
          </Link>
        </div>

        <div className="space-y-5">
          {recent.map((article, i) => (
            <article
              key={article.slug}
              className={`animate-fade-up stagger-${i + 3}`}
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
                <h3 className="font-serif text-[1.2rem] font-bold text-gray-900 leading-snug mb-3
                               group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <p className="text-[0.9375rem] text-gray-600 leading-relaxed">
                  {article.summary}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}
