import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const nextConfig = {
  webpack: (config, { isServer }) => {
    // Add the MiniCssExtractPlugin to the webpack config
    if (!isServer) {
      config.plugins.push(new MiniCssExtractPlugin());
    }

    return config;
  },
  images: {
    domains: ["utfs.io"]
  }
};

export default nextConfig;
