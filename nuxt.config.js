export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {src: '~/plugins/jquery-scroll.js', ssr: false},
    {src: 'plugins/owl.js', ssr: false},
    { src: '~plugins//slide-menu', ssr: false }// Only works on client side
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'vue-scrollto/nuxt',

    // Or if you have custom options...
    ['vue-scrollto/nuxt', { duration: 300 }],
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
