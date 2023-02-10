/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
    images: {
        domains: [
            "plus.unsplash.com",
            "images.unsplash.com",
            "oscaweb.altustechcorpdev.com",
            "oscabucket.s3.ap-northeast-1.amazonaws.com"
        ]
    }
}
