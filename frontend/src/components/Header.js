// Save this as E:\mirror-gap_clone\frontend\src\components\Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>Mirror Gap Clone</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/mentors">Mentors</a></li>
          <li><a href="/mentees">Mentees</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;