import React, {useReducer, useContext} from "react";
import styled from "styled-components";
import "./App.css";
import Landing from "./views/landing";
import { Redirect } from "react-router-dom";
import { ThemeContext, LoginContext, themes, authContext, themeContext } from "./state/context"
import { IdentityContextProvider, useIdentityContext } from "react-netlify-identity"
import {loginReducer,themeReducer} from "./state/reducers"
import { Route } from "react-router-dom";
const AppContainer = styled.div`
  width: 100%;
  margin-top: 0%;
  @media (max-width: 750px) {
    margin-top: 0%;
  }
`;  


const App = (props:Props) => {
  const url = 'https://prizemi.netlify.com'
  // const { isLoggedIn } = useIdentityContext()
  const theme =useContext(ThemeContext)

const [loginState, loginActions] = useReducer(loginReducer, authContext.state)
const [themeState , themeActions] = useReducer(themeReducer, themeContext.state)

  return (
    <ThemeContext.Provider value={{state:themeState , dispatch:themeActions}}>÷
      
      <IdentityContextProvider url={url}> {
        <LoginContext.Provider value={{state:loginState , dispatch:loginActions}}>
          <AppContainer theme={theme.state.isLight}>
            <Route exact path="/">
              <Landing/>
              {/* {isLoggedIn ? <Redirect to={currentPage} /> : <Landing />} */}
            </Route>
          </AppContainer>
    </LoginContext.Provider>
      }
      </IdentityContextProvider> */}
    </ThemeContext.Provider>
  )
}
type Props = {
}

export default App;
