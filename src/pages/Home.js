import React from "react";
import "../styles/Home.css";
import profilePic from "../assets/profile.jpg"; // Ensure the correct path

const Home = () => {
  return (
    <section className="home-container">
      {/* Profile Image */}
      <div className="profile-section">
        <img src={profilePic} alt="My Profile" className="profile-pic" />
      </div>

      {/* Name & Info */}
      <div className="info-section">
        <h1>Tanishka Sahu</h1>
        <p>Web Developer | Designer | Coder</p>
      </div>
    </section>
  );
};

export default Home;