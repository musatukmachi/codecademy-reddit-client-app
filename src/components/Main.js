import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Post from './Posts/Post';
import { getData } from '../app/getData';
import '../styles/Main.css';
import '../styles/Sidebar.css'

function Main() {
    const [subreddit, setSubreddit] = useState('pics');

    const createPostDataArray = () => {
        let postDataArray = [];
        console.log(getData(subreddit));
        
        // for (let post of dataArray) {
        //     if(post.post_hint == 'image') {
        //         postDataArray.push({
        //             title: post.title,
        //             src: post.url_overridden_by_dest,
        //             author: post.author_fullname,
        //             upVotes: post.ups
        //         });
        //     }
        // }
        // return postDataArray.map(postData => {
        //     <Post postData={postData} />
        // });
    }

    return (
        <div className="main-container">
            {createPostDataArray()}
            <div className="sidebar-container">
            <h4>Subreddits</h4>
            
        </div>
        </div>
    )
}

export default Main;
