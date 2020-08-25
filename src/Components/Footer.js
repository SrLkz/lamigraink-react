/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import "./Styles/Footer.sass";
export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(this.state.email);
  }

  render() {
    const email = this.state.email;
    return (
      <React.Fragment>
        <footer className="container-fluid dark">
          <div className="row container">
            <div className="col-6">
              <aside>
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="email"
                    name="email"
                    className="mb-2 btn btn-darker text-left text-light border border-light"
                    value={email}
                    placeholder="Email address"
                    onChange={(e) => {
                      this.setState({ email: e.target.value });
                    }}
                  />
                  <br />
                  <input type="submit" className="text-dark" value="Submit" />
                </form>

                <article className="pt-4">
                  <p className="text-center">
                    ©2020 by La Migra Ink. Creator and publisher{" "}
                    <a href="https://github.com/SrLkz" target="_blank">
                      Lucas Silva
                    </a>
                  </p>
                </article>
              </aside>
            </div>

            <div className="col-6">
              <aside className="right"></aside>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
