/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
            },
            {
                protocol: 'https',
                hostname: 'i.imgur.com',
            },
            {
                protocol: 'https',
                hostname: 'sdcdn.io',
            },
            {
                protocol: 'https',
                hostname: 'm.media-amazon.com',
            }
        ]
    }
};

export default nextConfig;
