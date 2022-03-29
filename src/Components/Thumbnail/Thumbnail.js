import './Thumbnail.scss';

import React from "react";
import { useNavigate } from "react-router-dom";

export default function Thumbnail({article}){
    const navigate = useNavigate();
    return(
        <section className='small-thumbnail' style={{backgroundImage: `url(${article.data.img})`}}>
            <div className='container'>
                <h4>{article.data.title.toLowerCase()}</h4>
                <span>{article.data.article_type}</span>
            </div>
            <nav>
                <button className='primary' onClick={() => navigate(`/article/${article.ref['@ref'].id}`)}>Zobacz</button>
            </nav>
            
        </section>
    )
}