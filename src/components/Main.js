import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Post from './Posts/Post';
// import { getData } from '../app/getData';
import '../styles/Main.css';
import '../styles/Sidebar.css';
import * as jsonData from '../data.json';

function Main() {
    const [subreddit, setSubreddit] = useState('pics');
    const [postList, setPostList] = useState([]);
    
    const createPostDataArray = () => {
        let postDataArray = [];
        // console.log(getData(subreddit));
        let json = JSON.parse(JSON.stringify(jsonData));

        let dataArray = json.default.data.children.map(post => post.data);
        for (let post of dataArray) {
            if(post.post_hint == 'image') {
                postDataArray.push({
                    title: post.title,
                    src: post.url_overridden_by_dest,
                    author: post.author_fullname,
                    upVotes: post.ups
                });
            }
        }
        return postDataArray;
    }

    useEffect(() => {
        setPostList(createPostDataArray());
    },[]);

    const componentPostList = postList.map(postData => <Post postData={postData} />);

    return (
        <div className="main-container">
            <div className="postlist-container">
                {componentPostList}
            </div>
            <div className="sidebar-container">
            <h4>Subreddits</h4>
            
        </div>
        </div>
    )
}

export default Main;
