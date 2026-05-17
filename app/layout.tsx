import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import NavLink from "@/components/NavLink";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: { default: "The Decoded", template: "%s — The Decoded" },
  description: "Economics and business research, broken down clearly.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${playfair.variable}`}>
      <body className="font-sans bg-paper text-gray-900 min-h-screen">

        {/* ── Header ── */}
        <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm border-b border-[#ddd9d0]">
          <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link
              href="/"
              className="font-serif text-[1.125rem] font-bold italic text-gray-900 hover:text-accent transition-colors"
            >
              The Decoded
            </Link>
            <nav className="flex items-center gap-8">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/blog">Blog</NavLink>
              <NavLink href="/about">About</NavLink>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        {/* ── Footer ── */}
        <footer className="border-t border-[#ddd9d0] mt-24 bg-paper-dark">
          <div className="max-w-3xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-serif text-base font-bold italic text-gray-900">The Decoded</p>
              <p className="text-xs text-gray-500 mt-1">
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
