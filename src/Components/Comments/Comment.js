import React, {useState} from "react";

import AddComment from "./AddComment2";

export default function Comment({comment, updateComment}){
    const [deep, setDepth] = useState(false);
    
    return(
        <li>
            <div className="comment-container">
                <p className="author">{comment.data.author}</p>
                <p className="comment">{comment.data.comment}</p>
            </div>
            <div className="comments-depth2">
                {comment.data.comments.length ? <span className="show-depth2" onClick={() => setDepth(prev => !prev)}>{comment.data.comments.length} Odpowiedzi</span> : null}
                {deep && <ul>{comment.data.comments.map((comment, key) => <li key={key}>
                    <h3>{comment.author}</h3>
                    <p>{comment.comment}</p>
                </li>)}</ul>}
            </div>
            <AddComment comment={comment} updateComment={updateComment}/>
            <div className="break"></div>
        </li>
    )
}