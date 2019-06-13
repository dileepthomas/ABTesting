import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <h1 className="header">A/B Experiment and Analysis</h1>
            </div>
          </div>
        </nav>
    );
  }
}

export default Header;
