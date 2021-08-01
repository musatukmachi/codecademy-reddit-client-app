import React, { useState, useEffect } from 'react';
import Post from './Posts/Post';
import { getData } from '../app/getData';
import '../styles/Main.css';
import '../styles/Sidebar.css';
// import * as jsonData from '../data.json';

function Main() {
    const [subreddit, setSubreddit] = useState('pics');
    const [postList, setPostList] = useState([]);
    
    const createPostDataArray = async () => {
        return getData(subreddit)
        .then(dataArray => {
            let postDataArray = [];
            for (let post of dataArray) {
                if(post.post_hint == 'image') {
                    postDataArray.push({
                        id: dataArray.indexOf(post),
                        title: post.title,
                        src: post.url_overridden_by_dest,
                        author: post.author,
                        upVotes: post.ups
                    });
                }
            }
            return postDataArray;
        });
    }

    useEffect(() => {
        createPostDataArray().then(postDataArray => {
            setPostList(postDataArray);
        });
    },[]);

    const componentPostList = postList.map(postData => <Post key={postData.id} postData={postData} />);

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
