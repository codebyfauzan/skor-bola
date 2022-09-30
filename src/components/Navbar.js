import React from "react";
import M from "materialize-css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.sidenavRef = React.createRef();
  }

  componentDidMount() {
    M.Sidenav.init(this.sidenavRef.current);
  }

  render() {
    return (
      <>
        <nav className="nav-extended green">
          <div className="nav-wrapper container">
            <a href="/" className="brand-logo">
              Skor Bola
            </a>
            <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="#!">About</a>
              </li>
            </ul>
          </div>
        </nav>

        <ul ref={this.sidenavRef} className="sidenav" id="mobile-demo">
          <li>
            <a href="#!">About</a>
          </li>
        </ul>
      </>
    );
  }
}

export default Navbar;
