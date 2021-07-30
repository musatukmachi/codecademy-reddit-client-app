import React from 'react'
import Subreddit from './Subreddit'
import '../../styles/Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar-container">
            <h4>Subreddits</h4>
            <Subreddit />
        </div>
    )
}

export default Sidebar
