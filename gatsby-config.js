module.exports = {
  siteMetadata: {
    title: `Andrew Brown`,
    description: `Web Developer, React • HTML5 • CSS3 • Javascript • C# • Python`,
    author: `Andrew Brown`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`, `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#0d1f2d`,
    //     theme_color: `#0d1f2d`,
    //     display: `minimal-ui`,
    //     icon: `src/images/icon-big.png`, // This path is relative to the root of the site.
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-s3`,
    //   options: {
    //       bucketName: 'abweb.dev',
    //       acl: null,
    //       params: {},
    //       mergeCachingParams: true,
    //       generateRoutingRules: true,
    //       generateRedirectObjectsForPermanentRedirects: false,
    //       generateIndexPageForRedirect: true,
    //       generateMatchPathRewrites: true,
    //       removeNonexistentObjects: true,
    //       customAwsEndpointHostname: undefined,
    //       enableS3StaticWebsiteHosting: true
    //   },
    // },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`../gatsby-portfolio/src/components/layout.js`),
      },
    },
        {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Andrew Brown Web Dev`,
        short_name: `Andrew Brown`,
        description:`This is my portfolio designed by me! Thanks for checking it out!`,
        start_url: `/`,
        background_color: `#0d1f2d`,
        theme_color: `#0d1f2d`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon-big.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
