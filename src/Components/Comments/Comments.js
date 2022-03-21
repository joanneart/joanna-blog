import './Comments.css';

import React from "react";
import Comment from "./Comment";

export default function Comments({comments, articleId, updateComment}){
    const myComments = comments.filter(comment => comment.data.articleId===articleId);
    return(
        <ul className='comments'>
            {myComments && myComments.map((comment, key) => <Comment comment={comment} updateComment={updateComment} key={key}/>)}
        </ul>
    )
}