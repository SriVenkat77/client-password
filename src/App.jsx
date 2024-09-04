import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import custom CSS
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import HomePage from './components/HomePage';
import DefNavbar from './components/DefNavbar';

function App() {
  return (
    <Router>
      <DefNavbar/>
      <div className="full-height">
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
