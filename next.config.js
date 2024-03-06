
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  //concurrentFeatures: true,
  swcMinify: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  httpAgentOptions: {
    keepAlive: true,
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['firebasestorage.googleapis.com', 'upload.wikimedia.org'],
  }
  //future: { webpack5: true },
})
