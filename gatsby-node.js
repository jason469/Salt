const path = require('path')
const _ = require('lodash');
const {paginate} = require('gatsby-awesome-pagination')

module.exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions
  const recipeTemplate = path.resolve('./src/templates/recipe.js')
  const allRecipeTemplate = path.resolve('./src/pages/recipes.js')
  
  const result = await (graphql(`
          query {
            allContentfulRecipe {
              edges {
                node {
                  slug
                  id
                }
              }
            }
          }
        `
    )
  )
  if (result.errors) {
    console.log(result.errors);
  }
  
  const allRecipes = _.get(result, "data.allContentfulRecipe.edges")
  paginate({
    createPage,
    items: allRecipes,
    itemsPerPage: 5,
    pathPrefix: '/recipes',
    component: path.resolve(allRecipeTemplate)
  })
  
  allRecipes.forEach(edge => {
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
