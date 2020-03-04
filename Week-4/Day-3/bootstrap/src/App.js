import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="background-box">
        <header className="App-header">
          <nav className="start-bootstrap">
            <span className="start-bootstrap-2">Start Bootstrap</span>
          </nav>
          <nav className="nav-bar">
              <span className="nav-bar-2">SERVICES</span>
              <span className="nav-bar-2">PORTFOLIO</span>
              <span className="nav-bar-2">ABOUT</span>
              <span className="nav-bar-2">TEAM</span>
              <span className="nav-bar-2">CONTACT</span>
          </nav>
        </header>
        <div className="header-words">
          <p className="header-w-2">Welcome To Our Studio!</p>
          <p className="header-w-3">IT'S NICE TO MEET YOU</p>
          <button>TELL ME MORE</button>
        </div>
      </div>
    </div>
  );
}

export default App;
