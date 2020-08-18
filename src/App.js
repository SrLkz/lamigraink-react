import React from "react";
import logo from "./Assets/logo.svg";
import StyleSheet from "./Components/StylesApp";

function App() {
  return (
    <React.Fragment>
      <StyleSheet>
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
      </StyleSheet>
    </React.Fragment>
  );
}

export default App;
