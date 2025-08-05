import React from "react";
import "./styles/homepage.css";
import NavBar from "../components/navBar";

const Homepage = () => {
    return (
        <div>
            <NavBar active="home"/>
            <div className="home-content">
                {/* first half of homepage content */}
                <div className="container">
                    <div className="intro">
                        <h2>Hello, </h2>
                        <h1>My name is <span style={{color:'#84a59d'}}>Shilpa Chowbey</span>.</h1>
                        <p>
                            I am currently a Masters of Engineering (MEng) student at UCLA.
                        </p>
                    </div>
                    <div className="homepage-image">
                        <img src="/prof-photo.png" alt="my professional portrait"/>
                    </div>   
                </div> 
            </div>
        </div>
    );
}

export default Homepage;