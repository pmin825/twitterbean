import { AppBar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import { StateContext, ContextType } from "../StateProvider";
import React, { useContext, useState } from "react";

export default function NavBar() {
  const { state, dispatch } = useContext<ContextType>(StateContext);

  return (
    <AppBar
      position="static"
      style={{
        marginBottom: 24,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: 12,
        cursor: "pointer",
      }}
    >
      <Link to="/">
        <Typography variant="h6" style={{ padding: 12 }}>
          Twitterbean!!
        </Typography>
      </Link>
      {state.user ? (
        <Link to={`/profile/${state.user._id}`}>
          <PersonIcon />
        </Link>
      ) : (
        <Link to="/auth/login">
          <PersonIcon />
        </Link>
      )}
    </AppBar>
  );
}
