const path = require("path");

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("ts-loader")
      },
      {
        loader: require.resolve("react-docgen-typescript-loader")
      }
    ]
  });
  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};
