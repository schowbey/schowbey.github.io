import React from "react";
import "./styles/projects.css";
import NavBar from "../components/navBar";

const Projects = () => {
    return (
        <div className="projects-container">
            <NavBar active="projects"/>
            <h1>this is the projects page.</h1>
        </div>
    );
}

export default Projects;