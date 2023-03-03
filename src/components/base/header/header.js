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
      <nav className={classes.navigation}>
        <section className={classes.primaryHeader}>
          <h1 className={classes.logo}>
            <Link to="/">
              {data.site.siteMetadata.title}
            </Link>
          </h1>
        </section>
        <ul className={classes.primaryNavigation}>
          <section className={`${classes.primaryNavigation__sub} ${classes.primaryNavigation__left}` }>
            <li>
              <Link to="/recipes" className={classes.navItem} activeClassName={classes.activeNavItem}>Recipes</Link>
            </li>
          </section>
          <section className={`${classes.primaryNavigation__sub} ${classes.primaryNavigation__right}` }>
            <li>
              <Link to="/about" className={classes.navItem} activeClassName={classes.activeNavItem}>About</Link>
            </li>
            <li>
              <Link to="/contact" className={classes.navItem} activeClassName={classes.activeNavItem}>Contact</Link>
            </li>
          </section>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
