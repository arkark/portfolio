module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      // Used by @/components/utils/Twemoji
      "twemoji.maxcdn.com",
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
