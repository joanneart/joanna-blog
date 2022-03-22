import './Short.css';

import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Short({article, load}){

    const location = useLocation();
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            load();
        }, 2000)
        return () => clearTimeout(timeoutId)
    },[location.pathname])
    return(
        <Link to={`/article/${article.ref['@ref'].id}`}>
            <div className="short">
                <section>
                    <h3>{article.data.title}</h3>
                    <p>{article.data.description}</p>
                </section>
                <img src={article.data.img} onLoad={() => load()} alt={`blog article ${article.data.title}`} />
            </div>
        </Link>
        
    )
}