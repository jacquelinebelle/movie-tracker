import React from 'react';
import { connect } from 'react-redux';
import './MovieDetailPage.css';

const MovieDetailPage = ({ title, releaseDate, synopsis, rating, voteCount, poster, id, key }) => {

    return (
        <div className="movieDetail">
            <img src={`http://image.tmdb.org/t/p/w154${poster}`} alt={`A movie poster for ${title}.`} />
            <h2>{title}</h2>
            {/* <p>Release: {genres}</p> */}
            <p>This movie is a {rating} out of 10 based on {voteCount} people's opinions.</p>
            <h3>Synopsis:</h3> 
            <p>{synopsis}</p>
        </div>
    )
}

const mapStateToProps = (state) => ({
    movies: state.movies
  })
  
  export default connect(mapStateToProps)(MovieDetailPage)