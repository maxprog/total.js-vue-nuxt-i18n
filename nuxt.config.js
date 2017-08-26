module.exports = {
  loading: { color: 'cyan' },
  build: {
    vendor: ['vue-i18n']
  },
  router: {
    middleware: 'i18n'
  },
  plugins: ['~/plugins/i18n.js',],
  srcDir: 'vue/',
  generate: {
    dir: 'public',
    routes: ['/', '/about', '/fr', '/fr/about']
  }
}