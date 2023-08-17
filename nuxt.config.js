// noinspection JSLastCommaInArrayLiteral

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,
  mode: 'universal',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Worder',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Worder',
      },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://worder.ir' },
      { name: 'og:title', content: 'Worder' },
      {
        name: 'og:description',
        content: 'Worder',
      },
      { name: 'og:image', content: 'prev.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: 'https://worder.ir' },
      { name: 'twitter:title', content: 'Worder' },
      {
        name: 'twitter:description',
        content: 'Worder',
      },
      { name: 'twitter:image', content: 'prev.jpg' },
    ],
    link: [
      { rel: 'canonical', href: 'https://worder.ir' },
      { rel: 'icon', type: 'image/x-icon', href: '/fav/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: '/fav/apple-icon-57x57.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: '/fav/apple-icon-60x60.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: '/fav/apple-icon-72x72.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: '/fav/apple-icon-76x76.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: '/fav/apple-icon-114x114.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/fav/apple-icon-120x120.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '/fav/apple-icon-144x144.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: '/fav/apple-icon-152x152.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/fav/apple-icon-180x180.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/fav/android-icon-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/fav/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/fav/favicon-96x96.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/fav/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/fav/manifest.json' },
    ],
    script: [
      {
        hid: 'google',
        src: 'https://accounts.google.com/gsi/client',
        defer: false,
        body: true,
      },
    ],
  },
  css: [
    '~/assets/css/fonts.css',
    '~/assets/css/style.css',
    '~/assets/css/fontawesome.min.css',
    '~/assets/css/light.css',
    '~/assets/css/regular.css',
    '~/assets/css/solid.css',
    '~/assets/css/tailwind.css',
  ],
  plugins: [
    { src: '~/plugins/vee-validate.js', mode: 'client' },
    { src: '~/plugins/directives.js', mode: 'client' },
    { src: '~/plugins/toast.js', mode: 'client' },
    { src: '~/plugins/axios.js', mode: 'client' },
    { src: '~/plugins/service.js', mode: 'client' },
    { src: '~/plugins/lodash.js', mode: 'client' },
    { src: '~/plugins/helper.js', mode: 'client' },
  ],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@nuxtjs/i18n',
    '@nuxtjs/auth-next',
  ],

  axios: {
    baseURL: 'http://localhost:8080',
    credentials: false,
  },

  auth: {
    // redirect: false,
    redirect: {
      login: '/auth',
      logout: '/auth',
      home: '/',
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'api/auth/login',
            method: 'post',
            propertyName: 'token',
          },
          logout: { url: 'api/profile/signout', method: 'post' },
          user: { url: 'api/user', method: 'get', propertyName: 'user' },
        },
      },
    },
  },

  sitemap: {
    hostname: 'https://worder.ir',
    gzip: true,
  },

  i18n: {
    locales: [
      {
        code: 'fa',
        file: 'fa.js',
      },
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'fa',
  },

  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  build: {
    postcss: {},
    extractCSS: true,
    extend(config) {
      config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      })
    },
  },
}
