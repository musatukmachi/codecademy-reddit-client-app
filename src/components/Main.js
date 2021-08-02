import React, { useState, useEffect } from 'react';
import Post from './Posts/Post';
import { getSubredditPosts, getSubreddits } from '../app/getData';
import '../styles/Main.css';
import Subreddit from './Subreddit';

function Main() {
    const [subreddit, setSubreddit] = useState('/r/pics/');
    const [postList, setPostList] = useState([]);
    const [subredditList, setSubredditList] = useState([]);
    
    const createPostDataArray = async () => {
        return getSubredditPosts(subreddit)
        .then(data => {
            let postDataArray = [];
            for (let post of data) {
                if(post.post_hint == 'image') {
                    postDataArray.push({
                        id: data.indexOf(post),
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

    const createSubredditArray = async () => {
        return getSubreddits()
        .then(data => {
            let subredditArray = [];
            for (let sub of data) {
                subredditArray.push({
                    id: data.indexOf(sub),
                    title: sub.title,
                    url: sub.url,
                    icon: sub.icon_img
                });
            }
            return subredditArray;
        })
    }

    useEffect(() => {
        createPostDataArray().then(postDataArray => {
            setPostList(postDataArray);
        });
        createSubredditArray().then(subredditArray => {
            setSubredditList(subredditArray);
        });
    },[subreddit]);

    const handleSubredditChange = (sub) => {
        setSubreddit(sub);
    }

    const componentPostList = postList.map(postData => <Post key={postData.id} postData={postData} />);
    const componentSubredditList = subredditList.map(subData => <Subreddit key={subData.id} subData={subData} onClick={handleSubredditChange} />);

    return (
        <div className="main-container">
            <div className="postlist-container">
                {componentPostList}
            </div>
            <div className="sidebar-container">
                <h4>Subreddits</h4>
                <div>
                    {componentSubredditList}
                </div>
            </div>
        </div>
    )
}

export default Main;
