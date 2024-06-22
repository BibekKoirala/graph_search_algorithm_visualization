import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import InfoIcon from '@material-ui/icons/Info';

function Navbar({ handleOpenInstructions }) {
  return (
    <div>
      <AppBar color="primary" position="sticky">
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography style={{ fontWeight: "bold" }} variant="h6">
            Graph Search Algorithms Visualization
          </Typography>
          <IconButton edge="end" color="inherit" onClick={handleOpenInstructions}>
            <InfoIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
