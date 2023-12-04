/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'blombruket.se',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig
