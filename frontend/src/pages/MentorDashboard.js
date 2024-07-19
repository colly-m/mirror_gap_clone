import React from 'react';
import MentorList from '../components/MentorList';
import Header from '../components/Header';

const MentorDashboard = () => {
  return (
    <div>
      <Header />
      <h2>Mentor Dashboard</h2>
      <MentorList />
    </div>
  );
};
export default MentorDashboard;