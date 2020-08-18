import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <nav>
        <h3>Logo</h3>
        <ul>
          <Link to="/Home">
            <li>home</li>
          </Link>
        </ul>
      </nav>
    );
  }
}
