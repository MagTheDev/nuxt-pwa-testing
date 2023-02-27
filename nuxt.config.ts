// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@vite-pwa/nuxt'
    ],
    pwa: {
        manifest: {
            name: "Nuxt PWA POC",
            short_name: "Nuxt PWA",
            description: "A POC of a Nuxt3 PWA",
            icons: [

                {
                    src: 'images/icon_64x64.png',
                    sizes: '64x64',
                    type: 'image/png'
                },

                {
                    src: 'images/icon_120x120.png',
                    sizes: '120x120',
                    type: 'image/png'
                },

                {
                    src: 'images/icon_144x144.png',
                    sizes: '144x144',
                    type: 'image/png'
                },

                {
                    src: 'images/icon_152x152.png',
                    sizes: '152x152',
                    type: 'image/png'
                },

                {
                    src: 'images/icon_192x192.png',
                    sizes: '192x192',
                    type: 'image/png'
                },
                {
                    src: 'images/icon_384x384.png',
                    sizes: '384x384',
                    type: 'image/png'
                },
                {
                    src: 'images/icon_512x512.png',
                    sizes: '512x512',
                    type: 'image/png'
                },

            ]

        },
        workbox: {
            navigateFallback: '/',
        },
        devOptions: {
            enabled: true,
            type: 'module'
        }
    }
})
