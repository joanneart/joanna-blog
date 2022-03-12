import React from "react";
import Navigation from "./Navigation/Navigation";

import VisitCard from "./VisitCard/VisitCard";
import Short from "./Short/Short";
import Thumbnail from './Thumbnail/Thumbnail'

export default function Homepage({articles}){
    return(
        <>
        <Navigation/>
        <VisitCard />
        <main>
            <div className='shorts'>
            <h1>Najnowsze artykuły</h1>
            {articles.map((article, key) => <Short article={article} key={key} />)}
            </div>
            <section className='section'>
                <h1>Polecamy</h1>
            {[...articles].reverse().map((article, key) => <Thumbnail article={article} key={key} />)}
            </section>
        </main>
        </>
        
    )
}