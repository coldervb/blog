import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import NavLink from "@/components/NavLink";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "The Decoded", template: "%s — The Decoded" },
  description: "Economics and business research, broken down clearly.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="font-sans bg-paper text-gray-900 min-h-screen">

        {/* ── Header ── */}
        <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-sm border-b border-[#e8e6e0]">
          <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
            <Link
              href="/"
              className="text-[15px] font-semibold text-gray-900 tracking-tight hover:text-blue-600 transition-colors"
            >
              The Decoded
            </Link>
            <nav className="flex items-center gap-7">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/blog">Blog</NavLink>
              <NavLink href="/about">About</NavLink>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        {/* ── Footer ── */}
        <footer className="border-t border-[#e8e6e0] mt-24">
          <div className="max-w-3xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-900">The Decoded</p>
              <p className="text-xs text-gray-400 mt-0.5">
                Economics and business research, broken down clearly.
              </p>
            </div>
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} Veer Bam
            </p>
          </div>
        </footer>

      </body>
    </html>
  );
}
