import React from 'react';

const UpvotesSection = ({ projectName, upvotes, setProjectInfo }) => {
    const upvoteProject = async () => {
        const result = await fetch(`/api/projects/${projectName}/upvote`, {
            method: 'post',
        });
        const body = await result.json();
        setProjectInfo(body);
    }
    return (
        <div id ="upvotes-section">
            <button className="fa fa-thumbs-up" onClick={upvoteProject}>Add Upvote</button>
            <p>This post has {upvotes} upvotes</p>
        </div>
    );
}

export default UpvotesSection;