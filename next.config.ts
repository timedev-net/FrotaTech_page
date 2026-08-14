import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // GitHub Pages serves project sites below /<repository-name>. The workflow
  // provides that value at build time; local builds keep the root path.
  basePath,
  assetPrefix: basePath || undefined,
  output: "export",
  typescript: {
    // The Pages export has no Worker or D1 runtime. Keep its type check scoped
    // to the static application while retaining the existing Vinext config.
    tsconfigPath: "tsconfig.pages.json",
  },
};

export default nextConfig;
