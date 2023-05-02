/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@stripe/firestore-stripe-payments'],
  images: {
    domains: ['image.tmdb.org', 'rb.gy', ],
  },
}

module.exports = nextConfig;