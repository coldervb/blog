import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "The Brief", template: "%s — The Brief" },
  description: "Economics and business research papers, broken down clearly.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="font-sans bg-white text-gray-900 min-h-screen">
        <div className="max-w-[680px] mx-auto px-6">

          <header className="py-7 border-b border-gray-100">
            <Link
              href="/"
              className="text-[15px] font-semibold text-gray-900 hover:text-blue-600 transition-colors"
            >
              The Brief
            </Link>
          </header>

          <main className="py-12">{children}</main>

          <footer className="py-8 border-t border-gray-100 text-xs text-gray-400">
            © {new Date().getFullYear()} The Brief
          </footer>

        </div>
      </body>
    </html>
  );
}
