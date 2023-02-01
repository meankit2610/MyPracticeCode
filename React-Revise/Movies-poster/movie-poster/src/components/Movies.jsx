import React from 'react'
import "./movie.css"
const Movies = (props) => {
  return (
    <div className='movie-card'>
      <img
        src={props.img}
        alt="img"
      />
      <p>{props.title}</p>
      <p>Year: {props.year} </p>
    </div>
  );
}

export default Movies
