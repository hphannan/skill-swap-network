import React, { useState } from 'react';
import login from'./LoginForm.module.css';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  // Handler for input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};


  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', formData);
      
      // Extract token and user details
      const { token, user } = response.data;
  
      // Store token and user details in sessionStorage
      sessionStorage.setItem('token', token); // Store token
      sessionStorage.setItem('user', JSON.stringify(user)); // Store user details
      
      alert('Login successful!');
      navigate('/user/profile'); // Redirect to the profile page
    } catch (error) {
      alert('Login failed. Please check your credentials.');
      console.error(error);
    }
  };
  
  


  return (
    <div className={login.back}>
         <div className={login.auth_container}>
      <div className={login.form_box }>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className={login.input_box}>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <FaUser className={login.icon} />
          </div>
          <div className={login.input_box}>
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
            <FaLock className={login.icon} />
          </div>
          <div className={login.remember_forget}>
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <br />
          <button type={login.submit}>Login</button>
          <div className={login.register_link}>
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
    </div> 
  );
};

export default LoginForm;
