import React, { useContext } from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id="services">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>About</span>
        <span>Krithika</span>
        <h3>
          I am a passionate Computer Science Engineering student at Knowledge
          Institute of Technology. <br />I blend technical skills with
          creativity to deliver impactful solutions.
        </h3>
      </div>

      {/* Zig-Zag Layout */}
      <div className="cards-container">
        {/* Card 1 - Right Aligned */}
        <div className="card-row">
          <div className="card-text">
            <h2>Design Enthusiast</h2>
            <p>
              Skilled in UI/UX design with tools like Figma and Canva, I’ve
              crafted projects such as E-commerce websites and restaurant menu
              cards.
            </p>
          </div>
          <div className="card-image">
            <img src={Humble} alt="Design Enthusiast" />
          </div>
        </div>

        {/* Card 2 - Left Aligned */}
        <div className="card-row reverse">
          <div className="card-image">
            <img src={Glasses} alt="Developer" />
          </div>
          <div className="card-text">
            <h2>Developer</h2>
            <p>
              Experienced in Python, Full Stack Development, and IoT-based
              projects like an automatic plant watering system and fire
              indicator alarm.
            </p>
          </div>
        </div>

        {/* Card 3 - Right Aligned */}
        <div className="card-row">
          <div className="card-text">
            <h2>Tech Explorer</h2>
            <p>
              Certified in AWS Cloud Foundations and MongoDB Atlas, with a
              passion for app and blockchain development, constantly seeking to
              innovate and grow.
            </p>
          </div>
          <div className="card-image">
            <img src={Humble} alt="Tech Explorer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;