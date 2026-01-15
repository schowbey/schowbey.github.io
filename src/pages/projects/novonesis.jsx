import React from "react";
import "../styles/projects.css";
import NavBar from "../../components/navBar";

const Novonesis = () => {
    return (
            <div className="projects-container">
                <NavBar active="projects"/>
                <h1>Microbial Dashboard</h1>
                <div className = "container">
                    <div className = "overview">
                        <h2 style = {{fontWeight: "900"}}>Overview</h2>
                        <h3 style = {{fontWeight: "800"}}>LOCATION</h3>
                        <h3 style = {{fontWeight: "400"}}>Davis, CA</h3>
                        <h3 style = {{fontWeight: "800"}}>TIMELINE</h3>
                        <h3 style = {{fontWeight: "400"}}>11 weeks [June - September 2024]</h3>
                        <h3 style = {{fontWeight: "800"}}>TOOLS</h3>
                        <h3 style = {{fontWeight: "400"}}>React, Svelte, Python</h3>
                    </div>
                    <div className = "background">
                        <h2 style = {{fontWeight: "900"}}>Background</h2>  
                        <p>
                            In the summer between my junior and senior year of undergrad, I interned at <a href="https://www.novonesis.com/en">Novonesis</a>, a global biotech company specializing in biosolutions across agriculture, climate control, and food. I worked as an R&D Software Engineering Intern in the Data Science department. The site I was working at (Davis, CA) was an R&D center with many scientists performing experiements.  
                        </p>
                        <p>
                            
                        </p>
                    </div>
                </div>
                <h2 style = {{fontWeight: "700"}}>Problem</h2>  
                <p>
                    The goal of my internship was to create a dashboard for scientists to upload and search microbial datasets. 
                </p>
                <p>
                </p>
                <h2 style = {{fontWeight: "700"}}>Research</h2>
                <p>
                    This process began by first understanding the pre-existing database. Due to the complicated nature of the interrelated tables, it took me several days to understand it. Furthermore, there was a lot of vocabulary pertaining to the data types that I had to learn. Particularly with the sample
                </p>
                <p>
                </p>
                <h2 style = {{fontWeight: "700"}}>Building</h2>
                <p> 
                </p>
                <div className = "figures">
                    <img src = "/ece140/figma-140b.jpg" alt = "figma"/>
                    <p>Figure 1: Figma Mockup</p>
                </div>
                <p>
                    Then, I replicated it almost exactly in HTML, CSS, and JavaScript as seen in Figure 2. I also made a user flow map to understand the different ways a user could interact with my website. This allowed to prevent erroneous actions and make sure I had implemented all the features we wanted.
                </p>
                <div className = "figures">
                    <img src = "/ece140/actual-website.jpg" alt = "home page"/>
                    <p>Figure 2: Actual Home Page</p>
                    <img src = "/ece140/journey-map.jpg" alt = "user map"/>
                    <p>Figure 3: User Journey Map</p>
                </div>
                <p>
                    Utilizing my Cognitive Science background, I chose the pressure sensor to provide us with interesting analytics. Knowing that the body undergoes atonia (stillness) during the REM sleep stage, I could determine the number of sleep cycles a user went through by analyzing periods of stillness and movement. The pressure sensor data was sent to the app via MQTT, a subscribe/publish protocol. By subscribing to the pressure data 'channel', we could fetch the data and analyze it. When the user opted out of data collection, the data would not be published at all. In our MVP, I graphed and analyzed the data using JavaScript libraries, but in a better iteration, I could create an algorithm to determine the number of sleep cycles. Figure 4 shows a graph of a user's sleep data. When users chose to opt out of data collection, the data would not be published at all.
                </p>
                <div className = "figures">
                    <img src = "/ece140/sleep-graph.jpg" alt = "sleep graph"/>
                    <p>Figure 4: Sleep Data Graph</p>
                </div>
    
    
                <h2 style = {{fontWeight: "700"}}>The Final Pitch</h2>
                <div className = "figures">
                    <img src = "/ece140/product-poster.png" alt = "product poster"/>
                    <p>Figure 5: Product Poster</p>
                </div>
                <p>
                    Once we integrated the software with hardware, we had to write up a full proposal and prepare to pitch the project. I created our brand (SlumberSmart) and designed a logo. I also created a poster (Figure 5) that included our market research, user personas, features, and designs of our product. We presented to a panel of judges who were impressed with our product and the work we had done. Figure 6 shows our final set up, including the hardware-software integration
                </p>
                <div className = "figures">
                    <img src = "/ece140/final-integration.jpg" alt = "final presentation"/>
                    <p>Figure 6: Final Presentation</p>
                </div>
    
    
                <h2 style = {{fontWeight: "700"}}>Results</h2>
                <p>
                    This project was the most intensive one I have ever undertaken in school. The compressed timeline as well as the enormity of the task made it a challenge. Furthermore, this class was my first foray into working with hardware. The learning curve was steep, but I was able to overcome it due to my strong motivation for our product was strong. It was extremeley satisfying to have a hand in every single part of the product engineering process: research, building, branding, and pitching. I became a better engineer, designer, and team player.
                </p>
            </div>
    );
};

export default Novonesis;