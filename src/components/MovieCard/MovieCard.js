import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router'; 
import {Link } from 'react-router-dom'
import { getFavorites, addFavorites } from '../../actions';
import { fetchStoreProperties } from '../../apiCalls';
import Overdrive from 'react-overdrive';
import favb from '../../images/fav-b.svg'
import favy from '../../images/fav-y.svg'
import './MovieCard.css';

export class MovieCard extends Component {
  constructor({moviePoster, id, title, releaseDate, voteAverage, overview, user}){
    super({moviePoster, id, title, releaseDate, voteAverage, overview, user});
    this.state = {
      url: 'http://image.tmdb.org/t/p/w300',
      redirect: false,
      favorite: false,
      error: ''
    }
  }

  clickFav = async () => { 
    const { favorites, id, title, moviePoster, releaseDate, voteAverage, overview } = this.props;
    const movieObject =  {
      movie_id: id,
      user_id: this.props.user.id,
      title: title,
      poster_path: moviePoster,
      release_date: releaseDate,
      vote_average: voteAverage,
      overview: overview
    } 
    const deleteObject = {
      user_id: this.props.user.id,
      movie_id: id
    }
    if(!this.props.user.name){
      this.setState({redirect:!this.state.redirect})
    } else if (this.props.user.name && !favorites.find(favorite => favorite.title === title)) {
      let errorMessage = 'Error adding movie to favorites.';
      this.toggleFavorite(movieObject, 'http://localhost:3000/api/users/favorites/new', 'POST', errorMessage);
      this.setState({favorite: !this.state.favorite})
    } else if (this.props.user.name && favorites.find(favorite => favorite.title === title)) {
      let errorMessage = 'Error removing movie from favorites.';
      this.toggleFavorite(deleteObject, `http://localhost:3000/api/users/${this.props.user.id}/favorites/${id}`, 'DELETE', errorMessage);
      this.setState({favorite: !this.state.favorite})
    }
   }

   toggleFavorite = async (movieObject, url, method, error) => {
    try {
      await fetchStoreProperties(url, movieObject, method, error)
      let res = await fetch(`http://localhost:3000/api/users/${this.props.user.id}/favorites`)
      let movie = await res.json()
      await this.props.getFavorites(movie.data);
    } catch (error) {
      this.setState({ error: 'Error with toggling favorite movie.' })
    }
   }

   findFav = () => {
    return this.props.favorites.find(favorite => favorite.title === this.props.title)
   }
  
  render() {
    return (
      <article>
        <Link to={`/movies/${this.props.id}`}>
          <Overdrive id={this.props.id}>
            <img src={`${this.state.url}${this.props.moviePoster}`} alt=''/>
          </Overdrive>
        </Link>
        <img src={this.findFav() ? favy : favb} onClick={this.clickFav} alt='star' className='star'/>
        {this.state.redirect && <Redirect to='/login'/> }
      </article>
    )
  }
}

 
export const mapStateToProps = (state) => ({
  user: state.user,
  movies: state.movies,
  favorites: state.favorites
})

export const mapDispatchToProps = (dispatch) => ({
  getFavorites: movie => dispatch(getFavorites(movie)),
})
 
export default connect(mapStateToProps, mapDispatchToProps)(MovieCard)