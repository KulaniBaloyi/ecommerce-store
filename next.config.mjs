/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        // Replace with the actual patterns you want to match
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
        },
        {
          protocol: 'https', // Allow both http and https
          hostname: 'img.youtube.com',
        },
        {
            protocol: 'https', // Allow both http and https
            hostname: 'res.cloudinary.com',
          },
      ],
    },
  };
  
  export default nextConfig;