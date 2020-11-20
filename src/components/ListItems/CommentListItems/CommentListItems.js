import React from 'react';
import './CommentListItems.css';

const CommentListItems = props => {
    return (
        <div className='comment-list-item'>
            <h3>Author: {props.author}</h3>
            <p>{props.comment}</p>
        </div>
    );
};

export default CommentListItems;