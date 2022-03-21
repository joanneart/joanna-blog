import React, { useState } from "react";

export default function GalleryImage({photo, photos, openGallery, id, addLoaded}){
    const [ratio, setRatio] = useState(0);
    return(
        <img 
            onLoad={(e) => {
                addLoaded();
                setRatio(e.target.width/e.target.height);
            }}
            onClick={() => openGallery({viewed: photo, photos})}
            src={photo} 
            className={`${ratio < 1 ? 'vertical' : ''}`}
            alt={`grid object number ${id}`}
            />
    )
}