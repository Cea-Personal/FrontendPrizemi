import React from "react";
import styled from "styled-components";
import "./App.css";
import Splash from "./views/splash";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
const AppContainer = styled.div`
  width: 100%;
  margin-top: 0%;
  @media (max-width: 750px) {
    margin-top: 0%;
  }
`;

const App = props => {
  return (
    <AppContainer>
      <Route exact path="/">
        {props.isLoggedIn ? <Redirect to="/dashboard" /> : <Splash />}
      </Route>
    </AppContainer>
  );
};

export default App;
