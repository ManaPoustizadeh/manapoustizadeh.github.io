module.exports = {
  plugins: [
    { src: '~/plugins/swiper.js', ssr: false }, 
  ],
  css: [
    '@/assets/css/main.scss',
    'swiper/dist/css/swiper.css'
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'rajabiseraji',
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Lato:100,300,400|Montserrat:100,200,300,400|Open+Sans:300,400'
        }
      ]
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Rajabiseraji Homepage' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  modules: [
    ['bootstrap-vue/nuxt', {css: false}],
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        //import whole set
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['fab']
        },
      ]}
    ],
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    
  }
}

