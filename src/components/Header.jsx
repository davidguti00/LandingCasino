import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import logo from "../icons/ficha-de-poker.png"

function Header() {
  return (
    <AppBar 
      position="static" 
      color="primary" 
      style={{ 
      backgroundColor: "#333", 
      }}>
      <Toolbar>
      <IconButton>
        <img src={logo}
        alt='icono personalizado logo'
        style={{ 
            marginRight: "10px",
            width: "40px",
            height: "40px",
            
            }}
        />

        </IconButton>
        <Typography variant="h5">Premier Las Vegas</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
