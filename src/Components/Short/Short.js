import './Short.css';

import React from "react";
import { Link } from "react-router-dom";

export default function Short({article}){
    return(
        <Link to={`/article/${article.ref['@ref'].id}`}>
            <div className="short">
                <section>
                    <h3>{article.data.title}</h3>
                    <p>{article.data.description}</p>
                </section>
                <img src={article.data.img} alt={`blog article ${article.data.title}`} />
            </div>
        </Link>
        
    )
}