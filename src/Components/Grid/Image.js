import React, { useEffect, useState } from "react";

export default function GalleryImage({photo, photos, openGallery, id}){
    const [ratio, setRatio] = useState(0);
    useEffect(() => {
            const image = new Image();
            image.src = photo;
            image.onload = () => setRatio(image.width/image.height);
    }, [photo])
    return(
        <img 
            onClick={() => openGallery({viewed: photo, photos})}
            src={photo} 
            className={`${ratio < 1 ? 'vertical' : ''}`}
            alt={`grid object number ${id}`}
            />
    )
}