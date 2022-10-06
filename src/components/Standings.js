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

  const handleTeamName = (teamName) => {
    let shortenTeamName = teamName.split(" ")[0];
    if (teamName === "Manchester City FC") {
      shortenTeamName = "Man City";
    }
    if (teamName === "Manchester United FC") {
      shortenTeamName = "Man Utd";
    }
    if (teamName === "AFC Bournemouth") {
      shortenTeamName = "Bournemouth";
    }
    if (teamName === "Aston Villa FC") {
      shortenTeamName = "Aston Villa";
    }
    if (teamName === "West Ham United FC") {
      shortenTeamName = "West Ham";
    }
    if (teamName === "Crystal Palace FC") {
      shortenTeamName = "Crystal Palace";
    }
    if (teamName === "Nottingham Forest FC") {
      shortenTeamName = "Nottingham Forest";
    }

    return shortenTeamName;
  };

  return (
    <div className="container container-sm">
      <div className="row">
        <table className="highlight col s12">
          <thead className="grey-text">
            <tr>
              <th className="fw-400">#</th>
              <th className="fw-400">Team</th>
              <th className="fw-400">P</th>
              <th className="fw-400">W</th>
              <th className="fw-400">D</th>
              <th className="fw-400">L</th>
              <th className="fw-400">Goals</th>
              <th className="fw-400">PTS</th>
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
                    className="team-item"
                  >
                    <td className="fw-700">{res.position}</td>
                    <td>{handleTeamName(res.team.name)}</td>
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
