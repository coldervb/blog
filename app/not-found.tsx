import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-24 text-center">
      <p className="text-sm text-gray-400 mb-3">404 — Page not found</p>
      <Link href="/" className="text-sm text-blue-600 hover:text-blue-700 transition-colors">
        ← Back to articles
      </Link>
    </div>
  );
}
