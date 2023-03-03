import React from "react";
import {Link} from "gatsby";
import * as classes from "./recipeListItem.module.scss"


const RecipeListItem = ({node}) => {
  return (
    <li key={node.id} className={classes.post}>
      <Link to={`/recipes/${node.slug}`}>
        <h2>{node.title}</h2>
        <p>{node.createdAt}</p>
      </Link>
    </li>
  );
};

export default RecipeListItem;
