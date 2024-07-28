import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    try {
      navigate(path);
    } catch (error) {
      console.error(`Navigatation error: ${error.message}`);
    }
  };

  return (
    <div>
      <Header />
      <h1>Welcome to Mirror-Gap Clone</h1>
      <p>Connect with Pros and grow your skills!</p>
      <div>
        <button onClick={() => handleNavigation('/signup')}>Get Started</button>
        <button onClick={() => handleNavigation('/login')}>Login</button>
      </div>
    </div>
  );
};

export default HomePage;