import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddComment from "./AddComment";
import Comments from "./Comments";
import Navigation from "./Navigation";
import Thumbnail from './Thumbnail'

export default function Article({articles, comments, addComment, updateComment}){
    let params = useParams();
    const [article, setArticle] = useState([]);


    let current = articles.find(article => article.ref['@ref'].id===params.id);

    useEffect(() => {
        setArticle(current ? current : [])
    },[articles, current])

    return (
        <>
        <Navigation />
        <main>
            <article>
                {article.data && article.data.article.map((part, key) => {
                    switch(part.type){
                        case 'h1':
                            return <h1 key={key}>{part.content}</h1>;
                        case 'h2':
                            return <h2 key={key}>{part.content}</h2>;
                        case 'h3':
                            return <h3 key={key}>{part.content}</h3>;
                        case 'h4':
                            return <h4 key={key}>{part.content}</h4>;
                        case 'p':
                            return <p key={key}>{part.content}</p>;
                        case 'list':
                            return <ul key={key}>{part.content.map((item, key) => <li key={key}>{item}</li>)}</ul>;
                        case 'img':
                            return <img src={part.content} alt='for the blog article'  key={key}/>;
                        default:
                            return null;
                    }
                })}
                <section className="comments-container">
                    <AddComment articleId={params.id} addComment={addComment}/>
                    <Comments comments={comments}  articleId={params.id} updateComment={updateComment}/>
                </section>
            </article>
            <section className="article-section">
                <h2>Na czasie</h2>
                {articles.map((article, key) => <Thumbnail key={key} article={article}/>)}
            </section>
        </main>
        </>
        
        
    )
}