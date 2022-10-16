import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";

// variables
const API_KEY = "7b30bea235784fd8bd4548d09897b06e";

function TeamDetail() {
  const { db, setTeams } = useContext(GlobalContext);
  let { IdData } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.football-data.org/v2/teams/${IdData}`, {
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
  }, [IdData]);

  // Fungsi add to favourite
  const addToFav = (team) => {
    db.teams.add(team).then(async () => {
      // ambil semua team di dalam database
      let allTeams = await db.teams.toArray();
      // masukkan semua team ke dalam state
      setTeams(allTeams);
    });
  };

  return (
    <>
      {data !== null && (
        <div className="team-data row ">
          <div className="col s12 center-align">
            <img src={data.crestUrl} alt={data.name} height="200" />
          </div>
          <div className="col s12 center-align">
            <p>
              Name : <strong>{data.name}</strong>
            </p>
            <p>
              Address : <strong>{data.address}</strong>
            </p>
            <p>
              Venue : <strong>{data.venue}</strong>
            </p>
            <button
              onClick={() => addToFav(data)}
              id="addToFav"
              className="waves-effect waves-light btn"
            >
              <i className="material-icons left">add_circle</i>Add to Favourites
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default TeamDetail;
