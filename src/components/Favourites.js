import React, { useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import M from "materialize-css";

function Favourites() {
  const { db, teams, setTeams } = useContext(GlobalContext);

  useEffect(() => {
    // ambil semua team dari database
    const getAllTeams = async () => {
      let allTeams = await db.teams.toArray();
      setTeams(allTeams);
    };

    getAllTeams();
  }, [db.teams, setTeams]);

  const deleteTeam = async (team) => {
    db.teams.delete(team.id);
    let allTeams = await db.teams.toArray();
    setTeams(allTeams);
    M.toast({ html: `${team.name} deleted from favourite` });
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
        <ul className="collection col s12">
          {teams !== null ? (
            teams.map((team) => {
              return (
                <li
                  key={team.id}
                  className="collection-item team-fav-item avatar col s12"
                >
                  <img src={team.crestUrl} alt={team.name} className="circle" />
                  <div className="team-fav">
                    <div className="team-fav-info">
                      <span className="title">
                        {window.innerWidth < 600
                          ? handleTeamName(team.name)
                          : team.name}
                      </span>
                      <p className="grey-text darken-2">{team.area.name}</p>
                    </div>
                    <button
                      onClick={() => deleteTeam(team)}
                      className="waves-effect waves-light btn"
                    >
                      <i className="material-icons left">delete</i>Delete
                    </button>
                  </div>
                </li>
              );
            })
          ) : (
            <span>tidak ada tim favorit</span>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Favourites;
