import './Grid.scss'
import React, { useEffect } from "react";
import Image from "./Image"

export default function Grid({openGallery, photos, updateLoading, setLoaded, loadProgress}){
    useEffect(() => {
        if(photos.length){
            updateLoading(Math.floor(loadProgress/photos.length*100))
        }
    }, [loadProgress, photos.length, updateLoading])
return(
    <div className='photo-grid'>
        {photos.map((photo, key) => <Image key={key} addLoaded={() => setLoaded(loadProgress+1)} id={key} photo={photo} photos={photos} openGallery={openGallery}/>)}
    </div>
)
}