import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './components/RegistrationComponent/RegistrationForm';
import LoginForm from './components/loginComponent/LoginForm'; 
import UserComponent from './components/UserComponent/UserProfile';
import SkillsTrade from './components/Skill_ListingsComponent/SkillsTradePage';
import Functionality from './components/functionalityComponent/SkillsPage';
import SkillDetail from './components/SkillDetailComponent/SkillDetailPage';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define routes for register and login forms */}
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/user/profile" element={<UserComponent />} />
          <Route path="/skill-listner" element={<SkillsTrade />} />
          <Route path="/search-functionality " element={<Functionality />} />
          <Route path="/detail " element={<SkillDetail/>} />
       
        </Routes>
      </div>
    </Router>
  );
}

export default App;
