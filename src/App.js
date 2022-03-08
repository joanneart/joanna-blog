import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { getAllArticles, getAllComments } from './api';

import './App.css';

import Homepage from './Components/Homepage';
import Article from './Components/Article';

function App() {
  const [articles, setArticles] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getAllArticles().then(articles => setArticles([...articles].reverse()))
    getAllComments().then(comments => setComments([...comments].reverse()))
  },[])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage articles={articles} />}/>
          <Route path='/article/:id' element={<Article 
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
