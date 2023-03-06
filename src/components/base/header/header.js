import React, {useState} from "react"
import {Link, graphql, useStaticQuery} from "gatsby";

import * as classes from "./header.module.scss"

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  
  const data = useStaticQuery(graphql`
      query {
          site {
              siteMetadata {
                  title,
              }
          }
      }
  `)
  
  const toggleMenu = (e) => {
    setNavbarOpen(!navbarOpen)
  }
  
  return (
    <header className={`md:flex md:justify-end`}>
      <nav className="text-right">
        <section className="flex justify-between items-center">
          <h1 className={`${classes.logo} | font-bold uppercase font-logo tracking-wider text-4xl | p-4`}>
            <Link to="/" className={`hover:text-gray-700`}>
              {data.site.siteMetadata.title}
            </Link>
          </h1>
          <section className={`px-4 cursor-pointer md:hidden`} onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi bi-list w-6"
                 viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
          </section>
        </section>
        <ul
          className={`md:border-b md:border-gray-200 transition ease-in duration-300 text-sm mt-2 mb-2 md:block` + (navbarOpen ? ' block' : ' hidden')}>
          <section className="">
            <li className={``}>
              <Link to="/recipes" className="hover:text-gray-700 | flex justify-end items-center px-4 py-1 border-r-4 border-white"
                    activeClassName={classes.activeItem}>
                <section>
                  Recipes
                </section>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-house w-5 ml-2"
                     viewBox="0 0 16 16">
                  <path
                    d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
                </svg>
              </Link>
            </li>
          </section>
          <section className="">
            <li className={``}>
              <Link to="/about" className="hover:text-gray-700 | flex justify-end items-center px-4 py-1 border-r-4 border-white"
                    activeClassName={classes.activeItem}>
                <section>
                  About
                </section>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-question-circle w-5 ml-2" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path
                    d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                </svg>
              </Link>
            </li>
            <li className={``}>
              <Link to="/contact" className="hover:text-gray-700 | flex justify-end items-center px-4 py-1 border-r-4 border-white"
                    activeClassName={classes.activeItem}>
                <section>
                  Contact
                </section>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-envelope w-5 ml-2" viewBox="0 0 16 16">
                  <path
                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                </svg>
              </Link>
            </li>
          </section>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
