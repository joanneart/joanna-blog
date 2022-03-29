import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { getAllArticles, getAllComments } from './api';

import './App.css';
import './MyTemplate.scss';

import Homepage from './Components/Homepage/Homepage';
import Article from './Components/Article/Article';
import Footer from './Components/Footer/Footer';
import Timeout from './Components/Timeout';
import Navigation from './Components/Navigation/Navigation';

function App() {
  const [articles, setArticles] = useState([]);
  const [comments, setComments] = useState([]);

  
  const compareDates = (a,b) => {
    const date1 = new Date(a.data.date);
    const date2 = new Date(b.data.date);
    return date1.getTime()-date2.getTime()
  }

  const recent = [...articles].sort((a,b) => compareDates(a,b)).reverse();
  const photography = recent.filter(article => article.data.article_type==='Fotografia Artystyczna');
  const sesje = recent.filter(article => article.data.article_type==='Sesje Zdjęciowe');
  const photoReportage = recent.filter(article => article.data.article_type==='Reportaż');
  const paintings = recent.filter(article => article.data.article_type==='Obrazy');
  const angels = recent.filter(article => article.data.article_type==='Anioły');
  const murals = recent.filter(article => article.data.article_type==='Murale');
  const blog = recent.filter(article => article.data.article_type==='Blog');
  const newest10=recent.slice(0,10);

  useEffect(() => {
    getAllArticles().then(articles => setArticles([...articles].reverse()))
    getAllComments().then(comments => setComments([...comments].reverse()))
  },[])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage  newest10={newest10} articles={articles} />}/>
          <Route path='/fotografia_artystyczna' element={<Homepage newest10={newest10} articles={photography} />}/>
          <Route path='/obrazy' element={<Homepage newest10={newest10} articles={paintings} />}/>
          <Route path='/sesje_zdjeciowe' element={<Homepage newest10={newest10} articles={sesje} />}/>
          <Route path='/reportaze' element={<Homepage newest10={newest10} articles={photoReportage} />}/>
          <Route path='/anioly' element={<Homepage newest10={newest10} articles={angels} />}/>
          <Route path='/murale' element={<Homepage newest10={newest10} articles={murals} />}/>
          <Route path='/blog' element={<Homepage newest10={newest10} articles={blog} />}/>
          <Route path='/aktualnosci' element={<Homepage newest10={newest10} articles={recent} />}/>
          <Route path='/article/:id' element={<Article 
          newest10={newest10}
          articles={articles} 
          comments={comments} 
          updateComment={(newComment, id) => setComments(prev => prev.map(comment => {
            return comment.ref['@ref'].id===id ? newComment : comment;
          }))} 
          addComment={(comment => setComments(prev => [comment, ...prev]))}/>}/>
          <Route path='/timeout' element={<Timeout />}/>
        </Routes>
        <Navigation articles={articles}/>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
