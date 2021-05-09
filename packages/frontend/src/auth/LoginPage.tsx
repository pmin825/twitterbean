import { FormControl, Grid, Input, Box, Typography } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { StateContext, ContextType } from "../StateProvider";
import { login, register } from "./authApi";
import { Link, Redirect } from "react-router-dom";

export default function LoginPage() {
  const [handle, setHandle] = useState("");
  const [password, setPassword] = useState("");
  const [formType, setFormType] = useState<string>("login");
  const { state, dispatch } = useContext<ContextType>(StateContext);

  async function handleSubmit(evt: any) {
    evt.preventDefault();

    try {
      const user =
        formType === "login"
          ? await login(handle, password)
          : await register(handle, password);
      dispatch({
        type: "setUser",
        payload: user,
      });
    } catch (e) {
      console.log(e);
      alert("Failed to login.");
    }
  }

  if (state.user) {
    return <Redirect to="/" />;
  }

  function changeForm(e: any) {
    e.preventDefault();
    const currentForm = formType === "login" ? "register" : "login";
    setFormType(currentForm);
  }

  return (
    <Grid container>
      <Grid item xs={8}>
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
            <Typography variant="h4">Welcome to Twitterbean!</Typography>
            <Typography variant="h6">Make new friends!</Typography>
            <Typography variant="h6">Talk about things!</Typography>
            <Typography variant="h6">Be part of a community!</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Grid container>
          <Grid item xs={1}>
            {/* Empty grid for spacing */}
          </Grid>
          <Grid item xs={4}>
            <form onSubmit={(evt) => handleSubmit(evt)}>
              <FormControl fullWidth>
                <Input
                  id="handle"
                  placeholder="Handle"
                  value={handle}
                  onChange={(evt) => setHandle(evt.target.value)}
                />
              </FormControl>
              <FormControl fullWidth>
                <Input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(evt) => setPassword(evt.target.value)}
                />
              </FormControl>

              {formType === "login" ? (
                <FormControl fullWidth>
                  <Input type="submit" value="Login"></Input>
                </FormControl>
              ) : (
                <FormControl fullWidth>
                  <Input type="submit" value="Register"></Input>
                </FormControl>
              )}
            </form>

            {formType === "login" ? (
              <>
                <p>Don't have an account?</p>{" "}
                <Link to="/auth/register" onClick={(e) => changeForm(e)}>
                  Sign up
                </Link>
              </>
            ) : (
              <>
                <p>Already have an account?</p>{" "}
                <Link to="/auth/login" onClick={(e) => changeForm(e)}>
                  Log in
                </Link>
              </>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
