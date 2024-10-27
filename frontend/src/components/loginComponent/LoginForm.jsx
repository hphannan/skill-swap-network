import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Handler for input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', formData);
      alert('Login successful!');
      console.log(response.data); // Access token or user data
    } catch (error) {
      alert('Login failed. Please check your credentials and try again.');
      console.error(error);
    }
  };

  return (
    <div className="auth-container">
      <div className="form-box login">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
            <FaLock className="icon" />
          </div>
          <div className="remember-forget">
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <br />
          <button type="submit">Login</button>
          <div className="register-link">
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
