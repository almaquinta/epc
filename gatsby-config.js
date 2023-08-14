/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "EPC - Ingenieria",
    siteUrl: `https://epc.net.pe/`,
    titleTemplate: "EPC Ingenieria - %s",
    description:
      "Somos un grupo empresarial dedicados a la fabricación de estructuras metálicas, servicios de soldadura especializada y outsourcing de procesos y servicios en los sectores de minería, industria, energía, petróleo y retail",
    url: "https://epc.net.pe/", // No trailing slash allowed!
    image: "epc.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@occlumency",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        
        trackingId: "G-LX3CY135WH",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
      },
    },
  ],
}
