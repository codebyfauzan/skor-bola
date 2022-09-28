import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  let navigate = useNavigate();

  return (
    <GlobalContext.Provider value={{ navigate }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
