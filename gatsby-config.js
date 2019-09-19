module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `knowledge-repo`,
        remote: `https://gitlab.com/georg.braun92/knowledge-base.git`,
        // Optionally supply a branch. If none supplied, you'll get the default branch.
        branch: `master`,
        // Tailor which files get imported eg. import the docs folder from a codebase.
        patterns: `**`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,  // Laden der Markdown-Dateien
      options: {
        name: `markdown`,
        path: `${__dirname}/src/data/blog`,
      },
       },
    {
      resolve: `gatsby-transformer-remark`, // Transformator der Markdowns
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`, // Code-Highlighting
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              // Customize the prompt used in shell output
              // Values below are default
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
            },
          },
          {
            resolve: `gatsby-remark-images`,  // Verarbeitet die in den Markdowns genutzten Bilder (benötigt z.B. das source-filesystem Plugin)
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    // Laden/Transformieren von Bildern
    `gatsby-plugin-sharp`,
  ],
}
