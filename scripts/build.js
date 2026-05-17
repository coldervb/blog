const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// Run Next.js build
execSync("npx next build", { stdio: "inherit" });

// opennext requires pages-manifest.json even for App Router projects
const serverDir = ".next/standalone/.next/server";
fs.mkdirSync(serverDir, { recursive: true });
const manifestPath = path.join(serverDir, "pages-manifest.json");
if (!fs.existsSync(manifestPath)) fs.writeFileSync(manifestPath, "{}");

// When opennext re-invokes `npm run build` internally, stop here to avoid a loop
if (process.env.OPENNEXT_RUNNING) process.exit(0);

// Bundle for Cloudflare Workers (sets OPENNEXT_RUNNING so the re-entry above exits early)
execSync("npx --yes @opennextjs/cloudflare@1.19.10 build", {
  stdio: "inherit",
  env: { ...process.env, OPENNEXT_RUNNING: "1" },
});
