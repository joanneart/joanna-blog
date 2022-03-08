import React from "react";
import { Link } from "react-router-dom";

export default function Thumbnail({article}){
    return(
        <Link  className="thumbnail" to={`/article/${article.ref['@ref'].id}`}>
            <p>{article.data.title}</p>
            <img src={article.data.img} alt={`blog article ${article.data.title}`} />
        </Link>
    )
}