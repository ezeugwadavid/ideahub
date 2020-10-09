import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import './Navigation.css';
import './App.css';


function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path="/" component={Dashboard} />
      {/* <Route exact path="/ideas" component={Ideas} />
      <Route exact path="/groups" component={Groups} />
      <Route exact path="/messages" component={Messages} />
      <Route exact path="/mentors" component={Mentors} />
      <Route exact path="/settings" component={Settings} /> */}

     
     
    </div>
    </Router>
  );
}

export default App;
