import React from "react";
import Layout from "../components/layout/layout";
import {graphql, useStaticQuery} from "gatsby";

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
                  }
              }
          }
      }
  `)
  
  return (
    <Layout>
      <h1>Recipes</h1>
      <ol>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li key={edge.node.id}>
              <h2>{edge.node.frontmatter.title}</h2>
            </li>
          )
        })}
      </ol>
    </Layout>
  );
};

export default RecipesPage;
