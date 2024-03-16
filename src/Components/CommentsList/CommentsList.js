import React, { useState } from 'react';

// Had to initalize comments to useState because map function was reading undefined before it could be updated
const CommentsList = ({ comments = useState([])}) => (

    <React.Fragment>
    <h3>Comments:</h3>
    {comments.map((comment, key) => (
        <div className="comment" key={key}>
            <h4>{comment.username}</h4>
            <p>{comment.text}</p>
        </div>
    ))}
   </React.Fragment>
);

export default CommentsList;