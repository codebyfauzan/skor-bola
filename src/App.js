import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TeamDetail from "./components/TeamDetail";

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team/:IdData" element={<TeamDetail />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
