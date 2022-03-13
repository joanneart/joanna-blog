import './Grid.css'
import React from "react";
import Image from "./Image"

export default function Grid({openGallery, photos}){

return(
    <div className='photo-grid'>
        {photos.map((photo, key) => <Image key={key} id={key} photo={photo} photos={photos} openGallery={openGallery}/>)}
    </div>
)
}