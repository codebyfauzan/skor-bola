import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

function MuiNavbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <SportsSoccerIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Skor Bola
        </Typography>
        <Stack spacing={2} direction="row">
          <Button color="inherit">Standings</Button>
          <Button color="inherit">Matches</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default MuiNavbar;
