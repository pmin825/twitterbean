import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppBar, Grid, Typography } from "@material-ui/core";

import MainBar from "./layout/MainBar";
import LeftBar from "./layout/LeftBar";
import RightBar from "./layout/RightBar";
import LoginPage from "./auth/LoginPage";
import LogoutPage from "./auth/LogoutPage";
import FeedPage from "./feed/FeedPage";
import NotFoundPage from "./layout/NotFoundPage";
import StateProvider, { StateContext } from "./StateProvider";
import PersonIcon from "@material-ui/icons/Person";
import { checkSession } from "./auth/authApi";

export default function App() {
  return (
    <StateProvider>
      <Router>
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
          <PersonIcon></PersonIcon>
        </AppBar>
        <Switch>
          <Route path="/auth/login">
            <LoginPage />
          </Route>
          <Route path="/auth/register">
            <LoginPage />
          </Route>
          <Route>
            <Grid container>
              <LeftBar />
              <MainBar>
                <Switch>
                  <Route path="/" exact>
                    <FeedPage />
                  </Route>
                  <Route path="/auth/logout">
                    <LogoutPage />
                  </Route>
                  <Route component={NotFoundPage} />
                </Switch>
              </MainBar>
              <RightBar />
            </Grid>
          </Route>
        </Switch>
      </Router>
    </StateProvider>
  );
}
