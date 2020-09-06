/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Navigation.sass";

export default function Navigation() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top p-5">
        <Link to="/Home">
          <a className="navbar-brand">LOGO</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse nav justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <Link className="link" to="/BookOnline">
              <li className="nav-item">Book Online</li>
            </Link>

            <Link className="link" to="/Gallery">
              <li className="nav-item">Gallery</li>
            </Link>

            <Link className="link" to="/Aftercare">
              <li className="nav-item ">Aftercare</li>
            </Link>

            <Link className="link" to="/YoutubeChannel">
              <li className="nav-item">YoutubeChannel</li>
            </Link>

            <Link className="link" to="/ThePlace">
              <li className="nav-item">The Place</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}
