import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4 ml-5">Welcome to ideahub</h1>
          <p class="lead ml-5">Think Smart, Live Smart</p>
          <Link to="/dashboard" className="btn ml-5 btn-primary">Dashboard</Link>
        </div>
      </div>
    )
}

export default Home;
