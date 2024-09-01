import "./footerStyle.css";

import React from "react";
import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
// import { Link } from "react-router-dom";

const footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left-footer">
          <div className="location">
            <FaHome
              size={20}
              style={{ color: "white", margin: " 0.2rem 2rem" }}
            />
            <div style={{ color: "white" }}>
              <p>Javkhede Amalner</p>
              <p>Maharastra-425401</p>
            </div>
          </div>
          <div className="phone">
            <FaPhone
              size={20}
              style={{ color: "white", marginRight: "0.5rem" }}
            />
            <h4>+91 7820957657</h4>
          </div>

          {/* <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", margin: " 0.2rem 2rem" }}
              />
              +91 7820957657
            </h4>
          </div> */}
          <div className="email">
            <FaMailBulk
              size={20}
              style={{ color: "white", marginRight: "0.5rem" }}
            />
            <h4>Shamkantpatil2302@gmail.com</h4>
          </div>

          {/* <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "white", margin: "2rem" }}
              />
                           Shamkantpatil2302@gmail.com
            </h4>
          </div> */}
        </div>
        <div className="right-footer">
          <h4>About me</h4>
          <p style={{ color: "white" }}>
            Motivated computer science graduate with strong skills in Java,
            Python, and machine learning, complemented by hands-on web
            development experience using React.js. Committed to collaborative
            environments and eager to contribute to innovative projects.
          </p>
          <div className="social">
          <a 
            href="https://www.instagram.com/shamkant.patil.2906" 
             target="_blank" 
               rel="noopener noreferrer"
            >
              <FaInstagram size={30} style={{ color: "white", margin: "1rem 0.4rem" }} />
          </a>
            <a href="https://x.com/shamkantpa78604" target="_blank" >
            <FaTwitter size={30} style={{ color: "white", margin: "1rem 2rem" }} />
            </a>
            
            <a href="linkedin.com/in/shamkant-patil-523990192" target="_blank">
            <FaLinkedin size={30} style={{ color: "white", margin: "1rem 0.2rem" }} />
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
