/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import "./Styles/Footer.sass";
import youtube from "../Assets/SocialMedia/youtube.svg";
import instagram from "../Assets/SocialMedia/instagram.svg";
import facebook from "../Assets/SocialMedia/facebook.svg";
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
        <footer className="container-fluid row">
          <div className="col-4 pt-5">
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
                <input
                  type="submit"
                  className="text-dark submit"
                  value="Submit"
                />
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

            <div className="col-12 pt-5 mx-5">
              <div className="d-inline mx-5">
                <icon className="p-2 ml-5">
                  <a
                    href="https://www.youtube.com/channel/UCJ-VXbZ3Ci9rtuT4_Ycz9Mg"
                    target="_blank"
                  >
                    <img src={youtube} alt="youtube" width="10%" height="10%" />
                  </a>
                </icon>
                <icon className="p-2">
                  <a
                    href="https://www.youtube.com/channel/UCJ-VXbZ3Ci9rtuT4_Ycz9Mg"
                    target="_blank"
                  >
                    <img
                      src={instagram}
                      alt="instagram"
                      width="10%"
                      height="10%"
                    />
                  </a>
                </icon>

                <icon className="p-2">
                  <a
                    href="https://www.facebook.com/LamigraInkOficial/"
                    target="_blank"
                  >
                    <img
                      src={facebook}
                      alt="facebook"
                      width="10%"
                      height="10%"
                    />
                  </a>
                </icon>
              </div>
            </div>
          </div>

          <div className="col-6 border border-light px-0">
            <iframe
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.284249708754!2d-1.8018599840182938!3d51.56302241445538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871446b1546f5f9%3A0x6a0f4e6098f79ad!2s199%20Rodbourne%20Rd%2C%20Swindon%20SN2%202AA%2C%20Reino%20Unido!5e0!3m2!1spt-BR!2sbr!4v1598724288855!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              frameborder="0"
              allowfullscreen
              aria-hidden="false"
            ></iframe>
          </div>

          <div className="col-2 border border-light px-0">
            <div className="d-inline"></div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
