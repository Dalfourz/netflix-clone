/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@stripe/firestore-stripe-payments'],
  images: {
    domains: ['image.tmdb.org', 'rb.gy', 'bit.ly', ],
  },
}

module.exports = nextConfig;