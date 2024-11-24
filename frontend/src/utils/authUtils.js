// src/utils/authUtils.js

// Function to get the userId from sessionStorage
export const getUserIdFromSession = () => {
    const userData = sessionStorage.getItem('user');  // Retrieve user data from sessionStorage
    if (!userData) {
      alert('User is not logged in!');
      return null;  // Return null if user is not found
    }
  
    // Parse the user data and return the userId
    const { id: userId } = JSON.parse(userData);
    return userId;
  };
  