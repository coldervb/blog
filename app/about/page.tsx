import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "About Veer Bam and The Decoded.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-14">

      {/* ── Hero ── */}
      <div className="pb-12 border-b border-[#ddd9d0] animate-fade-up stagger-1">
        <p className="text-[11px] font-semibold tracking-widest text-accent uppercase mb-5">
          About
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 leading-[1.15] mb-7">
          Hi, I'm Veer Bam.
        </h1>
        <p className="text-[1.0625rem] text-gray-600 leading-relaxed max-w-[560px]">
          I'm a student fascinated by economics, policy, and the research that shapes
          how we understand both. I started The Decoded because the most interesting
          work in these fields sits behind dense academic writing and paywalls, and
          most people never see it.
        </p>
      </div>

      {/* ── Sections ── */}
      <div className="divide-y divide-[#ddd9d0]">

        <section className="py-10 animate-fade-up stagger-2">
          <h2 className="font-serif text-xl font-bold text-gray-900 mb-4">
            What this is
          </h2>
          <div className="space-y-4 text-[1rem] text-gray-600 leading-relaxed">
            <p>
              Each article on The Decoded takes one economics or business research paper
              and breaks it down into plain English. I cover the core question, what the
              researchers actually found, why it matters, and what it changes about how
              we think.
            </p>
            <p>
              I focus on papers with real-world implications: monetary policy, market
              behaviour, firm strategy, and the economics of everyday decisions. I also
              cover books when the ideas are worth the same treatment.
            </p>
          </div>
        </section>

        <section className="py-10 animate-fade-up stagger-3">
          <h2 className="font-serif text-xl font-bold text-gray-900 mb-4">
            Background
          </h2>
          <p className="text-[1rem] text-gray-600 leading-relaxed">
            I'm currently studying and reading widely across economics, finance, and
            business strategy. The Decoded is where I think out loud about research I
            find compelling. It keeps me honest about whether I actually understand
            something well enough to explain it clearly.
          </p>
        </section>

        <section className="py-10 animate-fade-up stagger-4">
          <h2 className="font-serif text-xl font-bold text-gray-900 mb-5">
            Get in touch
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:vbam2004@gmail.com"
              className="flex items-center gap-3 border border-[#ddd9d0] bg-white rounded-lg px-5 py-4
                         hover:border-accent transition-colors group"
            >
              <span className="text-[11px] font-semibold text-accent uppercase tracking-widest w-14 shrink-0">
                Email
              </span>
              <span className="text-sm text-gray-700 group-hover:text-accent transition-colors">
                vbam2004@gmail.com
              </span>
            </a>
            <a
              href="https://github.com/coldervb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-[#ddd9d0] bg-white rounded-lg px-5 py-4
                         hover:border-accent transition-colors group"
            >
              <span className="text-[11px] font-semibold text-accent uppercase tracking-widest w-14 shrink-0">
                GitHub
              </span>
              <span className="text-sm text-gray-700 group-hover:text-accent transition-colors">
                coldervb
              </span>
            </a>
          </div>
        </section>

      </div>

      {/* ── CTA ── */}
      <div className="mt-4 pt-10 border-t border-[#ddd9d0] animate-fade-up stagger-5">
        <p className="font-serif text-lg italic text-gray-700 mb-5">
          Want to see what I've been reading?
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium
                     px-5 py-2.5 rounded hover:bg-accent-hover transition-colors"
        >
          Read the blog →
        </Link>
      </div>

    </div>
  );
}
