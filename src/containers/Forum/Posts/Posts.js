import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostListItems from '../../../components/ListItems/PostListItems/PostListItems';
import { getPosts } from '../../../store/actions/forumActions';
import noImage from '../../../assets/no-image.jpg';
import './Posts.css';

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.forum.posts);

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <div className='posts-box'>
            {posts && posts.map(p => {
                let src;
                if (p.image) {
                    src = 'http://localhost:8000/uploads/' + p.image;
                } else {
                    src = noImage;
                };
                return <PostListItems key={p._id}
                    img={src}
                    id={p._id}
                    title={p.title}
                    user={p.user.username}
                />
            })}
        </div>
    );
};

export default Posts;