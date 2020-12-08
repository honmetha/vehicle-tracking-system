import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const NavigationBar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#0F2C54" }}>
      <Toolbar>
        <Typography variant="h6">Vehicles</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
