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
import NavBar from "./layout/NavBar";
import ProfilePage from "./profile/ProfilePage";
import { checkSession } from "./auth/authApi";

export default function App() {
  return (
    <StateProvider>
      <Router>
        <NavBar />
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
                  <Route path="/profile/:id">
                    <ProfilePage />
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
