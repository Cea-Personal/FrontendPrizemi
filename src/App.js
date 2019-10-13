import React from 'react';
import styled from 'styled-components';
import './App.css'
import LandingPage from './views/home';
import {Route} from 'react-router-dom';
const AppContainer = styled.div`
  width:100%;
  margin-top:0% ;
  @media(max-width:750px){
    margin-top:0%;
  }

`;
class App extends React.Component{
  constructor(props){
    super(props)
    this.state =({

    })

  }
  render(){
    return (
      <AppContainer>
      <Route exact path ='/'  render={props =><LandingPage  props={props}/>} />
      </AppContainer>
    );
  }
}

export default App;
