import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Messages from "./components/messages/Messages";
import Ideas from "./components/ideas/Ideas";
import Home from "./components/Home";
import Groups from "./components/groups-addIdea/Groups";
import Mentors from "./components/mentors-powerades/Mentors";
import "./Navigation.css";
import "./Body.css";

class App extends Component {
  //    state = {
  //     dashboard: false,
  //     ideas: true,
  //     groups: true,
  //     messages: false,
  //     mentors: false

  // }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/messages" component={Messages} />
          <Route exact path="/ideas" component={Ideas} />
          <Route exact path="/groups" component={Groups} />
          <Route exact path="/mentors" component={Mentors} />
        </div>
      </Router>
    );
  }
}

export default App;
