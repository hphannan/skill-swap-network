import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import RegistrationForm from './components/RegistrationComponent/RegistrationForm';
import LoginForm from './components/loginComponent/LoginForm';
import UserComponent from './components/UserComponent/UserProfile';
import SkillsTrade from './components/Skill_ListingsComponent/SkillsTradePage';
import Functionality from './components/functionalityComponent/SkillsPage';
import SwapRequest from './components/SwapRequestsComponent/SwapRequestsPage.jsx';
import Home from './components/HomeComponent/Dashboard';
import About from './components/AboutComponent/About';
import ContactUs from './components/ContactComponent/contact';
import Create from './components/CreateComponent/create';
import Suggest from './components/SuggestedPeople/Suggested';
import Swap from './components/SwapComponent/MySwap';
import Detail from './components/DetailComponent/Detail';
import MySkill from './components/MySkillComponent/MySkill';
import ProtectedRoute from './components/ProtectedRoute.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define routes for register and login forms */}
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />

          {/* Protecting Profile route */}
          {/* <Route path="/skill-listings" element={<SkillsTrade />} /> */}
          {/* <Route path="/search-functionality" element={<Functionality />} /> */}
          {/* <Route path="/suggest" element={<Suggest />} /> */}
          {/* <Route path="/detail" element={<Detail />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />

          {/* Protecting MySkill route */}
          <Route element={<ProtectedRoute />}>
            <Route path="/myskill" element={<MySkill />} />
            <Route path="/swap" element={<Swap />} />
            <Route path="/myswaps" element={<SwapRequest />} />
            <Route path="/create" element={<Create />} />
            <Route path="/user/profile" element={<UserComponent />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
