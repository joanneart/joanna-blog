import './Article.css';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddComment from "../Comments/AddComment";
import Comments from "../Comments/Comments";
import Slider from "../Slider/Slider";
import Thumbnail from '../Thumbnail/Thumbnail';
import Grid from '../Grid/Grid';
import Gallery from '../Gallery/Gallery';

import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Share from '../Share/Share';

export default function Article({ newest10, articles, comments, addComment, updateComment}){
    const [loaded, setLoaded] = useState(0);
    const [isLoading, setLoading] = useState(true);
    const [loadProgress, setLoad] = useState(0);
    const [article, setArticle] = useState([]);
    const [date, setDate] = useState('');
    const [galleryOpener, setGalleryOpener] = useState(false);
    const [gallery, setGallery] = useState({});
    const location = useLocation();
    let params = useParams();

    let current = articles.find(article => article.ref['@ref'].id===params.id);

    const updateViewedPic = (viewed) => setGallery(prev => ({...prev, viewed}));

    const openGallery = (newGallery) => {
        setGalleryOpener(true);
        setGallery(newGallery);
    }

    useEffect(() => {
        window.scrollTo(0,0);
        if(current){
            setArticle(current)
        }
        setDate(new Date(current ? current.data.date : ''))
    },[articles, current])

    useEffect(() => {
        setLoading(true);
        if(loaded===100){
            setLoading(false);
        }
    },[loaded])

    useEffect(() => {
        return () => setLoad(0)
    },[location.pathname])

    return (
        <>
        <Helmet>
            <title>{current ? current.data.title : 'Artykuł z Bloga Joannneart'}</title>
            <meta property="og:url" content={`https://joanneart.netlify.app${location.pathname}`}></meta>
            <meta property="og:site_name" content="Joanneart"></meta>
            <meta property="og:type" content="article"></meta>
            <meta property="og:title" content={ current ? current.data.title : 'Artykuł z Bloga Joannneart'}></meta>
            <meta property="og:description" content={ current ? current.data.description : 'Artykuł z Bloga Joannneart'}></meta>
            <meta property="og:image" content={ current ? `https://joanneart.netlify.app${current.data.img.slice(2)}` : 'Artykuł z Bloga Joanneart'}></meta>
        </Helmet>
        {galleryOpener && <Gallery gallery={gallery} close={() => setGalleryOpener(false)} update={updateViewedPic}/>}
        {isLoading && <div className="riple-container"><div className="lds-ripple"><div></div><div></div></div></div>}
        <main>
            {<article>
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
                            return <Grid key={key} loadProgress={loadProgress} setLoaded={(value) => setLoad(value)} updateLoading={(value) => setLoaded(value)} openGallery={openGallery} photos={part.content}/>
                        case 'img':
                            return <img src={part.content} alt='for the blog article'  key={key}/>;
                        default:
                            return null;
                    }
                })}
                <p className="date">Dodano: {date && date.toLocaleDateString()}</p>
                <Share url={`https://joanneart.netlify.app${location.pathname}`} />
                <AddComment articleId={params.id} addComment={addComment}/>
                <Comments comments={comments}  articleId={params.id} updateComment={updateComment}/>
            </article>}
            <section className="article-section">
                <h4>Najnowsze</h4>
                {newest10.map((article, key) => <Thumbnail key={key} article={article}/>)}
            </section>
        </main>
        </>
        
        
    )
}