import React from 'react';
import './MentorCard.css';

const MentorCard = ({ mentor }) => {
  return (
    <div className="mentor-card">
      <h3>{mentor.name}</h3>
      <p>{mentor.bio}</p>
    </div>
  );
};

export default MentorCard;