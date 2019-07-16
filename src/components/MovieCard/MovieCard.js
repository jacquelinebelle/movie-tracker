import React from 'react';
import './MovieCard.css';

const MovieCard = ({moviePoster}) => {
  const url = 'http://image.tmdb.org/t/p/w154'
 return (
   <article>
     <img src={`${url}${moviePoster}`} alt=''/>
   </article>
 )
}

 
export default MovieCard;