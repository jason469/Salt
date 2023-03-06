import React from "react"
import {graphql, useStaticQuery} from "gatsby";
import * as classes from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
      query
      {
          site
          {
              siteMetadata
              {
                  author
              }
          }
      }
  `)
  
  return (
    <footer className={`${classes.footer} | p-3 | bg-secondary-100 text-secondary-200 | flex justify-center`}>
      <p>Created by {data.site.siteMetadata.author}, Copyright 2023</p>
    </footer>
  )
};

export default Footer;
