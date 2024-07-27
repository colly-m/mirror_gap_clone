import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <h1>Welcome to Mirror-Gap Clone</h1>
      <p>Connect with Pros and grow your skills!</p>
      <div>
        <button onClick={() => navigate('/signup')}>Get Started</button>
        <button onClick={() => navigate('/login')}>Login</button>
      </div>
    </div>
  );
};

export default HomePage;