import React, { useContext } from "react";
import { LoginContext } from '../state/context';
import styled from "styled-components";
import { useIdentityContext } from "react-netlify-identity";
import banner from '../assests/banner.svg';
import { RouteComponentProps } from 'react-router-dom';

interface HomeProps extends RouteComponentProps {

}

const Hero = (props: HomeProps) => {
    const { isLoggedIn } = useIdentityContext()
    const UseLoginContext = useContext(LoginContext)
    const getStarted = () => {
        !isLoggedIn ? UseLoginContext.dispatch({ type: 'open', payload: 'Signup on PrizeMi' }) : props.history.push('/dashboard')
    }
    return (
        <Container isInactive={UseLoginContext.state.inactive}>
            <Details>
                <p>
                    Feature-based price management system for developers
        </p>
                <Button onClick={getStarted}>Get Started </Button>
            </Details>
        </Container>
    )
}

export default Hero




const Container = styled.div<{ isInactive: boolean }>`
  width: 100%;
  height: 45rem;
  display: flex;
  background:url(${banner}) white;
  ${props => (props.isInactive && `pointer-events: none`)};
  ${props => (props.isInactive && `opacity: 0.7`)};
  background-repeat:no-repeat;
  background-size:95%;
  flex-direction: column;
  @media(max-width:500px){
    height:100vh;
    background-image:none;
    background-color:#6554C0;
    background-size:cover;
  }
`;
const Details = styled.div`
  width:30%;
  margin-left:15%;
  height:80%;
  display: flex;
  flex-direction:column;
  justify-content:center; 
  align-items:center;
  text-align:center;
  @media(max-width:500px){
    width:80%;
    margin-left:10%;
  }

  p {
    font-size:2.5rem;
    color:white;
    background-size:95%;
    @media(max-width:500px){
     font-size:2rem;
    }
  }
`;
const Button = styled.button`
margin-top:5%;
background: #091E42;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 30px;
border:none;
outline:none;
width:13rem;
height:3rem;
font-size:1.5rem;
color:white;
`;