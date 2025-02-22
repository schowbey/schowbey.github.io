import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";

import "./styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        © {new Date().getFullYear()} Shilpa Chowbey
      </div>
      <div className="footer-right">
        <a href="https://github.com/schowbey" target="_blank" rel="noreferrer">
			<FontAwesomeIcon icon={faGithub} className="homepage-social-icon"/>
		</a>
		<a href="https://www.linkedin.com/in/shilpa-chowbey/" target="_blank" rel="noreferrer">
			<FontAwesomeIcon icon={faLinkedin} className="homepage-social-icon"/>
		</a>
      </div>
    </footer>
  );
};

export default Footer;