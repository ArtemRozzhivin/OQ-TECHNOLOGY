/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'assets.algoexpert.io',
                pathname: '**'
            }
        ]
    }
}

export default nextConfig
