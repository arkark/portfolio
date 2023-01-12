module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      // Used by @/components/utils/Twemoji
      "cdnjs.cloudflare.com",
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(vert|frag)$/,
      type: "asset/source",
    });
    return config;
  },
};
