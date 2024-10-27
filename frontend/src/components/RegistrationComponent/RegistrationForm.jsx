import React, { useState } from 'react';
import './RegistrationForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail, MdCake } from "react-icons/md";
import { Link } from 'react-router-dom';
import axios from 'axios';

const RegisterationForm = () => {
  // State to store form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    skills: [] // Initialize skills as an array
  });

  const [skillInput, setSkillInput] = useState(''); // State to store individual skill input

  // Handler for input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handler to add a skill to the skills array
  const handleAddSkill = () => {
    if (skillInput.trim() !== '') {
      setFormData({
        ...formData,
        skills: [...formData.skills, skillInput] // Add skill to array
      });
      setSkillInput(''); // Clear input field after adding skill
    }
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/register', formData);
      alert('Registration successful!');
      console.log(response.data);
    } catch (error) {
      alert('Registration failed. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="auth-container">
      <div className="form-box register">
        <form onSubmit={handleSubmit}>
          <h1>Registration</h1>
          <div className="input-box">
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <MdEmail className="icon" />
          </div>
          <div className="input-box">
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
            <FaLock className="icon" />
          </div>

          {/* Skills Input Section */}
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter your skills"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
            />
            <button type="button" className="skill-btn" onClick={handleAddSkill}>Add Skill</button>
          </div>
          
          {/* Display Skills */}
          <div className="skills-list">
            {formData.skills.map((skill, index) => (
              <div key={index} className="skill-item">
                {skill}
              </div>
            ))}
          </div>

          <div className="remember-forget">
            <label>
              <input type="checkbox" required /> I agree to the terms & conditions
            </label>
          </div>
          <br />
          <button type="submit" >Register</button>
          <div className="register-link">
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
  
};

export default RegisterationForm;
