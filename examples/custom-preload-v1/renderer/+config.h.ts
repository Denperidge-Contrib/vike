import type { Config } from 'vike/types'

// https://vike.dev/config
export default {
  passToClient: ['pageProps'],
  // https://vike.dev/meta
  meta: {
    // Create new config 'preloadStrategy'
    preloadStrategy: {
      env: 'server-only'
    }
  }
} satisfies Config
