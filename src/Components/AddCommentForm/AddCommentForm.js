import React, { useState } from 'react';

const AddCommentForm = ({ projectName, setProjectInfo }) => {
    const [username, setUsername] = useState('');
    const [commentText, setCommentText] = useState(''); 

    const addComment = async () => {
        const result = await fetch(`/api/projects/${projectName}/add-comment`, {
            method: 'post',
            body: JSON.stringify({ username, text: commentText }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const body = await result.json();
        setProjectInfo(body);
        setUsername('');
        setCommentText('');

    };

    return (
        <div id="add-comment-form">
            <h3>Comment Section</h3>
            <label>
                Name: 
                <input type="text" placeholder="Enter your name" value ={username} onChange={(event) => setUsername(event.target.value)} />
            </label>
            <label> 
                Comment:
                <textarea rows="4" cols="50" placeholder="Add a public comment here..." value = {commentText} onChange={(event) => setCommentText(event.target.value)} />
            </label>
            <button onClick={addComment}>Add Comment</button>
        </div>
    );
}

export default AddCommentForm;