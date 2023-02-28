import React from "react";
import {Link, graphql, useStaticQuery} from "gatsby";

import Layout from "../components/layout/layout";
import * as classes from "./recipes.module.scss"

const RecipesPage = () => {
  const data = useStaticQuery(graphql`
      query {
          allMarkdownRemark {
              edges {
                  node {
                      frontmatter {
                          title
                      }
                      id
                      fields {
                          slug
                      }
                  }
              }
          }
      }
  `)
  
  return (
    <Layout>
      <h1>Recipes</h1>
      <ol className={classes.recipes}>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li key={edge.node.id} className={classes.post}>
              <Link to={`/recipes/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  );
};

export default RecipesPage;
