import React from 'react';
import styled from 'styled-components';
import './App.css'
import LandingPage from './views/home';
import {Route} from 'react-router-dom';
import { IdentityContextProvider } from "react-netlify-identity"
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
    return (
      <IdentityContextProvider url={url}> {
      <AppContainer>
      <Route exact path ='/'  render={props =><LandingPage  props={props}/>} />
      </AppContainer>
      }</IdentityContextProvider>
    );
  }


export default App;
