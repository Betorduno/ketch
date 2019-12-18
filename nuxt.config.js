
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
        { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'},
        { src: '/assets/js/zoho.js'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: "/assets/css/base.css", rel: "stylesheet"}
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
