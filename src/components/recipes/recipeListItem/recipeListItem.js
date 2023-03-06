import React from "react";
import {Link} from "gatsby";
import * as classes from "./recipeListItem.module.scss"


const RecipeListItem = ({node}) => {
  const coverImage = node.coverImage
  let alt = node.title
  let url = ''
  let id = ''
  let cultureName = ''
  
  if (node.coverImage) {
    alt = coverImage.file.fileName
    url = coverImage.file.url
    id = coverImage.id
  }
  
  if (node.culture) {
    cultureName = node.culture.name
  } else {
    cultureName = 'Misc'
  }
  
  return (
    <Link to={`/recipes/${node.slug}`}>
      <li key={node.id}
          className={`${classes.card} | bg-white rounded | overflow-hidden | shadow-md  | relative transition duration-300| hover:shadow-lg`}>
        <section className={`${classes.card__coverImage}`}>
          <img
            src={url}
            alt={alt}
            id={id}
            className={`${classes.card__coverImage__photo} | object-cover w-full h-32 | sm:h-48`}
          />
          <section
            className={`${classes.card__coverImage__text}`}
          >
            <p>How to make {node.title}</p>
          </section>
        </section>
        <section className={`m-4`}>
          <h2 className={`${classes.card__title} | font-bold`}>{node.title}</h2>
          <p className={`${classes.card__date} | text-gray-500 text-sm`}>{node.createdAt}</p>
        </section>
        <section className={`badge | flex gap-1 items-center`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
               className="bi bi-globe-asia-australia | w-5" viewBox="0 0 16 16">
            <path
              d="m10.495 6.92 1.278-.619a.483.483 0 0 0 .126-.782c-.252-.244-.682-.139-.932.107-.23.226-.513.373-.816.53l-.102.054c-.338.178-.264.626.1.736a.476.476 0 0 0 .346-.027ZM7.741 9.808V9.78a.413.413 0 1 1 .783.183l-.22.443a.602.602 0 0 1-.12.167l-.193.185a.36.36 0 1 1-.5-.516l.112-.108a.453.453 0 0 0 .138-.326ZM5.672 12.5l.482.233A.386.386 0 1 0 6.32 12h-.416a.702.702 0 0 1-.419-.139l-.277-.206a.302.302 0 1 0-.298.52l.761.325Z"/>
            <path
              d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM1.612 10.867l.756-1.288a1 1 0 0 1 1.545-.225l1.074 1.005a.986.986 0 0 0 1.36-.011l.038-.037a.882.882 0 0 0 .26-.755c-.075-.548.37-1.033.92-1.099.728-.086 1.587-.324 1.728-.957.086-.386-.114-.83-.361-1.2-.207-.312 0-.8.374-.8.123 0 .24-.055.318-.15l.393-.474c.196-.237.491-.368.797-.403.554-.064 1.407-.277 1.583-.973.098-.391-.192-.634-.484-.88-.254-.212-.51-.426-.515-.741a6.998 6.998 0 0 1 3.425 7.692 1.015 1.015 0 0 0-.087-.063l-.316-.204a1 1 0 0 0-.977-.06l-.169.082a1 1 0 0 1-.741.051l-1.021-.329A1 1 0 0 0 11.205 9h-.165a1 1 0 0 0-.945.674l-.172.499a1 1 0 0 1-.404.514l-.802.518a1 1 0 0 0-.458.84v.455a1 1 0 0 0 1 1h.257a1 1 0 0 1 .542.16l.762.49a.998.998 0 0 0 .283.126 7.001 7.001 0 0 1-9.49-3.409Z"/>
          </svg>
          <span>{cultureName}</span>
        </section>
      </li>
    </Link>
  );
};

export default RecipeListItem;
