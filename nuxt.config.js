module.exports = {
  /*
  ** Headers of the page
  */
  mode: 'universal',
  head: {
    title: 'Stethoscope App',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Cloud clinical management system - Stechoscope App' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  css: [
    { src: '@/assets/main.scss' },
    { src: 'normalize.css/normalize.css', lang: 'css' },
    { src: 'sanitize.css/sanitize.css', lang: 'css' },
    { src: 'flexboxgrid/dist/flexboxgrid.min.css', lang: 'css' }
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  build: {
    vendor: ['axios'],
    analyze: true,
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    // You cannot use ~/ or @/ here since it's a Webpack plugin
    styleResources: {
      scss: ['./assets/variables.scss', './assets/functions.scss', './assets/mixins.scss'],
      less: './assets/*.less'
    }
  }
}
