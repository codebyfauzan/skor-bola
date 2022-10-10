import React from "react";
import M from "materialize-css";
import Matches from "./Matches";
import Standings from "./Standings";
import Favourites from "./Favourites";

// main component
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.tabsRef = React.createRef();
  }

  componentDidMount() {
    M.Tabs.init(this.tabsRef.current);
  }

  render() {
    return (
      <>
        <div className="tabs-container green">
          <div className="container">
            <ul ref={this.tabsRef} className="tabs green row">
              <li className="tab">
                <a href="#standings" className="active white-text">
                  Standings
                </a>
              </li>
              <li className="tab">
                <a href="#matches" className="white-text">
                  Matches
                </a>
              </li>
              <li className="tab">
                <a href="#favourites" className="white-text">
                  Favourites
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Standings */}
        <div id="standings">
          <Standings />
        </div>
        {/* Standings End */}

        {/* Matches */}
        <div id="matches">
          <Matches />
        </div>
        {/* Matches End */}

        {/* Favourites */}
        <div id="favourites">
          <Favourites />
        </div>
        {/* Favourites End */}
      </>
    );
  }
}

export default Home;
