import React, { useContext } from "react";
import "./Works.css";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="works"
      id="works"
      style={{

        color: darkMode ? "white" : "black",
      }}
    >
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}></span>
          <span>Expertise</span>
          <h3>
            I possess strong expertise in app development, blockchain technology, 
            <br />
            and UI/UX design, with hands-on experience in creating impactful, 
            <br />
            user-friendly applications. My skills also extend to Full Stack Development and
            <br />
            IoT-based projects, showcasing my ability to work with diverse technologies.
          </h3>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Contact</button>
          </Link>
          <div
            className="blur s-blur1"
           
          ></div>
        </div>
      </div>
      {/* right side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div
            className="w-secCircle"
            style={{
              backgroundColor: darkMode ? "#999" : "#f0f0f0",
              color: darkMode ? "white" : "black",
            }}
          >
            <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;App &nbsp;&nbsp;Development</h1>
          </div>
          <div
            className="w-secCircle"
            style={{
              backgroundColor: darkMode ? "#999" : "#f0f0f0",
              color: darkMode ? "white" : "black",
            }}
          >
            <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Web &nbsp;&nbsp;Development</h1>
          </div>
          <div
            className="w-secCircle"
            style={{
              backgroundColor: darkMode ? "#999" : "#f0f0f0",
              color: darkMode ? "white" : "black",
            }}
          >
            <span>Skills</span>
          </div>
          <div
            className="w-secCircle"
            style={{
              backgroundColor: darkMode ? "#999" : "#f0f0f0",
              color: darkMode ? "white" : "black",
            }}
          >
            <h1>UI/UX Design</h1>
          </div>
          <div
            className="w-secCircle"
            style={{
              backgroundColor: darkMode ? "#999" : "#f0f0f0",
              color: darkMode ? "white" : "black",
            }}
          >
            <h1>Canva Design</h1>
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
    
  );
};

export default Works;