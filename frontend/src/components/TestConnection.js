import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TestConnection = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Make request to the backend
    axios.get('/api/test')
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error('Error connecting to the backend:', error);
      });
  }, []);

  return (
    <div>
      <h1>Test Backend Connection</h1>
      {message ? <p>{message}</p> : <p>Loading...</p>}
    </div>
    
  );
};

export default TestConnection;
