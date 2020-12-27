module.exports = {
  siteMetadata: {
    title: `Georg Braun`,
    description: `Persönlicher Blog, Wissensdatenbank und Projektseite`,
    author: `@georgbraun`,
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
        icon: 'src/images/avatar.png'
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
     `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-151350723-1",
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`, 
      options: {
        name: `images`,
        path: `${__dirname}/src/data/images`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`, 
      options: {
        name: `software-articles`,
        path: `${__dirname}/src/artikel/software`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`, 
      options: {
        name: `software-articles`,
        path: `${__dirname}/src/artikel/projekte`,
      }
    },
    {
      resolve: `gatsby-transformer-remark`, // Transformator der Markdowns
      options: {
        plugins: [
          `gatsby-remark-emoji`,  // <-- this line adds emoji
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
            },
          },         
          {
            resolve: `gatsby-remark-prismjs`, // Code-Highlighting
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: true,
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
            resolve: `gatsby-remark-images`, // Verarbeitet die in den Markdowns genutzten Bilder (benötigt z.B. das source-filesystem Plugin)
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
    // FailOnError wg. Checksum Error in libspng
    { resolve: 'gatsby-plugin-sharp', options: { failOnError: false } },
    `gatsby-transformer-sharp`,
   
  ],
}
