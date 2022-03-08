import React, { useState } from "react";
import { updateComment as updateCommentServer } from "../api";

export default function AddComment({comment, updateComment}){
    const [myComment, setComment] = useState('');
    const [author, setAuthor] = useState('');
    const [isCommenting, setIsCommenting] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    return(
        isCommenting ? <form className="comment-form" onSubmit={(e) => {
            e.preventDefault();
            setIsLoading(true);
            if(myComment && author){
                updateCommentServer({comments: [...comment.data.comments, {comment: myComment, author, date: new Date()}]}, comment.ref['@ref'].id)
                .then(comment => {
                    setIsLoading(false);
                    updateComment(comment, comment.ref['@ref'].id);
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
            <textarea name="comment" className="comment" rows="4" value={myComment} onChange={(e) => setComment(e.target.value)}/>
            {!isLoading ? <button>Dodaj komentarz</button> : <button>wysyłam...</button>}
        </form> : <div className="comment-button" onClick={(e) => {
            e.preventDefault();
            setIsCommenting(true);
        }}>Odpowiedz</div>
    )
}