import React, { useReducer, useContext} from "react";
import styled from "styled-components";
import "./App.css";
import Landing from "./views/landing";
import { ThemeContext, LoginContext, authContext, themeContext, scrollContext, ScrollContext } from "./state/context"
import { IdentityContextProvider} from "react-netlify-identity"
import { loginReducer, themeReducer, scrollReducer } from "./state/reducers"
import { Route } from "react-router-dom";
const AppContainer = styled.div`
  width: 100%;
  height:100%;
  margin-top: 0%;
  @media (max-width: 750px) {
    margin-top: 0%;
  }
`;



const App = () => {
  const url = 'https://prizemi.netlify.com'
  const theme = useContext(ThemeContext)
  
  const [loginState, loginActions] = useReducer(loginReducer, authContext.state)
  const [themeState, themeActions] = useReducer(themeReducer, themeContext.state)
  const [scrollState, scrollActions] = useReducer(scrollReducer, scrollContext.state)

  return (
    <ThemeContext.Provider value={{ state: themeState, dispatch: themeActions }}>
      <IdentityContextProvider url={url}> {
        <ScrollContext.Provider value={{ state: scrollState, dispatch: scrollActions }}>
          <LoginContext.Provider value={{ state: loginState, dispatch: loginActions }}>
            <AppContainer   theme={theme.state.isLight} >
            <Route exact path="/" component={Landing} />
            <Route path="/home" component={Landing} />
          </AppContainer>
        </LoginContext.Provider>
        </ScrollContext.Provider>
      }
      </IdentityContextProvider>
    </ThemeContext.Provider >
  )
}


export default App;
