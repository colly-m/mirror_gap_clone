import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import MentorDashboard from './pages/MentorDashboard';
import MenteeDashboard from './pages/MenteeDashboard';
import Header from './components/Header';
import MentorList from './components/MentorList';
import MenteeList from './components/MenteeList';
import './App.css';


const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
};


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/mentor/dashboard" element={<PrivateRoute component={<MentorDashboard />} />} />
          <Route path="/mentee/dashboard" element={<PrivateRoute component={<MenteeDashboard />} />} />
          <Route path="/mentors" element={<PrivateRoute component={<MentorList />} />} />
          <Route path="/mentees" element={<PrivateRoute component={<MenteeList />} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;