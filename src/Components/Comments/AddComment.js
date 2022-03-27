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
            }}
            className="transparent-warning rounded">Zamknij</button>
            <input placeholder="Imię i nazwisko" name="name" className="name" type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/>
            <textarea placeholder="Twój komentarz..." name="comment" className="comment" rows="4" value={comment} onChange={(e) => setComment(e.target.value)}/>
            <button className="success">Dodaj komentarz</button>
        </form> : <button className="primary" onClick={(e) => {
            e.preventDefault();
            setIsCommenting(true);
        }}>Skomentuj</button>
        
    )
}