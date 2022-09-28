import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import { GlobalContext } from "../context/GlobalContext";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

// variables
const API_KEY = "7b30bea235784fd8bd4548d09897b06e";

// main component
function Home() {
  const { navigate } = useContext(GlobalContext);
  const [value, setValue] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.football-data.org/v2/competitions/2021/standings`, {
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
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value);
  };

  const getDetailTeam = (event) => {
    let idData = parseInt(event.target.value);
    console.log(idData);
    // navigate(`/team/${idData}`);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Top 3" />
          <Tab label="Standings" />
          <Tab label="Favourites" />
        </Tabs>
      </Box>

      {/*---------------- TAB Standings -----------------*/}
      <TabPanel value={value} index={0}>
        {data !== null &&
          data.standings[0].table.slice(0, 3).map((res) => {
            return (
              <Card key={res.team.id} sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={res.team.crestUrl}
                    alt={res.team.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {res.team.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Position {res.position}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })}
      </TabPanel>

      {/*--------------- TAB Matches ----------------*/}
      <TabPanel value={value} index={1}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Team</TableCell>
                <TableCell>P</TableCell>
                <TableCell>W</TableCell>
                <TableCell>D</TableCell>
                <TableCell>L</TableCell>
                <TableCell>Goals</TableCell>
                <TableCell>PTS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data !== null &&
                data.standings[0].table.map((res) => {
                  return (
                    <TableRow
                      Value={res.team.id}
                      onClick={getDetailTeam}
                      key={res.team.id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        "&:hover": { backgroundColor: "grey.200" },
                        cursor: "pointer",
                      }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        value={res.team.id}
                        onClick={getDetailTeam}
                      >
                        {res.position}
                      </TableCell>
                      <TableCell value={res.team.id} onClick={getDetailTeam}>
                        {res.team.name}
                      </TableCell>
                      <TableCell value={res.team.id} onClick={getDetailTeam}>
                        {res.playedGames}
                      </TableCell>
                      <TableCell value={res.team.id} onClick={getDetailTeam}>
                        {res.won}
                      </TableCell>
                      <TableCell value={res.team.id} onClick={getDetailTeam}>
                        {res.draw}
                      </TableCell>
                      <TableCell value={res.team.id} onClick={getDetailTeam}>
                        {res.lost}
                      </TableCell>
                      <TableCell value={res.team.id} onClick={getDetailTeam}>
                        {res.goalsFor}:{res.goalsAgainst}
                      </TableCell>
                      <TableCell value={res.team.id} onClick={getDetailTeam}>
                        {res.points}
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>

      {/* TAB Favourites */}
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}

export default Home;
