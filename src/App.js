import "./App.css";
// import MuiTypography from "./components/MuiTypography";
// import MuiButton from "./components/MuiButton";
// import MuiNavbar from "./components/MuiNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        {/* <MuiTypography /> */}
        {/* <MuiButton /> */}
        {/* <MuiNavbar /> */}
        <Navbar />
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team/:IdData" element={<Home />} />
          </Routes>
        </Box>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
