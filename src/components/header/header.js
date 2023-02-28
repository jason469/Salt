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
    <header className={classes.header}>
      <h1>
        <Link to="/" className={classes.logo}>
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={classes.navList}>
          <li>
            <Link to="/" className={classes.navItem} activeClassName={classes.activeNavItem}>Home</Link>
          </li>
          <li>
            <Link to="/recipes" className={classes.navItem} activeClassName={classes.activeNavItem}>Recipes</Link>
          </li>
          <li>
            <Link to="/about" className={classes.navItem} activeClassName={classes.activeNavItem}>About</Link>
          </li>
          <li>
            <Link to="/contact" className={classes.navItem} activeClassName={classes.activeNavItem}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
