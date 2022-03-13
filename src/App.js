import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { getAllArticles, getAllComments } from './api';

import './App.css';

import Homepage from './Components/Homepage';
import Article from './Components/Article/Article';

function App() {
  const [articles, setArticles] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  
  const compareDates = (a,b) => {
    const date1 = new Date(a.data.date);
    const date2 = new Date(b.data.date);
    return date1.getTime()-date2.getTime()
  }


  const photography = articles.filter(article => article.data.article_type==='Fotografia Artystyczna');
  const sesje = articles.filter(article => article.data.article_type==='Sesje Zdjęciowe');
  const photoReportage = articles.filter(article => article.data.article_type==='Reportaż');
  const paintings = articles.filter(article => article.data.article_type==='Obrazy');
  const angels = articles.filter(article => article.data.article_type==='Anioły');
  const murals = articles.filter(article => article.data.article_type==='Murale');
  const fashion = articles.filter(article => article.data.article_type==='Moda');
  const recent = [...articles].sort((a,b) => compareDates(a,b)).reverse();

  const toggleLoading3s = useCallback(() => {
    setIsLoading(prev => !prev)
    setTimeout(() => {
      setIsLoading(prev => !prev)
    }, Math.random()*200+300)
  },[])

  useEffect(() => {
    getAllArticles().then(articles => setArticles([...articles].reverse()))
    getAllComments().then(comments => setComments([...comments].reverse()))
  },[])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage articles={articles} />}/>
          <Route path='/fotografia_artystyczna' element={<Homepage articles={photography} />}/>
          <Route path='/obrazy' element={<Homepage articles={paintings} />}/>
          <Route path='/sesje_zdjeciowe' element={<Homepage articles={sesje} />}/>
          <Route path='/reportaze' element={<Homepage articles={photoReportage} />}/>
          <Route path='/anioly' element={<Homepage articles={angels} />}/>
          <Route path='/murale' element={<Homepage articles={murals} />}/>
          <Route path='/moda' element={<Homepage articles={fashion} />}/>
          <Route path='/aktualnosci' element={<Homepage articles={recent} />}/>
          <Route path='/article/:id' element={<Article 
          isLoading={isLoading}
          toggleLoading={toggleLoading3s}
          articles={articles} 
          comments={comments} 
          updateComment={(newComment, id) => setComments(prev => prev.map(comment => {
            return comment.ref['@ref'].id===id ? newComment : comment;
          }))} 
          addComment={(comment => setComments(prev => [comment, ...prev]))}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
