import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import "./App.css";

// variables
const API_KEY = "7b30bea235784fd8bd4548d09897b06e";

function TeamDetail() {
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
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [IdData]);
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
            <button className="waves-effect waves-light btn">
              <i className="material-icons left">add_circle</i>Add to Favourites
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default TeamDetail;
