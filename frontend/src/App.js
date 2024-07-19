// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import MentorDashboard from './pages/MentorDashboard';
import MenteeDashboard from './pages/MenteeDashboard';
import Header from './components/Header';
import MentorList from './components/MentorList';
import MenteeList from './components/MenteeList';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/mentor/dashboard" component={MentorDashboard} />
          <Route path="/mentee/dashboard" component={MenteeDashboard} />
          <Route path="/mentors" component={MentorList} />
          <Route path="/mentees" component={MenteeList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;