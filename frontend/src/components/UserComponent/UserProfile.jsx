import React, { useState } from 'react';
import './UserProfile.css'; // Keep using the CSS file directly

const UserProfile = () => {
  
  const [user, setUser] = useState({
    username: 'John Doe',
    skillsOffered: ['JavaScript', 'React', 'Node.js'],
    skillsNeeded: ['Python', 'Data Analysis']
  });

  const [newSkillOffered, setNewSkillOffered] = useState('');
  const [newSkillNeeded, setNewSkillNeeded] = useState('');

  // Handler to add a new skill to "Skills Offered"
  const addSkillOffered = () => {
    if (newSkillOffered) {
      setUser(prevState => ({
        ...prevState,
        skillsOffered: [...prevState.skillsOffered, newSkillOffered]
      }));
      setNewSkillOffered(''); // Clear input field
    }
  };

  // Handler to add a new skill to "Skills Needed"
  const addSkillNeeded = () => {
    if (newSkillNeeded) {
      setUser(prevState => ({
        ...prevState,
        skillsNeeded: [...prevState.skillsNeeded, newSkillNeeded]
      }));
      setNewSkillNeeded(''); // Clear input field
    }
  };

  return (
    <div className="user-profile-container">
      <div className="user-profile">
        <h1 className="title">User Profile</h1>
        
        {/* Displaying username */}
        <div className="profile-section">
          <h2 className="subtitle">Username: {user.username}</h2>
        </div>

        {/* Displaying and updating skills offered */}
        <div className="profile-section">
          <h3 className="section-title">Skills Offered:</h3>
          <ul className="skill-list">
            {user.skillsOffered.map((skill, index) => (
              <li key={index} className="skill-item">{skill}</li>
            ))}
          </ul>
          <div className="input-group">
            <input 
              type="text" 
              placeholder="Add a skill you're offering" 
              value={newSkillOffered} 
              onChange={(e) => setNewSkillOffered(e.target.value)}
              className="input-field"
            />
            <button onClick={addSkillOffered} className="add-button">Add Skill</button>
          </div>
        </div>

        {/* Displaying and updating skills needed */}
        <div className="profile-section">
          <h3 className="section-title">Skills Needed:</h3>
          <ul className="skill-list">
            {user.skillsNeeded.map((skill, index) => (
              <li key={index} className="skill-item">{skill}</li>
            ))}
          </ul>
          <div className="input-group">
            <input 
              type="text" 
              placeholder="Add a skill you need" 
              value={newSkillNeeded} 
              onChange={(e) => setNewSkillNeeded(e.target.value)}
              className="input-field"
            />
            <button onClick={addSkillNeeded} className="add-button">Add Skill</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
