import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <div className="headerTop">
        <nav>
          <ul>
            <li>
              <NavLink to='/'>Accueil</NavLink>
            </li>
            <li>
              <NavLink to='/about'>A propos</NavLink>
            </li>
            <li>
              <NavLink to='/cars'>Voitures</NavLink>
            </li>
            <li>
              <NavLink to='/services'>Services</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="headerBottom">
        <div className="headerRow">
          <img src="./assets/uploads/logo.png" alt="Arrivx Taxi" />
        </div>
      </div>
    </div>
  )
}

export default Header