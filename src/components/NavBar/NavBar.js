import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return(
        <nav className="nav-bar">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/create-account'>Create A New Account</NavLink>
            <NavLink to='/favorites'>Favorites</NavLink>
        </nav>
    )
}

export default NavBar;