import React from "react"
import {Link, graphql, useStaticQuery} from "gatsby";

import * as classes from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
      query {
          site {
              siteMetadata {
                  title,
              }
          }
      }
  `)
  
  return (
    <header className="">
      <nav className="">
        <section className="">
          <h1 className="">
            <Link to="/">
              {data.site.siteMetadata.title}
            </Link>
          </h1>
        </section>
        <ul className="">
          <section className="">
            <li>
              <Link to="/recipes" className="">Recipes</Link>
            </li>
          </section>
          <section className="">
            <li>
              <Link to="/about" className="">About</Link>
            </li>
            <li>
              <Link to="/contact" className="">Contact</Link>
            </li>
          </section>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
