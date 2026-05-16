import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./posts/**/*.mdx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "rgb(209 213 219)",
            "--tw-prose-headings": "rgb(243 244 246)",
            "--tw-prose-lead": "rgb(156 163 175)",
            "--tw-prose-links": "rgb(243 244 246)",
            "--tw-prose-bold": "rgb(243 244 246)",
            "--tw-prose-counters": "rgb(156 163 175)",
            "--tw-prose-bullets": "rgb(75 85 99)",
            "--tw-prose-hr": "rgb(31 41 55)",
            "--tw-prose-quotes": "rgb(243 244 246)",
            "--tw-prose-quote-borders": "rgb(55 65 81)",
            "--tw-prose-captions": "rgb(156 163 175)",
            "--tw-prose-code": "rgb(243 244 246)",
            "--tw-prose-pre-code": "rgb(209 213 219)",
            "--tw-prose-pre-bg": "rgb(17 24 39)",
            "--tw-prose-th-borders": "rgb(55 65 81)",
            "--tw-prose-td-borders": "rgb(31 41 55)",
            maxWidth: "none",
            a: {
              textDecoration: "underline",
              textDecorationColor: "rgb(75 85 99)",
              textUnderlineOffset: "3px",
              "&:hover": {
                textDecorationColor: "rgb(156 163 175)",
              },
            },
            code: {
              backgroundColor: "rgb(31 41 55)",
              borderRadius: "0.25rem",
              padding: "0.125rem 0.375rem",
              fontWeight: "400",
              "&::before": { content: '""' },
              "&::after": { content: '""' },
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
