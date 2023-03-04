import nextra from 'nextra';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true },
};

const config = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})(nextConfig);

export default config;
