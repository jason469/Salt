const path = require('path')

module.exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions
  const recipeTemplate = path.resolve('./src/templates/recipe.js')
  const res = await graphql(`
    query {
      allContentfulRecipe {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  
  res.data.allContentfulRecipe.edges.forEach(edge => {
    const slug = edge.node.slug
    
    createPage({
      component: recipeTemplate,
      path: `/recipes/${slug}`,
      context: {
        slug: slug
      }
    })
  })
}