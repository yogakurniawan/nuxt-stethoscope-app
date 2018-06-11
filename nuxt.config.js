const path = require('path')

module.exports = {
  /*
   ** Headers of the page
   */
  mode: 'universal',
  head: {
    title: 'Stethoscope App',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Cloud clinical management system - Stechoscope App'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  plugins: [{
      src: '~plugins/firebase.js',
      ssr: false
    },
    {
      src: '~plugins/common.js'
    },
    {
      src: '~plugins/axios.js'
    }
  ],
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  /*
   ** Build configuration
   */
  css: [{
      src: '@/assets/main.scss'
    },
    {
      src: 'normalize.css/normalize.css',
      lang: 'css'
    },
    {
      src: 'sanitize.css/sanitize.css',
      lang: 'css'
    },
    {
      src: 'flexboxgrid/dist/flexboxgrid.min.css',
      lang: 'css'
    }
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/font-awesome'
  ],

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  env: {
    baseUrl: process.env.BASE_URL ||  'https://radiant-fire-8622.firebaseio.com',
    MR_API: 'https://app.medirecords.com/rest/',
    firebase: {
      apiKey: "AIzaSyAOrmzsApwFAYSDJ9lIbsUT6ZiOHAZipwM",
      authDomain: "radiant-fire-8622.firebaseapp.com",
      projectId: "radiant-fire-8622",
      storageBucket: "radiant-fire-8622.appspot.com",
      messagingSenderId: "443846187284"
    }
  },
  build: {
    analyze: true,
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      /**
       * Initialise SVG Sprites
       */

      // get and remove file loader
      const rule = config.module.rules.find(r => r.test.toString() === '/\\.(png|jpe?g|gif|svg)$/');
      config.module.rules.splice(config.module.rules.indexOf(rule), 1);

      // add it again, but now without 'assets\/svg'
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        exclude: /(assets\/svg)/,
        query: {
          limit: 1000, // 1KO
          name: 'img/[name].[hash:7].[ext]',
        },
      });

      config.module.rules.push({
        test: /\.svg$/,
        include: [
          path.resolve(__dirname, 'assets/svg'),
        ],
        use: 'svg-sprite-loader',
      });
    },
    // You cannot use ~/ or @/ here since it's a Webpack plugin
    styleResources: {
      scss: ['./assets/variables.scss', './assets/functions.scss', './assets/mixins.scss'],
      less: './assets/*.less'
    }
  }
}
