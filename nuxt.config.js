
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script:[
        { src: 'https://cdn.jsdelivr.net/npm/contentful@5.0.1/dist/contentful.browser.min.js'},
        { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: "https://static.replicastudios.com/production/assets/0509f25/slp/img/favicon.ico", rel: "shortcut icon", type: "image/x-icon"},
      { href: "https://static.replicastudios.com/production/assets/0509f25/slp/img/favicon-96x96.png", rel: "icon", sizes: "96x96", type: "image/png"},
      { href: "https://static.replicastudios.com/production/assets/0509f25/slp/img/favicon-32x32.png", rel: "icon", sizes: "32x32", type: "image/png"},
      { href: "https://static.replicastudios.com/production/assets/0509f25/slp/img/favicon-16x16.png", rel: "icon", sizes: "16x16", type: "image/png"},
      { href: "assets/css/base.css", rel: "stylesheet"}
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
    { src: "@/plugins/aos", ssr: false }
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
    router: {
      base: '/'
    },
    extend (config, ctx) {
    }
  }
}
