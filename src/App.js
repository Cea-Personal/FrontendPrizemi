import React from 'react';
import styled from 'styled-components';
import './App.css'
import LandingPage from './views/landing';
import {Redirect} from 'react-router-dom'
import {Route} from 'react-router-dom';
import { IdentityContextProvider, useIdentityContext } from "react-netlify-identity"
const AppContainer = styled.div`
  width:100%;
  margin-top:0% ;
  @media(max-width:750px){
    margin-top:0%;
  }

`;

const App = () =>
  {
    const url = 'https://prizemi.netlify.com'
    const {isLoggedIn} = useIdentityContext
    return (
      <IdentityContextProvider url={url}> {
      <AppContainer>
      <Route exact path="/">
      {isLoggedIn ? <Redirect to="/dashboard" /> : <LandingPage />}
   </Route>

      </AppContainer>
      }</IdentityContextProvider>
    );
  }


export default App;
