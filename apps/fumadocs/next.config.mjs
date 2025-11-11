import { createMDX } from "fumadocs-mdx/next"

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactCompiler: true,
  transpilePackages: ["@repo/utils"],
}

const withMDX = createMDX()

export default withMDX(nextConfig)
