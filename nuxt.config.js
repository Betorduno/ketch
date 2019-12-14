
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width:device-width, initial-scale:1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script:[
        { src: 'https://cdn.jsdelivr.net/npm/contentful@5.0.1/dist/contentful.browser.min.js'},
        { src: '/js/jquery-3.3.1.min.js'},
        { src: '/js/jquery-migrate-3.0.0.js'},
        { src: '/js/popper.min.js'},
        { src: '/js/bootstrap.min.js'},
        { src: '/js/owl.carousel.min.js'},
        { src: '/js/jquery.sticky.js'},
        { src: '/js/jquery.waypoints.min.js'},
        { src: '/js/jquery.animateNumber.min.js'},
        { src: '/js/jquery.fancybox.min.js'},
        { src: '/js/jquery.stellar.min.js'},
        { src: '/js/jquery.easing.1.3.js'},
        { src: '/js/bootstrap-datepicker.min.js'},
        { src: '/js/isotope.pkgd.min.js'},

        { src: '/js/typed.js'},
        { src: '/js/main.js'}

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href:'https://fonts.googleapis.com/css?family=Roboto:300,400,700,900', rel:'stylesheet'},
      { rel:'stylesheet', href:'fonts/icomoon/style.css'},
      { rel:'stylesheet', href:'/css/bootstrap.min.css'},
      { rel:'stylesheet', href:'/css/bootstrap-datepicker.css'},
      { rel:'stylesheet', href:'/css/jquery.fancybox.min.css'},
      { rel:'stylesheet', href:'/css/owl.carousel.min.css'},
      { rel:'stylesheet', href:'/css/owl.theme.default.min.css'},
      { rel:'stylesheet', href:'/fonts/flaticon/font/flaticon.css'},
      { rel:'stylesheet', href:'/css/style.css'}
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
