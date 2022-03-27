import React, { useCallback, useEffect, useState } from "react";

import VisitCard from "../VisitCard/VisitCard";
import Short from "../Short/Short";
import Thumbnail from '../Thumbnail/Thumbnail';

import { Helmet } from "react-helmet";
import { useLocation, useNavigate } from "react-router-dom";
import Share from "../Share/Share";

export default function Homepage({articles, newest10}){
    const[isLoading, setLoading] = useState(true);
    const[loadedCouter, setCounter] = useState(0);

    const location = useLocation();
    const navigate = useNavigate();

    const load = useCallback(() => {
        setCounter(prev => prev+1)
    },[])

    useEffect(() => {
        if(articles.length && (loadedCouter>=articles.length)){
            setLoading(false);
        }
    },[loadedCouter, articles.length])
    useEffect(() => {
        return () => {
            setCounter(0);
            setLoading(true);
        }
    },[location.pathname])

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            if(isLoading){
                navigate('/timeout')
            }
        },5000)
        return () => clearTimeout(timeoutID);
    },[isLoading, navigate])

    useEffect(() => {
        if(location.pathname!=='/'){
            window.scrollTo({top: 900});
        }else{
            window.scrollTo({top: 0});
        }
        
    },[location])

    return(
        <>
        <Helmet>
            <title>Joanneart</title>
            <meta property="og:site_name" content="Joanneart"></meta>
            <meta property="og:url" content="https://joanneart.netlify.app"></meta>
            <meta property="og:type" content="blog"></meta>
            <meta property="og:title" content="Blog Joanneart. Tematy: Fotografia, Malarstwo, Murale, Sesja Zdjęciowa, Reportaż, Moda"></meta>
            <meta property="og:description" content='Jest we mnie piękna, ciekawa świata istota o bogatej wyobraźni, która swoim uśmiechem i "magią rąk" sprawia, że świat nabiera barw...a ja ją biorę z miłością za rękę i malujemy, fotografujemy, sprawiając radość i zmieniając świat.'></meta>
            <meta property="og:image" content="https://joanneart.netlify.app/imgs/profile/profile.jpg"></meta>
        </Helmet>
        {isLoading && <div className="riple-container"><div className="lds-ripple"><div></div><div></div></div></div>}
        <VisitCard />
        <main>
            <div className='shorts'>
            {articles.map((article, key) => <Short load={load} article={article} key={key} />)}
            <Share url={"https://joanneart.netlify.app"}/>
            </div>
            <section className='section'>
                <h1>Najnowsze</h1>
            {newest10 && newest10.map((article, key) => <Thumbnail article={article} key={key} />)}
            </section>
        </main>
        </>
        
    )
}