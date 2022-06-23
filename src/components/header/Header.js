import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

function Header() {

    return (
        <div className="header">
            <Link to="/"> <h1>Enjoy <span>ROME</span></h1></Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="places">Places</Link>
                <Link to="share-your-story">Share your story</Link>
            </div>

        </div>

    )
}
export default Header;