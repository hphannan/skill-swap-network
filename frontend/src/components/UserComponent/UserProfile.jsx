import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import pro from './UserProfile.module.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const userData = sessionStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData)); // Parse user details
    }
  }, []);

  // Logout handler
  const handleLogout = () => {
    sessionStorage.removeItem('user'); // Remove user from sessionStorage
    navigate('/login'); // Navigate to the login page
  };
  const handleGoBack = () => {
    navigate('/'); // Navigate to the login page
  };

  if (!user) {
    return <p>Loading...</p>;
  }
  return (
    
    <div className={pro.user_profile }>
     
      <h1>Welcome  to swapify </h1>
      <br/>

      
      <img src="/images/defult.jpg" alt="Profile Picture" class={pro.profile_pic}/>
      <br />
      <br /> 
      <h3> User Name   :  {user.name}</h3>
      <h3> Email  :  {user.email}</h3>
      <h3>age    :  {user?.age}</h3>
      <br />

      <button className={pro.logout} onClick={handleLogout}>Logout</button>
      <button className={pro.go_back} onClick={handleGoBack}>← Go Back</button>
    </div>
  );
};

export default Profile;
