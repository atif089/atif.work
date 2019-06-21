const withSass = require("@zeit/next-sass");

const fs = require("fs");
const { join } = require("path");
const { promisify } = require("util");
const copyFile = promisify(fs.copyFile);

module.exports = withSass({
  exportPathMap: async function(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    if (dev) {
      return defaultPathMap;
    }
    // This will copy robots.txt from your project root into the out directory
    await copyFile(join(dir, "/data/schema/", "001_person-main.js"), join(outDir, "/static/schema.json"));
    return defaultPathMap;
  },

  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };

    return config;
  }
});
