import React from 'react';
import BreweriesContainer from '../Container/BreweriesContainer';
import {NavLink} from 'react-router-dom';

const NavBar = props => {
    return (
      <div className="navbar">
        <NavLink to='/'>
          Home
        </NavLink>
      <br/>
        <NavLink to='/breweries'>
          Breweries
        </NavLink>
      </div>
    )
}

export default NavBar;
