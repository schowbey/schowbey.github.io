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
							<p> 
								In March of 2025, I graduated from University of California, San Diego with a B.S. in Cognitive and Computer Science. Cognitive Science examines human thought through interdisciplinary fields (Anthropology, Computer Science, & Neuroscience). My current professional interests are full-stack and software engineering. In Fall of 2025, I anticipate enrolling in a Masters program in Computer Science. Therefore, I am currently seeking a Fall 2026 full-time role.
							</p>
							<p>
								The projects I enjoy most have a Human-Computer Interaction component with complex problem-solving. I am passionate about interfacing with users to understand their needs and creating solutions that are both intuitive, robust, and efficient. My career journey has taken me across many different industries, including education, biotechnology, nonprofit work, and venture capitals. This diversity in experiences has allowed me to grow and develop a wide range of skills. Furthermore, my academic background is quite interdisciplinary which has shaped me into a versatile individual. Through classes like  "Product Engineering", "Advanced Data Structures", and "Practical Data Science", I have honed the skills necessary to succeed in industry. 
							</p>
							<p>
								Outside of my career, I have cultivated my personal interests through extracurriculars at UC San Diego. Since my freshman year, I have rehearsed and performed with my on-campus Acapella group. I have volunteered with UCSD Health for campus outreach events and served as the Vice President (and President) of a Peer Health Education organization. I served as an Associate Member of Triton Consulting Group where I worked on a team to provide consulting services to local businesses. The sum of these experiences has made me into a flexible, well-rounded individual who is ready to enter any environment. Furthermore, by experimenting with diverse organizations, I am now more confident of my interests and the path I have chosen going forward. In that sense, I have been allowed to prove my identity to myself through my experiences.
							</p>

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
									&#123; &#125; C++
								</span>
								<span className="skill-tile" style={{ backgroundColor: '#f5cac3' }}>
									<FontAwesomeIcon icon={faFigma}/> FIGMA
								</span>
								<span className="skill-tile" style={{ backgroundColor: '#84a59d' }}>
									&#123; &#125; SVELTE
								</span>
								<span className="skill-tile" style={{ backgroundColor: '#f7ede2' }}>
									&#123; &#125; C
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