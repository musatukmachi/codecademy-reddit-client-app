import React from 'react'
import PostReaction from './PostReaction'
import PostContent from './PostContent'
import PostInfo from './PostInfo'
import '../../styles/Posts/Post.css'
import { getData } from '../../app/getData'

function Post(props) {
    return (
        <div className="post-container">
            <PostReaction postData={props.postData} />
            <PostContent postData={props.postData} />
            <PostInfo />
        </div>
    )
}

export default Post
