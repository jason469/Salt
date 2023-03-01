import React from "react";
import {graphql} from "gatsby";
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

import Layout from "../components/layout/layout";
import Head from "../components/head/head"

// $slug comes from the context we set up when creating the page in createPage
export const query = graphql`
    query (
        $slug:String
    ) {
        contentfulRecipe (
            slug: {
                eq: $slug
            }
        ) {
            title
            createdAt(formatString:"MMM Do, YYYY")
            body {
                raw
                references {
                    url
                    title
                }
            }
        }
    }
` // The output of this query is passed into the props of the function below

const Recipe = (props) => {
  let options = {}
  const body = props.data.contentfulRecipe.body
  
  if (body.references.length !== 0) {
    const alt = body.references[0].title
    const url = body.references[0].url
    options = {
      renderNode: {
        "embedded-asset-block": node => {
          return <img src={url} alt={alt}/>
        }
      }
    }
  }
  
  return (
    <Layout>
      <Head title={props.data.contentfulRecipe.title}/>
      <h1>{props.data.contentfulRecipe.title}</h1>
      <p>{props.data.contentfulRecipe.createdAt}</p>
      {documentToReactComponents(JSON.parse(props.data.contentfulRecipe.body.raw), options)}
    </Layout>
  )
}

export default Recipe