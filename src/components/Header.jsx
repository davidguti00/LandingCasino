import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar 
      position="static" 
      color="primary" 
      style={{ 
      backgroundColor: "#333", 
      }}>
      <Toolbar>
        <Typography variant="h5">Casino on-line</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
