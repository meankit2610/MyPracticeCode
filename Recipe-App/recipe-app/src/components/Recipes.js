import React from 'react'
import style from "../recipe.module.css"
const Recipes = ({title,cal,image,ingre}) => {
  return (
    <div className={style.recipe}>
          <h1>{title}</h1>
          <ol>
              {ingre.map(ingre => (
                  <li>{ingre.text}</li> 
              ))}
          </ol>
          <p>{cal} </p>
          <img src={image}></img>
    </div>
  )
}

export default Recipes
