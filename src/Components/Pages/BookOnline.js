import React, { Component } from "react";
import logo from "../../Assets/logo.svg";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Book Online</h1>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </React.Fragment>
    );
  }
}
