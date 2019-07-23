import React from 'react';
import { NavLink } from 'react-router-dom';
import { signOutUser } from '../../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import './NavBar.css'

export const NavBar = (props) => {

    return (
        <nav className="nav-bar">
            <NavLink className="headline" to='/'>MOVIE TRACKER</NavLink>
            <div className='command-buttons'>
              <NavLink className="link" to='/create-account'>Create A New Account</NavLink>
              {props.user.name && <NavLink className="link" to='/favorites'>Favorites</NavLink>}
              {!props.user.name && <NavLink className="link" to='/login'>Login</NavLink>}
            </div>
            {props.user.name && <NavLink className="link" onClick={() => props.signOutUser({})}>Sign out</NavLink>}
        </nav>
    )
}

NavBar.propTypes = {
  signOutUser: PropTypes.func,
  user: PropTypes.object
}

export const mapStateToProps = (state) => ({
    user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
    signOutUser: (user) => dispatch(signOutUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)