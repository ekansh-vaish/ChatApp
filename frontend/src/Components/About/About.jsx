import React from "react";
import "./About.css";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import image1 from "../../assets/ekanhsh pic.jpg"
function About() {
  return (
    <div className="about-container">
      <Navigation />

      {/* Hero Section */}
      <section className="hero-section">
        <h1>About ChatApp</h1>
        <p>
          ChatApp is a modern communication platform designed to make
          conversations secure, fast, and stylish. We believe in connecting
          people with simplicity and elegance.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="about-section">
        <div className="about-cards">
          <div className="card">
            <h2>🚀 Our Mission</h2>
            <p>
              To empower communities by providing a seamless chat experience
              that blends technology with trust.
            </p>
          </div>

          <div className="card">
            <h2>💡 Our Vision</h2>
            <p>
              To become the most user-friendly and secure chat platform, making
              digital communication effortless worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>👨‍💻 Meet Our Team</h2>
        <div className="team-cards">
          <div className="team-card">
            <img src={image1} alt="Founder" />
            <h3>Ekansh</h3>
            <p>Founder & Lead Developer</p>
          </div>
          <div className="team-card">
            <img src={image1} alt="Designer" />
            <h3>Ekansh</h3>
            <p>UI/UX Designer</p>
          </div>
          <div className="team-card">
            <img src={image1} alt="Backend" />
            <h3>Ekansh Vaish</h3>
            <p>Backend Engineer</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2>🤝 Our Values</h2>
        <ul>
          <li>Transparency in communication</li>
          <li>Trust and security for all users</li>
          <li>Innovation in design and technology</li>
          <li>Community-driven growth</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
