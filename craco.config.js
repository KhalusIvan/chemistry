const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@theme": path.resolve(__dirname, "src/theme"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@helpers": path.resolve(__dirname, "src/helpers"),
      "@context": path.resolve(__dirname, "src/context"),
    },
  },
};
