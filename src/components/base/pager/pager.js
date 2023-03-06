import React from "react";
import {Link} from "gatsby";

const Pager = ({pageContext}) => {
  const {previousPagePath, nextPagePath} = pageContext;
  
  return (
    <section className={`mt-5`}>
      {previousPagePath && (
        <span
          className={`button | bg-secondary-100 text-secondary-200 border-secondary-200 border-2 transform transition | hover:shadow-inner hover:scale-125 hover:bg-opacity-50 ease-out duration-300`}><Link
          to={previousPagePath}>Previous</Link></span>
      )}
      {nextPagePath && (
        <span
          className={`button | bg-secondary-100 text-secondary-200 border-secondary-200 border-2 transform transition | hover:shadow-inner hover:scale-125 hover:bg-opacity-50 ease-out duration-300`}><Link
          to={nextPagePath}>Next</Link></span>
      )}
    </section>
  )
}

export default Pager