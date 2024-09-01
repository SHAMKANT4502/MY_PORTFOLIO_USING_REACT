import { Link } from "react-router-dom";
import "./AboutContentStyle.css";
import img1 from "../assets/react2.jpg";
import img2 from "../assets/react1.png";
import React from 'react'

const AboutContent = () => {
  return (
    <div className="about"> 
      <div className="info">
        <div className="info-list">
          <ul>
            <li><strong>Name:</strong> Shamkant Ravindra Patil</li>
            <li><strong>Age:</strong> 23</li>
            <li><strong>Higher Education:</strong> BSc Computer Science 2023</li>
            <li><strong>Current Education:</strong> MCA-II </li>
            <li><strong>Skills:</strong> React.js, JavaScript, HTML, CSS and about machine learning</li>
          </ul>
        </div>
      </div>
      <div className="left">
        <h1>Who Am I ?</h1>
        <p>I am a React front-end developer. 
          I create responsive, secure websites for my clients.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={img2} className="img" alt="React project screenshot"/>
          </div>

          <div className="img-stack bottom">
            <img src={img1} className="img" alt="React project screenshot"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
