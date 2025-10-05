import type {NextConfig} from 'next';

const vercelUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined;

const remotePatterns: NextConfig['images']['remotePatterns'] = [
  { protocol: 'https', hostname: 'placehold.co' },
  { protocol: 'https', hostname: 'images.unsplash.com' },
  { protocol: 'https', hostname: 'picsum.photos' },
];

if (vercelUrl) {
  remotePatterns.push({
    protocol: 'https',
    hostname: new URL(vercelUrl).hostname,
  });
}

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns,
  },
};

export default nextConfig;
