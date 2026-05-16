import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Blog", template: "%s · Blog" },
  description: "Writing on software, design, and ideas.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans antialiased">
        <div className="mx-auto max-w-2xl px-6 py-16">
          <header className="mb-16 flex items-center justify-between">
            <Link href="/" className="text-sm font-medium text-gray-400 hover:text-gray-100 transition-colors">
              blog
            </Link>
            <nav className="flex gap-6 text-sm text-gray-500">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200 transition-colors"
              >
                github
              </a>
            </nav>
          </header>
          <main>{children}</main>
          <footer className="mt-24 border-t border-gray-900 pt-8 text-xs text-gray-700">
            {new Date().getFullYear()}
          </footer>
        </div>
      </body>
    </html>
  );
}
