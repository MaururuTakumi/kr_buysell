/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove 'output: export' for Netlify deployment
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig