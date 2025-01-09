import React, { useContext } from "react";
import "./Intro.css";

import krithiLight from "../../img/krithi-light.jpg"; // Image for light mode
import krithiDark from "../../img/krithi-dark.jpg";   // Image for dark mode

import { themeContext } from "../../Context";

import { Link } from "react-scroll";

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          <span>Krithika</span>
          <h3>
            I am a Computer Science Engineering student with expertise in Python, Full Stack Development, UI/UX Design, and IoT-based projects. Passionate about app development, I blend technical skills with creativity to deliver impactful solutions.
          </h3>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Contact</button>
        </Link>
      </div>

      {/* Dynamically changing the image */}
      <img
        src={darkMode ? krithiDark : krithiLight}
        alt="Krithika"
        className="krithi-image"
      />

   
      <div
        className="blur"
        style={{
          background: "#C1F5FF",
          top: "17rem",
          width: "21rem",
          height: "11rem",
          left: "-9rem",
        }}
      ></div>
    </div>
  );
};

export default Intro;