const API_AUTH_URL = process.env.API_AUTH_URL || 'http://localhost:8082';

export default {
  server: {
    port: 3000, // default: 3000
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  env: {
    strapiBaseUri: process.env.API_URL || "http://localhost:5000"
  },
  head: {
    title: 'wannabeplexicus',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Staatliches' },
     //{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css'
     // }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@assets/css/main.css',
    'bootstrap-css-only/css/bootstrap.min.css',
    'mdbvue/lib/css/mdb.min.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/uikit.js', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [  
  '@nuxtjs/apollo',
  '@nuxtjs/axios',
  '@nuxtjs/auth'
  ],
  apollo: {  
    clientConfigs: {
      default: {
        httpEndpoint: process.env.BACKEND_URL || "http://localhost:8082/graphql"
      }
    }
  }, 
  axios: {
    baseURL: process.env.API_AUTH_URL
  }, 

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  /*
  ** Auth module configuration
  ** See https://auth.nuxtjs.org/schemes/local.html#options
  */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'auth/local',
            method: 'post',
            propertyName: 'jwt'
          },
          user: {
            url: 'users/me',
            method: 'get',
            propertyName: false
          },
          logout: false
        }
      }
    }
  }
}
