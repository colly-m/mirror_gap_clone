import React from 'react';
import './MenteeCard.css';

const MenteeCard = ({ mentee }) => {
  return (
    <div className="mentee-card">
      <h3>{mentee.name}</h3>
      <p>{mentee.bio}</p>
    </div>
  );
};

export default MenteeCard;