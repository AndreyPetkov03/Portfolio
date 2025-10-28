/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    quality: 100, // Set default quality to maximum
    formats: ['image/webp', 'image/avif'], // Use modern formats for better quality
  },
};

export default nextConfig;
