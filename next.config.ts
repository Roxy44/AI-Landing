import type { NextConfig } from 'next';

const repoName = 'AI-Landing';
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
    // Hide Next.js dev indicator (routes / bundler badge near Upgrade)
    devIndicators: false,
    ...(isGithubPages
        ? {
              basePath: `/${repoName}`,
              assetPrefix: `/${repoName}/`,
          }
        : {}),
};

export default nextConfig;
