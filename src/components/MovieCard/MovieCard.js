import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router'; 
import './MovieCard.css';

class MovieCard extends Component {
  constructor({moviePoster, user}){
    super({moviePoster, user});
    this.state = {
      url: 'http://image.tmdb.org/t/p/w154',
      redirect: false
    }
  }

  clickFav = () => { 
    if(!this.props.user.name){
      this.setState({redirect:!this.state.redirect})
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

export default connect(mapStateToProps)(MovieCard)