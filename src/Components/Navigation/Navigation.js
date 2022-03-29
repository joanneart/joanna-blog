import './Navigation.css';
import React, { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

export default function Navigation({articles}){
  const [isPhotographyOpen, setPhototgraphy] = useState(false);
  const [PaintingsOpener, setPaintings] = useState(false);
  const [burgerOpen, setBurger] = useState(false);
  const [isSearching, setSearcher] = useState(false);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
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
            
            <li><NavLink to='/blog'>Blog</NavLink></li>
            <li><NavLink to='/aktualnosci'>Aktualności</NavLink></li>
            <li><NavLink to="/nowhere"  onClick={(e) => {
              e.preventDefault();
              document.querySelector('#kontakt').scrollIntoView({behavior: 'smooth'})
            }}>Kontakt</NavLink></li>
            <li>
              <span className='search-icon' onClick={() => setSearcher(prev => !prev)}>🔍︎</span>
            </li>
            {<li>
              <form className='form-inline' style={{width: isSearching? 'auto': '0px', overflow: 'hidden'}}>
                <input type="search" value={search} onChange={(e) => {
                  setSearch(e.target.value);
                  if(e.target.value.length){
                    setResults(articles.filter(article => article.data.title.toLowerCase().includes(e.target.value.toLowerCase())))
                  }else{
                    setResults([]);
                  }
                }} placeholder='szukaj...'/>
              </form>
              <>
                {results.slice(0,3).map((result, key) => <Link key={key} onClick={() => {
                  setSearch('');
                  setResults([]);
                }} to={`/article/${result.ref['@ref'].id}`}>{`${result.data.title.slice(0,20)}${result.data.title.length>20 ? '...' : ''}`}</Link>)}
              </>
            </li>}
          </ul>
        </nav>
        <nav className='burger'>
          {useLocation().pathname!=='/' && <div onClick={() => {
            navigate(-1);
            setBurger(false);
          }} className='back'>← Go back</div>}
          <div className='container' onClick={() => setBurger(prev => !prev)}>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
          </div>
          {burgerOpen && <ul>
            <li><NavLink onClick={() => setBurger(false)} to='/murale'>Murale</NavLink></li>
            <li><NavLink onClick={() => setBurger(false)} to='/obrazy'>Obrazy</NavLink></li>
            <li><NavLink onClick={() => setBurger(false)} to='/anioly'>Anioły</NavLink></li>
            <li><NavLink onClick={() => setBurger(false)} to='/blog'>Blog</NavLink></li>
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