import React from "react";
import {Link} from "gatsby";

const Pager = ({pageContext}) => {
  const {previousPagePath, nextPagePath} = pageContext;
  
  return (
    <section>
      {previousPagePath && (
        // <span><Link to={previousPagePath}><i className="bi bi-arrow-left-circle-fill"></i></Link></span>
        <span><Link to={previousPagePath}>Previous</Link></span>
      )}
      {nextPagePath && (
        // <span><Link to={nextPagePath}><i className="bi bi-arrow-right-circle-fill"></i></Link></span>
        <span><Link to={nextPagePath}>Next</Link></span>
      )}
    </section>
  )
}

export default Pager