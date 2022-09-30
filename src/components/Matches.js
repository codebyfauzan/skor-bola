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

  const handleTime = (utcdate) => {
    let hours = utcdate.substring(11, 13);
    hours = Number(hours) + 7;
    let minutes = utcdate.substring(14, 16);

    // Mengubah format GMT ke format 24 jam WIB
    if (Number(hours) > 24) {
      hours = `0${hours - 24}`;
    } else if (Number(hours) < 10 && hours.toString().length === 1) {
      hours = `0${hours}`;
    }

    return `${hours}:${minutes}`;
  };
  return (
    <div className="container">
      <div className="row">
        <ul className="collection">
          {data !== null &&
            data.matches.map((res) => {
              return (
                <li key={res.id} className="collection-item col s12 match-item">
                  <div className="teams col s8">
                    <div className="home-team">
                      <span className="home-team-info">
                        {/* <img
                          className="team-img"
                          src="https://crests.football-data.org/354.png"
                          alt=""
                        /> */}
                        <span className="home-team-name">
                          {res.homeTeam.name}
                        </span>
                      </span>
                      <strong className="home-team-score team-score right-align">
                        {res.score.fullTime.homeTeam == null
                          ? "-"
                          : res.score.fullTime.homeTeam}
                      </strong>
                    </div>
                    <div className="away-team">
                      <span className="away-team-info">
                        {/* <img
                          className="team-img"
                          src="https://crests.football-data.org/354.png"
                          alt=""
                        /> */}
                        <span className="away-team-name">
                          {res.awayTeam.name}
                        </span>
                      </span>
                      <strong className="away-team-score team-score right-align">
                        {res.score.fullTime.awayTeam == null
                          ? "-"
                          : res.score.fullTime.awayTeam}
                      </strong>
                    </div>
                  </div>
                  <div className="times col s4 center-align">
                    <p className="date">{handleDate(res.utcDate)}</p>
                    <p className="time">{handleTime(res.utcDate)} WIB</p>
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
