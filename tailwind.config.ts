import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      colors: {
        paper: "#f5f3ee",
        "paper-dark": "#e9e5db",
        accent: {
          DEFAULT: "#14532d",
          hover: "#166534",
          pale: "#f0fdf4",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "#1c1c1c",
            lineHeight: "1.9",
            fontSize: "1.0625rem",
            a: {
              color: "#14532d",
              textDecoration: "underline",
              textUnderlineOffset: "3px",
              "&:hover": { color: "#166534" },
            },
            "h1,h2,h3,h4": {
              color: "#111111",
              fontWeight: "700",
              fontFamily: "var(--font-playfair), Georgia, serif",
            },
            h2: { fontSize: "1.3em", marginTop: "2.25em", marginBottom: "0.75em" },
            h3: { fontSize: "1.1em", marginTop: "2em",    marginBottom: "0.5em"  },
            p:  { marginTop: "1.6em", marginBottom: "1.6em" },
            blockquote: {
              borderLeftColor: "#14532d",
              borderLeftWidth: "3px",
              color: "#374151",
              fontStyle: "normal",
              paddingLeft: "1.25em",
            },
            hr: { borderColor: "#ddd9d0" },
            strong: { color: "#111111" },
            code: {
              color: "#14532d",
              backgroundColor: "#f0fdf4",
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
