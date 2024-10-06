import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";

export default function Header({ signedIn, onSignOut }) {
  const onClick = () => {
    if (signedIn && onSignOut) {
      onSignOut();
    }
  };

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          backgroundColor: (theme) => theme.palette.background.paper,
        }}
      >
        <Toolbar
          sx={{
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            color="textPrimary"
            component={RouterLink}
            to="/"
            sx={{ textDecoration: "none" }}
          >
            App
          </Typography>
          <Button
            color="primary"
            variant="outlined"
            component={RouterLink}
            to={signedIn ? "/" : "/auth/signin"}
            onClick={onClick}
            sx={{
              margin: (theme) => theme.spacing(1, 1.5),
              textDecoration: "none",
            }}
          >
            {signedIn ? "Logout" : "Login"}
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
