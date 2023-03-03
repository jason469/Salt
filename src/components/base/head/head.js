import React from 'react';
import {graphql, useStaticQuery} from "gatsby";

const Head = ({title}) => {
  const data = useStaticQuery(graphql`
      query {
          site {
              siteMetadata {
                  title
              }
          }
      }
  `)
  return (
    <>
      <head>
        {/*<script src="https://kit.fontawesome.com/57744d7ace.js" crossOrigin="anonymous"></script>*/}
        <title>{data.site.siteMetadata.title} | {title}</title>
      </head>
    </>
  );
};

export default Head;
