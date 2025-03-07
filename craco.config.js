const path = require("path");

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.resolve.modules = ["node_modules", "src"];
      webpackConfig.resolve.alias = {
        "@components": path.resolve(__dirname, "src/components"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@types": path.resolve(__dirname, "src/types"),
        "@styles": path.resolve(__dirname, "src/styles"),
        "@utils": path.resolve(__dirname, "src/utils"),
        "@ui": path.resolve(__dirname, "src/ui"),
      };

      return webpackConfig;
    },
  },
};
