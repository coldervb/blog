import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "About Veer Bam and The Decoded.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-14">

      {/* ── Intro ── */}
      <div className="mb-16 animate-fade-up stagger-1">
        <p className="text-xs font-medium tracking-widest text-blue-600 uppercase mb-4">
          About
        </p>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-6">
          Hi, I'm Veer Bam.
        </h1>
        <p className="text-[1.0625rem] text-gray-600 leading-relaxed max-w-[560px]">
          I'm a student fascinated by economics, policy, and the research that shapes
          how we understand both. I started The Decoded because most interesting
          research sits behind dense academic writing and paywalls.
        </p>
      </div>

      {/* ── Sections ── */}
      <div className="space-y-0 divide-y divide-[#e8e6e0]">

        <section className="py-10 animate-fade-up stagger-2">
          <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
            What I do here
          </h2>
          <p className="text-[15px] text-gray-600 leading-relaxed mb-4">
            Each article on The Decoded takes one economics or business research paper
            and breaks it down into plain English. I cover the core question, what the
            researchers found, why it matters, and what it changes about how we think.
          </p>
          <p className="text-[15px] text-gray-600 leading-relaxed">
            I focus on papers that have real-world implications: monetary policy,
            market behaviour, firm strategy, and the economics of everyday decisions.
          </p>
        </section>

        <section className="py-10 animate-fade-up stagger-3">
          <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
            Background
          </h2>
          <p className="text-[15px] text-gray-600 leading-relaxed">
            I'm currently studying and spending time reading widely across economics,
            finance, and business strategy. The Decoded is where I think out loud about
            research I find compelling.
          </p>
        </section>

        <section className="py-10 animate-fade-up stagger-4">
          <h2 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
            Contact
          </h2>
          <div className="space-y-2 text-[15px]">
            <p>
              <a
                href="mailto:vbam2004@gmail.com"
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                vbam2004@gmail.com
              </a>
            </p>
            <p>
              <a
                href="https://github.com/coldervb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                github.com/coldervb
              </a>
            </p>
          </div>
        </section>

      </div>

      {/* ── CTA ── */}
      <div className="mt-12 pt-10 border-t border-[#e8e6e0] animate-fade-up stagger-5">
        <p className="text-[15px] text-gray-600 mb-4">
          Want to see what I've been reading?
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-medium
                     px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Read the blog
        </Link>
      </div>

    </div>
  );
}
