import React from "react";
import {graphql} from "gatsby";
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

import Layout from "../../components/base/layout/layout";
import Head from "../../components/base/head/head"
import * as classes from "./recipe.module.scss";

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
            createdAt(formatString:"MMMM Do, YYYY")
            method {
                raw
            }
            description {
                raw
            }
            ingredients
            coverImage {
                id
                file {
                    url
                    fileName
                }
            }
        }
    }
` // The output of this query is passed into the props of the function below

const Recipe = (props) => {
  let options = {}
  const data = props.data.contentfulRecipe
  console.log(data)
  
  return (
    <Layout>
      <Head title={data.title}/>
      <section className={classes.top}>
        <section className={classes.top__header}>
          <h1 className={classes.top__header__title}>{data.title}</h1>
        </section>
        <section className={classes.top__bio}>
          <p> written by <span className={classes.top__bio__author}>Jason Liu</span></p>
          <p>|</p>
          <p>{data.createdAt}</p>
        </section>
        <section className={classes.top__coverImage}>
          {data.coverImage ? (
            <img src={data.coverImage.file.url} alt={data.coverImage.file.fileName}/>
          ) : (
            <div></div>
          )}
        </section>
        <section className={classes.top__description}>
          {data.description ? (
            documentToReactComponents(JSON.parse(data.description.raw), options)
          ) : (
            <div></div>
          )}
        </section>
      </section>
      <section className={classes.bottom}>
      <section className={classes.bottom__ingredients}>
        <h3 className={classes.bottom__ingredients__title}>Ingredients</h3>
        <ul className={classes.bottom__ingredients__list}>
          {data.ingredients.map(ingredient => {
            return (
              <li>{ingredient}</li>
            )
          })}
        </ul>
      </section>
      <section className={classes.bottom__method}>
        <h3 className={classes.bottom__method__title}>Method</h3>
        <section className={classes.bottom__method__steps}>
          {documentToReactComponents(JSON.parse(data.method.raw), options)}
        </section>
      </section>
        </section>
    </Layout>
  )
}

export default Recipe