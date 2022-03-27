import './Navigation.css';
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navigation(){
  const [isPhotographyOpen, setPhototgraphy] = useState(false);
  const [PaintingsOpener, setPaintings] = useState(false);
  const [burgerOpen, setBurger] = useState(false);
  const navigate = useNavigate();

    return(
      <>
        <nav className='main'>
          <NavLink to='/' className="nav-profile">
            <h1 id="nav-header">JOANNEART</h1>
          </NavLink>
          <ul>

          <li><NavLink to='/'>Strona główna</NavLink></li>
          <li 
          onClick={() => {
            setPhototgraphy(prev => !prev);
            setPaintings(false);
          }}><NavLink to="/nowhere" onClick={(e) => e.preventDefault()}>Fotografia ▾</NavLink>{isPhotographyOpen &&<>
            <NavLink to='/fotografia_artystyczna'>Artystyczna</NavLink>
            <NavLink to='/sesje_zdjeciowe'>Sesje</NavLink>
            <NavLink to='/reportaze'>Reportaże</NavLink>
            </>}</li>
            
          
          <li 
          onClick={() => {
            setPaintings(prev => !prev);
            setPhototgraphy(false);
          }}><NavLink to="/nowhere" onClick={(e) => e.preventDefault()}>Malarstwo ▾</NavLink>{PaintingsOpener && <>
          <NavLink to='/murale'>Murale</NavLink>
          <NavLink to='/obrazy'>Obrazy</NavLink>
          <NavLink to='/anioly'>Anioły</NavLink>
          </>}</li>
            
            <li><NavLink to='/moda'>Moda</NavLink></li>
            <li><NavLink to='/aktualnosci'>Aktualności</NavLink></li>
            <li><NavLink to="/nowhere"  onClick={(e) => {
              e.preventDefault();
              document.querySelector('#kontakt').scrollIntoView({behavior: 'smooth'})
            }}>Kontakt</NavLink></li>
          </ul>
        </nav>
        <nav className='burger'>
          <div onClick={() => {
            navigate(-1);
            setBurger(false);
          }} className='back'>← Go back</div>
          <div className='container' onClick={() => setBurger(prev => !prev)}>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
          </div>
          {burgerOpen && <ul>
            <li><NavLink onClick={() => setBurger(false)} to='/murale'>Murale</NavLink></li>
            <li><NavLink onClick={() => setBurger(false)} to='/obrazy'>Obrazy</NavLink></li>
            <li><NavLink onClick={() => setBurger(false)} to='/anioly'>Anioły</NavLink></li>
            <li><NavLink onClick={() => setBurger(false)} to='/moda'>Moda</NavLink></li>
            <li><NavLink onClick={() => setBurger(false)} to='/aktualnosci'>Aktualności</NavLink></li>
            <li><NavLink onClick={(e) => {
              e.preventDefault();
              setBurger(false);
              document.querySelector('#kontakt').scrollIntoView({behavior: 'smooth'})
            }} to='#'>Kontakt</NavLink></li>
          </ul>}
        </nav>
      </>
    )
}