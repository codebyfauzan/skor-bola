import React from "react";
import axios from "axios";

import M from "materialize-css";

// variables
const API_KEY = "7b30bea235784fd8bd4548d09897b06e";

// main component
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.tabsRef = React.createRef();
    this.teamDataRef = React.createRef();
    this.state = {
      value: 0, // bisa untuk ngecek value tab
      data: null,
    };
  }

  componentDidMount() {
    M.Tabs.init(this.tabsRef.current);
    axios
      .get(`https://api.football-data.org/v2/competitions/2021/standings`, {
        headers: {
          "X-Auth-Token": API_KEY,
        },
      })
      .then((res) => {
        this.setState({ data: res.data });
        console.log(res.data.standings[0].table);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  //   console.log(value);
  // };

  getDetailTeam = (event) => {
    let idData = event.currentTarget.id;
    console.log(idData);
    window.location.href = `/team/${idData}`;
  };

  render() {
    return (
      <>
        <div className="nav-content">
          <ul ref={this.tabsRef} className="tabs">
            <li className="tab">
              <a href="#standings" className="active">
                Standings
              </a>
            </li>
            <li className="tab">
              <a href="#matches">Matches</a>
            </li>
            <li className="tab">
              <a href="#favourites">Favourites</a>
            </li>
          </ul>
        </div>

        <div id="standings" className="col s12">
          <table className="highlight">
            <thead>
              <tr>
                <th>#</th>
                <th>Team</th>
                <th>P</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>Goals</th>
                <th>PTS</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data !== null &&
                this.state.data.standings[0].table.map((res) => {
                  return (
                    <tr
                      ref={this.teamDataRef}
                      key={res.team.id}
                      id={res.team.id}
                      onClick={this.getDetailTeam}
                    >
                      <td>{res.position}</td>
                      <td>{res.team.name}</td>
                      <td>{res.playedGames}</td>
                      <td>{res.won}</td>
                      <td>{res.draw}</td>
                      <td>{res.lost}</td>
                      <td>
                        {res.goalsFor}:{res.goalsAgainst}
                      </td>
                      <td>{res.points}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div id="matches" className="col s12">
          <ul className="collection">
            <li className="collection-item avatar">
              <img src="images/yuna.jpg" alt="" className="circle" />
              <span className="title">Title</span>
              <p>
                First Line <br />
                Second Line
              </p>
              <a href="#!" className="secondary-content">
                <i className="material-icons">grade</i>
              </a>
            </li>
            <li className="collection-item avatar">
              <i className="material-icons circle">folder</i>
              <i className="material-icons circle">folder</i>
              <span className="title">Title</span>
              <p>
                First Line <br />
                Second Line
              </p>
              <a href="#!" className="secondary-content">
                <i className="material-icons">grade</i>
              </a>
            </li>
            <li className="collection-item avatar">
              <i className="material-icons circle green">insert_chart</i>
              <span className="title">Title</span>
              <p>
                First Line <br />
                Second Line
              </p>
              <a href="#!" className="secondary-content">
                <i className="material-icons">grade</i>
              </a>
            </li>
            <li className="collection-item avatar">
              <i className="material-icons circle red">play_arrow</i>
              <span className="title">Title</span>
              <p>
                First Line <br />
                Second Line
              </p>
              <a href="#!" className="secondary-content">
                <i className="material-icons">grade</i>
              </a>
            </li>
          </ul>
        </div>
        <div id="favourites" className="col s12">
          Favourties
        </div>
      </>
    );
  }
}

export default Home;
