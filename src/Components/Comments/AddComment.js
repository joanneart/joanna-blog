import React, { useState } from "react";
import { createComment } from "../../api";

export default function AddComment({articleId, addComment}){
    const [comment, setComment] = useState('');
    const [author, setAuthor] = useState('');
    const [isCommenting, setIsCommenting] = useState(false)
    return(
        isCommenting ? <form className="comment-form" onSubmit={(e) => {
            e.preventDefault();
            if(comment && author && articleId){
                createComment({comment, author, date: new Date(), articleId})
                .then(comment => {
                    addComment(comment);
                    setComment('');
                    setAuthor('');
                })
            }
        }}>
            <button onClick={(e) => {
                e.preventDefault();
                setIsCommenting(false);
            }}>Zamknij</button>
            <label htmlFor="name">Imię</label>
            <input name="name" className="name" type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/>
            <label htmlFor="comment">Komentarz</label>
            <textarea name="comment" className="comment" rows="4" value={comment} onChange={(e) => setComment(e.target.value)}/>
            <button>Dodaj komentarz</button>
        </form> : <button className="btn-primary" onClick={(e) => {
            e.preventDefault();
            setIsCommenting(true);
        }}>Skomentuj</button>
        
    )
}