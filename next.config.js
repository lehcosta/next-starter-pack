const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')
const withOptimizedImages = require('next-optimized-images')
const withFonts = require('next-fonts')
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')

const env = require('./env-config')

const nextConfig = {
  env: {
    BACKEND_URL: env.BACKEND_URL,
  },
}

module.exports = withPlugins([
  [withTM, {}],
  withOptimizedImages,
  withFonts,
  [
    withBundleAnalyzer,
    {
      analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
      analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
      bundleAnalyzerConfig: {
        server: {
          analyzerMode: 'static',
          reportFilename: '../bundles/server.html',
        },
        browser: {
          analyzerMode: 'static',
          reportFilename: '../bundles/client.html',
        },
      },
    },
  ],
  nextConfig,
])
