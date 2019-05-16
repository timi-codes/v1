const config = require('./src/config');

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: config.siteUrl,
    description: config.siteDescription,
    author: config.name,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TimiTejumola`,
        short_name: `TimiTejumola`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1280,
              quality: 90,
              linkImagesToOriginal: true,
            },
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-alias-imports`,
    //   options: {
    //     alias: {
    //       "@config": "src/config",
    //       "@fonts": "src/fonts",
    //       "@components": "src/components",
    //       "@fonts": "src/fonts",
    //       "@pages": "src/pages",
    //       "@data": "src/data",
    //       "@images": "src/images",
    //       "@styles": "src/styles",
    //     },
    //     extensions: [
    //       "js",
    //       "pdf",
    //       "jsx"
    //     ],
    //   }
    // },
  ],
}
