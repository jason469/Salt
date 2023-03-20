module.exports = {
  siteMetadata: {
    title: 'Salt',
    author: 'Jason Liu'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    'gatsby-plugin-postcss',
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Salt`,
    //     short_name: `Salt`,
    //     start_url: `/`,
    //     background_color: `#f7f0eb`,
    //     theme_color: `#a2466c`,
    //     display: `standalone`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/recipes/*`],
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     icon: 'src/assets/images/icon.png',
    //   },
    // },
  ]
};
