import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, getSinglePost } from '../../../../store/actions/forumActions';
import noImage from '../../../../assets/no-image.jpg';
import Spinner from '../../../../components/Spinner/Spinner';
import CommentListItems from '../../../../components/ListItems/CommentListItems/CommentListItems';
import './SinglePost.css';

const SinglePost = props => {
    const dispatch = useDispatch();
    const singlePost = useSelector(state => state.forum.singlePost);
    const user = useSelector(state => state.user.user);
    const [comment, setComment] = useState('');


    useEffect(() => {
        dispatch(getSinglePost(props.match.params.id));
    }, [dispatch, props.match.params.id, singlePost]);

    const commentInputValueOnChange = event => {
        setComment(event.target.value);
    };

    const addCommentFetch = event => {
        event.preventDefault();
        const data = {
            postID: props.match.params.id,
            comment: comment,
        };
        dispatch(addComment(data, user.token))
    };

    return (
        <div className='single-post-page-box'>
            {singlePost !== null ?
                <>
                    <div className='single-post-info-box'>
                        {singlePost.post.image ?
                            <img src={'http://localhost:8000/uploads/' + singlePost.post.image} /> :
                            <img src={noImage} alt={singlePost.post.title} />}

                        <h2>{singlePost.post.title}</h2>
                        {singlePost.post.description ? <p>{singlePost.post.description}</p> : null}
                    </div>



                    <h3>Comments :</h3>
                    <div className='comments-list'>
                        {singlePost.comments.map(c => {
                            return <CommentListItems key={c._id} comment={c.comment} author={c.userID.username} />
                        })}
                    </div>



                    {user !== null ?
                        <form className='comment-form' onSubmit={(event) => addCommentFetch(event)}>
                            <input onChange={commentInputValueOnChange} value={comment} placeholder='Comment' />
                            <button type='submit'>Add</button>
                        </form> : null}

                </>
                : <Spinner />}
        </div>
    );
};

export default SinglePost;