import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";

// variables
const API_KEY = "7b30bea235784fd8bd4548d09897b06e";

function Standings() {
  const { navigate } = useContext(GlobalContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.football-data.org/v2/competitions/2021/standings`, {
        headers: {
          "X-Auth-Token": API_KEY,
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getDetailTeam = (event) => {
    let idData = event.currentTarget.id;
    navigate(`/team/${idData}`);
  };

  return (
    <div className="container">
      <div className="row">
        <table className="highlight col s12">
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
            {data !== null &&
              data.standings[0].table.map((res) => {
                return (
                  <tr
                    key={res.team.id}
                    id={res.team.id}
                    onClick={getDetailTeam}
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
    </div>
  );
}

export default Standings;
