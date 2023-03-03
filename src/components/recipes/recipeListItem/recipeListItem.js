import React from "react";
import {Link} from "gatsby";
import * as classes from "./recipeListItem.module.scss"


const RecipeListItem = ({node}) => {
  const coverImage = node.coverImage
  let alt = node.title
  let url = ''
  let id = ''
  
  if (node.coverImage) {
    alt = coverImage.file.fileName
    url = coverImage.file.url
    id = coverImage.id
  }
  
  return (
    <Link to={`/recipes/${node.slug}`}>
      <li key={node.id} className={classes.card}>
        <section className={classes.card__coverImage}>
          <img
            src={url}
            alt={alt}
            id={id}
            className={classes.card__coverImage__photo}
          />
          <section
            className={classes.card__coverImage__text}
          >
            <p>How to make {node.title}</p>
          </section>
        </section>
        <h2 className={classes.card__title}>{node.title}</h2>
        <p className={classes.card__date}>{node.createdAt}</p>
      </li>
    </Link>
  );
};

export default RecipeListItem;
