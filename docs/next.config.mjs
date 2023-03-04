import nextra from 'nextra';

/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true, distDir: 'dist' };

const config = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})(nextConfig);

export default config;
