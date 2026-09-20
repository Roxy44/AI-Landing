import type { NextConfig } from 'next';

const repoName = 'AI-Landing';
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const basePath = isGithubPages ? `/${repoName}` : '';

const nextConfig: NextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
    // Hide Next.js dev indicator (routes / bundler badge near Upgrade)
    devIndicators: false,
    basePath: basePath || undefined,
    assetPrefix: basePath ? `${basePath}/` : undefined,
    env: {
        NEXT_PUBLIC_BASE_PATH: basePath,
    },
};

export default nextConfig;
