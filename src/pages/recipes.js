import React from "react";
import {Link, graphql, useStaticQuery} from "gatsby";

import Layout from "../components/layout/layout";
import Head from "../components/head/head"
import * as classes from "./recipes.module.scss"

const RecipesPage = () => {
  const data = useStaticQuery(graphql`
      query {
          allContentfulRecipe (
              sort:{
                  title:ASC,
              }
          ) {
              edges {
                  node {
                      title
                      slug
                      createdAt(formatString:"MMM Do, YYYY")
                      id
                  }
              }
          }
      }
  `)
  
  return (
    <Layout>
      <Head title="Recipes" />
      <h1>Recipes</h1>
      <ol className={classes.recipes}>
        {data.allContentfulRecipe.edges.map(edge => {
          return (
            <li key={edge.node.id} className={classes.post}>
              <Link to={`/recipes/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.createdAt}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  );
};

export default RecipesPage;
