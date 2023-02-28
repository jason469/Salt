import React from "react";
import {graphql} from "gatsby";

import Layout from "../components/layout/layout";

// $slug comes from the context we set up when creating the page in createPage
export const query = graphql`
    query (
        $slug:String
    ) {
        markdownRemark (
            fields: {
                slug: {
                    eq: $slug
                }
            }
        ) {
            frontmatter {
                title
            }
            html
        }
    }
` // The output of this query is passed into the props of the function below

const Recipe = (props) => {
  return (
    <Layout>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <section dangerouslySetInnerHTML={{__html:props.data.markdownRemark.html}}>
      </section>
    </Layout>
  )
}

export default Recipe