// region Global Imports
const { resolve } = require("path");
// endregion

// region Local Imports
const { appSrc, path } = require("./config/paths");
// endregion

module.exports = {
  siteMetadata: require('./config/site-metadata'),
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        "~components": resolve(appSrc, path.COMPONENTS),
        "~styles": resolve(appSrc, path.STYLES),
        "~images": resolve(appSrc, path.IMAGES),
        "~definitions": resolve(appSrc, path.DEFINITIONS),
        "~hooks": resolve(appSrc, path.HOOKS),
        "~libs": resolve(appSrc, path.LIBS),
        "~types": resolve(appSrc, path.TYPES),
        "~pages": resolve(appSrc, path.PAGES),
      }
    },
  ],
};
