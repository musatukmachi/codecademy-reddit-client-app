import React, { useState } from 'react'
import '../styles/Navbar.css'

function Navbar() {
    const [ text, setText ] = useState();

    const handleChange = event => {
        setText(event.target.value);
    }

    return (        
        <nav>
            <div className="logo">
                <i id="reddit-logo" className="fab fa-reddit"></i>
                <h6 id="reddit-heading">Reddit</h6><h6 id="minimal-heading">Minimal</h6>
            </div>
            <div className="searchbar"><input onChange={handleChange} value={text}></input><i className="fas fa-search"></i></div>
        </nav>
    )
}

export default Navbar

