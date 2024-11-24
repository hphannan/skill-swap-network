import axios from 'axios';
const trackUserAction = async (action) => {
    const userData = JSON.parse(sessionStorage.getItem('user'));
    if (!userData) {
      alert('User not logged in!');
      return;
    }
  
    try {
      await axios.post('http://localhost:5000/api/user-actions', {
        userId: userData.id,
      });
      alert('Action tracked successfully');
    } catch (error) {
      console.error('Failed to track action:', error);
    }
};
  
export default trackUserAction;