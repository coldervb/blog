import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  outputFileTracingRoot: path.join(__dirname, "../../"),
};

export default nextConfig;
