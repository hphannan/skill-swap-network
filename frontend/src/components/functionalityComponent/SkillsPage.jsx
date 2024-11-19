// SkillsTradePage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import  Sp from'./SkillsPage.module.css';

const SkillsTradePage = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [skillFilter, setSkillFilter] = useState('');

  // Fetch skills data from backend
  useEffect(() => {
    const fetchSkillsData = async () => {
      try {
        const response = await axios.get('https://yourapi.com/api/skills', {
          validateStatus: (status) => status < 500 // Reject only if the status code is greater than or equal to 500
        });
        if (response.status === 200) {
          setUsers(response.data);
          setFilteredUsers(response.data);
        } else {
          setError(`Failed to fetch skills data: ${response.statusText}`);
        }
      } catch (err) {
        setError('Failed to fetch skills data');
      } finally {
        setLoading(false);
      }
    };
    fetchSkillsData();
  }, []);

  // Filter users by search term and skill category
  useEffect(() => {
    const filtered = users.filter((user) => {
      const matchesSearch = searchTerm
        ? user.skillsOffered.some(skill => 
            skill.toLowerCase().includes(searchTerm.toLowerCase()))
        : true;
      const matchesFilter = skillFilter
        ? user.skillsOffered.includes(skillFilter)
        : true;
      return matchesSearch && matchesFilter;
    });
    setFilteredUsers(filtered);
  }, [searchTerm, skillFilter, users]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="skills-trade-page">
      <h1>Skills Available for Trade</h1>

      {/* Search and Filter Inputs */}
      <div className="search-filter-bar">
        <input
          type="text"
          placeholder="Search for a skill..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />

        <select
          value={skillFilter}
          onChange={(e) => setSkillFilter(e.target.value)}
          className="filter-dropdown"
        >
          <option value="">All Categories</option>
          <option value="Designer">Designer</option>
          <option value="Coder">Coder</option>
          <option value="Writer">Writer</option>
          <option value="Language Teacher">Language Teacher</option>
          {/* Add more categories as needed */}
        </select>
      </div>

      {/* Displaying Filtered Users */}
      <div className="skills-list">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div className="skill-card" key={user.id}>
              <h3>{user.name}</h3>
              <ul>
                {user.skillsOffered.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>No skills found matching the criteria.</p>
        )}
      </div>
    </div>
  );
};

export default SkillsTradePage;
