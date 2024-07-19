import React, { useEffect, useState } from 'react';
import MenteeCard from './MenteeCard';
import './MenteeList.css';

const MenteeList = () => {
  const [mentees, setMentees] = useState([]);

  useEffect(() => {
    // Fetch mentees from the backend
    fetch('/api/mentees')
      .then(response => response.json())
      .then(data => setMentees(data));
  }, []);

  return (
    <div className="mentee-list">
      {mentees.map(mentee => (
        <MenteeCard key={mentee.id} mentee={mentee} />
      ))}
    </div>
  );
};

export default MenteeList;