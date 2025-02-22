import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faReact, faHtml5, faCss3, faPython, faJava, faJs, faFigma} from "@fortawesome/free-brands-svg-icons";
import NavBar from "../components/navBar";
import "./styles/about.css";

const About = () => {
	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-container">
						<h1><b>About Me</b></h1>
						<div className="about-main">
							<p>I am pursuing a B.S. in Cognitive and Computer Science, expecting to graduate in March of 2025 from University of California, San Diego. My degree specializes in Human-Computer Interaction. Currently, my professional interests are full-stack and software engineering. My career journey has taken me across many different industries, including education, biotechnology, nonprofit work, and more. Through classes like  "Product Engineering", "Advanced Data Structures", and "Practical Data Science", I have honed the skills necessary to succeed in the industry.</p>

							<p>Furthermore, I have cultivated my personal interests through extracurriculars at UCSD: Triton Consulting Group, Acapella, Peer Health Education, and more. By serving as leadership and even president, I have been able to develop my leadership and communication skills.</p>

							<h3>Technical Skills</h3>
							<div className="skills">
								<span className="skill-tile" style={{backgroundColor:'#f28482'}}>
									<FontAwesomeIcon icon={faReact}/> REACT
								</span>
								<span className="skill-tile" style={{backgroundColor:'#f6bd60'}}>
									<FontAwesomeIcon icon={faPython}/> PYTHON
								</span>
								<span className="skill-tile" style={{backgroundColor:'#f5cac3'}}>
									<FontAwesomeIcon icon={faJs}/> JAVASCRIPT
								</span>
								<span className="skill-tile" style={{backgroundColor:'#84a59d'}}>
									<FontAwesomeIcon icon={faHtml5}/> HTML
								</span>
								<span className="skill-tile" style={{backgroundColor:'#f7ede2'}}>
									<FontAwesomeIcon icon={faCss3}/> CSS
								</span>
								<span className="skill-tile" style={{ backgroundColor: '#f28482' }}>
									<FontAwesomeIcon icon={faJava}/> JAVA
								</span>
								<span className="skill-tile" style={{ backgroundColor: '#f6bd60' }}>
									<FontAwesomeIcon icon={faReact}/> C++
								</span>
								<span className="skill-tile" style={{ backgroundColor: '#f5cac3' }}>
									<FontAwesomeIcon icon={faReact}/> SVELTE
								</span>
								<span className="skill-tile" style={{ backgroundColor: '#84a59d' }}>
									<FontAwesomeIcon icon={faReact}/> C
								</span>
								<span className="skill-tile" style={{ backgroundColor: '#f7ede2' }}>
									<FontAwesomeIcon icon={faFigma}/> FIGMA
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;