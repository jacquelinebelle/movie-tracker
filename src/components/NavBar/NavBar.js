import React from 'react';
import { NavLink } from 'react-router-dom';
import { signOutUser } from '../../actions';
import { connect } from 'react-redux';
import './NavBar.css'

const NavBar = (props) => {

    return (
        <nav className="nav-bar">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/create-account'>Create A New Account</NavLink>
            <NavLink to='/favorites'>Favorites</NavLink>
            {props.user.name && <button onClick={() => props.signOutUser({})}>Sign out</button>}
        </nav>
    )
}

const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = (dispatch) => ({
    signOutUser: (user) => dispatch(signOutUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)