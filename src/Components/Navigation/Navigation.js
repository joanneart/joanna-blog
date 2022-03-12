import './Navigation.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navigation(){
  const [isPhotographyOpen, setPhototgraphy] = useState(false);
    

    return(
        <header className="App-header">
        <nav>
          <Link to='/'>
            <h1 id="nav-header">JOANNEART</h1>
          </Link>
          <ul>

            <li><Link to='/'>Strona główna</Link></li>
            <li><Link to='/fotografia'>Fotografia</Link></li>
            <li onClick={() => setPhototgraphy(prev => !prev)}><div>Malarstwo ▾</div>
            {isPhotographyOpen ? <ul className="nav-dropdown">
              <li><Link to='/murale'>Murale</Link></li>
              <li><Link to='/obrazy'>Obrazy</Link></li>
              <li><Link to='/anioly'>Anioły</Link></li>
            </ul> : null}
            </li>
            <li><Link to='/moda'>Moda</Link></li>
            <li><Link to='/aktualnosci'>Aktualności</Link></li>
          </ul>
        </nav>
      </header>
    )
}