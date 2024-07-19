import React from 'react';
import MenteeList from '../components/MenteeList';
import Header from '../components/Header';

const MenteeDashboard = () => {
  return (
    <div>
      <Header />
      <h2>Mentee Dashboard</h2>
      <MenteeList />
    </div>
  );
};

export default MenteeDashboard;