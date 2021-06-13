const fs = require("fs");
const { join } = require("path");
const { promisify } = require("util");
const copyFile = promisify(fs.copyFile);

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  sassOptions: {
    includePaths: [join(__dirname, "pages")],
  },

  devIndicators: {
    autoPrerender: false,
  },

  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    if (dev) {
      return defaultPathMap;
    }
    // This will copy robots.txt from your project root into the out directory
    await copyFile(join(dir, "/data/schema/", "001_person-main.js"), join(outDir, "/static/schema.json"));
    await copyFile(join(dir, "CNAME"), join(outDir, "/CNAME"));
    await copyFile(join(dir, ".nojekyll"), join(outDir, ".nojekyll"));
    return defaultPathMap;
  },

  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty",
    };

    return config;
  },
});
