
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script:[
      { src: 'js/vendor/modernizr-2.6.2-respond-1.1.0.min.js'},
      { src: 'js/vendor/jquery-1.11.1.min.js'},
      { src: 'js/vendor/bootstrap.min.js'},
      { src: 'js/vendor/wow-animate.js'},
      { src: 'js/main.js'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'css/bootstrap.min.css'},
      { rel: 'stylesheet', href: 'css/font-awesome.min.css'},
      { rel: 'stylesheet', href: 'css/wow-animate.css'},
      { rel: 'stylesheet', href: 'css/templatemo-style.css'},

    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
