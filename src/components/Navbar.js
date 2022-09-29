import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import M from "materialize-css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.sidenavRef = React.createRef();
  }

  componentDidMount() {
    M.Sidenav.init(this.sidenavRef.current);
    console.log(window.location.href);
  }

  render() {
    return (
      <>
        <nav className="nav-extended">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              Skor Bola
            </a>
            <a href="." data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="sass.html">Sass</a>
              </li>
              <li>
                <a href="badges.html">Components</a>
              </li>
              <li>
                <a href="collapsible.html">JavaScript</a>
              </li>
            </ul>
          </div>
        </nav>

        <ul ref={this.sidenavRef} className="sidenav" id="mobile-demo">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">JavaScript</a>
          </li>
        </ul>
      </>
    );
  }
}

export default Navbar;
