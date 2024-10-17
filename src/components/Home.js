// src/components/Home.js
import React from 'react';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay">
        <h2>Welcome to Travel Sri Lanka</h2>
        <p>Explore the beauty of Sri Lanka with us!</p>
        <button className="explore-button">Explore Now</button>
      </div>
    </div>
  );
};

export default Home;
