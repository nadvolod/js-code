import React from 'react';
import logo from './mia-dev.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img id="main-image" src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.ultimateqa.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Test Automation with Nikolay And Mia
        </a>
      </header>
    </div>
  );
}

export default App;
