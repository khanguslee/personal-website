const config = require('./config');

const { manifest } = config;

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: manifest.name,
        short_name: manifes.shortName,
        start_url: config.pathPrefix || manifest.startUrl,
        background_color: manifest.backgroundColor,
        theme_color: manifest.themeColor,
        display: manifes.display,
        icon: manifest.icon, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-158286130-1',
      },
    },
  ],
};
