import React from 'react';
import './Portfolio.css';

const ProjectCards = () => {
  return (
    <section id="portfolio">
    <div className="projects-section">
      <h2 className="section-title">My Projects</h2> {/* Topic for the whole section */}
      
      <div className="card-container">
        <div className="card">
          <img src="https://cdn.dribbble.com/users/6657271/screenshots/15799880/media/3358bc6b0e6a592baa53ac231beda57a.png?format=webp&resize=400x300&vertical=center"className="card-img" />
          <div className="card-content">
            <h3>Project 1: Eccommerce Website</h3>
            <p>I have developed an e-commerce website that provides users with a smooth and intuitive shopping experience, from browsing to checkout.</p>
          </div>
        </div>

        <div className="card">
          <img src="https://i0.wp.com/srituhobby.com/wp-content/uploads/2023/05/277.jpg?resize=1024%2C576&ssl=1" alt="Project 2" className="card-img" />
          <div className="card-content">
            <h3>Project 2: Plant Watering System</h3>
            <p>I created a plant watering system using IoT, which automatically waters plants based on soil moisture levels, ensuring they receive the right amount of water</p>
          </div>
        </div>

        <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfe6OZ-Wjccqa8LikHosK8KgzWi9mZXZZJcA&s" alt="Project 3" className="card-img" />
          <div className="card-content">
            <h3>Project 3: Fire Alarm</h3>
            <p>I built a fire alarm system that detects smoke using sensors and immediately sends alerts to prevent potential fire hazards and ensure safety.</p>
          </div>
        </div>
      </div>
    </div></section>
  );
};

export default ProjectCards;