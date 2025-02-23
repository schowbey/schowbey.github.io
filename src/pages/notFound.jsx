import React from "react";
import "./styles/homepage.css";
import NavBar from "../components/navBar";

const NotFound = () => {
    return (
        <div>
            <NavBar active=""/>
            <div className="home-content">
                <div className="homepage-image">
                    <h1>🐣  this page does not exist :(</h1>
                </div> 
            </div>
        </div>
    );
}

export default NotFound;