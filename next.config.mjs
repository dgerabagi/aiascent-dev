// FILE: next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Add any domains you need to load images from here if necessary in the future
        remotePatterns: [
            // Example: { protocol: "https", hostname: "example.com" },
        ],
    },
    webpack: (config, { isServer }) => {
        // When building for the server, we don't want to bundle `faiss-node`
        // because it's a native addon. Next.js/Webpack will try to bundle it,
        // which fails. Marking it as external tells Webpack to leave it as a
        // regular `require('faiss-node')` call, which will be resolved by Node.js
        // at runtime on the server.
        if (isServer) {
            config.externals = [...config.externals, 'faiss-node'];
        }

        return config;
    },
};

export default nextConfig;