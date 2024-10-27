
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SkillsTradePage.css';

const SkillsTradePage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch skills data from backend
  useEffect(() => {
    const fetchSkillsData = async () => {
      try {
        const response = await axios.get('https://yourapi.com/api/skills');
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch skills data');
        setLoading(false);
      }
    };
    fetchSkillsData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="skills-trade-page">
      <h1>Skills Available for Trade</h1>
      <div className="skills-list">
        {users.map((user) => (
          <div className="skill-card" key={user.id}>
            <h3>{user.name}</h3>
            <ul>
              {user.skillsOffered.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsTradePage;
