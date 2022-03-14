import React from "react";
import Navigation from "./Navigation/Navigation";

import VisitCard from "./VisitCard/VisitCard";
import Short from "./Short/Short";
import Thumbnail from './Thumbnail/Thumbnail'

export default function Homepage({articles, newest10}){
    return(
        <>
        <Navigation/>
        <VisitCard />
        <main>
            <div className='shorts'>
            {articles.map((article, key) => <Short article={article} key={key} />)}
            </div>
            <section className='section'>
                <h1>Najnowsze</h1>
            {newest10 && newest10.map((article, key) => <Thumbnail article={article} key={key} />)}
            </section>
        </main>
        </>
        
    )
}