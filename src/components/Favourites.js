import React from "react";

function Favourites() {
  return (
    <div className="container container-sm">
      <div className="row">
        <ul className="collection col s12">
          <li className="collection-item team-fav-item avatar col s12">
            <img
              src="https://crests.football-data.org/354.png"
              alt=""
              className="circle"
            />
            <div className="team-fav">
              <div className="team-fav-info">
                <span className="title">Crystal Palace</span>
                <p className="grey-text darken-2">England</p>
              </div>
              <button className="waves-effect waves-light btn">
                <i className="material-icons left">delete</i>Delete
              </button>
            </div>
          </li>
          <li className="collection-item team-fav-item avatar col s12">
            <img
              src="https://crests.football-data.org/354.png"
              alt=""
              className="circle"
            />
            <div className="team-fav">
              <div className="team-fav-info">
                <span className="title">Crystal Palace</span>
                <p className="grey-text darken-2">England</p>
              </div>
              <button className="waves-effect waves-light btn">
                <i className="material-icons left">delete</i>Delete
              </button>
            </div>
          </li>
          <li className="collection-item team-fav-item avatar col s12">
            <img
              src="https://crests.football-data.org/354.png"
              alt=""
              className="circle"
            />
            <div className="team-fav">
              <div className="team-fav-info">
                <span className="title">Crystal Palace</span>
                <p className="grey-text darken-2">England</p>
              </div>
              <button className="waves-effect waves-light btn">
                <i className="material-icons left">delete</i>Delete
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Favourites;
