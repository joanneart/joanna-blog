import './Short.scss';

import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Short({article, load}){
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            load();
        }, 2000)
        return () => clearTimeout(timeoutId)
    },[location.pathname, load])
    return(
        
            <section className='big-thumbnail' onClick={() => navigate(`/article/${article.ref['@ref'].id}`)}>
                <div className='container'>
                    <h4>{article.data.title}</h4>
                    <p>{article.data.description}</p>
                </div>
                <img src={article.data.img} onLoad={() => load()} alt={`blog article ${article.data.title}`} />
            </section>
    )
}