import './Article.css';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddComment from "../AddComment";
import Comments from "../Comments";
import Navigation from "../Navigation/Navigation";
import Slider from "../Slider/Slider";
import Thumbnail from '../Thumbnail/Thumbnail';
import Grid from '../Grid/Grid';
import Gallery from '../Gallery/Gallery';

import { useLocation } from 'react-router-dom';
import { FacebookShareButton } from "react-share";
import { Helmet } from 'react-helmet';

export default function Article({ newest10, isLoading, toggleLoading, articles, comments, addComment, updateComment}){
    let params = useParams();
    const [article, setArticle] = useState([]);
    const [date, setDate] = useState('');
    const [galleryOpener, setGalleryOpener] = useState(false);
    const [gallery, setGallery] = useState({});
    const location = useLocation();

    let current = articles.find(article => article.ref['@ref'].id===params.id);

    const updateViewedPic = (viewed) => setGallery(prev => ({...prev, viewed}));

    const openGallery = (newGallery) => {
        setGalleryOpener(true);
        setGallery(newGallery);
    }

    useEffect(() => {
        if(current){
            setArticle(current)
        }
        
        setDate(new Date(current ? current.data.date : ''))
    },[articles, current])

    useEffect(() => {
        toggleLoading();
        window.scrollTo(0,0);
    },[current, toggleLoading])

    return (
        <>
        <Helmet>
            <title>{current ? current.data.title : 'Artykuł z Bloga Joannneart'}</title>
            <meta property="og:site_name" content="Joanneart"></meta>
            <meta property="og:type" content="article"></meta>
            <meta property="og:title" content={ current ? current.data.description : 'Artykuł z Bloga Joannneart'}></meta>
            <meta property="og:image" content={ current ? `https://joanneart.netlify.app${current.data.img.slice(2)}` : 'Artykuł z Bloga Joanneart'}></meta>
        </Helmet>
        <Navigation/>
        {galleryOpener && <Gallery gallery={gallery} close={() => setGalleryOpener(false)} update={updateViewedPic}/>}
        {isLoading && <div className="riple-container"><div className="lds-ripple"><div></div><div></div></div></div>}
        <main>
            <article>
                {article.data && <p>z kategorii {article.data.article_type}</p>}
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
                        case 'slider':
                            return <Slider key={key} imgs={part.content}/>;
                        case 'grid':
                            return <Grid key={key} openGallery={openGallery} photos={part.content}/>
                        case 'img':
                            return <img src={part.content} alt='for the blog article'  key={key}/>;
                        default:
                            return null;
                    }
                })}
                <p className="date">Dodano: {date && date.toLocaleDateString()}</p>
                <FacebookShareButton url={`https://joanneart.netlify.app${location.pathname}`}>
                    <button>Udostępnij</button>
                </FacebookShareButton>
                <section className="comments-container">
                    <AddComment articleId={params.id} addComment={addComment}/>
                    <Comments comments={comments}  articleId={params.id} updateComment={updateComment}/>
                </section>
            </article>
            <section className="article-section">
                <h1>Najnowsze</h1>
                {newest10.map((article, key) => <Thumbnail key={key} article={article}/>)}
            </section>
        </main>
        </>
        
        
    )
}