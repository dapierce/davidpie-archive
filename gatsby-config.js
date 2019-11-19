module.exports = {
  siteMetadata: {
    title: `david🥧`,
    description: `Online portfolio of David Aaron Pierce, full stack developer with a passion for good UI and beautiful interfaces.`,
    author: `@da_pierce`,
    instagram: `da_pierce`,
    github: `dapierce`,
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
        name: `David Aaron Pierce`,
        short_name: `davidpie`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `da_pierce`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
