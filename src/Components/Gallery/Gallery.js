import './Gallery.css'
import React from 'react'

export default function Gallery({gallery, close, update}){
    return(
        <div className='gallery'>
                <button className='close-btn' onClick={() => close()}>x</button>
                <img src={gallery.viewed} alt="viewed" className='viewed'/>
                <div className='gallery-images'>
                    {gallery.photos.map((photo, key) => <img alt={`pic from gallery number ${key}`} key={key} src={photo} onClick={() => update(photo)}/>)}
                </div>
        </div>
    )
}