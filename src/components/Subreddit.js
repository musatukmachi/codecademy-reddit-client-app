import React from 'react'
import '../styles/Subreddit.css'

function Subreddit(props) {

    const handleClick = () => props.onClick(props.subData.url);

    return (
        <div onClick={handleClick} className="subreddit-container">
            <img src={props.subData.icon} />
            {props.subData.title}
        </div>
    )
}

export default Subreddit
