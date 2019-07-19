import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router'; 
import { getFavorites } from '../../actions';
import { fetchAddFavorite } from '../../apiCalls';
import './MovieCard.css';

class MovieCard extends Component {
  constructor({moviePoster, movieId, title, releaseDate, voteAverage, overview, user}){
    super({moviePoster, movieId, title, releaseDate, voteAverage, overview, user});
    this.state = {
      url: 'http://image.tmdb.org/t/p/w154',
      redirect: false
    }
  }

  clickFav = async () => { 
    const movieObject =  {
      movie_id: this.props.movieId,
      user_id: this.props.user.id,
      title: this.props.title,
      poster_path: this.props.moviePoster,
      release_date: this.props.releaseDate,
      vote_average: this.props.voteAverage,
      overview: this.props.overview
    } 
    if(!this.props.user.name){
      this.setState({redirect:!this.state.redirect})
    } else {
      try {
        await fetchAddFavorite('http://localhost:3000/api/users/favorites/new', movieObject)
        let res = await fetch(`http://localhost:3000/api/users/${this.props.user.id}/favorites`)
        let movie = await res.json()
        await this.props.getFavorites(movie.data);
      } catch (error) {
        console.log(error)
      }
    } 
   }
  
  render() {
    return (
      <article>
        <img src={`${this.state.url}${this.props.moviePoster}`} alt=''/>
        <button onClick={this.clickFav}>Favorite</button>
        {this.state.redirect && <Redirect to='/login'/> }
      </article>
    )
  }
}

 
const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  getFavorites: movie => dispatch(getFavorites(movie))
})
 
export default connect(mapStateToProps, mapDispatchToProps)(MovieCard)