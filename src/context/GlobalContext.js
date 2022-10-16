import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dexie from "dexie";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  let navigate = useNavigate();

  // buat database
  const db = new Dexie("skor-bola");

  // buat database store
  db.version(1).stores({
    teams: "id",
  });
  db.open().catch((error) => {
    console.log(error.stack || error);
  });

  // state teams
  const [teams, setTeams] = useState([]);

  return (
    <GlobalContext.Provider value={{ navigate, db, teams, setTeams }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
