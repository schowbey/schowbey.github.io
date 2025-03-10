import React from "react";
import "../styles/projects.css";
import NavBar from "../../components/navBar";

const ProductEngineering = () => {
    return (
        <div className="projects-container">
            <NavBar active="projects"/>
            <h1>Smart Pillow</h1>
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
                    <p>
                        ECE 140 A/B is a two-quarter Product Engineering class taught in the Electrical Computer Engineering department at UCSD. I took the sequence in the winter and spring quarters of my junior year. Thc curriculum combined business fundamentals with a variety of software/hardware engineering skills. In Winter Quarter, I learned how to create a full-stack project, from connecting a database to running an app to creating a UI to interacting with an API. I even learned how to work with hardware sensors to package and export data to analyze and display. As this was a Product Engineering class, we also reviewed what makes IOT (internet of things) products successful. At the end of that quarter, I submitted a proposal for a kitchen technology that, when installed in a fridge, informed the user what contents would expire soon based on what left and entered the fridge.                    
                    </p>
                    <p>
                        In Spring Quarter, I worked to <i>build</i> a product with a team of two other students. Using AGILE methodology, we embarked on five 2-week sprints to build a product from scratch.
                    </p>
                </div>
            </div>
            <h2 style = {{fontWeight: "700"}}>Problem</h2>  
            <p>
                As previously mentioned, the product had to be IOT, meaning it had to integrate software and hardware. Importantly, the integration had to be <i>nontrivial</i>; it had to add value. At the end of the quarter, we were expected to pitch our product to ‘investors’ — thus, we not only had to build the product. We had to complete all the steps of product engineering: research, protoype, test, brand, etc. By the end of the quarter, we had to have at least a Minimum Viable Product (MVP).
            </p>
            <p>
                My group chose to build a smart pillow with a water cooling system. It connected to an app that provided sleep data insights as well as the controls to the pillow temperature.
            </p>
            <h2 style = {{fontWeight: "700"}}>Research</h2>
            <p>
                The process began with researching the smart pillow market. Competitors included American Textile Company Inc., Mediflow Inc., and Tempur Sealy International Inc. There are no smart pillows currently on the market that combine active cooling with sleep data analysis. Furthermore, all similar products are priced at $300 - $500 whereas ours would be priced at $160.
            </p>
            <p>
                We identified 3 different customer personas:
                <ol>
                    <li>users who live in warmer climates who have trouble falling asleep</li>
                    <li>user who is curious about their personal sleep data</li>
                    <li>users who have difficulty sleeping due to hot underlying health issues</li>
                </ol>
                To confirm our list of features and gain insight, we conducted interviews with 14 diverse individuals. In addition to demographics, we asked about their white noise preferences, the stationary aspect of our product, the price they'd be willing to pay for a sleep aid with our features, etc. From this insight, we decided to include the following features:
                <ul>
                    <li>active cooling system via water tubes</li>
                        <li>an external unit where water could pass through to be cooled</li>
                    <li>sleep data analysis via pressure sensors</li>
                    <li>an app where you received analysis and could control the pillow</li>
                </ul>
            </p>
            <h2 style = {{fontWeight: "700"}}>Building</h2>
            <p> 
                While my team members worked on the hardware, I worked on the software. One user concern that was apparent from research was privacy concerns about the sleep data. Thus, I built a user authorization system on top of a database to ensure that only the user could access their data. Once the user created an account and logged in, their session expired after 15 minutes. As you can see in Figure 1, I created a mockup of the home page in Figma.
            </p>
            <div className = "figures">
                <img src = "/case-studies/figma-140b.jpg" alt = "figma"/>
                <p>Figure 1: Figma Mockup</p>
            </div>
            <p>
                Then, I replicated it almost exactly in HTML, CSS, and JavaScript as seen in Figure 2. I also made a user flow map to understand the different ways a user could interact with my website. This allowed to prevent erroneous actions and make sure I had implemented all the features we wanted.
            </p>
            <div className = "figures">
                <img src = "/case-studies/actual-website.jpg" alt = "home page"/>
                <p>Figure 2: Actual Home Page</p>
                <img src = "/case-studies/journey-map.jpg" alt = "user map"/>
                <p>Figure 3: User Journey Map</p>
            </div>
            <p>
                Utilizing my Cognitive Science background, I chose the pressure sensor to provide us with interesting analytics. Knowing that the body undergoes atonia (stillness) during the REM sleep stage, I could determine the number of sleep cycles a user went through by analyzing periods of stillness and movement. The pressure sensor data was sent to the app via MQTT, a subscribe/publish protocol. By subscribing to the pressure data 'channel', we could fetch the data and analyze it. When the user opted out of data collection, the data would not be published at all. In our MVP, I graphed and analyzed the data using JavaScript libraries, but in a better iteration, I could create an algorithm to determine the number of sleep cycles. Figure 4 shows a graph of a user's sleep data. When users chose to opt out of data collection, the data would not be published at all.
            </p>
            <div className = "figures">
                <img src = "/case-studies/sleep-graph.jpg" alt = "sleep graph"/>
                <p>Figure 4: Sleep Data Graph</p>
            </div>


            <h2 style = {{fontWeight: "700"}}>The Final Pitch</h2>
            <div className = "figures">
                <img src = "/case-studies/product-poster.png" alt = "product poster"/>
                <p>Figure 5: Product Poster</p>
            </div>
            <p>
                Once we integrated the software with hardware, we had to write up a full proposal and prepare to pitch the project. I created our brand (SlumberSmart) and designed a logo. I also created a poster (Figure 5) that included our market research, user personas, features, and designs of our product. We presented to a panel of judges who were impressed with our product and the work we had done. Figure 6 shows our final set up, including the hardware-software integration
            </p>
            <div className = "figures">
                <img src = "/case-studies/final-integration.jpg" alt = "final presentation"/>
                <p>Figure 6: Final Presentation</p>
            </div>


            <h2 style = {{fontWeight: "700"}}>Results</h2>
            <p>
                This project was the most intensive one I have ever undertaken in school. The compressed timeline as well as the enormity of the task made it a challenge. Furthermore, this class was my first foray into working with hardware. The learning curve was steep, but I was able to overcome it due to my strong motivation for our product was strong. It was extremeley satisfying to have a hand in every single part of the product engineering process: research, building, branding, and pitching. I became a better engineer, designer, and team player.
            </p>
        </div>
    );
}

export default ProductEngineering;