import './Thumbnail.css';

import React from "react";
import { Link } from "react-router-dom";

export default function Thumbnail({article}){
    return(
        <Link  className="thumbnail" to={`/article/${article.ref['@ref'].id}`}>
            
            <div className='thumbnail-darkener'>
                <p className='thumbnail-title'>{article.data.title}</p>
            </div>
            <img src={article.data.img} alt={`blog article ${article.data.title}`} />
        </Link>
    )
}