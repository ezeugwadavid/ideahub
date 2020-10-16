import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Messages from './components/messages/Messages';
import Ideas from './components/ideas/Ideas';
import Groups from './components/groups-addIdea/Groups';
import Mentors from './components/mentors-powerades/Mentors';
import './Navigation.css';
import './Body.css';


class App extends Component  {

   state = {
    dashboard: false,
    ideas: false,
    groups: false,
    messages: false,
    mentors: false
  
}




  toggleDashboardActive(){
    this.setState({ dashboard: true})

  }
  toggleIdeasActive(){
    this.setState({ ideas: true})

  }
  toggleGroupsActive(){
    this.setState({ groups: true})

  }
  toggleMessagesActive(){
    this.setState({ messages: true})

  }
  toggleMentorsActive(){
    this.setState({ mentors: true})

  }

  render() {
  return (

    <Router>
    <div className="App">
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/messages" component={Messages} />
      <Route exact path="/ideas" component={Ideas} /> 
       <Route exact path="/groups" component={Groups} />
       <Route exact path="/mentors" component={Mentors} />
    {/*  <Route exact path="/settings" component={Settings} />  */}

     
     
    </div>
    </Router>
  );

  }
}

export default App;
