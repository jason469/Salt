module.exports = {
  siteMetadata: {
    title: 'Salt',
    author: 'Jason Liu'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
  ]
};
