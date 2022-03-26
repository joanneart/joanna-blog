import './Navigation.css';
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navigation(){
  const [isPhotographyOpen, setPhototgraphy] = useState(false);
  const [PaintingsOpener, setPaintings] = useState(false);

    return(
        <header className="App-header">
        <nav>
          <NavLink to='/' className="nav-profile">
            <h1 id="nav-header">JOANNEART</h1>
          </NavLink>
          <ul>

          <NavLink to='/'><li>Strona główna</li></NavLink>
          <li 
          onClick={() => {
            setPhototgraphy(prev => !prev);
            setPaintings(false);
          }}><div>Fotografia ▾</div>
            {isPhotographyOpen ? <ul className="nav-dropdown photography-nav-container">
            <NavLink to='/fotografia_artystyczna'><li>Fotografia Artystyczna</li></NavLink>
            <NavLink to='/sesje_zdjeciowe'><li>Sesje Zdjęciowe</li></NavLink>
            <NavLink to='/reportaze'><li>Reportaże</li></NavLink>
            </ul> : null}
          </li>
          <li 
          onClick={() => {
            setPaintings(prev => !prev);
            setPhototgraphy(false);
          }}><div>Malarstwo ▾</div>
            {PaintingsOpener ? <ul className="nav-dropdown">
            <NavLink to='/murale'><li>Murale</li></NavLink>
            <NavLink to='/obrazy'><li>Obrazy</li></NavLink>
            <NavLink to='/anioly'><li>Anioły</li></NavLink>
            </ul> : null}
          </li>
            <NavLink to='/moda'><li>Moda</li></NavLink>
            <NavLink to='/aktualnosci'><li>Aktualności</li></NavLink>
            <li onClick={() => {
              document.querySelector('#kontakt').scrollIntoView({behavior: 'smooth'})
            }}>Kontakt</li>
          </ul>
        </nav>
      </header>
    )
}