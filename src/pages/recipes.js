import React from "react";
import {graphql} from "gatsby";

import Layout from "../components/base/layout/layout";
import Head from "../components/base/head/head"
import Pager from "../components/base/pager/pager";
import RecipeListItem from "../components/recipes/recipeListItem/recipeListItem";

import * as classes from "./recipes.module.scss"

export const recipesQuery = graphql`
    query ($skip: Int!, $limit: Int!) {
        #    query {
        allContentfulRecipe (
            sort:{
                title:ASC,
            }
            skip: $skip
            limit: $limit
        ) {
            edges {
                node {
                    title
                    slug
                    createdAt(formatString:"MMM Do, YYYY")
                    id
                    coverImage {
                        id
                        file {
                            url
                            fileName
                        }
                    }
                    culture {
                        name
                    }
                }
            }
        }
    }
`

const RecipesPage = props => {
  const {pageContext} = props;
  
  return (
    <Layout>
      <Head title="Recipes"/>
      <h1 className={`text-6xl font-semibold | mt-12`}>Recipes</h1>
      <h2 className={`text-2xl font-semibold | mt-12 | border-b border-gray-200 `}>Here are all the recipes from our curators !</h2>
      <ol className={`${classes.recipes} | mt-8 | w-full | grid | lg:grid-cols-3 gap-10`}>
        {props.data.allContentfulRecipe.edges.map(edge => {
          return (
            <RecipeListItem node={edge.node} key={edge.node.id}/>
          )
        })}
      </ol>
      <Pager pageContext={pageContext}/>
    </Layout>
  );
};

export default RecipesPage;
