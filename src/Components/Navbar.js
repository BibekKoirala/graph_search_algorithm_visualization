import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

function Navbar() {
  return (
    <div>
      <AppBar color="primary" position="sticky">
        <Toolbar>
          <Typography style={{ fontWeight: "bold" }} variant="h6">
            Graph Search Algorithms Visualization
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
