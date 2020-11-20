import React from 'react';
import { NavLink } from 'react-router-dom';
import './PostListItems.css';

const PostListItems = props => {
    return (
        <div className='postListItem-box'>
            <img className='posts-img' src={props.img} alt={props.title} />
            <h3 className='posts-title'>{props.title}</h3>
            <p className='posts-author'>Author: {props.user}</p>
            <NavLink to={"/posts/" + props.id}>See more</NavLink>
        </div>
    );
};

export default PostListItems;