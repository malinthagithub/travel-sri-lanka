// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Travel Sri Lanka</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/destinations">Destinations</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
