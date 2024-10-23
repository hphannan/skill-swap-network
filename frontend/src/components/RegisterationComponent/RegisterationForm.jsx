import React, { useState } from 'react'
import './RegisterationForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const LoginForm = () => {
return (
  <div className="auth-container">
     
     <div className="form-box register">
        <form action="">
          <h1>Registration</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="email" placeholder="Email" required />
            <MdEmail className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>
          <div className="remeber-forget">
            <label>
              <input type="checkbox" /> I agree to the terms & conditions
            </label>
          </div>
          <button type="submit">Register</button>
          
          <div className="register-link">
            <p>
              Already have an account?<a href="LoginForm.jsx">Login</a>
            </p>
          </div>
        </form>
      </div>
    
  </div>

)}

export default LoginForm
