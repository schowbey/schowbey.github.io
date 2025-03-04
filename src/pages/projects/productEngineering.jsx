import React from "react";
import "../styles/projects.css";
import NavBar from "../../components/navBar";

const ProductEngineering = () => {
    return (
        <div className="projects-container">
            <NavBar active="projects"/>
            <h1>Product Engineering</h1>
            <div className = "container">
                <div className = "overview">
                    <h2 style = {{fontWeight: "900"}}>Overview</h2>
                    <h3 style = {{fontWeight: "800"}}>LOCATION</h3>
                    <h3 style = {{fontWeight: "400"}}>UC San Diego</h3>
                    <h3 style = {{fontWeight: "800"}}>TIMELINE</h3>
                    <h3 style = {{fontWeight: "400"}}>11 weeks [March - June 2024]</h3>
                    <h3 style = {{fontWeight: "800"}}>TOOLS</h3>
                    <h3 style = {{fontWeight: "400"}}>
                        HTML, MQTT, JavaScript, 
                        MySQL, Python
                    </h3>
                </div>
                <div className = "background">
                    <h2 style = {{fontWeight: "900"}}>Background</h2>  
                    <p>ECE 140 A/B is a two-quarter sequence class taught in the Electrical Computer Engineering department at UCSD. It combined business fundamentals with engineering skills. The first quarter was spent building up technical skills while understanding universal business practices.</p>
                    <h2>Problem</h2>  
                </div>
            </div>
        </div>
    );
}

export default ProductEngineering;