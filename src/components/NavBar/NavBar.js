import React from 'react';
import { NavLink } from 'react-router-dom';
import { signOutUser } from '../../actions';
import { connect } from 'react-redux';
import './NavBar.css'

export const NavBar = (props) => {

    return (
        <nav className="nav-bar">
            <NavLink className="link" to='/'>Home</NavLink>
            <NavLink className="link" to='/login'>Login</NavLink>
            <NavLink className="link" to='/create-account'>Create A New Account</NavLink>
            <NavLink className="link" to='/favorites'>Favorites</NavLink>
            {props.user.name && <button onClick={() => props.signOutUser({})}>Sign out</button>}
        </nav>
    )
}

export const mapStateToProps = (state) => ({
    user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
    signOutUser: (user) => dispatch(signOutUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)