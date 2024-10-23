import React, { useState } from 'react';
import './UserProfile.css';

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
    <div className="user-profile">
      <h1>User Profile</h1>
      
      {/* Displaying username */}
      <div className="profile-section">
        <h2>Username: {user.username}</h2>
      </div>

      {/* Displaying and updating skills offered */}
      <div className="profile-section">
        <h3>Skills Offered:</h3>
        <ul>
          {user.skillsOffered.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <input 
          type="text" 
          placeholder="Add a skill you're offering" 
          value={newSkillOffered} 
          onChange={(e) => setNewSkillOffered(e.target.value)}
        />
        <button onClick={addSkillOffered}>Add Skill</button>
      </div>

      {/* Displaying and updating skills needed */}
      <div className="profile-section">
        <h3>Skills Needed:</h3>
        <ul>
          {user.skillsNeeded.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <input 
          type="text" 
          placeholder="Add a skill you need" 
          value={newSkillNeeded} 
          onChange={(e) => setNewSkillNeeded(e.target.value)}
        />
        <button onClick={addSkillNeeded}>Add Skill</button>
      </div>
    </div>
  );
};

export default UserProfile;
