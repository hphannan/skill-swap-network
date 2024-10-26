import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './components/RegistrationComponent/RegistrationForm';
import LoginForm from './components/LoginComponent/LoginForm'; 
import UserComponent from './components/UserComponent/UserProfile';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define routes for register and login forms */}
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/user/profile" element={<UserComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
