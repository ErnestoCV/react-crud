import React from "react"
import { Link } from "react-router-dom"

import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"

import "./styles.css"

export default function Navbar() {
  return (
    <div className="root">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <Link className="navLink" to="/">
              <Typography
                variant="h6"
                color="inherit"
                component="div"
                sx={{ mr: 2 }}
              >
                Sites
              </Typography>
            </Link>
            <Link className="navLink" to="/createAccount">
              <Typography variant="h6" color="inherit" component="div">
                Accounts
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}
