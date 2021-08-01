import React from 'react'
import '../../styles/Posts/PostInfo.css'

function PostInfo(props) {
    return (
        <div className="postinfo-container">
            <hr />
            {props.postData.author}
        </div>
    )
}

export default PostInfo
