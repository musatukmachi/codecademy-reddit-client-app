import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import PostContainer from './Posts/PostContainer';
import '../styles/Main.css';

function Main() {
    return (
        <div>
            <div className="post-container">
                <PostContainer />
            </div>
            <div className="sidebar-container">
                <Sidebar />
            </div>
        </div>
    )
}

export default Main;
