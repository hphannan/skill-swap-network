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

import Create from './components/CreateComponent/create';
import Suggest from './components/SuggestedPeople/Suggested';
import Swap from './components/SwapComponent/MySwap';
import Detail from './components/DetailComponent/Detail';
import MySkill from './components/MySkillComponent/MySkill';
import ProtectedRoute from './components/ProtectedRoute.js'




function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define routes for register and login forms */}
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/user/profile" element={<ProtectedRoute><UserComponent /></ProtectedRoute>} />
          <Route path="/skill-listings" element={<SkillsTrade />} />
          <Route path="/search-functionality " element={<Functionality />} />
          <Route path="/skill-detail " element={<SkillDetail/>} />        
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<ContactUs/>} />          
          <Route path="/create" element={<Create/>} />   
          <Route path="/suggest" element={<Suggest/>} />  
          <Route path="/swap" element={< Swap />} /> 
          <Route path="/detail" element={< Detail />} /> 
          <Route path="/myskill" element={< MySkill />} /> 


        </Routes>
      </div>
    </Router>
  );
}

export default App;
