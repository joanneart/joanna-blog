import React from "react";
import Navigation from "./Navigation";

import Short from "./Short";
import Thumbnail from "./Thumbnail";

export default function Homepage({articles}){
    return(
        <>
        <Navigation />
        <main>
            <div className='shorts'>
            <h1>Najnowsze artykuły</h1>
            {articles.map((article, key) => <Short article={article} key={key} />)}
            </div>
            <section className='section'>
                <h2>Polecamy</h2>
            {[...articles].reverse().map((article, key) => <Thumbnail article={article} key={key} />)}
            </section>
        </main>
        </>
        
    )
}