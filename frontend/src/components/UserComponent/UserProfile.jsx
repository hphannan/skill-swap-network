import React, { useState } from 'react';
import pro from './UserProfile.module.css'; // Keep using the CSS file directly

const UserProfile = () => {
  
  const [user, setUser] = useState({
    username: 'John Doe',
    skillsOffered: ['JavaScript'],
    skillsNeeded: [ 'Data Analysis']
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
    <div className={pro.user_profile_container}>
      <div className={pro.user_profile}>
        <h1 className={pro.title}>User Profile</h1>
        
           


        {/* Displaying username */}
        <div className={pro.profile_sec}>
        <img src="https://via.placeholder.com/100" alt="Profile Picture" class={pro.profile_pic}/>
          <h2 className={pro.subtitle}>Username: {user.username}</h2>
        </div>

        {/* Displaying and updating skills offered */}
        <div className={pro.profile_section}>
          <h3 className={pro.section_title}>Skills Offered:</h3>
          <ul className={pro.skill_list}>
            {user.skillsOffered.map((skill, index) => (
              <li key={index} className={pro.skill_item}>{skill}</li>
            ))}
          </ul>
          <div className={pro.input_group}>
            <input 
              type="text" 
              placeholder="Add a skill you're offering" 
              value={newSkillOffered} 
              onChange={(e) => setNewSkillOffered(e.target.value)}
              className={pro.input_field}
            />
            <button onClick={addSkillOffered} className={pro.add_button}>Add Skill</button>
          </div>
        </div>

        {/* Displaying and updating skills needed */}
        <div className={pro.profile_section}>
          <h3 className={pro.section_title}>Skills Needed:</h3>
          <ul className={pro.skill_list}>
            {user.skillsNeeded.map((skill, index) => (
              <li key={index} className={pro.skill_item}>{skill}</li>
            ))}
          </ul>
          <div className={pro.input_group}>
            <input 
              type="text" 
              placeholder="Add a skill you need" 
              value={newSkillNeeded} 
              onChange={(e) => setNewSkillNeeded(e.target.value)}
              className={pro.input_field}
            />
            <button onClick={addSkillNeeded} className={pro.add_button}>Add Skill</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
