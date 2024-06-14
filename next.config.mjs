/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
  // fixes wallet connect dependency issue https://docs.walletconnect.com/web3modal/nextjs/about#extra-configuration
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
=======
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'assets.coingecko.com',
                port: '',
                pathname: '**/*',
            },
        ],
    },
>>>>>>> master
};

export default nextConfig;
