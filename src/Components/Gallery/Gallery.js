import './Gallery.css'
import React, { useState } from 'react'

export default function Gallery({gallery, close, update}){
    const [mouseOnElement, setMouseOnElement] = useState(false);
    return(
        <div className='gallery' onClick={() => !mouseOnElement && close()}>
            <nav className='top'>
                <button className='warning' onClick={() => close()}>x</button>
            </nav>
                
                <img 
                src={gallery.viewed} 
                alt="viewed" 
                className='viewed'
                onMouseOver={() => setMouseOnElement(true)}
                onMouseLeave={() => setMouseOnElement(false)}/>
                <nav 
                className='side'
                onMouseOver={() => setMouseOnElement(true)}
                onMouseLeave={() => setMouseOnElement(false)}>
                    {gallery.photos.map((photo, key) => <img alt={`pic from gallery number ${key}`} className={gallery.viewed===photo ? 'active' : null} key={key} src={photo} onClick={() => update(photo)}/>)}
                </nav>
        </div>
    )
}