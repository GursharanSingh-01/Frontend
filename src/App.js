import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Profile from './Profile';
import Form from './Form';
import Status from './Status';
import Admin from './Admin';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Status" element={<Status />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default App;
