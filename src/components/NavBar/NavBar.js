import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    return(
        <>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/create-account'>Create A New Account</NavLink>
            <NavLink to='/favorites'>Favorites</NavLink>
        </>
    )
}

export default NavBar;