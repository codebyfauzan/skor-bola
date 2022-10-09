import React, { useEffect, useState } from "react";
import axios from "axios";

// variables
const API_KEY = "7b30bea235784fd8bd4548d09897b06e";

function Matches() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.football-data.org/v2/competitions/2021/matches`, {
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

  const handleDate = (utcdate) => {
    let year = utcdate.substring(0, 4);
    let date = utcdate.substring(8, 10);
    let month = utcdate.substring(5, 7);

    return `${date}-${month}-${year}`;
  };

  const handleStatus = (res) => {
    let hours = res.utcDate.substring(11, 13);
    hours = Number(hours) + 7;
    let minutes = res.utcDate.substring(14, 16);

    // Mengubah format GMT ke format 24 jam WIB
    if (Number(hours) > 24) {
      hours = `0${hours - 24}`;
    } else if (Number(hours) < 10 && hours.toString().length === 1) {
      hours = `0${hours}`;
    }

    if (res.status === "FINISHED") {
      return "FT";
    } else if (res.status === "POSTPONED") {
      return "Postponed";
    } else {
      return `${hours}:${minutes} WIB`;
    }
  };

  const handleTeamName = (teamName) => {
    let shortenTeamName = teamName.split("FC").join("");

    if (teamName === "AFC Bournemouth") {
      shortenTeamName = teamName;
    }
    if (teamName === "Wolverhampton Wanderers FC") {
      shortenTeamName = "Wolverhampton";
    }

    return shortenTeamName;
  };

  const timeElementClass = (status) => {
    return status === "POSTPONED" ? "red-medium" : "";
  };

  const handleRound = (res, index) => {
    if (index === 0) {
      return `Round ${res.matchday}`;
    } else if (
      index > 0 &&
      data.matches[index].matchday !== data.matches[--index].matchday
    ) {
      return `Round ${res.matchday}`;
    }
  };

  return (
    <div className="container container-sm">
      <div className="row">
        <ul className="collection match-list">
          {data !== null &&
            data.matches.map((res, index) => {
              return (
                <li key={res.id} className="collection-item col s12 match-item">
                  <div
                    style={{
                      display: handleRound(res, index) ? "block" : "none",
                    }}
                    className="round-info col s12"
                  >
                    <p className="round-name col s12">
                      <strong>{handleRound(res, index)}</strong>
                    </p>
                  </div>
                  <div className="teams-info col s12">
                    <div className="teams col s8">
                      <div
                        className={
                          res.score.winner === "HOME_TEAM"
                            ? "home-team"
                            : "home-team grey-text darken-2"
                        }
                      >
                        <span className="home-team-info">
                          <span className="home-team-name">
                            {handleTeamName(res.homeTeam.name)}
                          </span>
                        </span>
                        <strong className="home-team-score team-score right-align">
                          {res.score.fullTime.homeTeam == null
                            ? ""
                            : res.score.fullTime.homeTeam}
                        </strong>
                      </div>
                      <div
                        className={
                          res.score.winner === "AWAY_TEAM"
                            ? "away-team"
                            : "away-team grey-text darken-2"
                        }
                      >
                        <span className="away-team-info">
                          <span className="away-team-name">
                            {handleTeamName(res.awayTeam.name)}
                          </span>
                        </span>
                        <strong className="away-team-score team-score right-align">
                          {res.score.fullTime.awayTeam == null
                            ? ""
                            : res.score.fullTime.awayTeam}
                        </strong>
                      </div>
                    </div>
                    <div className="times col s4 center-align grey-text darken-2">
                      <p className="date">{handleDate(res.utcDate)}</p>
                      <p className={`time ${timeElementClass(res.status)}`}>
                        {handleStatus(res)}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default Matches;
