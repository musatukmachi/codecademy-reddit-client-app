import React from 'react'
import PostReaction from './PostReaction'
import PostContent from './PostContent'
import PostInfo from './PostInfo'
import '../../styles/Posts/Post.css'

function Post(props) {
    return (
        <div className="post-container">
            <div>
            <PostReaction postData={props.postData} />
            <PostContent postData={props.postData} />
            </div>
            <PostInfo postData={props.postData} />
        </div>
    )
}

export default Post
