import React from 'react';
import {Link, graphql, useStaticQuery} from "gatsby";

const Head = ({title}) => {
  const data = useStaticQuery(graphql `
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
  `)
  return (
    <title>{data.site.siteMetadata.title} | {title}</title>
  );
};

export default Head;
