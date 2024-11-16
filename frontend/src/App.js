import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import RegistrationForm from './components/RegistrationComponent/RegistrationForm';
import LoginForm from './components/loginComponent/LoginForm'; 
import UserComponent from './components/UserComponent/UserProfile';

import SkillsTrade from './components/Skill_ListingsComponent/SkillsTradePage';
import Functionality from './components/functionalityComponent/SkillsPage';
import SkillDetail from './components/SkillDetailComponent/SkillDetailPage';

import Home from './components/HomeComponent/Dashboard';
import About from './components/AboutComponent/About';
import ContactUs from './components/ContactComponent/contact';

import MySkills from './components/MySkilComponent/MySkills';




function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define routes for register and login forms */}
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/user/profile" element={<UserComponent />} />
          <Route path="/skill-listings" element={<SkillsTrade />} />
          <Route path="/search-functionality " element={<Functionality />} />
          <Route path="/skill-detail " element={<SkillDetail/>} />        
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<ContactUs/>} />          
          <Route path="/skill" element={<MySkills/>} />       
        </Routes>
      </div>
    </Router>
  );
}

export default App;
