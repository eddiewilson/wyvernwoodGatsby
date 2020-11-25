module.exports = {
  siteMetadata: {
    title: `Wyvernwood - Another World Awaits`,
    description: `Welcome to Wyvernwood – a magical kingdom where fairies, dragons and goblins thrive. Explore the goblins’ tunnels, scale the castle walls and make wishes come true`,
    author: `@gendalldesign`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static`,
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
        icon: `static/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /inline|logos/,
        },
      },
    },
    // {
    //   resolve: `gatsby-theme-material-ui`,
    //   options: {
    //     webFontsConfig: {
    //       fonts: {
    //         google: [
    //           {
    //             family: `Montserrat`,
    //             variants: [`300`, `400`, `500`],
    //           },
    //         ],
    //       },
    //     },
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:300,400,400i,500`, // you can also specify font weights and styles
        ],
        display: `swap`,
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
        disableAutoprefixing: true,
        disableMinification: false,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
