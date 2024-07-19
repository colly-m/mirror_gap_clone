import React, { useEffect, useState } from 'react';
import MentorCard from './MentorCard';
import './MentorList.css';

const MentorList = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    // Fetch mentors from the backend
    fetch('/api/mentors')
      .then(response => response.json())
      .then(data => setMentors(data));
  }, []);

  return (
    <div className="mentor-list">
      {mentors.map(mentor => (
        <MentorCard key={mentor.id} mentor={mentor} />
      ))}
    </div>
  );
};

export default MentorList;