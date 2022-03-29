import React, {useState} from "react";

import AddComment from "./AddComment2";

export default function Comment({comment, updateComment}){
    const [deep, setDepth] = useState(false);
    
    return(
        <>
            <div className="comment-container">
                <h3 className="author">{comment.data.author}</h3>
                <p className="comment">{comment.data.comment}</p>
            </div>
            <AddComment comment={comment} updateComment={updateComment}/>
            <div className="comments-depth2">
                {comment.data.comments.length ? <span className="show-depth2" onClick={() => setDepth(prev => !prev)}>{`${comment.data.comments.length} ${comment.data.comments.length===1 ? 'Odpowiedź' : 'Odpowiedzi'}`}</span> : null}
                {deep && <>{comment.data.comments.map((comment, key) => <div key={key}>
                    <h3>{comment.author}</h3>
                    <p>{comment.comment}</p>
                </div>)}</>}
            </div>
            <div className="break"></div>
        </>
    )
}