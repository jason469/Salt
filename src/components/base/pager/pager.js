import React from "react";
import {Link} from "gatsby";

const Pager = ({pageContext}) => {
  const {previousPagePath, nextPagePath} = pageContext;
  
  return (
    <section>
      {previousPagePath && (
        // <span><Link to={previousPagePath}><i className="fa-solid fa-circle-chevron-left"></i></Link></span>
        <span><Link to={previousPagePath}>Previous</Link></span>
      )}
      {nextPagePath && (
        // <span><Link to={nextPagePath}><i className="fa-solid fa-circle-chevron-right"></i></Link></span>
        <span><Link to={nextPagePath}>Next</Link></span>
      )}
    </section>
  )
}

export default Pager