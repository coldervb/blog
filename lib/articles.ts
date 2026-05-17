import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const articlesDir = path.join(process.cwd(), "content/articles");

export type SourceType = "research paper" | "article" | "book";

export function sourceTypeLabel(type: SourceType | string): string {
  const article = type === "article" ? "an" : "a";
  return `From ${article} ${type}`;
}

export interface ArticleMeta {
  slug: string;
  title: string;
  date: string;
  sourceType: SourceType | string;
  source: string;
  authors: string;
  summary: string;
  tags: string[];
  readTime: string;
  paperUrl?: string;
}

export interface Article extends ArticleMeta {
  content: string;
}

export function getAllArticles(): ArticleMeta[] {
  const files = fs.readdirSync(articlesDir).filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(articlesDir, filename), "utf8");
      const { data, content } = matter(raw);
      const rt = readingTime(content);

      return {
        slug,
        title: data.title ?? "",
        date: data.date ?? "",
        sourceType: data.sourceType ?? "research paper",
        source: data.source ?? "",
        authors: data.authors ?? "",
        summary: data.summary ?? "",
        tags: data.tags ?? [],
        readTime: data.readTime ?? rt.text,
        paperUrl: data.paperUrl,
      } satisfies ArticleMeta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticle(slug: string): Article {
  const filePath = path.join(articlesDir, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const rt = readingTime(content);

  return {
    slug,
    title: data.title ?? "",
    date: data.date ?? "",
    sourceType: data.sourceType ?? "research paper",
    source: data.source ?? "",
    authors: data.authors ?? "",
    summary: data.summary ?? "",
    tags: data.tags ?? [],
    readTime: data.readTime ?? rt.text,
    paperUrl: data.paperUrl,
    content,
  };
}
