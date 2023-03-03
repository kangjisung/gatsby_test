module.exports = {
    siteMetadata: {
        title: `플레이핀`,
        description: `금융을 경험해 보세요`,
        author: `@envy_theme`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `images`,
            path: `${__dirname}/src/images`,
        },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
        resolve: `gatsby-plugin-manifest`,
        options: {
            name: `gatsby-starter-default`,
            short_name: `starter`,
            start_url: `/`,
            background_color: `#663399`,
            theme_color: `#663399`,
            display: `minimal-ui`,
            icon: `src/images/smile.png`, // This path is relative to the root of the site.
        },
        },

        {
            resolve: `gatsby-plugin-gdpr-cookies`,
            options: {
              googleAnalytics: {
                trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID', // leave empty if you want to disable the tracker
                cookieName: 'gatsby-gdpr-google-analytics', // default
                anonymize: true, // default
                allowAdFeatures: false // default
              },
              googleTagManager: {
                trackingId: 'YOUR_GOOGLE_TAG_MANAGER_TRACKING_ID', // leave empty if you want to disable the tracker
                cookieName: 'gatsby-gdpr-google-tagmanager', // default
                dataLayerName: 'dataLayer', // default
              },
              facebookPixel: {
                pixelId: 'YOUR_FACEBOOK_PIXEL_ID', // leave empty if you want to disable the tracker
                cookieName: 'gatsby-gdpr-facebook-pixel', // default
              },
              tikTokPixel: {
                pixelId: 'YOUR_TIKTOK_PIXEL_ID', // leave empty if you want to disable the tracker
                cookieName: 'gatsby-gdpr-tiktok-pixel', // default
              },
              hotjar: {
                hjid: 'YOUR_HOTJAR_ID',
                hjsv: 'YOUR_HOTJAR_SNIPPET_VERSION',
                cookieName: 'gatsby-gdpr-hotjar', // default
              },
              // defines the environments where the tracking should be available  - default is ["production"]
              environments: ['production', 'development']
            },
          },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
