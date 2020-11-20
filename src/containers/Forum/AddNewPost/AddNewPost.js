import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../../../store/actions/forumActions';
import './AddNewPost.css';

const AddNewPost = props => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    const error = useSelector(state => state.forum.error);
    const [data, setData] = useState({
        title: '',
        description: '',
        image: '',
    });

    const changeTitle = event => {
        setData({...data, title: event.target.value});
    };

    const changeDescription = event => {
        setData({...data, description: event.target.value});
    };

    const changeImage = event => {
        setData({...data, image: event.target.files[0]});
    };

    const submitFormHandler = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', data.image);
        formData.append('title', data.title);
        formData.append('description', data.description);
        console.log(formData)
        dispatch(addPost(formData, user.token));
    };

    useEffect(() => {
        if (user === null) {
            props.history.replace("/posts")
        };
    }, [dispatch, user, props.history])

    return (
        <div className='user-sign-boxes addNewPost-form'>
            {error ?
                <div>
                    {error.error}
                </div> : null}
            <form onSubmit={submitFormHandler}>
                <input placeholder='Title' required onChange={changeTitle} value={data.title}/>
                <input placeholder='Description' required onChange={changeDescription} value={data.description}/>
                <input type='file' placeholder='Image' name='image' onChange={changeImage}/>
                <button type='submit'>Add New Post</button>
            </form>
        </div>
    );
};

export default AddNewPost;