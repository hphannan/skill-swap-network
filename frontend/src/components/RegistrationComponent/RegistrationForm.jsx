import React from 'react';
import './RegistrationForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail,MdCalendarToday,MdCake   } from "react-icons/md";
import { Link } from 'react-router-dom'; // Import Link for navigation

const RegisterationForm = () => {
  return (
    <div className="auth-container">
      <div className="form-box register">
        <form>
          <h1>Registration</h1>
          <div className="input-box">
            <input type="text" placeholder="Name" required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="email" placeholder="Email" required />
            <MdEmail className="icon" />
          </div>
          <div className="input-box">
            <input type="email" placeholder="Age" required />
            <MdCake  className="icon" />
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
              Already have an account? <Link to="/login">Login</Link> {/* Link to Login */}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterationForm;
