import React from 'react';
import { connect } from 'react-redux';
import './MovieDetailPage.css';
import Overdrive from 'react-overdrive'


export const MovieDetailPage = ({ title, releaseDate, synopsis, rating, voteCount, poster, id, key, backdrop}) => {
    const backDropUrl = 'http://image.tmdb.org/t/p/w1280'
    const styling = {
      backgroundImage: `url(${backDropUrl}${backdrop})`,
      backgroundSize: 'cover',
      height: '55vh',
    }
    return (
        <div className="movieDetail" style={styling} id='movie-detail-page'>
         
            <Overdrive id={id}>
              <img src={`http://image.tmdb.org/t/p/w154${poster}`} alt={`A movie poster for ${title}.`} className='poster'/>
            </Overdrive>
            <section className='movie-info'>
            <h2 id='movie-title'>{title}</h2>
            {/* <p>Release: {genres}</p> */}
            <p>This movie is a {rating} out of 10 based on {voteCount} people's opinions.</p>
            <h3>Synopsis:</h3> 
            <p className ='synopsis'>{synopsis}</p>
            </section>
        </div>
    )
}

export const mapStateToProps = (state) => ({
    movies: state.movies
  })
  
export default connect(mapStateToProps)(MovieDetailPage)