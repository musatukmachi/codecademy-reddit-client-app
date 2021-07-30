import React from 'react'
import '../../styles/Posts/PostContent.css'

function PostContent(props) {
    
    return (
        <div className="postcontent-container">
            <h5>{props.postData.title}</h5>
            <img src={props.postData.src} />
        </div>
    )
}

export default PostContent
