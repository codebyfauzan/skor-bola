import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";
// import idb from "idb";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  let navigate = useNavigate();

  // let dbPromised = idb.open("skor-bola", 1, function (upgradeDb) {
  //   var teamsObjectStore = upgradeDb.createObjectStore("teams", {
  //     keyPath: "id",
  //   });
  //   teamsObjectStore.createIndex("id", "id", { unique: false });
  // });

  return (
    <GlobalContext.Provider value={{ navigate }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
