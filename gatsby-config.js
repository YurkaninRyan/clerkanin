module.exports = {
  siteMetadata: {
    title: `Clerkanin Wedding`,
    description: `Ryan and Alana are getting married!  This website has everything you need.`,
    author: `@YurkaninRyan`,
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
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Clerkanin Wedding 2020`,
        short_name: `Clerkanin`,
        start_url: `/`,
        background_color: `#768e84`,
        theme_color: `#768e84`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
