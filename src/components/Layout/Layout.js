import React from 'react';
import './Layout.css';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../store/actions/userActions';


const Layout = props => {
    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch();

    const logout = () =>{
        dispatch(logoutUser());
    };
    return (
        <>
            <header className='main-header'>
                <div className='header-content'>
                    <NavLink to='/posts/'>
                        <div className='logo-box'>
                            <h2 className='logo-title'>Forum</h2>
                        </div>
                    </NavLink>
                    <div className='users-menu'>
                        {user === null ?
                            <>
                                <NavLink to='/user/register'>Sign Up</NavLink>
                                <NavLink to='/user/login'>Sign In</NavLink>
                            </> :
                            <>
                                <h4>Hello , {user.username}!</h4>
                                <NavLink to='/addNewPost/'>Add New Post</NavLink>
                                <NavLink to='/posts/' onClick={logout}>Log Out</NavLink>
                            </>}

                    </div>
                </div>



            </header>
            {props.children}
        </>
    );
};

export default withRouter(Layout);