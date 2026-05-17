import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "#111827",
            lineHeight: "1.8",
            fontSize: "0.9375rem",
            a: {
              color: "#2563eb",
              textDecoration: "underline",
              textUnderlineOffset: "2px",
              "&:hover": { color: "#1d4ed8" },
            },
            "h1,h2,h3,h4": { color: "#111827", fontWeight: "600" },
            h2: { fontSize: "1.125em", marginTop: "2em", marginBottom: "0.75em" },
            h3: { fontSize: "1em",     marginTop: "1.75em", marginBottom: "0.5em" },
            blockquote: {
              borderLeftColor: "#2563eb",
              color: "#374151",
              fontStyle: "normal",
            },
            hr: { borderColor: "#f3f4f6" },
            strong: { color: "#111827" },
            code: {
              color: "#1d4ed8",
              backgroundColor: "#eff6ff",
              borderRadius: "0.25rem",
              padding: "0.1em 0.35em",
              fontWeight: "400",
              "&::before": { content: '""' },
              "&::after":  { content: '""' },
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
