const path = require('path')

module.exports.onCreateNode = ({node, actions}) => {
  const {createNodeField} = actions
  
  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md')
    
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

module.exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions
  const recipeTemplate = path.resolve('./src/templates/recipe.js')
  const res = await graphql(`
    query {
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            slug
          }
        }
      }
    }
  }
  `)
  
  res.data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.fields.slug
    createPage({
      component: recipeTemplate,
      path: `/recipes/${slug}`,
      context: {
        slug: slug
      }
    })
  })
  
}