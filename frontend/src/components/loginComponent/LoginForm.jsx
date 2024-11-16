import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom'; // Import Link for navigation

const LoginForm = () => {
  return (
    <div className='back'>
         <div className="auth-container">
      <div className="form-box login">
        <form>
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>
          <div className="remeber-forget">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forget Password</a>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>
              Don't have an account? <Link to="/register">Register</Link> {/* Link to Registration */}
            </p>
          </div>
        </form>
      </div>
    </div>
    </div> 
  );
}

export default LoginForm;
