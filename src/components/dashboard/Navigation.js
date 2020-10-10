import React, { Component } from "react";
import { Link } from "react-router-dom";


class Navigation extends Component {
  constructor(props) {
    super(props);

    this.sideRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  // removes sidebar for the break point

  resize() {
    const sideRef = this.sideRef.current;

     window.innerWidth <= 1024
       ? (sideRef.style.width = "0")
      : (sideRef.style.width = "320px");
   
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize.bind(this));
  }

  // toggle nav menu

  closeNav = () => {
    const myRef = this.sideRef.current;
    myRef.style.width = "0";
  };

  openNav = () => {
    const myReference = this.sideRef.current;
    myReference.style.width = "250px";
  };

  render() {
    return (
      <div>
        <nav>
          <span>
            <i
              className="fa fa-bars"
              onClick={this.openNav}
              aria-hidden="true"
            ></i>
          </span>
          <div className="topnav">
            <input className="search" placeholder="Search" type="text"></input>

            <div className="rounded">
              <i className="fa fa-bell" aria-hidden="true"></i>
              <div className="notification">
                <p>5</p>
              </div>
            </div>
            <div>
              <img
                className="rounded-notify"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200"
                alt="profile image"
              />
            </div>

            <div className="rounded-image"></div>
          </div>

          <div className="john">
            <p>
              <span className="john-doe">John Doe</span> <br></br>Mentee
            </p>

            <span>
              <i className="fa fa-chevron-down" aria-hidden="true"></i>
            </span>
          </div>
        </nav>

        <div className="sidenav" ref={this.sideRef}>
          <span
            href="javascript:void(0)"
            className="close"
            onClick={this.closeNav}
          >
            <i class="fa fa-times" aria-hidden="true"></i>
          </span>

          <div className="nav-header">
            <img
              className="image"
              src="data:image/jpeg;base64,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"
            ></img>
          </div>
          <ul className="nav flex-column ">
            <li className="nav-item active shadow">
              <Link className="nav-link link-color" to="/">
                {" "}
                <i className="fas  fa-home"></i>Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ideas">
                {" "}
                <i className="far fa-lightbulb"></i>Ideas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/groups">
                <i className="fas fa-user-friends"></i>Groups
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/messages">
                <i className="far fa-envelope"></i>Messages
                <span className="ml-2 five">5</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mentor" to="/mentors">
                <i class="fas fa-user-graduate"></i>Mentors
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link setting" to="/settings">
                <i className="fas fa-cog"></i>Settings
              </Link>
            </li>
          </ul>
          <div className="nav-footer">
            <h2>73%</h2>
            <p className="score">Your Performance</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
