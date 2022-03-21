import './Gallery.css'
import React, { useState } from 'react'

export default function Gallery({gallery, close, update}){
    const [mouseOnElement, setMouseOnElement] = useState(false);
    return(
        <div className='gallery' onClick={() => !mouseOnElement && close()}>
                <button className='close-btn' onClick={() => close()}>x</button>
                <img 
                src={gallery.viewed} 
                alt="viewed" 
                className='viewed'
                onMouseOver={() => setMouseOnElement(true)}
                onMouseLeave={() => setMouseOnElement(false)}/>
                <div 
                className='gallery-images'
                onMouseOver={() => setMouseOnElement(true)}
                onMouseLeave={() => setMouseOnElement(false)}>
                    {gallery.photos.map((photo, key) => <img alt={`pic from gallery number ${key}`} className={gallery.viewed===photo ? 'active-image' : null} key={key} src={photo} onClick={() => update(photo)}/>)}
                </div>
        </div>
    )
}