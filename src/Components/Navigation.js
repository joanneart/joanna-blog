import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navigation(){
  const [isPhotographyOpen, setPhototgraphy] = useState(false);
    return(
        <header className="App-header">
        <nav>
          <ul>
            <li><Link to='/'>Strona główna</Link></li>
            <li><Link to='/'>Fotografia</Link></li>
            <li onClick={() => setPhototgraphy(prev => !prev)}><div>Malarstwo ▾</div>
            {isPhotographyOpen ? <ul className="nav-dropdown">
              <li><Link to='/'>Murale</Link></li>
              <li><Link to='/'>Obrazy</Link></li>
              <li><Link to='/'>Anioły</Link></li>
            </ul> : null}
            </li>
            <li><Link to='/'>Moda</Link></li>
            <li><Link to='/'>Relacje</Link></li>
          </ul>
        </nav>
      </header>
    )
}