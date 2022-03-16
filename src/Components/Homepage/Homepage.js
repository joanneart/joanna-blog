import React from "react";
import Navigation from "../Navigation/Navigation";

import VisitCard from "../VisitCard/VisitCard";
import Short from "../Short/Short";
import Thumbnail from '../Thumbnail/Thumbnail';
import { FacebookShareButton } from "react-share";

import { Helmet } from "react-helmet";

export default function Homepage({articles, newest10}){

    return(
        <>
        <Helmet>
            <title>blaaah</title>
            <meta property="og:site_name" content="Agnieszka Maciąg"></meta>
            <meta property="og:url" content="https://agnieszkamaciag.pl/prosty-makowiec-wilgotny-i-aromatyczny/"></meta>
            <meta property="og:type" content="article"></meta>
            <meta property="og:title" content="Przepyszny i bardzo prosty makowiec – wilgotny, aromatyczny, z jabłkami, bez mąki!"></meta>
            <meta property="og:description" content="Nadal zastanawiam się, jakie ciasta przygotuję na te Święta. Mam tak wielu faworytów… Mak obowiązkowo musi być, ale może w tym roku zdradzę mój ulubiony ..."></meta>
            <meta property="og:image" content="https://agnieszkamaciag.pl/wp-content/uploads/2015/12/2m-1.jpg"></meta>
        </Helmet>
        <Navigation/>
        <VisitCard />
        <main>
            <div className='shorts'>
            {articles.map((article, key) => <Short article={article} key={key} />)}
            <FacebookShareButton url={`https://main--joanna-blog-users.netlify.app`}>
                    <button>Udostępnij</button>
            </FacebookShareButton>
            </div>
            <section className='section'>
                <h1>Najnowsze</h1>
            {newest10 && newest10.map((article, key) => <Thumbnail article={article} key={key} />)}
            </section>
        </main>
        </>
        
    )
}