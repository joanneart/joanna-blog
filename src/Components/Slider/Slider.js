import React, { useEffect, useState } from "react";

import './Slider.css';

export default function Slider({imgs}){

    const [pointer, setPointer] = useState(0);
    const [intervalId, setIntervalId] = useState(0);

    useEffect(() => {
        let pointerInsider = 0;
        const intervalId = setInterval(() => {
            pointerInsider++;
            if(pointerInsider<imgs.length){
                setPointer(pointerInsider);
            }else{
                pointerInsider=0;
                setPointer(pointerInsider);
            }
            
        }, 4000)
        setIntervalId(intervalId);
        return () => {
            setPointer(0);
            clearInterval(intervalId)
        }
    }, [imgs.length])
    return(
        <>
        <div className="slider">
            <div className="slider-container" style={{marginLeft: '-'+100*pointer+'%', width: 100*imgs.length+'%'}}>
                {imgs.map((img,key) => <img 
                    key={key}
                    className="slider-img"
                    alt="something about this" 
                    src={img}/>
                )}
            </div>
            <form className="slider-controls">
            {imgs.map((img, key) => {
                return(
                    <input key={key} type="radio" value={key} id={`radio-btn${key}`} checked={pointer===key} name="radio-btn" onChange={() => {
                        setPointer(key);
                        clearInterval(intervalId);
                    }}/>
                )
            })}
        </form>
        </div>
        
    </>
    )
}